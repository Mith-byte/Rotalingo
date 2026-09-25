'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  BookOpen,
  Heart,
  Flame,
  Gamepad2,
  Globe,
  MapPin,
  CheckCircle,
  ChevronRight,
  Star,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Guidebooks for Every Unit',
    description:
      'Before each lesson, read a clear, concise guide with vocabulary, key phrases, and survival grammar — no textbook needed.',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    icon: Flame,
    title: 'Gamified Streaks & Hearts',
    description:
      'Stay motivated with daily streaks, hearts, and coins. Lose a heart for mistakes, earn XP for every lesson you complete.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    icon: Gamepad2,
    title: 'Scenario-Based Role-Play',
    description:
      'Practice real-life conversations: negotiate at the market, order at a café, ask for directions — with branching RPG dialogue.',
    color: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    icon: Globe,
    title: 'Your Language, Your App',
    description:
      'Full interface support for English, Arabic, Russian, and Persian. All translations are shown in your native language.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

const steps = [
  { number: '01', title: 'Pick your language', description: 'Choose your native language for translations and UI.' },
  { number: '02', title: 'Read the Guidebook', description: 'Learn vocab and key phrases before each new unit.' },
  { number: '03', title: 'Complete lessons', description: 'Drag, match, fill-in, and role-play your way to fluency.' },
  { number: '04', title: 'Live in Turkey confidently', description: 'Handle real-life situations — market, hospital, bank.' },
];

const testimonials = [
  { name: 'Rania K.', flag: '🇸🇦', text: 'I used to panic at the market. After 2 weeks, I can negotiate prices in Turkish!', lang: 'Arabic speaker' },
  { name: 'Dmitri V.', flag: '🇷🇺', text: 'The RPG lessons are genius. I actually practiced ordering food before going to a restaurant.', lang: 'Russian speaker' },
  { name: 'Parisa M.', flag: '🇮🇷', text: 'The guidebooks explain grammar so simply. I understood Turkish case suffixes in 10 minutes!', lang: 'Persian speaker' },
];

export default function LandingPage() {
  const { locale } = useParams<{ locale: string }>();
  const l = locale || 'en';

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
          <div className="flex items-center gap-2">
            <Link
              href={`/${l}/auth/login`}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Log In
            </Link>
            <Link
              href={`/${l}/auth/signup`}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
            >
              Get Started Free
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-semibold mb-8">
            <MapPin size={14} />
            Built for foreigners living in Turkey
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Break the language barrier.
            <br />
            <span className="text-red-600">Live in Turkey</span> on your terms.
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn practical, survival Turkish through gamified lessons and interactive role-play — 
            designed for Arabic, Russian, and Persian speakers navigating daily life in Turkey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${l}/auth/signup`}
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Start Learning Free <ChevronRight size={20} />
            </Link>
            <Link
              href={`/${l}`}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-lg font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              Preview the App
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <Users size={16} className="text-red-500" />
              <span><strong className="text-slate-900">2,400+</strong> learners</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span><strong className="text-slate-900">4.9</strong> rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={16} className="text-emerald-500" />
              <span><strong className="text-slate-900">Free</strong> to start</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Feature cards ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Everything you need to survive — and <span className="text-red-600">thrive</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Practical, bite-sized lessons designed around real situations you face every day in Turkey.
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">How it works</h2>
          <p className="text-slate-500 text-lg">From zero to confident in just a few weeks.</p>
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
            180 lessons across 4 levels
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto">
            A1 → A1 İleri → A2 → A2 İleri. Real situations, not textbook sentences.
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

      {/* ── Testimonials ── */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Loved by expats across Turkey</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 shadow-sm rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{t.flag}</div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.lang}</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex gap-0.5 mt-3">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🇹🇷</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start speaking Turkish today.
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Free forever. No credit card needed. Just pick your language and go.
          </p>
          <Link
            href={`/${l}/auth/signup`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Create Free Account <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇹🇷</span>
            <span className="font-bold text-slate-700">Rotalingo</span>
            <span>— Learn Turkish, Live Turkey</span>
          </div>
          <div className="flex gap-4">
            <Link href={`/${l}/auth/login`} className="hover:text-slate-700 transition-colors">Log In</Link>
            <Link href={`/${l}/auth/signup`} className="hover:text-slate-700 transition-colors">Sign Up</Link>
            <Link href={`/${l}`} className="hover:text-slate-700 transition-colors">App</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
