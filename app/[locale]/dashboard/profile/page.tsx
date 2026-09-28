'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Gem, Flame, LogOut } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface UserData {
  displayName: string;
  email: string;
}

export default function ProfilePage() {
  const t = useTranslations('profile');
  const { hearts, coins, streakCount } = useUserStore();
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser({
          displayName: user.user_metadata?.display_name || 'Student',
          email: user.email || '',
        });
      }
    }
    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    useUserStore.getState().reset();
    router.push(`/${locale || 'en'}/login`);
    router.refresh();
  }

  return (
    <div className="px-4 py-6 text-slate-900 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-8"
      >
        <div className="w-24 h-24 rounded-3xl bg-red-100 flex items-center justify-center border-2 border-red-200">
          <User size={48} className="text-red-500" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {user?.displayName || 'Loading...'}
          </h2>
          <p className="text-sm text-slate-500">{user?.email}</p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          { id: 'streak', icon: <Flame size={24} className="text-orange-400" />, label: t('streak'), value: streakCount },
          { id: 'hearts', icon: <Heart size={24} className="text-red-400" fill="#f87171" />, label: t('hearts'), value: hearts },
          { id: 'coins', icon: <Gem size={24} className="text-cyan-400" fill="#22d3ee" />, label: t('coins'), value: coins },
        ].map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            {stat.icon}
            <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 py-4 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 font-bold rounded-2xl transition-colors"
      >
        <LogOut size={20} />
        <span>{t('logout')}</span>
      </motion.button>
    </div>
  );
}
