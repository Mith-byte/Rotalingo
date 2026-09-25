'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Mail, Lock, User, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const NATIVE_LANGUAGES = [
  { code: 'en', label: 'English 🇬🇧', native: 'English' },
  { code: 'ar', label: 'Arabic – العربية 🇸🇦', native: 'Arabic' },
  { code: 'fa', label: 'Persian – فارسی 🇮🇷', native: 'Persian' },
  { code: 'ru', label: 'Russian – Русский 🇷🇺', native: 'Russian' },
] as const;

export default function SignupPage() {
  const t = useTranslations('auth');
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const supabase = createClient();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nativeLang, setNativeLang] = useState<'en' | 'ar' | 'fa' | 'ru'>(
    (locale as 'en' | 'ar' | 'fa' | 'ru') || 'en'
  );
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
          locale: nativeLang, // Added for Supabase Go Templates
        },
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    if (signupError) {
      setError(signupError.message);
      setLoading(false);
      return;
    }

    // Update profile with display name and native language
    const { data: { user } } = await supabase.auth.getUser();
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
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-center gap-6"
      >
        <div className="w-20 h-20 bg-red-50 border border-red-100 rounded-full flex items-center justify-center">
          <CheckCircle size={40} className="text-red-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">{t('verify_title')}</h2>
        <p className="text-slate-500 max-w-xs">
          {t('verify_desc', { email })}
        </p>
        <Link
          href={`/${nativeLang}/login`}
          className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl text-base shadow-md transition-colors"
        >
          {t('login')}
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="text-5xl mb-3">🇹🇷</div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Rota<span className="text-red-600">lingo</span>
        </h1>
        <p className="text-slate-500 mt-1 text-sm">Learn Turkish, Live Turkey</p>
      </motion.div>

      {/* Language selector — FIRST, prominent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="w-full max-w-sm mb-4"
      >
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 text-center">
          Step 1 — Select your native language
        </p>
        <div className="grid grid-cols-2 gap-2">
          {NATIVE_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setNativeLang(lang.code as 'en' | 'ar' | 'fa' | 'ru')}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl border-2 text-sm font-semibold transition-all ${
                nativeLang === lang.code
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {nativeLang === lang.code && <CheckCircle size={14} className="text-red-600 shrink-0" />}
              {lang.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 flex flex-col gap-4 shadow-sm"
      >
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Step 2 — Create account</p>
          <h2 className="text-xl font-bold text-slate-900">{t('signup')}</h2>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          {/* Display name */}
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t('display_name')}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              placeholder={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors"
            />
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-2"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold rounded-2xl text-base shadow-md shadow-red-600/20 transition-colors mt-1 flex items-center justify-center gap-2"
          >
            {loading ? 'Creating account…' : t('signup')}
            {!loading && <ChevronRight size={18} />}
          </motion.button>
        </form>

        <p className="text-center text-slate-500 text-sm">
          {t('have_account')}{' '}
          <Link href={`/${locale}/login`} className="text-red-600 font-semibold hover:text-red-500">
            {t('login')}
          </Link>
        </p>
      </motion.div>

      {/* Back to landing */}
      <Link href={`/${locale}`} className="mt-6 text-slate-400 text-sm hover:text-slate-600 transition-colors">
        ← Back to home
      </Link>
    </div>
  );
}
