'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { X, Heart } from 'lucide-react';

import type {
  Lesson,
  Exercise,
  MCExercise,
  DragDropExercise,
  WordOrderExercise,
  FIBExercise,
  RPGExercise,
  RPGTypingExercise,
} from '@/data/types';
import {
  shuffle,
  tlocale,
  getMCOptionPrimary,
  getMCOptionTranslation,
  getExercisePrompt,
  getPairTurkish,
  getPairTranslation,
  getWordOrderWords,
  getWordOrderCorrect,
  getWordOrderTranslation,
  getFIBTemplate,
  getFIBAnswers,
  getFIBWordBank,
  getFIBTranslation,
  getLessonXP,
  getLessonCoins,
} from '@/data/types';
import { useUserStore } from '@/lib/store/userStore';
import ProgressBar from '@/components/ui/ProgressBar';
import MultipleChoiceCard, { type DisplayOption } from './MultipleChoiceCard';
import DragDropCard from './DragDropCard';
import WordOrderCard from './WordOrderCard';
import FillInBlankCard from './FillInBlankCard';
import RPGDialogueCard from './RPGDialogueCard';
import RPGTypingCard from './RPGTypingCard';

interface LessonViewProps {
  lesson: Lesson;
  locale: string;
}

export default function LessonView({ lesson, locale }: LessonViewProps) {
  const t = useTranslations('lesson');
  const router = useRouter();
  const { hearts, loseHeart, gainCoins, completeLesson } = useUserStore();

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<'correct' | 'incorrect' | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const totalExercises = lesson.exercises.length;
  const progress = totalExercises > 0 ? completedCount / totalExercises : 0;
  const currentExercise = lesson.exercises[exerciseIndex];

  // Shuffle MC options once per exercise (keyed by index)
  const shuffledOptions = useMemo<DisplayOption[] | null>(() => {
    const ex = lesson.exercises[exerciseIndex];
    if (!ex || (ex.type !== 'multiple_choice' && ex.type !== 'image_match')) return null;
    const mcEx = ex as MCExercise;
    return shuffle(mcEx.options).map((opt) => ({
      id: opt.id ?? String(Math.random()),
      primary: getMCOptionPrimary(opt, locale),
      secondary: getMCOptionTranslation(opt, locale),
      emoji: opt.emoji,
      isCorrect: opt.isCorrect ?? false,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseIndex, locale]);

  const advance = useCallback(() => {
    setCompletedCount((c) => c + 1);
    if (exerciseIndex + 1 >= totalExercises) {
      gainCoins(getLessonCoins(lesson));
      completeLesson(lesson.id);
      setIsComplete(true);
    } else {
      setExerciseIndex((i) => i + 1);
      setSelected(null);
      setAnswerState(null);
    }
  }, [exerciseIndex, totalExercises, lesson, gainCoins, completeLesson]);

  const handleMCSelect = useCallback((id: string, isCorrect: boolean) => {
    setSelected(id);
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) loseHeart();
  }, [loseHeart]);

  const handleSubCorrect = useCallback(() => {
    setAnswerState('correct');
    setTimeout(advance, 600);
  }, [advance]);

  const handleSubIncorrect = useCallback(() => {
    setAnswerState('incorrect');
    loseHeart();
  }, [loseHeart]);

  const handleDragComplete = useCallback(() => advance(), [advance]);
  const handleRPGWrong = useCallback(() => loseHeart(), [loseHeart]);

  // ── Lesson complete screen ────────────────────────────────────
  if (isComplete) {
    const lessonTitle = tlocale(lesson.title, locale);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center gap-6"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1, 1.2, 1], rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl"
        >
          🏆
        </motion.div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">{t('complete_title')}</h1>
          <p className="text-slate-400 mt-2">{lessonTitle}</p>
        </div>
        <div className="flex gap-4 w-full">
          {[
            { value: `+${getLessonXP(lesson)}`, label: t('complete_xp'), color: 'text-indigo-400' },
            { value: `+${getLessonCoins(lesson)}`, label: t('complete_coins'), color: 'text-cyan-400' },
          ].map(({ value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex-1 glass rounded-2xl p-4 text-center"
            >
              <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
              <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">{label}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(`/${locale}`)}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-lg shadow-lg shadow-indigo-500/25"
        >
          {t('complete_button')}
        </motion.button>
      </motion.div>
    );
  }

  // ── Render exercise ───────────────────────────────────────────
  function renderExercise() {
    const ex = currentExercise;
    if (!ex) return null;

    const prompt = getExercisePrompt(ex, locale);

    switch (ex.type) {
      case 'multiple_choice':
      case 'image_match': {
        const mcEx = ex as MCExercise;
        const hint = mcEx.hint ? tlocale(mcEx.hint, locale) : undefined;
        return (
          <MultipleChoiceCard
            question={prompt}
            options={shuffledOptions ?? []}
            selected={selected}
            answerState={answerState}
            hint={hint}
            onSelect={handleMCSelect}
          />
        );
      }
      case 'drag_drop': {
        const ddEx = ex as DragDropExercise;
        const displayPairs = ddEx.pairs.map((p) => ({
          id: p.id,
          turkish: getPairTurkish(p),
          translation: getPairTranslation(p, locale),
          emoji: p.emoji,
        }));
        return (
          <DragDropCard
            question={prompt || 'Match the pairs'}
            pairs={displayPairs}
            onComplete={handleDragComplete}
          />
        );
      }
      case 'word_order': {
        const woEx = ex as WordOrderExercise;
        return (
          <WordOrderCard
            question={prompt || 'Put the words in order'}
            scrambledWords={getWordOrderWords(woEx)}
            correctOrder={getWordOrderCorrect(woEx)}
            translation={getWordOrderTranslation(woEx, locale)}
            onCorrect={handleSubCorrect}
            onIncorrect={handleSubIncorrect}
          />
        );
      }
      case 'fill_in_the_blank':
      case 'fill_in_blank': {
        const fibEx = ex as FIBExercise;
        const hint = fibEx.hint ? tlocale(fibEx.hint, locale) : undefined;
        const wordBank = getFIBWordBank(fibEx);
        return (
          <FillInBlankCard
            question={prompt || 'Fill in the blank'}
            sentenceTemplate={getFIBTemplate(fibEx)}
            correctAnswers={getFIBAnswers(fibEx)}
            wordBank={wordBank.length > 0 ? wordBank : getFIBAnswers(fibEx)}
            translation={getFIBTranslation(fibEx, locale)}
            hint={hint}
            onCorrect={handleSubCorrect}
            onIncorrect={handleSubIncorrect}
          />
        );
      }
      case 'rpg_dialogue':
      case 'rpg': {
        return (
          <RPGDialogueCard
            exercise={ex as RPGExercise}
            locale={locale}
            onComplete={advance}
            onWrongAnswer={handleRPGWrong}
          />
        );
      }
      case 'rpg_typing': {
        return (
          <RPGTypingCard
            exercise={ex as RPGTypingExercise}
            locale={locale}
            onComplete={advance}
            onWrongAnswer={handleRPGWrong}
          />
        );
      }
      default:
        return (
          <div className="px-4 py-6 text-slate-400">
            Unknown exercise type: {(ex as { type: string }).type}
          </div>
        );
    }
  }

  const isAutoAdvancing =
    currentExercise?.type === 'drag_drop' ||
    currentExercise?.type === 'word_order' ||
    currentExercise?.type === 'fill_in_the_blank' ||
    currentExercise?.type === 'fill_in_blank' ||
    currentExercise?.type === 'rpg_dialogue' ||
    currentExercise?.type === 'rpg' ||
    currentExercise?.type === 'rpg_typing';

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => router.push(`/${locale}`)}
          className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-colors flex-shrink-0"
        >
          <X size={18} />
        </motion.button>
        <div className="flex-1">
          {/* Accurate progress: completed / total exercises */}
          <ProgressBar progress={progress} />
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Heart size={18} className="text-red-500" fill="#ef4444" />
          <span className="font-bold text-sm text-white tabular-nums">{hearts}</span>
        </div>
      </div>

      {/* Exercise */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={exerciseIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="min-h-full"
          >
            {renderExercise()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Continue button — only for MC after answering */}
      {!isAutoAdvancing && answerState && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pb-6 pt-3"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={advance}
            className={`w-full py-4 font-bold rounded-2xl text-lg text-white shadow-lg transition-colors ${
              answerState === 'correct'
                ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25'
                : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25'
            }`}
          >
            {t('continue')}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
