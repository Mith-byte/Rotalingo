create table if not exists public.user_progress (
  user_id uuid references auth.users(id) on delete cascade primary key,
  completed_lessons jsonb default '[]'::jsonb,
  hearts integer default 5,
  coins integer default 0,
  last_heart_drop bigint,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on RLS
alter table public.user_progress enable row level security;

-- Policies
create policy "Users can view their own progress" on public.user_progress for select using (auth.uid() = user_id);
create policy "Users can update their own progress" on public.user_progress for update using (auth.uid() = user_id);
create policy "Users can insert their own progress" on public.user_progress for insert with check (auth.uid() = user_id);
