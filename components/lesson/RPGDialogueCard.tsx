'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { RPGExercise, RPGNode, RPGOption } from '@/data/types';
import {
  tlocale,
  getNodeId,
  getNodeText,
  getNodeName,
  getNodeEmoji,
  getRPGStartNodeId,
  getRPGScenario
} from '@/data/types';

interface RPGDialogueCardProps {
  exercise: RPGExercise;
  locale: string;
  onComplete: () => void;
  onWrongAnswer: () => void;
}

const shakeVariants = {
  shake: { x: [0, -10, 10, -10, 10, -6, 6, 0], transition: { duration: 0.5 } },
  still: { x: 0 },
};

const toneStyles: Record<string, string> = {
  success:     'bg-emerald-500/20 border-emerald-500 text-emerald-200',
  alternative: 'bg-amber-500/20 border-amber-500 text-amber-200',
  negative:    'bg-red-500/20 border-red-500 text-red-200',
};

export default function RPGDialogueCard({
  exercise,
  locale,
  onComplete,
  onWrongAnswer,
}: RPGDialogueCardProps) {
  const t = useTranslations('rpg');

  const startId = getRPGStartNodeId(exercise);
  const [currentNodeId, setCurrentNodeId] = useState(startId);
  const [selectedOption, setSelectedOption] = useState<RPGOption | null>(null);
  const [npcResponse, setNpcResponse] = useState<string | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);

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
          <h2 className="text-2xl font-extrabold text-slate-900">{t('scene_complete')}</h2>
          <p className="text-slate-500 mt-2 text-base">{npcText}</p>
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

  function handleOptionSelect(option: RPGOption) {
    if (selectedOption) return;
    setSelectedOption(option);

    const responseObj = option.npcResponse ?? option.response;
    const response = responseObj 
      ? (typeof responseObj === 'string' ? responseObj : tlocale(responseObj as unknown as Record<string, string>, locale)) 
      : '';
      
    setNpcResponse(response);

    if (option.deductsHeart) {
      onWrongAnswer();
    }
  }

  function handleAdvance() {
    if (!selectedOption) return;

    if (!selectedOption.isCorrect) {
      setSelectedOption(null);
      setNpcResponse(null);
      return;
    }

    const next = selectedOption.nextNodeId ?? selectedOption.next;
    if (!next) {
      onComplete();
      return;
    }

    setIsAdvancing(true);
    setTimeout(() => {
      setCurrentNodeId(next);
      setSelectedOption(null);
      setNpcResponse(null);
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
        <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">
          RPG · {scenarioText}
        </p>
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
              <p className="text-slate-900 text-base leading-relaxed">{npcText}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {npcResponse && selectedOption && (
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
                  'rounded-2xl rounded-tl-none px-4 py-3 border',
                  toneStyles[selectedOption.responseTone ?? 'success'] || toneStyles['success']
                )}
              >
                <p className="text-base leading-relaxed">{npcResponse}</p>
                {selectedOption.responseTone === 'alternative' && (
                  <p className="text-xs mt-1 opacity-70">
                    💡 Valid response! Different path ahead.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedOption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold text-slate-500 uppercase tracking-widest"
        >
          {t('choose')}
        </motion.p>
      )}

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {currentNode.options.map((option, i) => {
          const isSelected = selectedOption === option;
          const hintObj = option.hint;
          const hintText = hintObj ? (typeof hintObj === 'string' ? hintObj : tlocale(hintObj as unknown as Record<string, string>, locale)) : '';
          const primaryText = option.turkish ?? (typeof option.text === 'string' ? option.text : tlocale(option.text as unknown as Record<string, string>, locale));

          return (
            <motion.button
              key={option.id ?? String(i)}
              variants={shakeVariants}
              animate={isSelected && option.deductsHeart ? 'shake' : 'still'}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={!selectedOption ? { scale: 0.97 } : {}}
              whileHover={!selectedOption ? { scale: 1.02 } : {}}
              transition={{ opacity: { delay: i * 0.08 }, y: { delay: i * 0.08 } }}
              onClick={() => handleOptionSelect(option)}
              disabled={!!selectedOption}
              className={cn(
                'w-full text-left px-4 py-3.5 rounded-2xl border-2 transition-all no-select focus:outline-none flex-shrink-0',
                !isSelected
                  ? 'glass border-slate-200 text-slate-900 hover:border-indigo-500/50'
                  : option.deductsHeart
                  ? 'bg-red-500/20 border-red-500 text-red-200'
                  : option.responseTone === 'alternative'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                  : 'bg-emerald-500/20 border-emerald-500 text-emerald-200'
              )}
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm">{primaryText}</span>
                  {isSelected && !option.deductsHeart && <span>✅</span>}
                  {isSelected && option.deductsHeart && <span>❌</span>}
                  {isSelected && option.responseTone === 'alternative' && !option.deductsHeart && (
                    <span>🔄</span>
                  )}
                </div>
                {hintText && <span className="text-xs text-slate-500">{hintText}</span>}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-2"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAdvance}
              className={cn(
                'w-full py-4 font-bold rounded-2xl text-base text-slate-900 shadow-lg transition-colors flex-shrink-0',
                selectedOption.isCorrect
                  ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25'
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25'
              )}
            >
              {selectedOption.isCorrect ? 'Continue →' : 'Try Again'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
