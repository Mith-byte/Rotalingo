'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { RPGTypingExercise, RPGTypingNode } from '@/data/types';
import {
  tlocale,
  getNodeId,
  getNodeText,
  getNodeName,
  getNodeEmoji,
  getRPGStartNodeId,
  getRPGScenario
} from '@/data/types';

interface RPGTypingCardProps {
  exercise: RPGTypingExercise;
  locale: string;
  onComplete: () => void;
  onWrongAnswer: () => void;
}

export default function RPGTypingCard({
  exercise,
  locale,
  onComplete,
  onWrongAnswer,
}: RPGTypingCardProps) {
  const t = useTranslations('rpg');
  const startId = getRPGStartNodeId(exercise);

  const [currentNodeId, setCurrentNodeId] = useState(startId);
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [npcResponse, setNpcResponse] = useState<{ text: string; tone: string } | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [nextId, setNextId] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const currentNode = exercise.nodes.find((n) => getNodeId(n) === currentNodeId) || exercise.nodes[0];

  if (!currentNode) return null;

  const npcText = tlocale(getNodeText(currentNode) as unknown as Record<string, string>, locale);
  const npcName = getNodeName(currentNode);
  const npcEmoji = getNodeEmoji(currentNode);
  const scenarioText = getRPGScenario(exercise, locale);

  if (currentNode.isFinal) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full px-6 py-12 text-center gap-6"
      >
        <motion.div
          animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl"
        >
          🎭
        </motion.div>
        <div>
          <h2 className="text-2xl font-extrabold text-white">{t('scene_complete')}</h2>
          <p className="text-slate-400 mt-2 text-base">{npcText}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl text-lg shadow-lg shadow-indigo-500/30 w-full"
        >
          Continue →
        </motion.button>
      </motion.div>
    );
  }

  function handleSubmit() {
    if (!inputValue.trim() || submitted) return;

    const lower = inputValue.toLowerCase();
    const matched = currentNode.matches.find((m) =>
      m.keywords.some((kw) => lower.includes(kw.toLowerCase()))
    );

    if (matched) {
      const responseText = tlocale(matched.npcResponse as unknown as Record<string, string>, locale);
      setNpcResponse({ text: responseText, tone: matched.responseTone });
      setNextId(matched.nextNodeId ?? null);
      if (matched.responseTone === 'negative') {
        onWrongAnswer();
      }
    } else {
      const fallbackText = tlocale(currentNode.fallbackResponse as unknown as Record<string, string>, locale);
      setNpcResponse({ text: fallbackText, tone: 'negative' });
      setNextId(null);
      onWrongAnswer();
    }
    setSubmitted(true);
  }

  function handleAdvance() {
    if (!nextId) {
      onComplete();
      return;
    }
    setIsAdvancing(true);
    setTimeout(() => {
      setCurrentNodeId(nextId);
      setInputValue('');
      setSubmitted(false);
      setNpcResponse(null);
      setNextId(null);
      setIsAdvancing(false);
    }, 300);
  }

  return (
    <div className="flex flex-col h-full px-4 py-6 gap-4">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2"
      >
        <span className="text-2xl">{exercise.scenarioEmoji ?? '🎭'}</span>
        <div>
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">
            RPG · {scenarioText}
          </p>
          <p className="text-[10px] text-violet-400 font-semibold mt-0.5">✍️ Type your response</p>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentNodeId + '-npc'}
          initial={{ opacity: 0, x: isAdvancing ? -40 : 0, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="flex items-start gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
            {npcEmoji}
          </div>
          <div className="flex flex-col gap-0.5 flex-1">
            <span className="text-xs font-bold text-violet-400">{npcName}</span>
            <div className="glass rounded-2xl rounded-tl-none px-4 py-3">
              <p className="text-white text-base leading-relaxed">{npcText}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {npcResponse && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-2xl flex-shrink-0">
              {npcEmoji}
            </div>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-xs font-bold text-violet-400">{npcName}</span>
              <div
                className={cn(
                  'rounded-2xl rounded-tl-none px-4 py-3',
                  npcResponse.tone === 'negative'
                    ? 'bg-red-500/20 border border-red-500/40'
                    : 'bg-emerald-500/20 border border-emerald-500/40'
                )}
              >
                <p
                  className={cn(
                    'text-base',
                    npcResponse.tone === 'negative' ? 'text-red-200' : 'text-emerald-200'
                  )}
                >
                  {npcResponse.text}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {submitted && inputValue && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <div className="max-w-[75%] bg-indigo-600/30 border border-indigo-500/40 rounded-2xl rounded-tr-none px-4 py-3">
            <p className="text-indigo-200 text-sm">{inputValue}</p>
          </div>
        </motion.div>
      )}

      {!submitted && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-auto pt-4"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            {t('choose')} (Turkish)
          </p>
          <div className="relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Türkçe cevabınızı yazın..."
              rows={3}
              className="w-full px-4 py-3 pr-14 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
              className="absolute right-3 bottom-3 w-9 h-9 bg-indigo-600 disabled:opacity-30 rounded-xl flex items-center justify-center transition-opacity"
            >
              <Send size={16} className="text-white" />
            </motion.button>
          </div>
          <p className="text-[10px] text-slate-500 mt-1 text-center">
            Press Enter or tap → to send
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {submitted && npcResponse?.tone !== 'negative' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAdvance}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl text-base shadow-lg shadow-emerald-500/25"
            >
              Continue →
            </motion.button>
          </motion.div>
        )}
        {submitted && npcResponse?.tone === 'negative' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setInputValue('');
                setSubmitted(false);
                setNpcResponse(null);
              }}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-base"
            >
              Try Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
