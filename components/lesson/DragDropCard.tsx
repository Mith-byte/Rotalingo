'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface DragDropPairDisplay {
  id: string;
  turkish: string;
  translation: string; // Already locale-resolved
  emoji?: string;
}

interface DragDropCardProps {
  question: string;
  pairs: DragDropPairDisplay[];
  onComplete: (allCorrect: boolean) => void;
}

export default function DragDropCard({ question, pairs, onComplete }: DragDropCardProps) {
  // Left column: Turkish words (shuffled order)
  // Right column: Translations (different shuffle)
  const [leftItems] = useState(() => [...pairs].sort(() => Math.random() - 0.5));
  const [rightItems] = useState(() => [...pairs].sort(() => Math.random() - 0.5));

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, boolean>>({}); // id → correct/incorrect
  const [connections, setConnections] = useState<Record<string, string>>({}); // leftId → rightId
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const handleLeftClick = useCallback((id: string) => {
    if (matched[id]) return;
    setSelectedLeft(id);
  }, [matched]);

  const handleRightClick = useCallback((rightId: string) => {
    if (!selectedLeft) return;
    if (Object.values(connections).includes(rightId)) return; // Already matched

    const isCorrect = selectedLeft === rightId;

    if (isCorrect) {
      setMatched((m) => ({ ...m, [selectedLeft]: true }));
      setConnections((c) => ({ ...c, [selectedLeft]: rightId }));
      setSelectedLeft(null);

      // Check if all matched
      const newMatchCount = Object.keys(matched).length + 1;
      if (newMatchCount === pairs.length) {
        setTimeout(() => onComplete(true), 600);
      }
    } else {
      setWrongFlash(selectedLeft);
      setTimeout(() => {
        setWrongFlash(null);
        setSelectedLeft(null);
      }, 600);
    }
  }, [selectedLeft, matched, connections, pairs.length, onComplete]);

  const matchedRightIds = new Set(Object.values(connections));

  return (
    <div className="flex flex-col h-full px-4 py-6">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-white mb-6"
      >
        {question}
      </motion.h2>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column — Turkish */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
            Turkish
          </p>
          {leftItems.map((item, i) => {
            const isMatched = !!matched[item.id];
            const isSelected = selectedLeft === item.id;
            const isWrong = wrongFlash === item.id;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: isWrong ? [1, 1.05, 0.95, 1] : 1,
                }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleLeftClick(item.id)}
                disabled={isMatched}
                className={cn(
                  'text-left px-3 py-3 rounded-xl border-2 text-sm font-semibold transition-all no-select',
                  isMatched
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 opacity-70'
                    : isSelected
                    ? 'bg-indigo-500/30 border-indigo-500 text-white'
                    : isWrong
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'glass border-white/10 text-white hover:border-indigo-500/40'
                )}
              >
                {item.emoji && <span className="mr-1.5">{item.emoji}</span>}
                {item.turkish}
                {isMatched && <span className="float-right">✅</span>}
              </motion.button>
            );
          })}
        </div>

        {/* Right column — Translations */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">
            Translation
          </p>
          {rightItems.map((item, i) => {
            const isMatched = matchedRightIds.has(item.id);

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleRightClick(item.id)}
                disabled={isMatched || !selectedLeft}
                className={cn(
                  'text-left px-3 py-3 rounded-xl border-2 text-sm font-semibold transition-all no-select',
                  isMatched
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 opacity-70'
                    : selectedLeft
                    ? 'glass border-violet-500/50 text-white hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer'
                    : 'glass border-white/10 text-slate-400'
                )}
              >
                {item.translation}
                {isMatched && <span className="float-right">✅</span>}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
            animate={{ width: `${(Object.keys(matched).length / pairs.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs text-slate-400 tabular-nums">
          {Object.keys(matched).length}/{pairs.length}
        </span>
      </div>
    </div>
  );
}
