'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface LeaderboardEntry {
  id: string;
  display_name: string;
  weekly_xp: number;
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<LeaderboardEntry[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setCurrentUserId(user.id);

      const { data } = await supabase
        .from('users_profile')
        .select('id, display_name, weekly_xp')
        .order('weekly_xp', { ascending: false })
        .limit(50);
        
      if (data) {
        setUsers(data as LeaderboardEntry[]);
      }
      setLoading(false);
    }
    loadLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-slate-900 bg-slate-50">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="text-red-500 mb-4"
        >
          <Trophy size={48} />
        </motion.div>
        <p className="text-slate-500 font-semibold">Loading Leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 text-slate-900 bg-slate-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-2 py-8"
      >
        <Trophy size={56} className="text-amber-500 mb-2" />
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Weekly Rank</h2>
        <p className="text-sm text-slate-500 font-medium">Top 50 Learners this week</p>
      </motion.div>

      <div className="flex flex-col gap-3 pb-10">
        {users.map((u, index) => {
          const rank = index + 1;
          const isCurrentUser = u.id === currentUserId;
          
          let rankColor = 'text-slate-400 bg-slate-100 border-slate-200';
          let icon = <span className="font-bold text-lg">{rank}</span>;
          
          if (rank === 1) {
            rankColor = 'text-amber-600 bg-amber-50 border-amber-200 shadow-sm';
            icon = <Medal size={24} className="text-amber-500" />;
          } else if (rank === 2) {
            rankColor = 'text-slate-600 bg-slate-100 border-slate-300 shadow-sm';
            icon = <Medal size={24} className="text-slate-400" />;
          } else if (rank === 3) {
            rankColor = 'text-orange-700 bg-orange-50 border-orange-200 shadow-sm';
            icon = <Medal size={24} className="text-orange-600" />;
          }

          return (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
              className={`flex items-center p-4 rounded-3xl border-2 transition-all ${
                isCurrentUser
                  ? 'border-red-500 bg-red-50 shadow-md'
                  : 'bg-white border-slate-100 shadow-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border ${rankColor}`}>
                {icon}
              </div>
              
              <div className="flex-1 ml-4">
                <p className={`font-bold text-lg ${isCurrentUser ? 'text-red-700' : 'text-slate-800'}`}>
                  {u.display_name || 'Anonymous'}
                </p>
                {isCurrentUser && (
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-widest">You</p>
                )}
              </div>
              
              <div className="text-right">
                <p className={`font-black text-xl ${isCurrentUser ? 'text-red-600' : 'text-slate-900'}`}>
                  {u.weekly_xp || 0}
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">XP</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
