'use client';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 px-6 text-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Trophy size={64} className="text-amber-400" />
      </motion.div>
      <h2 className="text-2xl font-extrabold text-white">Leaderboard</h2>
      <p className="text-slate-400">Coming soon — compete with other learners!</p>
    </div>
  );
}
