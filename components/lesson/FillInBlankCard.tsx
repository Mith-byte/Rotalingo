'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FillInBlankCardProps {
  question: string;
  sentenceTemplate: string;  // "Bir kilo ____ lütfen."
  correctAnswers: string[];  // Case-insensitive
  wordBank: string[];        // 6 words including correct answer
  translation: string;       // Locale-resolved meaning
  hint?: string;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default function FillInBlankCard({
  question,
  sentenceTemplate,
  correctAnswers,
  wordBank,
  translation,
  hint,
  onCorrect,
  onIncorrect,
}: FillInBlankCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  function handleSelect(word: string) {
    if (checked) return;
    setSelected(word);
  }

  function handleCheck() {
    if (!selected) return;
    const ok = correctAnswers.some(
      (a) => a.toLowerCase() === selected.toLowerCase()
    );
    setIsCorrect(ok);
    setChecked(true);
    if (ok) {
      setTimeout(onCorrect, 800);
    } else {
      onIncorrect();
    }
  }

  // Split sentence at ____
  const parts = sentenceTemplate.split('____');
  const before = parts[0] ?? '';
  const after = parts[1] ?? '';

  return (
    <div className="flex flex-col h-full px-4 py-6 gap-5">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-xl font-bold text-white">{question}</h2>
        <p className="text-sm text-slate-400 mt-1 italic">"{translation}"</p>
      </motion.div>

      {/* Sentence with blank */}
      <div className="glass rounded-2xl px-5 py-4">
        <p className="text-lg text-white leading-relaxed text-center">
          {before}
          <span
            className={cn(
              'inline-block min-w-[80px] border-b-2 mx-1 px-2 py-0.5 rounded-lg text-center font-bold transition-all',
              !selected
                ? 'border-indigo-500 text-slate-400'
                : checked && isCorrect
                ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                : checked && !isCorrect
                ? 'border-red-500 bg-red-500/20 text-red-300'
                : 'border-indigo-400 bg-indigo-500/20 text-indigo-200'
            )}
          >
            {selected ?? '___'}
          </span>
          {after}
        </p>
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center">
        {wordBank.map((word, i) => {
          const isSelected = selected === word;
          const isCorrectWord = correctAnswers.some(
            (a) => a.toLowerCase() === word.toLowerCase()
          );
          const showWrong = checked && isSelected && !isCorrect;
          const showRight = checked && isCorrectWord;

          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileTap={!checked ? { scale: 0.93 } : {}}
              onClick={() => handleSelect(word)}
              disabled={checked}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all no-select',
                isSelected && !checked
                  ? 'bg-indigo-600 border-indigo-400 text-white'
                  : showWrong
                  ? 'bg-red-500/20 border-red-500 text-red-300'
                  : showRight
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'glass border-white/10 text-white hover:border-indigo-500/40'
              )}
            >
              {word}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'p-4 rounded-2xl',
              isCorrect
                ? 'bg-emerald-500/15 border border-emerald-500/40'
                : 'bg-red-500/15 border border-red-500/40'
            )}
          >
            <p className={cn('font-bold', isCorrect ? 'text-emerald-400' : 'text-red-400')}>
              {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </p>
            {!isCorrect && (
              <p className="text-slate-300 text-sm mt-1">
                Answer: <strong>{correctAnswers[0]}</strong>
                {hint && ` — ${hint}`}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Check / Try again */}
      <div className="mt-auto">
        {!checked ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCheck}
            disabled={!selected}
            className="w-full py-4 bg-indigo-600 disabled:opacity-40 text-white font-bold rounded-2xl text-base"
          >
            Check Answer
          </motion.button>
        ) : !isCorrect ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => { setSelected(null); setChecked(false); setIsCorrect(null); }}
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl"
          >
            Try Again
          </motion.button>
        ) : null}
      </div>
    </div>
  );
}
