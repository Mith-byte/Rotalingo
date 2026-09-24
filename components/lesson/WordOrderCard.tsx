'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WordOrderCardProps {
  question: string;
  scrambledWords: string[];
  correctOrder: string[];
  translation: string; // locale-resolved meaning
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default function WordOrderCard({
  question,
  scrambledWords,
  correctOrder,
  translation,
  onCorrect,
  onIncorrect,
}: WordOrderCardProps) {
  const [available, setAvailable] = useState(() =>
    [...scrambledWords].map((w, i) => ({ word: w, id: `word-${i}` }))
  );
  const [selected, setSelected] = useState<{ word: string; id: string }[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handlePick = useCallback((item: { word: string; id: string }) => {
    if (checked) return;
    setSelected((s) => [...s, item]);
    setAvailable((a) => a.filter((w) => w.id !== item.id));
  }, [checked]);

  const handleRemove = useCallback((item: { word: string; id: string }) => {
    if (checked) return;
    setAvailable((a) => [...a, item]);
    setSelected((s) => s.filter((w) => w.id !== item.id));
  }, [checked]);

  function handleCheck() {
    const answer = selected.map((w) => w.word).join(' ');
    const correct = correctOrder.join(' ');
    const ok = answer.toLowerCase().trim() === correct.toLowerCase().trim();
    setIsCorrect(ok);
    setChecked(true);
    if (ok) {
      setTimeout(onCorrect, 800);
    } else {
      onIncorrect();
    }
  }

  function handleReset() {
    setAvailable([...scrambledWords].map((w, i) => ({ word: w, id: `word-${i}` })));
    setSelected([]);
    setChecked(false);
    setIsCorrect(null);
  }

  return (
    <div className="flex flex-col h-full px-4 py-6 gap-5">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-xl font-bold text-white">{question}</h2>
        <p className="text-sm text-slate-400 mt-1 italic">"{translation}"</p>
      </motion.div>

      {/* Answer tray */}
      <div
        className={cn(
          'min-h-[60px] p-3 rounded-2xl border-2 transition-colors flex flex-wrap gap-2',
          checked && isCorrect
            ? 'border-emerald-500 bg-emerald-500/10'
            : checked && !isCorrect
            ? 'border-red-500 bg-red-500/10'
            : 'border-dashed border-slate-600 bg-slate-900/50'
        )}
      >
        {selected.length === 0 && (
          <p className="text-slate-600 text-sm self-center">
            Tap words below to build the sentence…
          </p>
        )}
        <AnimatePresence>
          {selected.map((item) => (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={() => handleRemove(item)}
              className={cn(
                'px-3 py-1.5 rounded-xl text-sm font-semibold no-select',
                checked && isCorrect
                  ? 'bg-emerald-600 text-white'
                  : checked && !isCorrect
                  ? 'bg-red-600 text-white'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              )}
            >
              {item.word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Available word bank */}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {available.map((item) => (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={() => handlePick(item)}
              className="px-3 py-1.5 glass border border-white/10 rounded-xl text-sm font-semibold text-white hover:border-indigo-500/50 no-select"
            >
              {item.word}
            </motion.button>
          ))}
        </AnimatePresence>
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
              {isCorrect ? '✅ Correct!' : '❌ Not quite'}
            </p>
            {!isCorrect && (
              <p className="text-slate-300 text-sm mt-1">
                Correct: <strong>{correctOrder.join(' ')}</strong>
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        {!checked ? (
          <>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="px-4 py-3 glass border border-white/10 text-slate-400 rounded-2xl text-sm font-semibold"
            >
              Reset
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCheck}
              disabled={selected.length === 0}
              className="flex-1 py-3 bg-indigo-600 disabled:opacity-40 text-white font-bold rounded-2xl text-sm"
            >
              Check Answer
            </motion.button>
          </>
        ) : !isCorrect ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-2xl"
          >
            Try Again
          </motion.button>
        ) : null}
      </div>
    </div>
  );
}
