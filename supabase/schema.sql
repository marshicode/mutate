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

-- COMMON (Tier 4)
insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('troll',   'TROLL',   'common', 'HUMANOID', 12, 48, 'Ancient meme energy. Still trolling after all these years.', 'troll'),
('andy',    'ANDY',    'common', 'HUMANOID', 14, 42, 'Matt Furie\'s forgotten son. Lives in PEPE\'s shadow.', 'andy'),
('slerf',   'SLERF',   'common', 'SLOTH',    11, 35, 'Burned $10M by mistake. Became a legend for 48 hours.', 'slerf'),
('michi',   'MICHI',   'common', 'FELINE',   16, 38, 'Solana\'s cutest niche obsession.', 'michi');

-- RARE (Tier 3)
insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('popcat', 'POPCAT', 'rare', 'FELINE',   26, 62, 'One photo. Two states. Infinite memes. Solana\'s cat.', 'popcat'),
('mog',    'MOG',    'rare', 'HUMANOID', 24, 58, 'You either mog or get mogged. There is no third option.', 'mog'),
('wojak',  'WOJAK',  'rare', 'HUMANOID', 27, 45, 'Every trader\'s spirit animal. He knows your portfolio.', 'wojak'),
('turbo',  'TURBO',  'rare', 'ABSTRACT', 25, 52, 'The first AI-created meme coin. GPT-4 wrote the contract.', 'turbo'),
('neiro',  'NEIRO',  'rare', 'CANINE',   23, 60, 'New DOGE. Same dog. Different era.', 'neiro'),
('ponke',  'PONKE',  'rare', 'PRIMATE',  28, 40, 'Solana\'s gambling monkey. Degenerate energy incarnate.', 'ponke');

-- EPIC (Tier 2)
insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('trump', 'TRUMP', 'epic', 'HUMANOID', 40, 48, 'Presidential meme coin. $40B in 48 hours. Politics as asset.', 'trump'),
('wif',   'WIF',   'epic', 'CANINE',   38, 65, 'Solana\'s #1. A pink hat. A dream. Nothing else needed.', 'wif'),
('floki', 'FLOKI', 'epic', 'CANINE',   36, 58, 'Elon\'s actual dog. Built an empire of billboards.', 'floki'),
('bonk',  'BONK',  'epic', 'CANINE',   35, 70, 'Solana\'s OG meme. The bat is a weapon and a promise.', 'bonk'),
('brett', 'BRETT', 'epic', 'HUMANOID', 37, 55, 'Matt Furie\'s blue frog-adjacent legend. Base mascot.', 'brett');

-- LEGENDARY (Tier 1)
insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('doge', 'DOGE', 'legendary', 'CANINE',   58, 85, 'The original meme coin. A Shiba Inu that became a global currency.', 'doge'),
('shib', 'SHIB', 'legendary', 'CANINE',   56, 78, 'The DOGE killer that built Shibarium. Millions of holders.', 'shib'),
('pepe', 'PEPE', 'legendary', 'FROG',     54, 82, 'The most viral meme coin launch in history. Pure internet culture.', 'pepe');

-- MYTHIC (Tier Apex)
insert into public.card_catalog (id, name, rarity, strain, potency, stability, flavor, art_key) values
('satoshi', 'SATOSHI', 'mythic', 'ABSTRACT',  99, 99, 'The original meme. The creator who vanished. Worth a million BTC.', 'satoshi'),
('vitalik', 'VITALIK', 'mythic', 'HUMANOID',  92, 95, 'Built Ethereum at 19. Wears unicorn shirts. Destroyed his own tokens.', 'vitalik');

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
