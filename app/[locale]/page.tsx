'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  BookOpen,
  Flame,
  Gamepad2,
  Globe,
  ChevronRight,
} from 'lucide-react';

export default function LandingPage() {
  const { locale } = useParams<{ locale: string }>();
  const l = locale || 'en';
  const t = useTranslations('landing');
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Redirect to the same path but with the new locale
    router.push(`/${newLocale}`);
  };

  const features = [
    {
      icon: BookOpen,
      title: t('f1_title'),
      description: t('f1_desc'),
      color: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      icon: Flame,
      title: t('f2_title'),
      description: t('f2_desc'),
      color: 'bg-orange-50 text-orange-600 border-orange-100',
    },
    {
      icon: Gamepad2,
      title: t('f3_title'),
      description: t('f3_desc'),
      color: 'bg-violet-50 text-violet-600 border-violet-100',
    },
    {
      icon: Globe,
      title: t('f4_title'),
      description: t('f4_desc'),
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const steps = [
    { number: t('s1_num'), title: t('s1_title'), description: t('s1_desc') },
    { number: t('s2_num'), title: t('s2_title'), description: t('s2_desc') },
    { number: t('s3_num'), title: t('s3_title'), description: t('s3_desc') },
    { number: t('s4_num'), title: t('s4_title'), description: t('s4_desc') },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇹🇷</span>
            <span className="font-extrabold text-xl tracking-tight">
              Rota<span className="text-red-600">lingo</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={l}
              onChange={handleLanguageChange}
              className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer hover:text-red-600 transition-colors"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="ru">Русский</option>
              <option value="fa">فارسی</option>
            </select>

            <div className="hidden sm:flex items-center gap-2">
              <Link
                href={`/${l}/login`}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
              >
                {t('cta_preview')}
              </Link>
            </div>
            <Link
              href={`/${l}/register`}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
            >
              {t('cta_create')}
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {t('title1')}
            <br />
            <span className="text-red-600">{t('title2')}</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t('mission_statement')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${l}/register`}
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {t('cta_start')} <ChevronRight size={20} />
            </Link>
            <Link
              href={`/${l}/dashboard`}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-lg font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              {t('cta_preview')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Feature cards ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t('features_title')}
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              {t('features_subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t('how_it_works')}</h2>
          <p className="text-slate-500 text-lg">{t('how_it_works_sub')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-black text-red-100 mb-3">{step.number}</div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Curriculum preview ── */}
      <section className="bg-red-600 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            {t('curriculum_title')}
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto">
            {t('curriculum_sub')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { emoji: '👋', label: 'Greetings' },
              { emoji: '🛒', label: 'Market' },
              { emoji: '☕', label: 'Café & Food' },
              { emoji: '🚌', label: 'Transport' },
              { emoji: '🏥', label: 'Hospital' },
              { emoji: '🏦', label: 'Bank' },
              { emoji: '📋', label: 'Gov. Office' },
              { emoji: '💼', label: 'Job Interview' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-semibold text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🇹🇷</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            {t('cta_final_title')}
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            {t('cta_final_sub')}
          </p>
          <Link
            href={`/${l}/register`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
          >
            {t('cta_create')} <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇹🇷</span>
            <span className="font-bold text-slate-700">Rotalingo</span>
            <span>— {t('footer_tagline')}</span>
          </div>
          <div className="flex gap-4">
            <Link href={`/${l}/login`} className="hover:text-slate-700 transition-colors">Log In</Link>
            <Link href={`/${l}/register`} className="hover:text-slate-700 transition-colors">Sign Up</Link>
            <Link href={`/${l}/dashboard`} className="hover:text-slate-700 transition-colors">App</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
