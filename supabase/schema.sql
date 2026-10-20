-- MUTATE database schema
-- Run this in the Supabase SQL Editor to set up tables, RLS, and triggers.

-- Card catalog (server authority for rolls and fusion)
create table public.card_catalog (
  id text primary key,
  name text not null,
  rarity text not null,
  strain text not null,
  potency int not null,
  stability int not null,
  flavor text not null,
  art_key text not null
);

insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('sporeling',    'Sporeling',    'common',    'FUNGAL',    14, 55, 'A cloud of microscopic hunger.', 'sporeling'),
('cinder-mite',  'Cinder Mite',  'common',    'MINERAL',   12, 42, 'Smolders for decades in silence.', 'cinder-mite'),
('brine-wisp',   'Brine Wisp',   'common',    'FLUID',     13, 48, 'Condensed brine with a will.', 'brine-wisp'),
('molt-husk',    'Molt Husk',    'common',    'ORGANIC',   15, 38, 'Empty, yet it twitches.', 'molt-husk'),
('gritling',     'Gritling',     'common',    'MINERAL',   11, 60, 'Harder than intent, softer than stone.', 'gritling'),
('pale-midge',   'Pale Midge',   'common',    'NEURAL',    16, 33, 'A swarm of one mind.', 'pale-midge'),
('chorus-moth',  'Chorus Moth',  'rare',      'NEURAL',    24, 58, 'Resonates with nearby neurons.', 'chorus-moth'),
('veinwalker',   'Veinwalker',   'rare',      'ORGANIC',   26, 52, 'Capillaries rearrange to guide it.', 'veinwalker'),
('ferro-bloom',  'Ferro Bloom',  'rare',      'MINERAL',   23, 64, 'Magnetic petals orient north.', 'ferro-bloom'),
('static-eel',   'Static Eel',   'rare',      'KINETIC',   27, 45, 'Stores charge between heartbeats.', 'static-eel'),
('hollow-saint', 'Hollow Saint', 'rare',      'SPECTRAL',  25, 50, 'Its halo is a scar.', 'hollow-saint'),
('glass-oracle', 'Glass Oracle', 'epic',      'SPECTRAL',  36, 71, 'Every angle is a prophecy.', 'glass-oracle'),
('marrow-choir', 'Marrow Choir', 'epic',      'ORGANIC',   38, 56, 'A cage of calcium and hymn.', 'marrow-choir'),
('neon-larva',   'Neon Larva',   'epic',      'KINETIC',   40, 48, 'Bioluminescence as appetite.', 'neon-larva'),
('dusk-ram',     'Dusk Ram',     'epic',      'MINERAL',   35, 62, 'Charges when the light leaves.', 'dusk-ram'),
('aureate-host', 'Aureate Host', 'legendary', 'ORGANIC',   54, 80, 'A parasite draped in wealth.', 'aureate-host'),
('pale-engine',  'The Pale Engine', 'legendary','KINETIC', 58, 74, 'Perpetual motion of regret.', 'pale-engine'),
('vesper-crown', 'Vesper Crown', 'legendary', 'SPECTRAL',  56, 77, 'Heavy with borrowed twilight.', 'vesper-crown'),
('ouroboros-9',  'Ouroboros-9',  'mythic',    'RECURSIVE', 86, 91, 'Its recursion has a limit. Nobody has found it.', 'ouroboros-9'),
('last-cell',    'The Last Cell', 'mythic',   'ORGANIC',   92, 88, 'The final division before silence.', 'last-cell');

-- Pack config (server authority for odds)
create table public.pack_config (
  id text primary key,
  name text not null,
  cost_credits int not null,
  cost_residue int not null,
  cards int not null,
  floor_rarity text,
  odds jsonb not null
);

insert into public.pack_config (id, name, cost_credits, cost_residue, cards, floor_rarity, odds) values
('spore', 'SPORE PACK', 120, 100, 3, 'rare', '{"common":0.62,"rare":0.26,"epic":0.09,"legendary":0.026,"mythic":0.004}'::jsonb),
('prime', 'PRIME PACK', 320, 260, 5, 'epic', '{"common":0,"rare":0.48,"epic":0.34,"legendary":0.14,"mythic":0.04}'::jsonb),
('relic', 'RELIC PACK', 850, 700, 3, 'legendary', '{"common":0,"rare":0,"epic":0,"legendary":0.88,"mythic":0.12}'::jsonb);

-- Profiles
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  handle text,
  credits int not null default 1500,
  residue int not null default 40,
  packs_opened int not null default 0,
  pity int not null default 0,
  created_at timestamptz default now()
);

-- Inventory cards (instances)
create table public.cards (
  uid uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  card_id text not null references public.card_catalog(id),
  rarity text not null,
  source text not null default 'pack',
  acquired_at timestamptz not null default now()
);

-- Activity log
create table public.activity (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  type text not null,
  label text not null,
  ts timestamptz not null default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.cards enable row level security;
alter table public.activity enable row level security;
alter table public.card_catalog enable row level security;
alter table public.pack_config enable row level security;

-- Allow reads only; all writes go through Edge Functions (service role)
create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users read own cards" on public.cards for select using (auth.uid() = user_id);
create policy "Users read own activity" on public.activity for select using (auth.uid() = user_id);
create policy "Public read catalog" on public.card_catalog for select to authenticated, anon using (true);
create policy "Public read packs" on public.pack_config for select to authenticated, anon using (true);

-- Trigger: create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, handle)
  values (new.id, coalesce(new.raw_user_meta_data->>'handle', 'USER'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
