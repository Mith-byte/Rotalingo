'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const t = useTranslations('auth');
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    router.push(`/${locale}`);
    router.refresh();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <div className="text-5xl mb-3">🇹🇷</div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Rota<span className="text-indigo-400">lingo</span>
        </h1>
        <p className="text-slate-400 mt-1 text-sm">Learn Turkish, Live Turkey</p>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full glass rounded-3xl p-6 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-white">{t('login')}</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          {/* Email */}
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              placeholder={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3.5 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-12 py-3.5 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-2xl text-base shadow-lg shadow-indigo-500/25 transition-colors mt-1"
          >
            {loading ? 'Logging in…' : t('login')}
          </motion.button>
        </form>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-slate-500 text-xs">{t('or')}</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <p className="text-center text-slate-400 text-sm">
          {t('no_account')}{' '}
          <Link
            href={`/${locale}/auth/signup`}
            className="text-indigo-400 font-semibold hover:text-indigo-300"
          >
            {t('signup')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
