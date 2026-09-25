'use client';

import { NextIntlClientProvider } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TopBar from '@/components/ui/TopBar';
import BottomNav from '@/components/ui/BottomNav';

interface LocaleLayoutClientProps {
  locale: string;
  messages: Record<string, unknown>;
  children: React.ReactNode;
}

export default function LocaleLayoutClient({
  locale,
  messages,
  children,
}: LocaleLayoutClientProps) {
  const pathname = usePathname();

  // Detect if we're in a lesson, auth page, or landing page (hide nav)
  const isLesson = pathname?.includes('/lesson/');
  const isAuth = pathname?.includes('/login') || pathname?.includes('/register');
  const isDashboard = pathname?.includes('/dashboard');
  const isLanding = !isDashboard && !isLesson && !isAuth;
  
  // hideChrome is basically true for anything that ISN'T the dashboard or profile/leaderboard
  // For MVP, since we only have dashboard:
  const hideChrome = !isDashboard;

  // RTL locales
  const isRTL = locale === 'ar' || locale === 'fa';

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className="min-h-screen flex flex-col max-w-md mx-auto relative bg-white text-slate-900"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Top bar — hidden during lesson, auth, and landing */}
        {!hideChrome && <TopBar />}

        {/* Page content */}
        <main className={`flex-1 overflow-y-auto ${!hideChrome ? 'pt-16 pb-24' : ''}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom navigation — hidden during lesson, auth, and landing */}
        {!hideChrome && <BottomNav locale={locale} />}
      </div>
    </NextIntlClientProvider>
  );
}
