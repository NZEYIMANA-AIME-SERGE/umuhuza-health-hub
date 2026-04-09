import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  // Language
  language: 'rw' | 'en';
  setLanguage: (lang: 'rw' | 'en') => void;

  // Credits
  credits: number;
  lifetimeCredits: number;
  addCredits: (amount: number) => void;

  // Quest progress
  completedQuests: string[];
  completeQuest: (questId: string) => void;

  // Accessibility
  highContrast: boolean;
  toggleHighContrast: () => void;

  // Stealth mode
  stealthMode: boolean;
  activateStealth: () => void;
  deactivateStealth: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'rw',
      setLanguage: (lang) => set({ language: lang }),

      credits: 0,
      lifetimeCredits: 0,
      addCredits: (amount) =>
        set((s) => ({
          credits: s.credits + amount,
          lifetimeCredits: s.lifetimeCredits + amount,
        })),

      completedQuests: [],
      completeQuest: (questId) =>
        set((s) => ({
          completedQuests: [...new Set([...s.completedQuests, questId])],
        })),

      highContrast: false,
      toggleHighContrast: () => set((s) => ({ highContrast: !s.highContrast })),

      stealthMode: false,
      activateStealth: () => set({ stealthMode: true }),
      deactivateStealth: () => set({ stealthMode: false }),
    }),
    { name: 'umuhuza-store' }
  )
);
