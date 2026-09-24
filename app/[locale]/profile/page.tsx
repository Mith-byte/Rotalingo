'use client';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';
import { Heart, Gem, Flame } from 'lucide-react';

export default function ProfilePage() {
  const { hearts, coins, streakCount } = useUserStore();

  return (
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-8"
      >
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <User size={48} className="text-white" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">Your Profile</h2>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: <Flame size={24} className="text-orange-400" />, label: 'Streak', value: streakCount },
          { icon: <Heart size={24} className="text-red-400" fill="#f87171" />, label: 'Hearts', value: hearts },
          { icon: <Gem size={24} className="text-cyan-400" fill="#22d3ee" />, label: 'Coins', value: coins },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            {stat.icon}
            <p className="text-2xl font-extrabold text-white">{stat.value}</p>
            <p className="text-xs text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
