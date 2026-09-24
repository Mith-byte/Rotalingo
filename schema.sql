-- ============================================================
-- Rotalingo – Supabase Database Schema
-- Run this in your Supabase project's SQL Editor
-- ============================================================

-- ── users_profile ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.users_profile (
    id              UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name    TEXT,
    native_language TEXT        DEFAULT 'en',           -- 'en' | 'ar' | 'fa' | 'ru'
    hearts          INTEGER     NOT NULL DEFAULT 5,
    coins           INTEGER     NOT NULL DEFAULT 0,
    streak_count    INTEGER     NOT NULL DEFAULT 0,
    last_played_at  TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── user_progress ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_progress (
    id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID        NOT NULL REFERENCES public.users_profile(id) ON DELETE CASCADE,
    current_level       TEXT        NOT NULL DEFAULT 'A1',      -- 'A1' | 'A1 İleri' | 'A2' | 'A2 İleri'
    current_unit        TEXT        NOT NULL DEFAULT 'Market',   -- 'Market' | 'School' | 'Devlet Dairesi' | 'Travel'
    completed_lessons   TEXT[]      NOT NULL DEFAULT '{}',       -- array of lesson IDs
    total_xp            INTEGER     NOT NULL DEFAULT 0,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id)
);

-- ── user_badges ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_badges (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID        NOT NULL REFERENCES public.users_profile(id) ON DELETE CASCADE,
    badge_name  TEXT        NOT NULL,
    earned_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, badge_name)
);

-- ============================================================
-- Trigger: auto-create profile + progress rows on signup
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
    INSERT INTO public.users_profile (id)
        VALUES (NEW.id)
        ON CONFLICT (id) DO NOTHING;

    INSERT INTO public.user_progress (user_id)
        VALUES (NEW.id)
        ON CONFLICT (user_id) DO NOTHING;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================
-- Row Level Security
-- ============================================================
ALTER TABLE public.users_profile  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges    ENABLE ROW LEVEL SECURITY;

-- users_profile
DROP POLICY IF EXISTS "profile: own read"   ON public.users_profile;
DROP POLICY IF EXISTS "profile: own insert" ON public.users_profile;
DROP POLICY IF EXISTS "profile: own update" ON public.users_profile;

CREATE POLICY "profile: own read"   ON public.users_profile FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profile: own insert" ON public.users_profile FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profile: own update" ON public.users_profile FOR UPDATE USING (auth.uid() = id);

-- user_progress
DROP POLICY IF EXISTS "progress: own read"   ON public.user_progress;
DROP POLICY IF EXISTS "progress: own insert" ON public.user_progress;
DROP POLICY IF EXISTS "progress: own update" ON public.user_progress;

CREATE POLICY "progress: own read"   ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "progress: own insert" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "progress: own update" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);

-- user_badges
DROP POLICY IF EXISTS "badges: own read"   ON public.user_badges;
DROP POLICY IF EXISTS "badges: own insert" ON public.user_badges;

CREATE POLICY "badges: own read"   ON public.user_badges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "badges: own insert" ON public.user_badges FOR INSERT WITH CHECK (auth.uid() = user_id);
