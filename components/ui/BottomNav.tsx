'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Trophy, User, ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';

const navItems = [
  { id: 'home', icon: Home, href: '/dashboard' },
  { id: 'leaderboard', icon: Trophy, href: '/leaderboard' },
  { id: 'profile', icon: User, href: '/profile' },
  { id: 'store', icon: ShoppingBag, href: '/store' },
] as const;

interface BottomNavProps {
  locale: string;
}

export default function BottomNav({ locale }: BottomNavProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto pb-safe">
      <div className="flex items-center justify-around px-2 py-2 bg-red-600 shadow-lg border-t border-red-700">
        {navItems.map(({ id, icon: Icon, href }) => {
          const fullHref = `/${locale}${href}`;
          const isActive = pathname === fullHref || (href === '/dashboard' && pathname === `/${locale}`);

          return (
            <Link key={id} href={fullHref} className="relative flex-1">
              <motion.div
                className="flex flex-col items-center gap-0.5 py-1"
                whileTap={{ scale: 0.85 }}
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 -m-2 bg-white/20 rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={24}
                    className={clsx(
                      'transition-colors relative z-10',
                      isActive ? 'text-white' : 'text-red-200'
                    )}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </div>
                <span
                  className={clsx(
                    'text-[10px] font-medium transition-colors',
                    isActive ? 'text-white' : 'text-red-200'
                  )}
                >
                  {t(id)}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
