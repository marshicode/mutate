import type { ReactNode } from 'react';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type Strain = 'CANINE' | 'FROG' | 'FELINE' | 'PRIMATE' | 'HUMANOID' | 'SLOTH' | 'ABSTRACT';

export interface CardDef {
  id: string;
  name: string;
  epithet: string;
  rarity: Rarity;
  strain: Strain;
  potency: number;
  stability: number;
  flavor: string;
  artKey: string;
}

/*
  ROSTER — ranked by popularity (market cap + community + cultural impact)
  ======================================================================
  MYTHIC
    SATOSHI   — the founder who vanished; the original myth
    VITALIK   — Ethereum's founder; the living legend

  LEGENDARY
    DOGE      — the original meme coin; global household name
    SHIB      — the "DOGE killer"; millions of holders
    PEPE      — the most viral meme coin launch in history

  EPIC
    TRUMP     — presidential meme coin; $40B+ peak
    WIF       — Solana's #1; the pink hat
    FLOKI     — Elon's dog; viking branding empire
    BONK      — Solana's OG; the bat
    BRETT     — Base chain mascot; Matt Furie universe

  RARE
    POPCAT    — Solana's cat; one photo, infinite memes
    MOG       — "mogging" culture; fierce holder loyalty
    WOJAK     — trading's spirit animal
    TURBO     — first AI-created meme coin
    NEIRO     — the new DOGE
    PONKE     — Solana's gambling monkey

  COMMON
    TROLL     — the ancient trollface
    ANDY      — Matt Furie's blue son
    SLERF     — the accidental $10M burn
    MICHI     — Solana's cute cat
*/

export const CARDS: CardDef[] = [
  /* ---------- COMMON ---------- */
  { id:'troll',  name:'TROLL',  epithet:'"the face that started it all"',  rarity:'common', strain:'HUMANOID', potency:12, stability:48, flavor:'Ancient meme energy. Still trolling after all these years.', artKey:'troll' },
  { id:'andy',   name:'ANDY',   epithet:'"blue and unbothered"',           rarity:'common', strain:'HUMANOID', potency:14, stability:42, flavor:'Matt Furie\'s forgotten son. Lives in PEPE\'s shadow.', artKey:'andy' },
  { id:'slerf',  name:'SLERF',  epithet:'"the accidental saint"',          rarity:'common', strain:'SLOTH',    potency:11, stability:35, flavor:'Burned $10M by mistake. Became a legend for 48 hours.', artKey:'slerf' },
  { id:'michi',  name:'MICHI',  epithet:'"small cat, loud community"',     rarity:'common', strain:'FELINE',   potency:16, stability:38, flavor:'Solana\'s cutest niche obsession.', artKey:'michi' },

  /* ---------- RARE ---------- */
  { id:'popcat', name:'POPCAT', epithet:'"the mouth that moved markets"',  rarity:'rare', strain:'FELINE',   potency:26, stability:62, flavor:'One photo. Two states. Infinite memes. Solana\'s cat.', artKey:'popcat' },
  { id:'mog',    name:'MOG',    epithet:'"mogging is a lifestyle"',        rarity:'rare', strain:'HUMANOID', potency:24, stability:58, flavor:'You either mog or get mogged. There is no third option.', artKey:'mog' },
  { id:'wojak',  name:'WOJAK',  epithet:'"the feels are forever"',         rarity:'rare', strain:'HUMANOID', potency:27, stability:45, flavor:'Every trader\'s spirit animal. He knows your portfolio.', artKey:'wojak' },
  { id:'turbo',  name:'TURBO',  epithet:'"born from GPT, raised by apes"', rarity:'rare', strain:'ABSTRACT', potency:25, stability:52, flavor:'The first AI-created meme coin. GPT-4 wrote the contract.', artKey:'turbo' },
  { id:'neiro',  name:'NEIRO',  epithet:'"the shiba that came after"',     rarity:'rare', strain:'CANINE',   potency:23, stability:60, flavor:'New DOGE. Same dog. Different era.', artKey:'neiro' },
  { id:'ponke',  name:'PONKE',  epithet:'"monkey see, monkey ape"',        rarity:'rare', strain:'PRIMATE',  potency:28, stability:40, flavor:'Solana\'s gambling monkey. Degenerate energy incarnate.', artKey:'ponke' },

  /* ---------- EPIC ---------- */
  { id:'trump',  name:'TRUMP',  epithet:'"make memes great again"',        rarity:'epic', strain:'HUMANOID', potency:40, stability:48, flavor:'Presidential meme coin. $40B in 48 hours. Politics as asset.', artKey:'trump' },
  { id:'wif',    name:'WIF',    epithet:'"the hat stays on"',              rarity:'epic', strain:'CANINE',   potency:38, stability:65, flavor:'Solana\'s #1. A pink hat. A dream. Nothing else needed.', artKey:'wif' },
  { id:'floki',  name:'FLOKI',  epithet:'"vikings of the blockchain"',     rarity:'epic', strain:'CANINE',   potency:36, stability:58, flavor:'Elon\'s actual dog. Built an empire of billboards.', artKey:'floki' },
  { id:'bonk',   name:'BONK',   epithet:'"bonk the bears"',                rarity:'epic', strain:'CANINE',   potency:35, stability:70, flavor:'Solana\'s OG meme. The bat is a weapon and a promise.', artKey:'bonk' },
  { id:'brett',  name:'BRETT',  epithet:'"base chain\'s chosen one"',      rarity:'epic', strain:'HUMANOID', potency:37, stability:55, flavor:'Matt Furie\'s blue frog-adjacent legend. Base mascot.', artKey:'brett' },

  /* ---------- LEGENDARY ---------- */
  { id:'doge',   name:'DOGE',   epithet:'"the one who started everything"',rarity:'legendary', strain:'CANINE', potency:58, stability:85, flavor:'The original meme coin. A Shiba Inu that became a global currency.', artKey:'doge' },
  { id:'shib',   name:'SHIB',   epithet:'"the empire builder"',            rarity:'legendary', strain:'CANINE', potency:56, stability:78, flavor:'The DOGE killer that built Shibarium. Millions of holders.', artKey:'shib' },
  { id:'pepe',   name:'PEPE',   epithet:'"feels good man"',                rarity:'legendary', strain:'FROG',   potency:54, stability:82, flavor:'The most viral meme coin launch in history. Pure internet culture.', artKey:'pepe' },

  /* ---------- MYTHIC ---------- */
  { id:'satoshi', name:'SATOSHI', epithet:'"the ghost in the chain"',      rarity:'mythic', strain:'ABSTRACT', potency:99, stability:99, flavor:'The original meme. The creator who vanished. Worth a million BTC.', artKey:'satoshi' },
  { id:'vitalik', name:'VITALIK', epithet:'"the boy who sold the world"',  rarity:'mythic', strain:'HUMANOID', potency:92, stability:95, flavor:'Built Ethereum at 19. Wears unicorn shirts. Destroyed his own tokens.', artKey:'vitalik' },
];

export const byId = Object.fromEntries(CARDS.map(c => [c.id, c])) as Record<string, CardDef>;

export function cardArtJSX(key: string): ReactNode {
  switch (key) {
    case 'troll': return <Troll />;
    case 'andy': return <Andy />;
    case 'slerf': return <Slerf />;
    case 'michi': return <Michi />;
    case 'popcat': return <Popcat />;
    case 'mog': return <Mog />;
    case 'wojak': return <Wojak />;
    case 'turbo': return <Turbo />;
    case 'neiro': return <Neiro />;
    case 'ponke': return <Ponke />;
    case 'trump': return <Trump />;
    case 'wif': return <Wif />;
    case 'floki': return <Floki />;
    case 'bonk': return <Bonk />;
    case 'brett': return <Brett />;
    case 'doge': return <Doge />;
    case 'shib': return <Shib />;
    case 'pepe': return <Pepe />;
    case 'satoshi': return <Satoshi />;
    case 'vitalik': return <Vitalik />;
    default: return null;
  }
}

/* ---------- shared art bits ---------- */
const INK = 'currentColor';

function Aura({ id, c }: { id: string; c: string }) {
  return (
    <defs>
      <radialGradient id={id} cx="50%" cy="46%" r="62%">
        <stop offset="0%" stopColor={c} stopOpacity="0.38" />
        <stop offset="100%" stopColor={c} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

function Eyes({ lx = 138, rx = 182, y = 100, r = 9, pupil = 4 }: { lx?: number; rx?: number; y?: number; r?: number; pupil?: number }) {
  return (
    <>
      <circle cx={lx} cy={y} r={r} fill={INK} opacity={0.14} />
      <circle cx={lx} cy={y} r={r} fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      <circle cx={lx} cy={y} r={pupil} fill={INK} opacity={0.9} />
      <circle cx={rx} cy={y} r={r} fill={INK} opacity={0.14} />
      <circle cx={rx} cy={y} r={r} fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      <circle cx={rx} cy={y} r={pupil} fill={INK} opacity={0.9} />
    </>
  );
}

/* ---------- COMMON ---------- */

function Troll() {
  const g = 'g-troll';
  return (
    <>
      <Aura id={g} c="#9b7" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* head */}
      <ellipse cx={160} cy={112} rx={54} ry={56} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={112} rx={54} ry={56} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* messy hair */}
      <path d="M 122 70 Q 118 44 132 54 Q 136 32 148 48 Q 156 28 166 48 Q 176 34 180 52 Q 196 42 194 72" fill={INK} opacity={0.45} />
      <Eyes y={102} r={10} pupil={4} />
      {/* iconic grin */}
      <path d="M 120 128 Q 160 168 200 128" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      <path d="M 128 132 Q 160 158 192 132" fill="none" stroke={INK} strokeWidth={2} opacity={0.6} />
      {/* teeth */}
      <path d="M 136 137 L 136 146 M 148 143 L 148 152 M 160 145 L 160 154 M 172 143 L 172 152 M 184 137 L 184 146" stroke={INK} strokeWidth={2} opacity={0.55} />
    </>
  );
}

function Andy() {
  const g = 'g-andy';
  return (
    <>
      <Aura id={g} c="#68c" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      <ellipse cx={160} cy={108} rx={50} ry={52} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={108} rx={50} ry={52} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      <Eyes y={98} r={11} pupil={5} />
      {/* innocent smile */}
      <path d="M 134 128 Q 160 148 186 128" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* body */}
      <path d="M 116 156 Q 160 196 204 156" fill={INK} opacity={0.10} />
      <path d="M 116 156 Q 160 196 204 156" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.6} />
    </>
  );
}

function Slerf() {
  const g = 'g-slerf';
  return (
    <>
      <Aura id={g} c="#a86" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      <ellipse cx={160} cy={112} rx={50} ry={46} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={112} rx={50} ry={46} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* eye patches */}
      <ellipse cx={140} cy={104} rx={16} ry={13} fill={INK} opacity={0.18} />
      <ellipse cx={180} cy={104} rx={16} ry={13} fill={INK} opacity={0.18} />
      {/* sleepy eyes */}
      <path d="M 130 104 Q 140 110 150 104" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      <path d="M 170 104 Q 180 110 190 104" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* smile */}
      <path d="M 146 130 Q 160 138 174 130" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.7} />
      {/* branch + claws */}
      <line x1={92} y1={176} x2={228} y2={176} stroke={INK} strokeWidth={4} opacity={0.45} />
      <path d="M 128 150 Q 124 168 130 176 M 192 150 Q 196 168 190 176" fill="none" stroke={INK} strokeWidth={3} opacity={0.65} />
    </>
  );
}

function Michi() {
  const g = 'g-michi';
  return (
    <>
      <Aura id={g} c="#e8a" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* ears */}
      <path d="M 122 96 L 112 58 L 148 82 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 198 96 L 208 58 L 172 82 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={112} rx={48} ry={44} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={112} rx={48} ry={44} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      <Eyes y={106} r={10} pupil={5} />
      {/* nose + mouth */}
      <path d="M 154 122 L 160 128 L 166 122 Z" fill={INK} opacity={0.8} />
      <path d="M 150 132 Q 160 138 170 132" fill="none" stroke={INK} strokeWidth={2.2} opacity={0.65} />
      {/* whiskers */}
      <path d="M 112 116 L 130 120 M 112 128 L 130 126 M 208 116 L 190 120 M 208 128 L 190 126" stroke={INK} strokeWidth={2} opacity={0.45} />
    </>
  );
}

/* ---------- RARE ---------- */

function Popcat() {
  const g = 'g-popcat';
  return (
    <>
      <Aura id={g} c="#ea8" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      <path d="M 124 92 L 114 54 L 150 78 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 196 92 L 206 54 L 170 78 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <ellipse cx={160} cy={106} rx={48} ry={42} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={106} rx={48} ry={42} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* wide eyes */}
      <Eyes y={96} r={11} pupil={5} />
      {/* the POP mouth */}
      <ellipse cx={160} cy={136} rx={22} ry={17} fill="#07080a" opacity={0.55} />
      <ellipse cx={160} cy={136} rx={22} ry={17} fill="none" stroke={INK} strokeWidth={3} opacity={0.9} />
      {/* whiskers */}
      <path d="M 108 116 L 130 120 M 108 128 L 130 126 M 212 116 L 190 120 M 212 128 L 190 126" stroke={INK} strokeWidth={2} opacity={0.45} />
    </>
  );
}

function Mog() {
  const g = 'g-mog';
  return (
    <>
      <Aura id={g} c="#8ec" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* strong jaw */}
      <path d="M 118 96 Q 120 156 160 164 Q 200 156 202 96 Q 160 76 118 96 Z" fill={INK} opacity={0.10} />
      <path d="M 118 96 Q 120 156 160 164 Q 200 156 202 96 Q 160 76 118 96 Z" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* thick brows */}
      <path d="M 128 88 L 152 82 M 168 82 L 192 88" stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={0.85} />
      {/* narrow eyes */}
      <path d="M 132 100 Q 142 94 152 100 M 168 100 Q 178 94 188 100" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* smirk */}
      <path d="M 136 132 Q 160 146 184 126" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      {/* hair */}
      <path d="M 122 88 Q 160 62 198 88" fill={INK} opacity={0.28} />
    </>
  );
}

function Wojak() {
  const g = 'g-wojak';
  return (
    <>
      <Aura id={g} c="#c98" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* bald head */}
      <ellipse cx={160} cy={106} rx={46} ry={52} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={106} rx={46} ry={52} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* hollow eyes */}
      <ellipse cx={142} cy={100} rx={12} ry={7} fill="#07080a" opacity={0.5} />
      <ellipse cx={178} cy={100} rx={12} ry={7} fill="#07080a" opacity={0.5} />
      <ellipse cx={142} cy={100} rx={12} ry={7} fill="none" stroke={INK} strokeWidth={2.6} opacity={0.85} />
      <ellipse cx={178} cy={100} rx={12} ry={7} fill="none" stroke={INK} strokeWidth={2.6} opacity={0.85} />
      {/* sad mouth */}
      <path d="M 142 134 Q 160 124 178 134" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* stubble */}
      <path d="M 132 142 L 132 150 M 142 146 L 142 154 M 152 148 L 152 156 M 160 149 L 160 157 M 168 148 L 168 156 M 178 146 L 178 154 M 188 142 L 188 150" stroke={INK} strokeWidth={2} opacity={0.35} />
    </>
  );
}

function Turbo() {
  const g = 'g-turbo';
  return (
    <>
      <Aura id={g} c="#8ce" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* frog head */}
      <ellipse cx={160} cy={116} rx={52} ry={44} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={116} rx={52} ry={44} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* eye domes */}
      <circle cx={140} cy={88} r={17} fill={INK} opacity={0.14} stroke={INK} strokeWidth={3} />
      <circle cx={180} cy={88} r={17} fill={INK} opacity={0.14} stroke={INK} strokeWidth={3} />
      <circle cx={140} cy={88} r={6} fill={INK} opacity={0.9} />
      <circle cx={180} cy={88} r={6} fill={INK} opacity={0.9} />
      {/* racing stripes */}
      <path d="M 160 72 L 160 156" stroke={INK} strokeWidth={6} opacity={0.35} />
      <path d="M 146 74 L 146 154 M 174 74 L 174 154" stroke={INK} strokeWidth={2.5} opacity={0.22} />
      {/* grin */}
      <path d="M 136 130 Q 160 146 184 130" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* speed lines */}
      <path d="M 96 140 L 118 140 M 92 152 L 114 152 M 202 140 L 224 140 M 206 152 L 228 152" stroke={INK} strokeWidth={2.5} opacity={0.4} />
    </>
  );
}

function Neiro() {
  const g = 'g-neiro';
  return (
    <>
      <Aura id={g} c="#a8c" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* shiba ears */}
      <path d="M 122 90 L 112 50 L 150 76 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 198 90 L 208 50 L 170 76 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={110} rx={48} ry={44} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={110} rx={48} ry={44} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      <Eyes y={102} r={9} pupil={4} />
      {/* snout + smile */}
      <ellipse cx={160} cy={128} rx={18} ry={12} fill={INK} opacity={0.12} />
      <path d="M 146 124 Q 160 138 174 124" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.75} />
      <circle cx={160} cy={120} r={5} fill={INK} opacity={0.85} />
    </>
  );
}

function Ponke() {
  const g = 'g-ponke';
  return (
    <>
      <Aura id={g} c="#ca6" />
      <circle cx={160} cy={118} r={96} fill={`url(#${g})`} />
      {/* ears */}
      <circle cx={114} cy={110} r={16} fill={INK} opacity={0.14} stroke={INK} strokeWidth={3} />
      <circle cx={206} cy={110} r={16} fill={INK} opacity={0.14} stroke={INK} strokeWidth={3} />
      {/* head */}
      <ellipse cx={160} cy={108} rx={48} ry={46} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={108} rx={48} ry={46} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      <Eyes y={96} r={13} pupil={5} />
      {/* muzzle */}
      <ellipse cx={160} cy={132} rx={24} ry={18} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={132} rx={24} ry={18} fill="none" stroke={INK} strokeWidth={2.6} opacity={0.7} />
      <path d="M 146 132 Q 160 140 174 132" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.75} />
      <ellipse cx={152} cy={124} rx={3} ry={4} fill={INK} opacity={0.6} />
      <ellipse cx={168} cy={124} rx={3} ry={4} fill={INK} opacity={0.6} />
    </>
  );
}

/* ---------- EPIC ---------- */

function Trump() {
  const g = 'g-trump';
  return (
    <>
      <Aura id={g} c="#ec6" />
      <circle cx={160} cy={118} r={98} fill={`url(#${g})`} />
      {/* suit shoulders */}
      <path d="M 88 196 Q 118 150 160 148 Q 202 150 232 196 Z" fill={INK} opacity={0.14} />
      <path d="M 88 196 Q 118 150 160 148 Q 202 150 232 196" fill="none" stroke={INK} strokeWidth={3} opacity={0.7} />
      {/* tie */}
      <path d="M 152 154 L 168 154 L 164 172 L 160 184 L 156 172 Z" fill={INK} opacity={0.6} />
      {/* face */}
      <path d="M 122 106 Q 118 72 138 60 Q 160 50 182 60 Q 202 72 198 106 Q 196 136 178 144 Q 160 150 142 144 Q 124 136 122 106 Z" fill={INK} opacity={0.10} />
      {/* hair — the swoop */}
      <path d="M 118 100 Q 112 62 142 50 Q 160 42 180 50 Q 210 62 202 100 Q 196 84 186 78 Q 172 88 160 82 Q 146 90 132 82 Q 122 88 118 100 Z" fill={INK} opacity={0.55} />
      {/* eyes */}
      <path d="M 134 106 Q 144 100 154 106 M 166 106 Q 176 100 186 106" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* mouth */}
      <path d="M 144 130 Q 160 138 176 130" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.7} />
      {/* collar */}
      <path d="M 138 148 L 152 164 M 182 148 L 168 164" stroke={INK} strokeWidth={2.6} opacity={0.6} />
    </>
  );
}

function Wif() {
  const g = 'g-wif';
  return (
    <>
      <Aura id={g} c="#e8a" />
      <circle cx={160} cy={118} r={98} fill={`url(#${g})`} />
      {/* ears */}
      <path d="M 124 96 L 112 58 L 150 82 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 196 96 L 208 58 L 170 82 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={118} rx={46} ry={40} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={118} rx={46} ry={40} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* THE HAT */}
      <path d="M 110 88 Q 160 66 210 88 L 210 76 Q 160 52 110 76 Z" fill={INK} opacity={0.55} />
      <ellipse cx={160} cy={90} rx={50} ry={12} fill={INK} opacity={0.35} />
      <ellipse cx={160} cy={90} rx={50} ry={12} fill="none" stroke={INK} strokeWidth={3} opacity={0.9} />
      <path d="M 120 74 Q 160 58 200 74" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.6} />
      {/* eyes */}
      <Eyes y={118} r={8} pupil={4} />
      {/* snout */}
      <ellipse cx={160} cy={138} rx={16} ry={11} fill={INK} opacity={0.14} />
      <path d="M 152 136 Q 160 142 168 136" fill="none" stroke={INK} strokeWidth={2.2} opacity={0.6} />
    </>
  );
}

function Floki() {
  const g = 'g-floki';
  return (
    <>
      <Aura id={g} c="#8ac" />
      <circle cx={160} cy={118} r={98} fill={`url(#${g})`} />
      {/* viking horns */}
      <path d="M 122 76 Q 96 58 92 34 Q 116 40 132 64" fill={INK} opacity={0.2} stroke={INK} strokeWidth={3} />
      <path d="M 198 76 Q 224 58 228 34 Q 204 40 188 64" fill={INK} opacity={0.2} stroke={INK} strokeWidth={3} />
      {/* head */}
      <ellipse cx={160} cy={116} rx={46} ry={42} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={116} rx={46} ry={42} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* helmet band */}
      <path d="M 116 96 Q 160 74 204 96 L 204 86 Q 160 64 116 86 Z" fill={INK} opacity={0.55} />
      <path d="M 160 78 L 160 64" stroke={INK} strokeWidth={3} opacity={0.7} />
      {/* eyes */}
      <path d="M 132 112 Q 142 106 152 112 M 168 112 Q 178 106 188 112" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* brave smile */}
      <path d="M 144 136 Q 160 146 176 136" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.7} />
      {/* snout */}
      <ellipse cx={160} cy={130} rx={14} ry={9} fill={INK} opacity={0.12} />
    </>
  );
}

function Bonk() {
  const g = 'g-bonk';
  return (
    <>
      <Aura id={g} c="#c8e" />
      <circle cx={160} cy={118} r={98} fill={`url(#${g})`} />
      {/* the bat */}
      <path d="M 78 186 L 196 56 L 212 72 L 94 202 Z" fill={INK} opacity={0.30} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 78 186 L 62 202" stroke={INK} strokeWidth={6} opacity={0.55} strokeLinecap="round" />
      {/* ears */}
      <path d="M 126 92 L 116 54 L 152 80 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 194 92 L 204 54 L 168 80 Z" fill={INK} opacity={0.16} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={112} rx={44} ry={40} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={112} rx={44} ry={40} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      {/* fierce eyes */}
      <path d="M 132 102 Q 142 96 152 104 M 168 104 Q 178 96 188 102" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      <circle cx={144} cy={106} r={3.5} fill={INK} opacity={0.9} />
      <circle cx={176} cy={106} r={3.5} fill={INK} opacity={0.9} />
      {/* snarl */}
      <path d="M 142 132 Q 160 122 178 132" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      <path d="M 150 130 L 150 136 M 160 128 L 160 134 M 170 130 L 170 136" stroke={INK} strokeWidth={2} opacity={0.6} />
    </>
  );
}

function Brett() {
  const g = 'g-brett';
  return (
    <>
      <Aura id={g} c="#6ac" />
      <circle cx={160} cy={118} r={98} fill={`url(#${g})`} />
      {/* head */}
      <ellipse cx={160} cy={112} rx={50} ry={50} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={112} rx={50} ry={50} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* messy hair */}
      <path d="M 118 78 Q 130 62 142 72 Q 152 58 164 70 Q 176 58 188 72 Q 198 64 204 82" fill="none" stroke={INK} strokeWidth={3} opacity={0.7} />
      {/* half-lidded eyes */}
      <path d="M 130 106 Q 142 112 154 106 M 166 106 Q 178 112 190 106" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      <line x1={132} y1={106} x2={152} y2={106} stroke={INK} strokeWidth={3} opacity={0.85} />
      <line x1={168} y1={106} x2={188} y2={106} stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* chill smile */}
      <path d="M 138 132 Q 160 146 182 132" fill="none" stroke={INK} strokeWidth={3} opacity={0.85} />
      {/* arms behind head */}
      <path d="M 104 132 Q 112 96 132 86 M 216 132 Q 208 96 188 86" fill="none" stroke={INK} strokeWidth={3} opacity={0.45} />
    </>
  );
}

/* ---------- LEGENDARY ---------- */

function Doge() {
  const g = 'g-doge';
  return (
    <>
      <Aura id={g} c="#ec8" />
      <circle cx={160} cy={118} r={100} fill={`url(#${g})`} />
      {/* ears */}
      <path d="M 120 92 L 106 46 L 150 78 Z" fill={INK} opacity={0.20} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      <path d="M 200 92 L 214 46 L 170 78 Z" fill={INK} opacity={0.20} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={110} rx={50} ry={46} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={110} rx={50} ry={46} fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      {/* the knowing eyes */}
      <Eyes y={102} r={10} pupil={4} />
      {/* iconic smirk */}
      <path d="M 136 128 Q 160 146 184 126" fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      <path d="M 142 132 Q 160 142 178 130" fill="none" stroke={INK} strokeWidth={1.8} opacity={0.5} />
      {/* snout */}
      <ellipse cx={160} cy={126} rx={18} ry={12} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={119} rx={6} ry={4} fill={INK} opacity={0.85} />
      {/* halo */}
      <ellipse cx={160} cy={48} rx={30} ry={8} fill="none" stroke={INK} strokeWidth={2.4} opacity={0.4} />
    </>
  );
}

function Shib() {
  const g = 'g-shib';
  return (
    <>
      <Aura id={g} c="#a6e" />
      <circle cx={160} cy={118} r={100} fill={`url(#${g})`} />
      {/* sharper ears */}
      <path d="M 118 88 L 104 38 L 150 76 Z" fill={INK} opacity={0.22} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      <path d="M 202 88 L 216 38 L 170 76 Z" fill={INK} opacity={0.22} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      {/* head */}
      <ellipse cx={160} cy={110} rx={48} ry={44} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={110} rx={48} ry={44} fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      {/* intense eyes */}
      <path d="M 132 100 Q 142 94 152 102 M 168 102 Q 178 94 188 100" fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      <circle cx={143} cy={104} r={4} fill={INK} opacity={0.9} />
      <circle cx={177} cy={104} r={4} fill={INK} opacity={0.9} />
      {/* teeth */}
      <path d="M 136 130 Q 160 148 184 130" fill="none" stroke={INK} strokeWidth={3.2} opacity={0.9} />
      <path d="M 146 138 L 146 146 M 160 142 L 160 150 M 174 138 L 174 146" stroke={INK} strokeWidth={2.4} opacity={0.7} />
      {/* bone */}
      <path d="M 128 56 Q 160 44 192 56" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.45} />
      <circle cx={124} cy={56} r={5} fill={INK} opacity={0.4} />
      <circle cx={196} cy={56} r={5} fill={INK} opacity={0.4} />
    </>
  );
}

function Pepe() {
  const g = 'g-pepe';
  return (
    <>
      <Aura id={g} c="#8e8" />
      <circle cx={160} cy={118} r={100} fill={`url(#${g})`} />
      {/* head */}
      <ellipse cx={160} cy={116} rx={52} ry={50} fill={INK} opacity={0.12} />
      <ellipse cx={160} cy={116} rx={52} ry={50} fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      {/* bulging eyes */}
      <circle cx={138} cy={88} r={18} fill={INK} opacity={0.16} stroke={INK} strokeWidth={3.2} />
      <circle cx={182} cy={88} r={18} fill={INK} opacity={0.16} stroke={INK} strokeWidth={3.2} />
      <circle cx={138} cy={88} r={6} fill={INK} opacity={0.9} />
      <circle cx={182} cy={88} r={6} fill={INK} opacity={0.9} />
      {/* the smile — the whole point */}
      <path d="M 118 124 Q 160 172 202 124" fill="none" stroke={INK} strokeWidth={3.6} opacity={0.95} />
      <path d="M 122 124 Q 160 162 198 124" fill="none" stroke={INK} strokeWidth={1.8} opacity={0.5} />
      {/* lips line */}
      <line x1={118} y1={124} x2={202} y2={124} stroke={INK} strokeWidth={2.4} opacity={0.6} />
      {/* nostrils */}
      <ellipse cx={152} cy={112} rx={4} ry={3} fill={INK} opacity={0.6} />
      <ellipse cx={168} cy={112} rx={4} ry={3} fill={INK} opacity={0.6} />
      {/* blush */}
      <ellipse cx={120} cy={118} rx={9} ry={5} fill={INK} opacity={0.18} />
      <ellipse cx={200} cy={118} rx={9} ry={5} fill={INK} opacity={0.18} />
    </>
  );
}

/* ---------- MYTHIC ---------- */

function Satoshi() {
  const g = 'g-satoshi';
  return (
    <>
      <Aura id={g} c="#fc6" />
      <circle cx={160} cy={118} r={104} fill={`url(#${g})`} />
      {/* ghost rings */}
      <circle cx={160} cy={118} r={82} fill="none" stroke={INK} strokeWidth={2} opacity={0.25} />
      <circle cx={160} cy={118} r={70} fill="none" stroke={INK} strokeWidth={1.5} opacity={0.18} />
      {/* bitcoin medallion */}
      <circle cx={160} cy={118} r={50} fill={INK} opacity={0.10} />
      <circle cx={160} cy={118} r={50} fill="none" stroke={INK} strokeWidth={3.4} opacity={0.9} />
      <circle cx={160} cy={118} r={42} fill="none" stroke={INK} strokeWidth={1.5} opacity={0.35} />
      {/* B */}
      <path d="M 148 90 L 148 146 L 168 146 Q 182 146 182 132 Q 182 122 170 119 Q 180 116 180 106 Q 180 94 166 94 L 148 90 Z" fill="none" stroke={INK} strokeWidth={4} opacity={0.95} strokeLinejoin="round" />
      <path d="M 158 94 L 158 86 M 168 94 L 168 86 M 158 146 L 158 154 M 168 146 L 168 154" stroke={INK} strokeWidth={3} opacity={0.8} />
      <path d="M 148 118 L 166 118" stroke={INK} strokeWidth={3} opacity={0.8} />
      {/* particles */}
      {[0,1,2,3,4,5,6,7].map(i => {
        const a = (i * 45) * Math.PI / 180;
        return <circle key={i} cx={160 + Math.cos(a) * 88} cy={118 + Math.sin(a) * 88} r={2.5} fill={INK} opacity={0.4} />;
      })}
    </>
  );
}

function Vitalik() {
  const g = 'g-vitalik';
  return (
    <>
      <Aura id={g} c="#8cf" />
      <circle cx={160} cy={118} r={104} fill={`url(#${g})`} />
      {/* head */}
      <ellipse cx={160} cy={106} rx={40} ry={50} fill={INK} opacity={0.10} />
      <ellipse cx={160} cy={106} rx={40} ry={50} fill="none" stroke={INK} strokeWidth={3.2} opacity={0.85} />
      {/* wispy hair */}
      <path d="M 120 82 Q 132 54 160 58 Q 190 52 200 82" fill={INK} opacity={0.30} />
      <path d="M 126 70 Q 146 50 168 58" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.5} />
      {/* glasses */}
      <rect x={128} y={92} width={28} height={22} rx={7} fill={INK} opacity={0.12} />
      <rect x={164} y={92} width={28} height={22} rx={7} fill={INK} opacity={0.12} />
      <rect x={128} y={92} width={28} height={22} rx={7} fill="none" stroke={INK} strokeWidth={3} opacity={0.9} />
      <rect x={164} y={92} width={28} height={22} rx={7} fill="none" stroke={INK} strokeWidth={3} opacity={0.9} />
      <line x1={156} y1={103} x2={164} y2={103} stroke={INK} strokeWidth={2.6} opacity={0.8} />
      <circle cx={142} cy={103} r={3} fill={INK} opacity={0.7} />
      <circle cx={178} cy={103} r={3} fill={INK} opacity={0.7} />
      {/* smile */}
      <path d="M 148 128 Q 160 134 172 128" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.7} />
      {/* unicorn shirt */}
      <path d="M 112 168 Q 136 152 160 156 Q 184 152 208 168" fill={INK} opacity={0.14} />
      <path d="M 112 168 Q 136 152 160 156 Q 184 152 208 168" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.6} />
      <path d="M 156 156 L 160 140 L 164 156" fill="none" stroke={INK} strokeWidth={2.6} opacity={0.55} strokeLinejoin="round" />
      {/* ethereum diamond */}
      <path d="M 160 176 L 146 186 L 160 196 L 174 186 Z" fill="none" stroke={INK} strokeWidth={2} opacity={0.4} />
    </>
  );
}
