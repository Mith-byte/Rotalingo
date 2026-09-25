'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, MessageCircle, Brain, Volume2 } from 'lucide-react';
import type { UnitGuidebook, TText } from '@/data/types';
import { useTranslations } from 'next-intl';

interface GuidebookModalProps {
  guidebook: UnitGuidebook | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  unitName?: string;  // Fallback when guidebook.title is missing
}

function getLoc(ttext: TText, locale: string): string {
  // @ts-ignore
  return ttext[locale] ?? ttext['en'];
}

export default function GuidebookModal({ guidebook, isOpen, onClose, locale, unitName = '' }: GuidebookModalProps) {
  const t = useTranslations('home'); // or create a specific 'guidebook' translation namespace

  if (!guidebook) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] max-w-md mx-auto"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-12 z-[101] max-w-md mx-auto bg-white rounded-t-3xl overflow-hidden flex flex-col shadow-2xl border-t border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-red-600 text-white shadow-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-lg leading-tight">
                    {guidebook.title ? getLoc(guidebook.title, locale) : unitName}
                  </h2>
                  <p className="text-red-100 text-xs font-medium uppercase tracking-wider">
                    Guidebook
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
              {guidebook.description && (
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {getLoc(guidebook.description, locale)}
                </p>
              )}

              {/* 1. Key Phrases */}
              {guidebook.keyPhrases && guidebook.keyPhrases.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="text-red-500" size={22} />
                    <h3 className="text-xl font-bold text-slate-900">Key Phrases</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {guidebook.keyPhrases.map((kp, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm">
                        <p className="font-bold text-slate-900 text-lg mb-1">{kp.phrase}</p>
                        <p className="text-slate-600">{getLoc(kp.translation, locale)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Vocabulary */}
              {guidebook.vocabulary && guidebook.vocabulary.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Volume2 className="text-red-500" size={22} />
                    <h3 className="text-xl font-bold text-slate-900">Vocabulary</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {guidebook.vocabulary.map((vocab, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                        <span className="font-bold text-slate-900">{vocab.word}</span>
                        <span className="text-slate-500 text-right">{getLoc(vocab.translation, locale)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Grammar */}
              {guidebook.grammarNotes && guidebook.grammarNotes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="text-red-500" size={22} />
                    <h3 className="text-xl font-bold text-slate-900">Grammar</h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    {guidebook.grammarNotes.map((grammar, idx) => (
                      <div key={idx} className="bg-red-50 border border-red-100 p-5 rounded-3xl">
                        <h4 className="font-bold text-red-900 text-lg mb-2">
                          {getLoc(grammar.title, locale)}
                        </h4>
                        <p className="text-red-800/80 text-sm leading-relaxed mb-4">
                          {getLoc(grammar.explanation, locale)}
                        </p>
                        
                        {grammar.examples && grammar.examples.length > 0 && (
                          <div className="bg-white/60 rounded-2xl p-3 flex flex-col gap-2">
                            {grammar.examples.map((ex, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="font-bold text-slate-900">{ex.tr}</span>
                                <span className="text-slate-500 text-sm">{getLoc(ex.translation, locale)}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Action Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-12 pb-safe">
              <button
                onClick={onClose}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-red-600/20 transition-all active:scale-95"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
