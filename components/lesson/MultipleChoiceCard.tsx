'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export interface DisplayOption {
  id: string;
  primary: string;   // Main text shown on the button
  secondary?: string; // Locale translation hint (shown smaller below)
  emoji?: string;
  isCorrect: boolean;
}

type AnswerState = null | 'correct' | 'incorrect';

interface MultipleChoiceCardProps {
  question: string;         // Already locale-resolved question prompt
  options: DisplayOption[]; // Pre-shuffled by parent
  selected: string | null;
  answerState: AnswerState;
  hint?: string;            // Already locale-resolved hint
  onSelect: (id: string, isCorrect: boolean) => void;
}

const shakeVariants = {
  shake: {
    x: [0, -10, 10, -10, 10, -6, 6, 0],
    transition: { duration: 0.5 },
  },
  still: { x: 0 },
};

export default function MultipleChoiceCard({
  question,
  options,
  selected,
  answerState,
  hint,
  onSelect,
}: MultipleChoiceCardProps) {
  const t = useTranslations('lesson');

  return (
    <div className="flex flex-col h-full px-4 py-6">
      {/* Question prompt */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-white leading-snug">{question}</h2>
      </motion.div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option, i) => {
          const isSelected = selected === option.id;
          const showCorrect = answerState === 'correct' && isSelected;
          const showIncorrect = answerState === 'incorrect' && isSelected;
          const showActualCorrect = answerState === 'incorrect' && option.isCorrect;

          return (
            <motion.button
              key={option.id}
              variants={shakeVariants}
              animate={showIncorrect ? 'shake' : 'still'}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileTap={!selected ? { scale: 0.97 } : {}}
              whileHover={!selected ? { scale: 1.02 } : {}}
              transition={{
                opacity: { delay: i * 0.07, duration: 0.3 },
                x: { delay: i * 0.07, duration: 0.3 },
                scale: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              onClick={() => !selected && onSelect(option.id, option.isCorrect)}
              disabled={!!selected}
              className={cn(
                'w-full text-left px-5 py-4 rounded-2xl font-semibold',
                'border-2 transition-all duration-200 focus:outline-none no-select',
                !isSelected && !showActualCorrect
                  ? 'glass border-white/10 text-white hover:border-indigo-500/50'
                  : '',
                showCorrect
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/20'
                  : '',
                showIncorrect ? 'bg-red-500/20 border-red-500 text-red-300' : '',
                showActualCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/60 text-emerald-400'
                  : ''
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {option.emoji && (
                    <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                  )}
                  <div className="min-w-0">
                    <p className="text-base">{option.primary}</p>
                    {option.secondary && (
                      <p className="text-xs text-slate-400 mt-0.5 font-normal">
                        {option.secondary}
                      </p>
                    )}
                  </div>
                </div>
                {showCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                    className="text-xl flex-shrink-0"
                  >
                    ✅
                  </motion.span>
                )}
                {showIncorrect && <span className="text-xl flex-shrink-0">❌</span>}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback banner */}
      <AnimatePresence>
        {answerState && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className={cn(
              'mt-6 p-4 rounded-2xl',
              answerState === 'correct'
                ? 'bg-emerald-500/15 border border-emerald-500/40'
                : 'bg-red-500/15 border border-red-500/40'
            )}
          >
            <p
              className={cn(
                'font-bold text-base',
                answerState === 'correct' ? 'text-emerald-400' : 'text-red-400'
              )}
            >
              {answerState === 'correct' ? t('correct') : t('incorrect')}
            </p>
            {answerState === 'incorrect' && hint && (
              <p className="text-slate-400 text-sm mt-1">{hint}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
