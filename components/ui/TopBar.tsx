'use client';

import { useUserStore } from '@/lib/store/userStore';
import { motion } from 'framer-motion';
import { Flame, Gem, Heart } from 'lucide-react';

export default function TopBar() {
  const { hearts, coins, streakCount } = useUserStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
      <div className="flex items-center justify-between px-4 py-3 bg-red-600 shadow-sm border-b border-red-700">
        {/* Streak */}
        <motion.div
          className="flex items-center gap-1.5"
          whileTap={{ scale: 0.9 }}
        >
          <Flame
            size={22}
            className={streakCount > 0 ? 'text-yellow-300' : 'text-red-300'}
            fill={streakCount > 0 ? 'currentColor' : 'none'}
          />
          <span className="font-bold text-sm tabular-nums text-white">
            {streakCount}
          </span>
        </motion.div>

        {/* Logo */}
        <span className="font-bold text-lg tracking-tight text-white">
          Rota<span className="text-red-200">lingo</span>
        </span>

        <div className="flex items-center gap-4">
          {/* Gems / Coins */}
          <motion.div
            className="flex items-center gap-1.5"
            whileTap={{ scale: 0.9 }}
          >
            <Gem size={20} className="text-cyan-200" fill="currentColor" />
            <span className="font-bold text-sm tabular-nums text-white">
              {coins}
            </span>
          </motion.div>

          {/* Hearts */}
          <motion.div
            className="flex items-center gap-0.5"
            whileTap={{ scale: 0.9 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  scale: i < hearts ? 1 : 0.7,
                  opacity: i < hearts ? 1 : 0.4,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Heart
                  size={16}
                  className="text-white"
                  fill={i < hearts ? 'white' : 'none'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
