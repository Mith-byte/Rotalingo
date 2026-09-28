import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  hearts: number;
  coins: number;
  xp: number;
  streakCount: number;
  lastPlayedAt: string | null;
  lastHeartDropTimestamp: number | null;
  completedLessons: string[]; // lesson IDs
  // Actions
  loseHeart: () => void;
  gainHeart: () => void;
  gainCoins: (amount: number) => void;
  gainXP: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  completeLesson: (lessonId: string) => void;
  checkHeartRegeneration: () => void;
  setFromDB: (data: {
    hearts: number;
    coins: number;
    xp: number;
    streakCount: number;
    lastPlayedAt: string | null;
    lastHeartDropTimestamp: number | null;
    completedLessons: string[];
  }) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      hearts: 5,
      coins: 0,
      xp: 0,
      streakCount: 0,
      lastPlayedAt: null,
      lastHeartDropTimestamp: null,
      completedLessons: [],

      loseHeart: () =>
        set((state) => {
          const newHearts = Math.max(0, state.hearts - 1);
          const needsTimestamp = state.hearts === 5 && newHearts < 5;
          return {
            hearts: newHearts,
            lastHeartDropTimestamp: needsTimestamp ? Date.now() : state.lastHeartDropTimestamp
          };
        }),

      gainHeart: () =>
        set((state) => {
          const newHearts = Math.min(5, state.hearts + 1);
          return {
            hearts: newHearts,
            lastHeartDropTimestamp: newHearts < 5 ? Date.now() : null
          };
        }),

      gainCoins: (amount: number) =>
        set((state) => ({ coins: state.coins + amount })),

      gainXP: (amount: number) =>
        set((state) => ({ xp: state.xp + amount })),

      incrementStreak: () =>
        set((state) => ({ streakCount: state.streakCount + 1 })),

      resetStreak: () => set({ streakCount: 0 }),

      completeLesson: (lessonId: string) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
        
      checkHeartRegeneration: () => {
        const state = get();
        if (state.hearts < 5 && state.lastHeartDropTimestamp) {
          const now = Date.now();
          const diffMs = now - state.lastHeartDropTimestamp;
          const REGEN_TIME = 30 * 60 * 1000; // 30 minutes
          
          if (diffMs >= REGEN_TIME) {
            const heartsToGain = Math.floor(diffMs / REGEN_TIME);
            const newHearts = Math.min(5, state.hearts + heartsToGain);
            const remainingMs = diffMs % REGEN_TIME;
            
            set({
              hearts: newHearts,
              lastHeartDropTimestamp: newHearts < 5 ? now - remainingMs : null
            });
          }
        }
      },

      setFromDB: (data) =>
        set({
          hearts: data.hearts,
          coins: data.coins,
          xp: data.xp,
          streakCount: data.streakCount,
          lastPlayedAt: data.lastPlayedAt,
          lastHeartDropTimestamp: data.lastHeartDropTimestamp,
          completedLessons: data.completedLessons,
        }),

      reset: () =>
        set({
          hearts: 5,
          coins: 0,
          xp: 0,
          streakCount: 0,
          lastPlayedAt: null,
          lastHeartDropTimestamp: null,
          completedLessons: [],
        }),
    }),
    { name: 'rotalingo-user-storage' }
  )
);
