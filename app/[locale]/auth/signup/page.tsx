'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Mail, Lock, User, Globe } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const NATIVE_LANGUAGES = [
  { code: 'en', label: 'English 🇬🇧' },
  { code: 'ar', label: 'Arabic – العربية 🇸🇦' },
  { code: 'fa', label: 'Persian – فارسی 🇮🇷' },
  { code: 'ru', label: 'Russian – Русский 🇷🇺' },
] as const;

export default function SignupPage() {
  const t = useTranslations('auth');
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nativeLang, setNativeLang] = useState<'en' | 'ar' | 'fa' | 'ru'>('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
          native_language: nativeLang,
        },
      },
    });

    if (signupError) {
      setError(signupError.message);
      setLoading(false);
      return;
    }

    // Update profile with display name and native language
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from('users_profile').upsert({
        id: user.id,
        display_name: displayName,
        native_language: nativeLang,
      });
    }

    setDone(true);
    setLoading(false);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center gap-6"
      >
        <div className="text-6xl">📧</div>
        <h2 className="text-2xl font-extrabold text-white">Check your email!</h2>
        <p className="text-slate-400 max-w-xs">
          We sent a confirmation link to <strong className="text-white">{email}</strong>.
          Click it to activate your account.
        </p>
        <Link
          href={`/${locale}/auth/login`}
          className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl text-base"
        >
          {t('login')}
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
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
        <h2 className="text-xl font-bold text-white">{t('signup')}</h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          {/* Display name */}
          <div className="relative">
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder={t('display_name')}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3.5 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

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
              type="password"
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full pl-10 pr-4 py-3.5 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Native language selector */}
          <div className="relative">
            <Globe
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <select
              value={nativeLang}
              onChange={(e) => setNativeLang(e.target.value as 'en' | 'ar' | 'fa' | 'ru')}
              className="w-full pl-10 pr-4 py-3.5 bg-slate-900 border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-indigo-500 transition-colors"
            >
              {NATIVE_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
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
            {loading ? 'Creating account…' : t('signup')}
          </motion.button>
        </form>

        <p className="text-center text-slate-400 text-sm">
          {t('have_account')}{' '}
          <Link
            href={`/${locale}/auth/login`}
            className="text-indigo-400 font-semibold hover:text-indigo-300"
          >
            {t('login')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
