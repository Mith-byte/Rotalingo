'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UnitCardProps {
  id: string;
  name: string;
  nameTr: string;
  emoji: string;
  level: string;
  color: string; // Tailwind gradient classes, e.g. 'from-emerald-400 to-teal-500'
  lessonCount: number;
  completedCount: number;
  isLocked: boolean;
  locale: string;
}

export default function UnitCard({
  id,
  name,
  nameTr,
  emoji,
  level,
  color,
  lessonCount,
  completedCount,
  isLocked,
  locale,
}: UnitCardProps) {
  const t = useTranslations('home');
  const progress = lessonCount > 0 ? completedCount / lessonCount : 0;

  const content = (
    <motion.div
      whileTap={isLocked ? {} : { scale: 0.97 }}
      whileHover={isLocked ? {} : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative overflow-hidden rounded-3xl p-5 glass',
        isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      {/* Gradient background accent */}
      <div
        className={cn(
          'absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20 blur-2xl bg-gradient-to-br',
          color
        )}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Emoji avatar */}
          <div
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br shadow-lg',
              color
            )}
          >
            {isLocked ? '🔒' : emoji}
          </div>

          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-0.5">
              {level}
            </p>
            <h3 className="font-bold text-white text-base leading-tight">
              {name}
            </h3>
            <p className="text-slate-400 text-sm">{nameTr}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-400">
          {isLocked ? (
            <Lock size={18} />
          ) : completedCount === lessonCount && lessonCount > 0 ? (
            <CheckCircle size={18} className="text-emerald-400" />
          ) : (
            <ChevronRight size={18} />
          )}
        </div>
      </div>

      {/* Progress bar */}
      {!isLocked && (
        <div className="relative z-10 mt-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1.5">
            <span>
              {completedCount}/{lessonCount} lessons
            </span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className={cn('h-full rounded-full bg-gradient-to-r', color)}
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}

      {/* CTA label */}
      {!isLocked && (
        <div className="relative z-10 mt-3">
          <span
            className={cn(
              'text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r text-white',
              color
            )}
          >
            {completedCount > 0 ? t('continue') : t('start')} →
          </span>
        </div>
      )}
    </motion.div>
  );

  if (isLocked) return content;

  return (
    <Link href={`/${locale}/lesson/${id}`} className="block">
      {content}
    </Link>
  );
}
