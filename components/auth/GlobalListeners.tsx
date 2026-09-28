'use client';
import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useUserStore } from '@/lib/store/userStore';

export function GlobalListeners() {
  const checkHeartRegeneration = useUserStore((state) => state.checkHeartRegeneration);

  useEffect(() => {
    const supabase = createClient();
    
    // Auth Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT') {
        useUserStore.getState().reset();
        localStorage.removeItem('rotalingo-user-storage');
      } else if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        if (session?.user) {
          const { data: progress } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

          if (progress) {
            useUserStore.getState().setFromDB({
              hearts: progress.hearts,
              coins: progress.coins,
              xp: useUserStore.getState().xp,
              streakCount: useUserStore.getState().streakCount,
              lastPlayedAt: useUserStore.getState().lastPlayedAt,
              lastHeartDropTimestamp: progress.last_heart_drop,
              completedLessons: progress.completed_lessons || [],
            });
          } else {
            await supabase.from('user_progress').insert({
              user_id: session.user.id,
              hearts: 5,
              coins: 0,
              completed_lessons: [],
              last_heart_drop: null,
            });
          }
        }
      }
    });

    // Also manually sync once on mount to be safe
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const { data: progress } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', session.user.id)
          .single();

        if (progress) {
          useUserStore.getState().setFromDB({
            hearts: progress.hearts,
            coins: progress.coins,
            xp: useUserStore.getState().xp,
            streakCount: useUserStore.getState().streakCount,
            lastPlayedAt: useUserStore.getState().lastPlayedAt,
            lastHeartDropTimestamp: progress.last_heart_drop,
            completedLessons: progress.completed_lessons || [],
          });
        }
      }
    });

    // Heart Regeneration Interval (every 1 minute)
    const interval = setInterval(() => {
      useUserStore.getState().checkHeartRegeneration();
    }, 60000);

    // Initial check on mount
    useUserStore.getState().checkHeartRegeneration();

    return () => {
      subscription.unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return null;
}
