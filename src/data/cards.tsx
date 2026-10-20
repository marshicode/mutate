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
function Badge({ bg, children }: { bg: string; children: ReactNode }) {
  return (
    <>
      <circle cx={100} cy={100} r={99} fill={bg} />
      <circle cx={100} cy={100} r={99} fill="none" stroke="rgba(0,0,0,.22)" strokeWidth={2} />
      {children}
    </>
  );
}

/* ---------- COMMON ---------- */

function Troll() {
  return (
    <Badge bg="#4E5B33">
      {/* hair */}
      <path d="M52 74 Q46 40 68 48 Q74 22 92 42 Q102 18 114 42 Q132 24 138 50 Q158 42 150 76 Z" fill="#3A2E22" />
      {/* face */}
      <ellipse cx={100} cy={106} rx={54} ry={54} fill="#E9E3D2" />
      <ellipse cx={100} cy={150} rx={44} ry={16} fill="#CFC7B2" />
      {/* eyes */}
      <ellipse cx={78} cy={96} rx={9} ry={11} fill="#2B2117" />
      <ellipse cx={122} cy={96} rx={9} ry={11} fill="#2B2117" />
      <circle cx={81} cy={92} r={3} fill="#fff" />
      <circle cx={125} cy={92} r={3} fill="#fff" />
      {/* brows */}
      <path d="M66 82 Q78 76 90 82" stroke="#8A7A5A" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M110 82 Q122 76 134 82" stroke="#8A7A5A" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* grin */}
      <path d="M46 122 Q100 176 154 122 Q100 148 46 122 Z" fill="#B23A3A" />
      <path d="M46 122 Q100 176 154 122" stroke="#7A1F1F" strokeWidth={4} fill="none" />
      <path d="M60 127 L60 140 M78 138 L78 152 M100 143 L100 158 M122 138 L122 152 M140 127 L140 140" stroke="#F2E6D0" strokeWidth={4} />
      <path d="M46 122 Q100 148 154 122" stroke="#F2E6D0" strokeWidth={5} fill="none" />
    </Badge>
  );
}

function Andy() {
  return (
    <Badge bg="#2F4C7A">
      <ellipse cx={100} cy={108} rx={54} ry={56} fill="#7FB0D9" />
      <ellipse cx={100} cy={152} rx={44} ry={16} fill="#5F92C4" />
      {/* hair tuft */}
      <path d="M84 56 Q88 34 100 44 Q112 28 116 54 Q126 40 124 62" fill="#2A4A6A" />
      {/* eyes */}
      <circle cx={78} cy={100} r={16} fill="#F2F6FA" />
      <circle cx={122} cy={100} r={16} fill="#F2F6FA" />
      <circle cx={78} cy={102} r={7} fill="#1E2A38" />
      <circle cx={122} cy={102} r={7} fill="#1E2A38" />
      <circle cx={80} cy={99} r={2.5} fill="#fff" />
      <circle cx={124} cy={99} r={2.5} fill="#fff" />
      {/* smile */}
      <path d="M74 132 Q100 152 126 132" stroke="#1E2A38" strokeWidth={5} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Slerf() {
  return (
    <Badge bg="#6B4A2F">
      {/* branch */}
      <rect x={16} y={162} width={168} height={16} rx={8} fill="#4A3320" />
      {/* head */}
      <ellipse cx={100} cy={106} rx={54} ry={50} fill="#C79A6B" />
      {/* eye patches */}
      <ellipse cx={74} cy={98} rx={20} ry={17} fill="#8A5F3C" />
      <ellipse cx={126} cy={98} rx={20} ry={17} fill="#8A5F3C" />
      {/* sleepy eyes */}
      <path d="M62 100 Q74 108 86 100" stroke="#3A2618" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M114 100 Q126 108 138 100" stroke="#3A2618" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* nose + smile */}
      <ellipse cx={100} cy={122} rx={9} ry={6} fill="#3A2618" />
      <path d="M100 128 L100 136 M100 136 Q90 142 84 136 M100 136 Q110 142 116 136" stroke="#3A2618" strokeWidth={4} fill="none" strokeLinecap="round" />
      {/* claws */}
      <path d="M66 150 Q62 164 68 170 M134 150 Q138 164 132 170" stroke="#8A5F3C" strokeWidth={7} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Michi() {
  return (
    <Badge bg="#C25A7A">
      {/* ears */}
      <path d="M52 82 L44 40 L86 62 Z" fill="#F2D9B5" />
      <path d="M148 82 L156 40 L114 62 Z" fill="#F2D9B5" />
      <path d="M58 78 L52 50 L80 64 Z" fill="#E8A8B8" />
      <path d="M142 78 L148 50 L120 64 Z" fill="#E8A8B8" />
      {/* head */}
      <ellipse cx={100} cy={110} rx={54} ry={50} fill="#F2D9B5" />
      <ellipse cx={100} cy={152} rx={40} ry={14} fill="#D9B98A" />
      {/* closed happy eyes */}
      <path d="M64 106 Q78 92 92 106" stroke="#3A2618" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M108 106 Q122 92 136 106" stroke="#3A2618" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* nose */}
      <path d="M94 122 L100 128 L106 122 Z" fill="#D97A8A" />
      <path d="M100 128 L100 134 M100 134 Q94 140 88 136 M100 134 Q106 140 112 136" stroke="#3A2618" strokeWidth={3.5} fill="none" strokeLinecap="round" />
      {/* whiskers */}
      <path d="M40 118 L64 122 M40 132 L64 130 M160 118 L136 122 M160 132 L136 130" stroke="#3A2618" strokeWidth={3} opacity={0.5} />
    </Badge>
  );
}

/* ---------- RARE ---------- */

function Popcat() {
  return (
    <Badge bg="#2F6B5A">
      {/* ears */}
      <path d="M50 84 L40 38 L86 62 Z" fill="#F5E6CC" />
      <path d="M150 84 L160 38 L114 62 Z" fill="#F5E6CC" />
      <path d="M56 80 L50 50 L80 66 Z" fill="#E8B9A0" />
      <path d="M144 80 L150 50 L120 66 Z" fill="#E8B9A0" />
      {/* head */}
      <ellipse cx={100} cy={104} rx={54} ry={50} fill="#F5E6CC" />
      {/* eyes */}
      <circle cx={76} cy={92} r={16} fill="#1A1A1A" />
      <circle cx={124} cy={92} r={16} fill="#1A1A1A" />
      <circle cx={80} cy={87} r={5} fill="#fff" />
      <circle cx={128} cy={87} r={5} fill="#fff" />
      {/* open mouth */}
      <ellipse cx={100} cy={136} rx={30} ry={26} fill="#1A1A1A" />
      <ellipse cx={100} cy={148} rx={16} ry={10} fill="#E87A8A" />
      <path d="M70 136 Q100 140 130 136" stroke="#F5E6CC" strokeWidth={3} fill="none" opacity={0.4} />
      {/* whiskers */}
      <path d="M34 112 L60 118 M34 128 L60 126 M166 112 L140 118 M166 128 L140 126" stroke="#1A1A1A" strokeWidth={3} opacity={0.45} />
    </Badge>
  );
}

function Mog() {
  return (
    <Badge bg="#2F5F5A">
      {/* ears */}
      <path d="M54 80 L48 44 L84 64 Z" fill="#B08A4A" />
      <path d="M146 80 L152 44 L116 64 Z" fill="#B08A4A" />
      {/* face */}
      <ellipse cx={100} cy={108} rx={54} ry={52} fill="#C9A46A" />
      <ellipse cx={100} cy={152} rx={42} ry={14} fill="#A8834A" />
      {/* thick brows */}
      <path d="M60 88 L90 80" stroke="#2B2117" strokeWidth={8} strokeLinecap="round" />
      <path d="M110 80 L140 88" stroke="#2B2117" strokeWidth={8} strokeLinecap="round" />
      {/* narrow eyes */}
      <path d="M66 102 Q78 94 90 102" stroke="#2B2117" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M110 102 Q122 94 134 102" stroke="#2B2117" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* nose + smirk */}
      <ellipse cx={100} cy={124} rx={8} ry={6} fill="#2B2117" />
      <path d="M100 130 L100 136 M100 136 Q112 146 126 136" stroke="#2B2117" strokeWidth={4.5} fill="none" strokeLinecap="round" />
      {/* gold chain */}
      <path d="M64 156 Q100 184 136 156" stroke="#E8C15A" strokeWidth={7} fill="none" strokeLinecap="round" />
      <circle cx={100} cy={176} r={9} fill="#E8C15A" stroke="#A87C1E" strokeWidth={3} />
    </Badge>
  );
}

function Wojak() {
  return (
    <Badge bg="#47525E">
      {/* head */}
      <ellipse cx={100} cy={102} rx={50} ry={56} fill="#D9C3A8" />
      <ellipse cx={100} cy={146} rx={40} ry={16} fill="#BFA88C" />
      {/* hollow eyes */}
      <ellipse cx={78} cy={96} rx={15} ry={10} fill="#2A2A2A" />
      <ellipse cx={122} cy={96} rx={15} ry={10} fill="#2A2A2A" />
      <ellipse cx={78} cy={96} rx={15} ry={10} fill="none" stroke="#8A7458" strokeWidth={3} />
      <ellipse cx={122} cy={96} rx={15} ry={10} fill="none" stroke="#8A7458" strokeWidth={3} />
      {/* sad mouth */}
      <path d="M76 134 Q100 120 124 134" stroke="#5A4632" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* stubble */}
      <path d="M62 140 L62 152 M76 148 L76 160 M92 152 L92 164 M108 152 L108 164 M124 148 L124 160 M138 140 L138 152" stroke="#8A7458" strokeWidth={3} opacity={0.6} />
    </Badge>
  );
}

function Turbo() {
  return (
    <Badge bg="#2F7A8A">
      {/* toad head */}
      <ellipse cx={100} cy={116} rx={58} ry={50} fill="#7FB84A" />
      <ellipse cx={100} cy={156} rx={44} ry={14} fill="#5F9833" />
      {/* stripe */}
      <path d="M100 70 L100 160" stroke="#5F9833" strokeWidth={10} />
      {/* goggles */}
      <circle cx={70} cy={88} r={24} fill="#D9E8F0" stroke="#2A3A3A" strokeWidth={5} />
      <circle cx={130} cy={88} r={24} fill="#D9E8F0" stroke="#2A3A3A" strokeWidth={5} />
      <path d="M46 88 L24 82 M154 88 L176 82" stroke="#2A3A3A" strokeWidth={8} strokeLinecap="round" />
      <circle cx={70} cy={90} r={8} fill="#1E2A38" />
      <circle cx={130} cy={90} r={8} fill="#1E2A38" />
      <circle cx={73} cy={86} r={3} fill="#fff" />
      <circle cx={133} cy={86} r={3} fill="#fff" />
      {/* grin */}
      <path d="M64 132 Q100 156 136 132" stroke="#2A4A1A" strokeWidth={5} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Neiro() {
  return (
    <Badge bg="#5A4A8A">
      {/* ears */}
      <path d="M50 80 L40 32 L86 60 Z" fill="#C08A2F" />
      <path d="M150 80 L160 32 L114 60 Z" fill="#C08A2F" />
      <path d="M56 76 L50 46 L80 62 Z" fill="#E0A94A" />
      <path d="M144 76 L150 46 L120 62 Z" fill="#E0A94A" />
      {/* head */}
      <ellipse cx={100} cy={106} rx={54} ry={50} fill="#E0A94A" />
      {/* muzzle */}
      <ellipse cx={100} cy={132} rx={32} ry={24} fill="#F7E2BC" />
      {/* eyes */}
      <ellipse cx={78} cy={98} rx={8} ry={10} fill="#2B2117" />
      <ellipse cx={122} cy={98} rx={8} ry={10} fill="#2B2117" />
      <circle cx={80} cy={94} r={3} fill="#fff" />
      <circle cx={124} cy={94} r={3} fill="#fff" />
      {/* nose + smile */}
      <ellipse cx={100} cy={124} rx={9} ry={7} fill="#2B2117" />
      <path d="M100 131 L100 138 M100 138 Q90 146 82 138 M100 138 Q110 146 118 138" stroke="#2B2117" strokeWidth={4} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Ponke() {
  return (
    <Badge bg="#A86A2F">
      {/* ears */}
      <circle cx={42} cy={108} r={20} fill="#C98A4A" />
      <circle cx={158} cy={108} r={20} fill="#C98A4A" />
      <circle cx={42} cy={108} r={11} fill="#A8703C" />
      <circle cx={158} cy={108} r={11} fill="#A8703C" />
      {/* head */}
      <ellipse cx={100} cy={104} rx={52} ry={50} fill="#A8703C" />
      {/* muzzle */}
      <ellipse cx={100} cy={134} rx={36} ry={26} fill="#D9B98A" />
      {/* eyes */}
      <circle cx={76} cy={94} r={17} fill="#F2E6D0" />
      <circle cx={124} cy={94} r={17} fill="#F2E6D0" />
      <circle cx={76} cy={96} r={7} fill="#1E160E" />
      <circle cx={124} cy={96} r={7} fill="#1E160E" />
      {/* nostrils + grin */}
      <ellipse cx={92} cy={128} rx={4} ry={5} fill="#5A3A1E" />
      <ellipse cx={108} cy={128} rx={4} ry={5} fill="#5A3A1E" />
      <path d="M74 140 Q100 158 126 140" stroke="#5A3A1E" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M82 146 L82 154 M100 150 L100 158 M118 146 L118 154" stroke="#F2E6D0" strokeWidth={4} />
    </Badge>
  );
}

/* ---------- EPIC ---------- */

function Trump() {
  return (
    <Badge bg="#3A4A6A">
      {/* suit */}
      <path d="M20 200 Q34 148 76 138 L124 138 Q166 148 180 200 Z" fill="#1E2634" />
      {/* shirt */}
      <path d="M86 140 L114 140 L100 182 Z" fill="#E8E8E8" />
      {/* tie */}
      <path d="M93 146 L107 146 L104 168 L100 186 L96 168 Z" fill="#C0392B" />
      <path d="M90 138 L110 138 L107 148 L93 148 Z" fill="#A32B22" />
      {/* face */}
      <ellipse cx={100} cy={98} rx={40} ry={46} fill="#F0C09A" />
      {/* hair */}
      <path d="M52 98 Q42 48 82 34 Q100 24 118 34 Q158 48 148 98 Q142 72 130 66 Q114 80 100 70 Q84 80 70 66 Q58 72 52 98 Z" fill="#E8C15A" />
      <path d="M56 88 Q58 58 82 44 Q100 34 118 44 Q142 58 144 88 Q140 66 126 58 Q112 70 100 62 Q86 70 74 58 Q60 66 56 88 Z" fill="#D4A93F" />
      {/* eyes + brows */}
      <path d="M76 92 Q86 86 96 92" stroke="#B08A4A" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M104 92 Q114 86 124 92" stroke="#B08A4A" strokeWidth={5} fill="none" strokeLinecap="round" />
      <ellipse cx={85} cy={100} rx={5} ry={4} fill="#2B2117" />
      <ellipse cx={115} cy={100} rx={5} ry={4} fill="#2B2117" />
      {/* nose + mouth */}
      <path d="M100 104 L100 116" stroke="#D9A87A" strokeWidth={4} strokeLinecap="round" />
      <path d="M88 124 Q100 130 112 124" stroke="#8A5A3A" strokeWidth={4} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Wif() {
  return (
    <Badge bg="#C96A7A">
      {/* ears */}
      <path d="M52 86 L44 40 L88 64 Z" fill="#D9C3A0" />
      <path d="M148 86 L156 40 L112 64 Z" fill="#D9C3A0" />
      <path d="M58 82 L52 50 L82 66 Z" fill="#F5E8D0" />
      <path d="M142 82 L148 50 L118 66 Z" fill="#F5E8D0" />
      {/* head */}
      <ellipse cx={100} cy={112} rx={52} ry={46} fill="#E8D5B5" />
      {/* hat */}
      <path d="M44 84 Q100 56 156 84 L156 68 Q100 38 44 68 Z" fill="#E89AA8" />
      <ellipse cx={100} cy={86} rx={56} ry={13} fill="#D97A8A" />
      <ellipse cx={100} cy={66} rx={44} ry={20} fill="#E89AA8" />
      <path d="M62 62 Q100 46 138 62" stroke="#D97A8A" strokeWidth={4} fill="none" opacity={0.7} />
      {/* eyes */}
      <ellipse cx={80} cy={112} rx={8} ry={9} fill="#2B2117" />
      <ellipse cx={120} cy={112} rx={8} ry={9} fill="#2B2117" />
      <circle cx={82} cy={109} r={3} fill="#fff" />
      <circle cx={122} cy={109} r={3} fill="#fff" />
      {/* muzzle */}
      <ellipse cx={100} cy={138} rx={24} ry={17} fill="#F5E8D0" />
      <ellipse cx={100} cy={131} rx={8} ry={6} fill="#2B2117" />
      <path d="M100 137 L100 143 M100 143 Q93 149 87 143 M100 143 Q107 149 113 143" stroke="#2B2117" strokeWidth={4} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Floki() {
  return (
    <Badge bg="#D9822F">
      {/* horns */}
      <path d="M44 78 Q16 62 18 32 Q42 42 58 66 Z" fill="#F2E6D0" />
      <path d="M156 78 Q184 62 182 32 Q158 42 142 66 Z" fill="#F2E6D0" />
      {/* ears */}
      <path d="M52 88 L44 50 L84 68 Z" fill="#C08A2F" />
      <path d="M148 88 L156 50 L116 68 Z" fill="#C08A2F" />
      {/* head */}
      <ellipse cx={100} cy={112} rx={52} ry={48} fill="#E0A94A" />
      {/* helmet */}
      <path d="M42 94 Q100 54 158 94 L158 80 Q100 40 42 80 Z" fill="#9AA3AD" />
      <path d="M100 76 L100 56" stroke="#9AA3AD" strokeWidth={10} strokeLinecap="round" />
      <path d="M42 80 Q100 40 158 80" stroke="#7A838D" strokeWidth={4} fill="none" />
      {/* eyes */}
      <ellipse cx={80} cy={104} rx={7} ry={8} fill="#2B2117" />
      <ellipse cx={120} cy={104} rx={7} ry={8} fill="#2B2117" />
      <circle cx={82} cy={101} r={2.5} fill="#fff" />
      <circle cx={122} cy={101} r={2.5} fill="#fff" />
      {/* muzzle + smile */}
      <ellipse cx={100} cy={136} rx={30} ry={22} fill="#F7E2BC" />
      <ellipse cx={100} cy={128} rx={9} ry={7} fill="#2B2117" />
      <path d="M100 135 L100 141 M100 141 Q90 149 82 141 M100 141 Q110 149 118 141" stroke="#2B2117" strokeWidth={4} fill="none" strokeLinecap="round" />
    </Badge>
  );
}

function Bonk() {
  return (
    <Badge bg="#C9922F">
      {/* ears */}
      <path d="M52 84 L44 38 L88 62 Z" fill="#A85F2A" />
      <path d="M148 84 L156 38 L112 62 Z" fill="#A85F2A" />
      <path d="M58 80 L52 48 L82 64 Z" fill="#C97A3C" />
      <path d="M142 80 L148 48 L118 64 Z" fill="#C97A3C" />
      {/* head */}
      <ellipse cx={100} cy={104} rx={52} ry={48} fill="#C97A3C" />
      {/* eyes */}
      <path d="M66 94 Q78 86 90 94" stroke="#2B2117" strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M110 94 Q122 86 134 94" stroke="#2B2117" strokeWidth={6} fill="none" strokeLinecap="round" />
      <circle cx={78} cy={98} r={4} fill="#2B2117" />
      <circle cx={122} cy={98} r={4} fill="#2B2117" />
      {/* muzzle */}
      <ellipse cx={100} cy={132} rx={32} ry={24} fill="#F2D9B5" />
      <ellipse cx={100} cy={124} rx={9} ry={7} fill="#2B2117" />
      {/* bone */}
      <g transform="rotate(-12 100 146)">
        <rect x={66} y={140} width={68} height={13} rx={6} fill="#F2E6D0" />
        <circle cx={66} cy={140} r={10} fill="#F2E6D0" />
        <circle cx={66} cy={153} r={10} fill="#F2E6D0" />
        <circle cx={134} cy={140} r={10} fill="#F2E6D0" />
        <circle cx={134} cy={153} r={10} fill="#F2E6D0" />
      </g>
    </Badge>
  );
}

function Brett() {
  return (
    <Badge bg="#2F6A9A">
      {/* hair spikes */}
      <path d="M46 84 Q42 56 58 62 Q54 38 72 48 Q70 26 88 42 Q92 22 106 42 Q120 26 122 46 Q142 38 138 62 Q154 58 152 86 Z" fill="#1E3A5A" />
      {/* face */}
      <ellipse cx={100} cy={110} rx={54} ry={50} fill="#6FA8D9" />
      <ellipse cx={100} cy={152} rx={42} ry={14} fill="#4F88B9" />
      {/* half-lidded eyes */}
      <path d="M62 102 Q78 94 94 102" stroke="#16324A" strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M106 102 Q122 94 138 102" stroke="#16324A" strokeWidth={6} fill="none" strokeLinecap="round" />
      <line x1={64} y1={104} x2={92} y2={104} stroke="#16324A" strokeWidth={6} />
      <line x1={108} y1={104} x2={136} y2={104} stroke="#16324A" strokeWidth={6} />
      {/* chill grin */}
      <path d="M70 132 Q100 160 130 132" stroke="#16324A" strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M78 140 L78 150 M100 146 L100 156 M122 140 L122 150" stroke="#F2F6FA" strokeWidth={5} />
    </Badge>
  );
}

/* ---------- LEGENDARY ---------- */

function Doge() {
  return (
    <Badge bg="#C9A24A">
      {/* ears */}
      <path d="M50 80 L40 30 L86 58 Z" fill="#B07C2A" />
      <path d="M150 80 L160 30 L114 58 Z" fill="#B07C2A" />
      <path d="M56 76 L50 46 L82 62 Z" fill="#D9A441" />
      <path d="M144 76 L150 46 L118 62 Z" fill="#D9A441" />
      {/* head */}
      <ellipse cx={100} cy={108} rx={56} ry={52} fill="#D9A441" />
      <ellipse cx={100} cy={154} rx={44} ry={14} fill="#C08A2F" />
      {/* muzzle */}
      <ellipse cx={100} cy={132} rx={36} ry={26} fill="#F2DDB4" />
      {/* eyes */}
      <ellipse cx={78} cy={100} rx={9} ry={10} fill="#2B2117" />
      <ellipse cx={122} cy={100} rx={9} ry={10} fill="#2B2117" />
      <circle cx={80.5} cy={97} r={3} fill="#fff" />
      <circle cx={124.5} cy={97} r={3} fill="#fff" />
      {/* brows */}
      <path d="M66 86 Q78 80 90 86" stroke="#8A5A1E" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M110 86 Q122 80 134 86" stroke="#8A5A1E" strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* nose + smile */}
      <ellipse cx={100} cy={124} rx={10} ry={8} fill="#2B2117" />
      <path d="M100 132 L100 140 M100 140 Q90 148 82 140 M100 140 Q110 148 118 140" stroke="#2B2117" strokeWidth={4} fill="none" strokeLinecap="round" />
      {/* blush */}
      <ellipse cx={58} cy={126} rx={10} ry={6} fill="#E8B96A" />
      <ellipse cx={142} cy={126} rx={10} ry={6} fill="#E8B96A" />
    </Badge>
  );
}

function Shib() {
  return (
    <Badge bg="#D9542F">
      {/* ears */}
      <path d="M48 78 L36 26 L86 56 Z" fill="#C06A1E" />
      <path d="M152 78 L164 26 L114 56 Z" fill="#C06A1E" />
      <path d="M54 74 L46 42 L80 60 Z" fill="#F08A3C" />
      <path d="M146 74 L154 42 L120 60 Z" fill="#F08A3C" />
      {/* head */}
      <ellipse cx={100} cy={106} rx={54} ry={50} fill="#F08A3C" />
      <ellipse cx={100} cy={152} rx={42} ry={14} fill="#D9742A" />
      {/* muzzle */}
      <ellipse cx={100} cy={130} rx={34} ry={24} fill="#F7D9B0" />
      {/* eyes */}
      <ellipse cx={78} cy={98} rx={8} ry={10} fill="#2B2117" />
      <ellipse cx={122} cy={98} rx={8} ry={10} fill="#2B2117" />
      <circle cx={80} cy={94} r={3} fill="#fff" />
      <circle cx={124} cy={94} r={3} fill="#fff" />
      {/* nose */}
      <ellipse cx={100} cy={122} rx={10} ry={8} fill="#2B2117" />
      {/* grin + tongue */}
      <path d="M100 130 L100 138 M100 138 Q88 150 78 138 M100 138 Q112 150 122 138" stroke="#2B2117" strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M92 146 Q100 160 108 146 Z" fill="#E86A7A" />
    </Badge>
  );
}

function Pepe() {
  return (
    <Badge bg="#3E7A3E">
      {/* head */}
      <ellipse cx={100} cy={110} rx={58} ry={54} fill="#6FA84A" />
      <ellipse cx={100} cy={156} rx={46} ry={14} fill="#5A8F3A" />
      {/* eyes */}
      <circle cx={72} cy={86} r={21} fill="#F2F2E8" />
      <circle cx={128} cy={86} r={21} fill="#F2F2E8" />
      <circle cx={72} cy={90} r={9} fill="#1A1A1A" />
      <circle cx={128} cy={90} r={9} fill="#1A1A1A" />
      <circle cx={76} cy={84} r={3.5} fill="#fff" />
      <circle cx={132} cy={84} r={3.5} fill="#fff" />
      {/* nostrils */}
      <ellipse cx={90} cy={110} rx={4} ry={3} fill="#3A5A22" />
      <ellipse cx={110} cy={110} rx={4} ry={3} fill="#3A5A22" />
      {/* lips */}
      <path d="M42 118 Q100 178 158 118 Q100 148 42 118 Z" fill="#B23A3A" />
      <path d="M52 120 Q100 162 148 120 Q100 140 52 120 Z" fill="#7A1F1F" />
      <path d="M42 118 Q100 178 158 118" stroke="#7A1F1F" strokeWidth={5} fill="none" />
      {/* blush */}
      <circle cx={48} cy={124} r={8} fill="#5A8F3A" />
      <circle cx={152} cy={124} r={8} fill="#5A8F3A" />
    </Badge>
  );
}

/* ---------- MYTHIC ---------- */

function Satoshi() {
  return (
    <Badge bg="#1F2A3A">
      {/* hooded ghost */}
      <path d="M100 18 Q56 18 52 74 Q50 116 66 138 L66 184 L134 184 L134 138 Q150 116 148 74 Q144 18 100 18 Z" fill="#33445A" />
      <path d="M100 40 Q72 40 70 78 Q68 106 80 122 L80 170 L120 170 L120 122 Q132 106 130 78 Q128 40 100 40 Z" fill="#22303F" />
      {/* coin */}
      <circle cx={100} cy={106} r={62} fill="#E8C15A" />
      <circle cx={100} cy={106} r={62} fill="none" stroke="#A87C1E" strokeWidth={7} />
      <circle cx={100} cy={106} r={50} fill="none" stroke="#C9A23A" strokeWidth={3} />
      <text x={100} y={132} textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight={700} fontSize={68} fill="#7A5A10">B</text>
      {/* sparkles */}
      <circle cx={40} cy={54} r={4} fill="#E8C15A" />
      <circle cx={160} cy={66} r={3} fill="#E8C15A" />
      <circle cx={46} cy={150} r={3} fill="#E8C15A" />
    </Badge>
  );
}

function Vitalik() {
  return (
    <Badge bg="#2F5A8A">
      {/* shirt */}
      <path d="M24 200 Q38 160 72 152 L128 152 Q162 160 176 200 Z" fill="#7FB8D9" />
      {/* unicorn horn */}
      <path d="M96 166 L100 148 L104 166 Z" fill="#F2E6D0" />
      {/* face */}
      <ellipse cx={100} cy={104} rx={38} ry={46} fill="#F0C09A" />
      {/* hair */}
      <path d="M60 100 Q56 52 100 46 Q144 52 140 100 Q136 76 124 68 Q110 58 100 66 Q88 58 76 68 Q64 76 60 100 Z" fill="#6B4A2F" />
      <path d="M64 92 Q64 62 100 56 Q136 62 136 92 Q130 72 118 66 Q106 74 100 66 Q92 74 82 66 Q70 72 64 92 Z" fill="#543822" />
      {/* glasses */}
      <rect x={66} y={94} width={28} height={24} rx={8} fill="#D9E8F0" fillOpacity={0.35} stroke="#1E2A38" strokeWidth={4} />
      <rect x={106} y={94} width={28} height={24} rx={8} fill="#D9E8F0" fillOpacity={0.35} stroke="#1E2A38" strokeWidth={4} />
      <line x1={94} y1={106} x2={106} y2={106} stroke="#1E2A38" strokeWidth={4} />
      <circle cx={80} cy={106} r={3} fill="#1E2A38" />
      <circle cx={120} cy={106} r={3} fill="#1E2A38" />
      {/* smile */}
      <path d="M88 130 Q100 138 112 130" stroke="#8A5A3A" strokeWidth={4} fill="none" strokeLinecap="round" />
      {/* ethereum mark */}
      <path d="M100 172 L90 182 L100 192 L110 182 Z" fill="#F2F6FA" opacity={0.85} />
    </Badge>
  );
}
