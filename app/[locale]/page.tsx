'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { useUserStore } from '@/lib/store/userStore';

// Dynamic import — curriculum loads only on client after subagents finish.
// During development we fall back to empty if files aren't ready yet.
import { curriculum } from '@/data/lessons';
import type { Level, Unit } from '@/data/types';
import { isLevelUnlocked, isUnitUnlocked, isLessonUnlocked } from '@/data/types';
import UnitCard from '@/components/ui/UnitCard';

function tlocale(obj: Record<string, string>, locale: string): string {
  return obj[locale] ?? obj['en'];
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
};

export default function HomePage() {
  const t = useTranslations('home');
  const { locale } = useParams<{ locale: string }>();

  // In production: fetch completedLessons from Supabase and merge with local Zustand.
  // For MVP: completedLessons from local Zustand store (persisted).
  const completedLessonsArray = useUserStore((s) => s.completedLessons);
  const completedLessons = useMemo(
    () => new Set(completedLessonsArray),
    [completedLessonsArray]
  );

  return (
    <div className="px-4 py-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('title')} 🇹🇷
        </h1>
        <p className="text-slate-600 mt-1 text-base">{t('subtitle')}</p>
      </motion.div>

      {/* Levels */}
      {curriculum.map((level: Level) => {
        const levelUnlocked = isLevelUnlocked(level, curriculum, completedLessons);

        return (
          <div key={level.id} className="mb-10">
            {/* Level divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-slate-200" />
              <div className={`flex items-center gap-2 ${!levelUnlocked ? 'opacity-40' : ''}`}>
                {!levelUnlocked && <span className="text-sm">🔒</span>}
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                  {t('level')} · {level.code}
                </span>
              </div>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Units in level */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3"
            >
              {level.units.map((unit: Unit) => {
                const unitUnlocked =
                  levelUnlocked && isUnitUnlocked(unit, level, completedLessons);
                const completedCount = unit.lessons.filter((l) =>
                  completedLessons.has(l.id)
                ).length;

                // The next lesson to play is simply the first uncompleted lesson
                // Since progression is strictly linear, this is exactly unit.lessons[completedCount]
                const nextLessonToPlay = unit.lessons[completedCount] ?? unit.lessons[unit.lessons.length - 1];

                // Handle alias and type combinations safely
                const unitName = unit.name ?? unit.title;
                const localizedName = typeof unitName === 'string' 
                  ? unitName 
                  : unitName 
                    ? tlocale(unitName as unknown as Record<string, string>, locale) 
                    : "";
                const turkishName = typeof unitName === 'string' 
                  ? unitName 
                  : unitName 
                    ? (unitName as any).tr ?? "" 
                    : "";

                return (
                  <motion.div key={unit.id} variants={itemVariants}>
                    <UnitCard
                      id={nextLessonToPlay.id}
                      name={localizedName}
                      nameTr={turkishName}
                      emoji={unit.emoji}
                      level={level.code ?? level.id}
                      color={unit.color ?? unit.themeColor ?? 'from-slate-400 to-slate-500'}
                      lessonCount={unit.lessons.length}
                      completedCount={completedCount}
                      isLocked={!unitUnlocked}
                      locale={locale}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        );
      })}

      <div className="h-4" />
    </div>
  );
}
