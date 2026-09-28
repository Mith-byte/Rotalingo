'use client';
import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useUserStore } from '@/lib/store/userStore';

export function GlobalListeners() {
  const checkHeartRegeneration = useUserStore((state) => state.checkHeartRegeneration);

  useEffect(() => {
    const supabase = createClient();
    
    // Auth Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        useUserStore.getState().reset();
        localStorage.removeItem('rotalingo-user-storage');
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
