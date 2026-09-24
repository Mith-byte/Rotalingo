import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  hearts: number;
  coins: number;
  streakCount: number;
  lastPlayedAt: string | null;
  completedLessons: string[]; // lesson IDs
  // Actions
  loseHeart: () => void;
  gainHeart: () => void;
  gainCoins: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  completeLesson: (lessonId: string) => void;
  setFromDB: (data: {
    hearts: number;
    coins: number;
    streakCount: number;
    lastPlayedAt: string | null;
    completedLessons: string[];
  }) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      hearts: 5,
      coins: 0,
      streakCount: 0,
      lastPlayedAt: null,
      completedLessons: [],

      loseHeart: () =>
        set((state) => ({ hearts: Math.max(0, state.hearts - 1) })),

      gainHeart: () =>
        set((state) => ({ hearts: Math.min(5, state.hearts + 1) })),

      gainCoins: (amount: number) =>
        set((state) => ({ coins: state.coins + amount })),

      incrementStreak: () =>
        set((state) => ({ streakCount: state.streakCount + 1 })),

      resetStreak: () => set({ streakCount: 0 }),

      completeLesson: (lessonId: string) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),

      setFromDB: (data) =>
        set({
          hearts: data.hearts,
          coins: data.coins,
          streakCount: data.streakCount,
          lastPlayedAt: data.lastPlayedAt,
          completedLessons: data.completedLessons,
        }),
    }),
    { name: 'rotalingo-user-storage' }
  )
);
