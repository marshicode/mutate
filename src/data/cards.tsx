import type { ReactNode } from 'react';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type Strain = 'CANINE' | 'FROG' | 'FELINE' | 'PRIMATE' | 'HUMANOID' | 'MARSUPIAL' | 'SLOTH' | 'ABSTRACT';

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
  RANKING BY POPULARITY (market cap + community + cultural impact)
  ================================================================
  LEGENDARY — The absolute titans of meme coin culture
    1. DOGECOIN    — The original. The king. Elon's forever favorite. $50B+ peak.
    2. SHIBA INU   — The "DOGE killer" that built an empire. Shibarium, BONE, LEASH.
    3. PEPE        — The most viral meme coin launch in history. Pure internet culture.

  EPIC — Massive communities, chain-defining mascots
    4. TRUMP       — Presidential meme coin. $40B+ peak in 48 hours. Political iconography.
    5. DOGWIFHAT   — Solana's #1. The pink hat is instantly recognizable everywhere.
    6. FLOKI       — Viking dog. Elon's actual dog. Insane marketing machine.
    7. BONK        — Solana's OG. The "bonk" bat is crypto culture canon.
    8. BRETT       — Base chain's mascot. Matt Furie character. Very strong community.

  RARE — Solid communities, known in every crypto Discord
    9.  POPCAT     — The cat that broke Solana. Iconic open-mouth photo.
    10. MOG        — The "mogging" meme. Unusually strong holder loyalty.
    11. WOJAK      — The feels guy. Trading culture wouldn't exist without him.
    12. TURBO      — AI-created meme coin. First of its kind. Unique origin myth.
    13. NEIRO      — The "new DOGE" — Shiba Inu dog, community revival.
    14. PONKE      — Solana's gambling monkey. Wojak-level meme energy.

  COMMON — Known but smaller, niche appeal
    15. TROLL      — Trollface. Ancient meme. Still recognizable.
    16. ANDY       — Matt Furie's blue character. PEPE universe.
    17. SLERF      — Sloth mascot. Accidental $10M burn made it legendary briefly.
    18. HPOS10I    — HarryPotterObamaSonic10Inu. Absurdity as art.
    19. SPX6900    — S&P 6900. Financial meme culture distilled.
    20. MICHI      — Solana's cute cat. Niche but beloved.
*/

export const CARDS: CardDef[] = [
  /* ---------- COMMON ---------- */
  { id:'troll',      name:'TROLL',      epithet:'"the face that started it all"',     rarity:'common',    strain:'HUMANOID',  potency:12, stability:48, flavor:'Ancient meme energy. Still trolling after all these years.', artKey:'troll' },
  { id:'andy',       name:'ANDY',       epithet:'"blue and unbothered"',              rarity:'common',    strain:'HUMANOID',  potency:14, stability:42, flavor:'Matt Furie\'s forgotten son. Lives in PEPE\'s shadow.', artKey:'andy' },
  { id:'slerf',      name:'SLERF',      epithet:'"the accidental saint"',             rarity:'common',    strain:'SLOTH',     potency:11, stability:35, flavor:'Burned $10M by mistake. Became a legend for 48 hours.', artKey:'slerf' },
  { id:'hpos10i',    name:'HPOS10I',    epithet:'"absurdity as asset class"',         rarity:'common',    strain:'ABSTRACT',  potency:15, stability:28, flavor:'Harry Potter. Obama. Sonic. 10. Inu. Yes, all of them.', artKey:'hpos10i' },
  { id:'spx6900',    name:'SPX6900',    epithet:'"the index that never was"',         rarity:'common',    strain:'ABSTRACT',  potency:13, stability:55, flavor:'Financial meme culture distilled into a single number.', artKey:'spx6900' },
  { id:'michi',      name:'MICHI',      epithet:'"small cat, loud community"',        rarity:'common',    strain:'FELINE',    potency:16, stability:38, flavor:'Solana\'s cutest niche obsession.', artKey:'michi' },

  /* ---------- RARE ---------- */
  { id:'popcat',     name:'POPCAT',     epithet:'"the mouth that moved markets"',     rarity:'rare',      strain:'FELINE',    potency:26, stability:62, flavor:'One photo. Two states. Infinite memes. Solana\'s cat.', artKey:'popcat' },
  { id:'mog',        name:'MOG',        epithet:'"mogging is a lifestyle"',           rarity:'rare',      strain:'HUMANOID',  potency:24, stability:58, flavor:'You either mog or get mogged. There is no third option.', artKey:'mog' },
  { id:'wojak',      name:'WOJAK',      epithet:'"the feels are forever"',            rarity:'rare',      strain:'HUMANOID',  potency:27, stability:45, flavor:'Every trader\'s spirit animal. He knows your portfolio.', artKey:'wojak' },
  { id:'turbo',      name:'TURBO',      epithet:'"born from GPT, raised by apes"',    rarity:'rare',      strain:'ABSTRACT',  potency:25, stability:52, flavor:'The first AI-created meme coin. GPT-4 wrote the contract.', artKey:'turbo' },
  { id:'neiro',      name:'NEIRO',      epithet:'"the shiba that came after"',        rarity:'rare',      strain:'CANINE',    potency:23, stability:60, flavor:'New DOGE. Same dog. Different era.', artKey:'neiro' },
  { id:'ponke',      name:'PONKE',      epithet:'"monkey see, monkey ape"',           rarity:'rare',      strain:'PRIMATE',   potency:28, stability:40, flavor:'Solana\'s gambling monkey. Degenerate energy incarnate.', artKey:'ponke' },

  /* ---------- EPIC ---------- */
  { id:'trump',      name:'TRUMP',      epithet:'"make memes great again"',           rarity:'epic',      strain:'HUMANOID',  potency:40, stability:48, flavor:'Presidential meme coin. $40B in 48 hours. Politics as asset.', artKey:'trump' },
  { id:'wif',        name:'WIF',        epithet:'"the hat stays on"',                 rarity:'epic',      strain:'CANINE',    potency:38, stability:65, flavor:'Solana\'s #1. A pink hat. A dream. Nothing else needed.', artKey:'wif' },
  { id:'floki',      name:'FLOKI',      epithet:'"vikings of the blockchain"',        rarity:'epic',      strain:'CANINE',    potency:36, stability:58, flavor:'Elon\'s actual dog. Built an empire of billboards.', artKey:'floki' },
  { id:'bonk',       name:'BONK',       epithet:'"bonk the bears"',                   rarity:'epic',      strain:'CANINE',    potency:35, stability:70, flavor:'Solana\'s OG meme. The bat is a weapon and a promise.', artKey:'bonk' },
  { id:'brett',      name:'BRETT',      epithet:'"base chain\'s chosen one"',         rarity:'epic',      strain:'HUMANOID',  potency:37, stability:55, flavor:'Matt Furie\'s blue frog-adjacent legend. Base mascot.', artKey:'brett' },

  /* ---------- LEGENDARY ---------- */
  { id:'doge',       name:'DOGE',       epithet:'"the one who started everything"',   rarity:'legendary', strain:'CANINE',    potency:58, stability:85, flavor:'The original meme coin. A Shiba Inu that became a global currency.', artKey:'doge' },
  { id:'shib',       name:'SHIB',       epithet:'"the empire builder"',               rarity:'legendary', strain:'CANINE',    potency:56, stability:78, flavor:'The DOGE killer that built Shibarium. Millions of holders.', artKey:'shib' },
  { id:'pepe',       name:'PEPE',       epithet:'"feels good man"',                   rarity:'legendary', strain:'FROG',      potency:54, stability:82, flavor:'The most viral meme coin launch in history. Pure internet culture.', artKey:'pepe' },

  /* ---------- MYTHIC ---------- */
  { id:'satoshi',    name:'SATOSHI',    epithet:'"the ghost in the chain"',           rarity:'mythic',    strain:'ABSTRACT',  potency:99, stability:99, flavor:'The original meme. The creator who vanished. Worth a million BTC.', artKey:'satoshi' },
  { id:'vitalik',    name:'VITALIK',    epithet:'"the boy who sold the world"',       rarity:'mythic',    strain:'HUMANOID',  potency:92, stability:95, flavor:'Built Ethereum at 19. Wears unicorn shirts. Destroyed his own tokens.', artKey:'vitalik' },
];

export const byId = Object.fromEntries(CARDS.map(c => [c.id, c])) as Record<string, CardDef>;

export function cardArtJSX(key: string): ReactNode {
  switch (key) {
    case 'troll': return <Troll />;
    case 'andy': return <Andy />;
    case 'slerf': return <Slerf />;
    case 'hpos10i': return <Hpos10i />;
    case 'spx6900': return <Spx6900 />;
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

/* ---------- Art helpers ---------- */
function Glow({ id, c }: { id: string; c: string }) {
  return (
    <defs>
      <radialGradient id={id} cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor={c} stopOpacity="0.45" />
        <stop offset="100%" stopColor={c} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/* ---------- COMMON — Tier 4 ---------- */

function Troll() {
  const g = 'g-troll';
  return (
    <>
      <Glow id={g} c="#8a6" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Trollface — iconic grin */}
      <ellipse cx={160} cy={108} rx={44} ry={48} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      <ellipse cx={160} cy={108} rx={36} ry={40} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Eyes */}
      <ellipse cx={144} cy={98} rx={10} ry={12} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <ellipse cx={176} cy={98} rx={10} ry={12} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <circle cx={144} cy={98} r={3} fill="currentColor" opacity={0.5} />
      <circle cx={176} cy={98} r={3} fill="currentColor" opacity={0.5} />
      {/* Grin */}
      <path d="M 128 120 Q 160 152 192 120" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <path d="M 135 125 Q 160 142 185 125" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Hair */}
      {[0,1,2,3,4].map(i=>{
        const x=140+i*10;
        return <path key={i} d={`M ${x} 62 Q ${x+4} 50 ${x+8} 58`} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.4} />;
      })}
    </>
  );
}

function Andy() {
  const g = 'g-andy';
  return (
    <>
      <Glow id={g} c="#68c" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Andy — blue humanoid, simplified */}
      <ellipse cx={160} cy={108} rx={38} ry={44} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Eyes — wide and innocent */}
      <circle cx={148} cy={100} r={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={172} cy={100} r={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={148} cy={100} r={3} fill="currentColor" opacity={0.5} />
      <circle cx={172} cy={100} r={3} fill="currentColor" opacity={0.5} />
      {/* Smile */}
      <path d="M 140 126 Q 160 142 180 126" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.4} />
      {/* Body hint */}
      <path d="M 128 150 Q 160 180 192 150" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
    </>
  );
}

function Slerf() {
  const g = 'g-slerf';
  return (
    <>
      <Glow id={g} c="#a86" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Sloth — round head, sleepy eyes */}
      <ellipse cx={160} cy={112} rx={40} ry={36} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Sleepy eyes */}
      <path d="M 138 106 Q 148 112 158 106" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <path d="M 162 106 Q 172 112 182 106" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Tiny smile */}
      <path d="M 152 126 Q 160 132 168 126" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Claws/hands hanging */}
      <path d="M 132 148 Q 128 168 132 178" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      <path d="M 188 148 Q 192 168 188 178" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      {/* Tree branch */}
      <line x1={90} y1={170} x2={230} y2={170} stroke="currentColor" strokeWidth={1.5} opacity={0.3} />
    </>
  );
}

function Hpos10i() {
  const g = 'g-hpos';
  return (
    <>
      <Glow id={g} c="#c6a" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Absurd collage — overlapping geometric shapes representing the mashup */}
      {/* Glasses (Obama) */}
      <ellipse cx={148} cy={98} rx={14} ry={8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <ellipse cx={172} cy={98} rx={14} ry={8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <line x1={162} y1={98} x2={158} y2={98} stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Lightning bolt (Sonic) */}
      <path d="M 120 140 L 132 128 L 126 128 L 138 116 L 128 116 L 142 100" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.5} />
      {/* Scar (Harry) */}
      <path d="M 150 82 L 156 92" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* 10 */}
      <text x={185} y={155} fill="currentColor" fontSize={28} fontFamily="monospace" opacity={0.35} textAnchor="middle">10</text>
      {/* Inu ears */}
      <polygon points="130,78 138,58 146,78" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      <polygon points="174,78 182,58 190,78" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
    </>
  );
}

function Spx6900() {
  const g = 'g-spx';
  return (
    <>
      <Glow id={g} c="#8af" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Stock chart going to the moon */}
      <polyline points="90,180 110,165 130,170 150,140 170,120 190,90 210,60" fill="none" stroke="currentColor" strokeWidth={2} opacity={0.55} />
      <polyline points="90,180 110,165 130,170 150,140 170,120 190,90 210,60" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.25} transform="translate(4,4)" />
      {/* 6900 */}
      <text x={160} y={200} fill="currentColor" fontSize={32} fontFamily="monospace" fontWeight="bold" opacity={0.3} textAnchor="middle">6900</text>
      {/* Rocket */}
      <polygon points="210,60 205,72 215,72" fill="currentColor" opacity={0.5} />
      <line x1={210} y1={72} x2={210} y2={82} stroke="currentColor" strokeWidth={2} opacity={0.4} />
      {/* Grid lines */}
      {[0,1,2,3,4].map(i=>{
        const y=80+i*24;
        return <line key={i} x1={90} y1={y} x2={220} y2={y} stroke="currentColor" strokeWidth={0.4} opacity={0.15} />;
      })}
    </>
  );
}

function Michi() {
  const g = 'g-michi';
  return (
    <>
      <Glow id={g} c="#e8a" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {/* Cute cat face */}
      <ellipse cx={160} cy={112} rx={36} ry={32} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Ears */}
      <polygon points="132,88 124,64 148,84" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <polygon points="188,88 196,64 172,84" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Big eyes */}
      <ellipse cx={148} cy={108} rx={10} ry={12} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <ellipse cx={172} cy={108} rx={10} ry={12} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={148} cy={108} r={4} fill="currentColor" opacity={0.55} />
      <circle cx={172} cy={108} r={4} fill="currentColor" opacity={0.55} />
      {/* Tiny nose and mouth */}
      <circle cx={160} cy={122} r={3} fill="currentColor" opacity={0.4} />
      <path d="M 152 128 Q 160 134 168 128" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      {/* Whiskers */}
      <line x1={120} y1={118} x2={132} y2={120} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <line x1={120} y1={126} x2={132} y2={124} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <line x1={200} y1={118} x2={188} y2={120} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <line x1={200} y1={126} x2={188} y2={124} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
    </>
  );
}

/* ---------- RARE — Tier 3 ---------- */

function Popcat() {
  const g = 'g-popcat';
  return (
    <>
      <Glow id={g} c="#ea8" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Popcat — cat with open mouth */}
      <ellipse cx={160} cy={104} rx={38} ry={34} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Ears */}
      <polygon points="132,78 124,56 148,78" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <polygon points={"188,78 196,56 172,78"} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Eyes — wide and alert */}
      <circle cx={146} cy={98} r={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={174} cy={98} r={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={146} cy={98} r={3} fill="currentColor" opacity={0.6} />
      <circle cx={174} cy={98} r={3} fill="currentColor" opacity={0.6} />
      {/* Open mouth — the POP */}
      <ellipse cx={160} cy={126} rx={18} ry={14} fill="currentColor" opacity={0.2} />
      <ellipse cx={160} cy={126} rx={18} ry={14} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Whiskers */}
      <line x1={118} y1={118} x2={136} y2={122} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <line x1={118} y1={128} x2={136} y2={126} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <line x1={202} y1={118} x2={184} y2={122} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <line x1={202} y1={128} x2={184} y2={126} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
    </>
  );
}

function Mog() {
  const g = 'g-mog';
  return (
    <>
      <Glow id={g} c="#8ec" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Mog — smug, confident face */}
      <ellipse cx={160} cy={108} rx={40} ry={42} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Smug eyes */}
      <path d="M 136 96 Q 146 88 156 96" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      <path d="M 164 96 Q 174 88 184 96" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Confident smirk */}
      <path d="M 140 128 Q 160 140 180 124" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      {/* Jawline */}
      <path d="M 128 132 Q 160 162 192 132" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Hair */}
      <path d="M 132 72 Q 160 58 188 72" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
    </>
  );
}

function Wojak() {
  const g = 'g-wojak';
  return (
    <>
      <Glow id={g} c="#c98" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Wojak — bald, sad, hollow eyes */}
      <ellipse cx={160} cy={106} rx={34} ry={40} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Bald head */}
      <ellipse cx={160} cy={72} rx={24} ry={10} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Hollow eyes */}
      <ellipse cx={148} cy={102} rx={10} ry={6} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.45} />
      <ellipse cx={172} cy={102} rx={10} ry={6} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.45} />
      {/* Sad mouth */}
      <path d="M 148 130 Q 160 122 172 130" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Stubble */}
      {[0,1,2,3,4,5].map(i=>{
        const x=138+i*8;
        return <line key={i} x1={x} y1={140} x2={x+2} y2={146} stroke="currentColor" strokeWidth={0.6} opacity={0.25} />;
      })}
    </>
  );
}

function Turbo() {
  const g = 'g-turbo';
  return (
    <>
      <Glow id={g} c="#8ce" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Turbo — toad/frog with a racing stripe */}
      <ellipse cx={160} cy={110} rx={38} ry={36} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Big eyes */}
      <circle cx={146} cy={96} r={12} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={174} cy={96} r={12} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={146} cy={96} r={4} fill="currentColor" opacity={0.55} />
      <circle cx={174} cy={96} r={4} fill="currentColor" opacity={0.55} />
      {/* Racing stripe down center */}
      <line x1={160} y1={76} x2={160} y2={146} stroke="currentColor" strokeWidth={2.5} opacity={0.45} />
      <line x1={160} y1={76} x2={160} y2={146} stroke="currentColor" strokeWidth={0.8} opacity={0.2} transform="translate(6,0)" />
      <line x1={160} y1={76} x2={160} y2={146} stroke="currentColor" strokeWidth={0.8} opacity={0.2} transform="translate(-6,0)" />
      {/* Smile */}
      <path d="M 144 124 Q 160 136 176 124" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.4} />
      {/* Speed lines */}
      <line x1={100} y1={140} x2={120} y2={140} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      <line x1={95} y1={150} x2={115} y2={150} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      <line x1={200} y1={140} x2={220} y2={140} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
    </>
  );
}

function Neiro() {
  const g = 'g-neiro';
  return (
    <>
      <Glow id={g} c="#a8c" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Neiro — Shiba Inu, friendly but different */}
      <ellipse cx={160} cy={108} rx={40} ry={36} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Ears — more pointed than DOGE */}
      <polygon points="128,80 118,52 148,78" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      <polygon points="192,80 202,52 172,78" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Gentle eyes */}
      <ellipse cx={146} cy={104} rx={10} ry={8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <ellipse cx={174} cy={104} rx={10} ry={8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={146} cy={104} r={3} fill="currentColor" opacity={0.5} />
      <circle cx={174} cy={104} r={3} fill="currentColor" opacity={0.5} />
      {/* Shiba smile */}
      <path d="M 140 126 Q 160 140 180 126" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Snout */}
      <ellipse cx={160} cy={120} rx={12} ry={8} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
    </>
  );
}

function Ponke() {
  const g = 'g-ponke';
  return (
    <>
      <Glow id={g} c="#ca6" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {/* Ponke — monkey with crazy eyes */}
      <ellipse cx={160} cy={106} rx={38} ry={40} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Crazy wide eyes */}
      <circle cx={146} cy={100} r={14} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={174} cy={100} r={14} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={146} cy={100} r={4} fill="currentColor" opacity={0.6} />
      <circle cx={174} cy={100} r={4} fill="currentColor" opacity={0.6} />
      {/* Monkey mouth/grin */}
      <ellipse cx={160} cy={128} rx={16} ry={12} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <path d="M 148 128 Q 160 134 172 128" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      {/* Ears */}
      <circle cx={124} cy={108} r={10} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      <circle cx={196} cy={108} r={10} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
    </>
  );
}

/* ---------- EPIC — Tier 2 ---------- */

function Trump() {
  const g = 'g-trump';
  return (
    <>
      <Glow id={g} c="#ec6" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      {/* Trump — iconic hair silhouette */}
      <path d="M 124 100 Q 120 70 140 60 Q 160 52 180 60 Q 200 70 196 100 Q 200 120 190 130 L 130 130 Q 120 120 124 100" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      {/* Hair detail — the swoop */}
      <path d="M 130 75 Q 150 65 170 72 Q 185 78 188 95" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <path d="M 138 68 Q 158 58 178 68" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      {/* Eyes — confident */}
      <path d="M 140 108 Q 148 104 156 108" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M 164 108 Q 172 104 180 108" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Tie */}
      <polygon points="156,148 164,148 160,172" fill="currentColor" opacity={0.35} />
      <polygon points="152,140 168,140 160,150" fill="currentColor" opacity={0.3} />
      {/* Suit shoulders */}
      <path d="M 108 160 Q 130 148 156 148" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.35} />
      <path d="M 212 160 Q 190 148 164 148" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.35} />
    </>
  );
}

function Wif() {
  const g = 'g-wif';
  return (
    <>
      <Glow id={g} c="#e8a" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      {/* WIF — dog with iconic pink hat */}
      <ellipse cx={160} cy={110} rx={38} ry={36} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* The Hat — the entire identity */}
      <ellipse cx={160} cy={78} rx={44} ry={14} fill="none" stroke="currentColor" strokeWidth={2} opacity={0.6} />
      <ellipse cx={160} cy={68} rx={36} ry={18} fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <path d="M 124 68 Q 160 58 196 68" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Ears poking out */}
      <polygon points="130,88 122,62 144,82" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <polygon points="190,88 198,62 176,82" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Friendly eyes */}
      <ellipse cx={148} cy={106} rx={9} ry={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <ellipse cx={172} cy={106} rx={9} ry={10} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx={148} cy={106} r={3} fill="currentColor" opacity={0.55} />
      <circle cx={172} cy={106} r={3} fill="currentColor" opacity={0.55} />
      {/* Snout */}
      <ellipse cx={160} cy={122} rx={14} ry={10} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
    </>
  );
}

function Floki() {
  const g = 'g-floki';
  return (
    <>
      <Glow id={g} c="#8ac" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      {/* Floki — Viking dog with helmet */}
      <ellipse cx={160} cy={110} rx={38} ry={36} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Viking helmet */}
      <path d="M 124 88 Q 160 68 196 88" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <line x1={132} y1={80} x2={132} y2={62} stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <line x1={188} y1={80} x2={188} y2={62} stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={132} cy={58} r={5} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <circle cx={188} cy={58} r={5} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Ears */}
      <polygon points="128,92 118,68 142,86" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <polygon points="192,92 202,68 178,86" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Determined eyes */}
      <path d="M 140 104 Q 148 100 156 104" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M 164 104 Q 172 100 180 104" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Brave smile */}
      <path d="M 146 126 Q 160 136 174 126" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
    </>
  );
}

function Bonk() {
  const g = 'g-bonk';
  return (
    <>
      <Glow id={g} c="#c8e" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      {/* Bonk — dog with baseball bat */}
      <ellipse cx={160} cy={108} rx={36} ry={34} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Ears */}
      <polygon points="132,82 124,58 148,78" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <polygon points="188,82 196,58 172,78" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {/* Fierce eyes */}
      <path d="M 138 100 Q 148 96 156 102" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M 164 102 Q 172 96 182 100" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* The Bat — crossing behind */}
      <line x1={110} y1={140} x2={210} y2={80} stroke="currentColor" strokeWidth={3} opacity={0.5} />
      <line x1={110} y1={140} x2={210} y2={80} stroke="currentColor" strokeWidth={1} opacity={0.25} transform="translate(2,2)" />
      {/* Bat handle */}
      <line x1={110} y1={140} x2={95} y2={155} stroke="currentColor" strokeWidth={2} opacity={0.45} />
      {/* Snarl */}
      <path d="M 146 126 Q 160 118 174 126" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
    </>
  );
}

function Brett() {
  const g = 'g-brett';
  return (
    <>
      <Glow id={g} c="#6ac" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      {/* Brett — relaxed frog-like humanoid */}
      <ellipse cx={160} cy={106} rx={38} ry={42} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Relaxed half-closed eyes */}
      <path d="M 138 100 Q 148 104 158 100" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M 162 100 Q 172 104 182 100" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Chill smile */}
      <path d="M 142 124 Q 160 134 178 124" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {/* Arms behind head — relaxed pose */}
      <path d="M 110 120 Q 120 90 138 82" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.35} />
      <path d="M 210 120 Q 200 90 182 82" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.35} />
      {/* Hair — messy */}
      <path d="M 130 68 Q 140 58 150 66 Q 160 56 170 66 Q 180 58 190 68" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
    </>
  );
}

/* ---------- LEGENDARY — Tier 1 ---------- */

function Doge() {
  const g = 'g-doge';
  return (
    <>
      <Glow id={g} c="#ec8" />
      <circle cx={160} cy={128} r={92} fill={`url(#${g})`} opacity={0.32} />
      {/* DOGE — the original Shiba */}
      <ellipse cx={160} cy={108} rx={42} ry={40} fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.6} />
      {/* Ears — Shiba triangle */}
      <polygon points="128,78 116,48 150,76" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <polygon points="192,78 204,48 170,76" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      {/* Warm knowing eyes */}
      <ellipse cx={146} cy={102} rx={11} ry={10} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <ellipse cx={174} cy={102} rx={11} ry={10} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <circle cx={146} cy={102} r={4} fill="currentColor" opacity={0.6} />
      <circle cx={174} cy={102} r={4} fill="currentColor" opacity={0.6} />
      {/* The iconic slight smirk */}
      <path d="M 142 126 Q 160 138 178 124" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      {/* Snout */}
      <ellipse cx={160} cy={120} rx={14} ry={10} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <circle cx={160} cy={116} r={4} fill="currentColor" opacity={0.35} />
      {/* Much wow halo */}
      <ellipse cx={160} cy={56} rx={28} ry={8} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.25} />
    </>
  );
}

function Shib() {
  const g = 'g-shib';
  return (
    <>
      <Glow id={g} c="#a6e" />
      <circle cx={160} cy={128} r={92} fill={`url(#${g})`} opacity={0.32} />
      {/* SHIB — fierce Shiba, more angular */}
      <ellipse cx={160} cy={108} rx={40} ry={38} fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.6} />
      {/* Pointed ears — more aggressive */}
      <polygon points="126,80 114,46 148,76" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <polygon points={"194,80 206,46 172,76"} fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      {/* Intense eyes */}
      <path d="M 136 100 Q 146 96 156 102" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <path d="M 164 102 Q 174 96 184 100" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      {/* Sharp smile */}
      <path d="M 142 128 Q 160 140 178 126" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      {/* Teeth hint */}
      <line x1={152} y1={134} x2={152} y2={140} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <line x1={160} y1={136} x2={160} y2={142} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      <line x1={168} y1={134} x2={168} y2={140} stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      {/* Bone crown */}
      <path d="M 140 58 Q 160 48 180 58" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.35} />
      <ellipse cx={150} cy={54} rx={6} ry={4} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} transform="rotate(-30 150 54)" />
      <ellipse cx={170} cy={54} rx={6} ry={4} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} transform="rotate(30 170 54)" />
    </>
  );
}

function Pepe() {
  const g = 'g-pepe';
  return (
    <>
      <Glow id={g} c="#8e8" />
      <circle cx={160} cy={128} r={92} fill={`url(#${g})`} opacity={0.32} />
      {/* PEPE — the iconic frog */}
      <ellipse cx={160} cy={106} rx={40} ry={44} fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.6} />
      {/* Big bulging eyes */}
      <circle cx={144} cy={90} r={14} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <circle cx={176} cy={90} r={14} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <circle cx={144} cy={90} r={5} fill="currentColor" opacity={0.6} />
      <circle cx={176} cy={90} r={5} fill="currentColor" opacity={0.6} />
      {/* The smile — the most important part */}
      <path d="M 132 120 Q 160 148 188 120" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.6} />
      <path d="M 136 124 Q 160 142 184 124" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />
      {/* Lips */}
      <line x1={132} y1={120} x2={188} y2={120} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Nostrils */}
      <ellipse cx={154} cy={110} rx={4} ry={3} fill="currentColor" opacity={0.3} />
      <ellipse cx={166} cy={110} rx={4} ry={3} fill="currentColor" opacity={0.3} />
      {/* Blush */}
      <ellipse cx={132} cy={116} rx={8} ry={5} fill="currentColor" opacity={0.12} />
      <ellipse cx={188} cy={116} rx={8} ry={5} fill="currentColor" opacity={0.12} />
    </>
  );
}

/* ---------- MYTHIC — Tier Apex ---------- */

function Satoshi() {
  const g = 'g-satoshi';
  return (
    <>
      <Glow id={g} c="#fc6" />
      <circle cx={160} cy={128} r={94} fill={`url(#${g})`} opacity={0.35} />
      {/* Satoshi — the ghost, the myth, the B */}
      {/* Bitcoin B */}
      <rect x={136} y={80} width={48} height={72} rx={10} fill="none" stroke="currentColor" strokeWidth={2.5} opacity={0.6} />
      <text x={160} y={138} fill="currentColor" fontSize={52} fontFamily="monospace" fontWeight="bold" opacity={0.55} textAnchor="middle">B</text>
      {/* Two vertical lines through B */}
      <line x1={150} y1={88} x2={150} y2={144} stroke="currentColor" strokeWidth={1.5} opacity={0.4} />
      <line x1={170} y1={88} x2={170} y2={144} stroke="currentColor" strokeWidth={1.5} opacity={0.4} />
      {/* Ghostly aura */}
      <circle cx={160} cy={128} r={70} fill="none" stroke="currentColor" strokeWidth={0.6} opacity={0.2} />
      <circle cx={160} cy={128} r={82} fill="none" stroke="currentColor" strokeWidth={0.4} opacity={0.15} />
      {/* Question mark — the unknown */}
      <text x={160} y={60} fill="currentColor" fontSize={20} fontFamily="monospace" opacity={0.25} textAnchor="middle">?</text>
      {/* Disappearing particles */}
      {[0,1,2,3,4,5,6,7].map(i=>{
        const a=(i*45)*Math.PI/180;
        return <circle key={i} cx={160+Math.cos(a)*76} cy={128+Math.sin(a)*76} r={2} fill="currentColor" opacity={0.25} />;
      })}
    </>
  );
}

function Vitalik() {
  const g = 'g-vitalik';
  return (
    <>
      <Glow id={g} c="#8cf" />
      <circle cx={160} cy={128} r={94} fill={`url(#${g})`} opacity={0.35} />
      {/* Vitalik — thin face, glasses, unicorn shirt */}
      <ellipse cx={160} cy={104} rx={32} ry={40} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      {/* Hair — wispy */}
      <path d="M 130 78 Q 140 58 160 62 Q 180 58 190 78" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <path d="M 134 70 Q 150 54 170 60" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Glasses — large and distinctive */}
      <rect x={134} y={94} width={24} height={18} rx={4} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <rect x={162} y={94} width={24} height={18} rx={4} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <line x1={158} y1={103} x2={162} y2={103} stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Thin smile */}
      <path d="M 150 126 Q 160 130 170 126" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {/* Unicorn shirt */}
      <path d="M 120 152 Q 140 140 160 144 Q 180 140 200 152" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      {/* Unicorn horn */}
      <polygon points="156,160 160,148 164,160" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {/* Ethereum diamond hint */}
      <polygon points="160,176 148,184 160,192 172,184" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.25} />
    </>
  );
}
