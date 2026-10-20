import type { ReactNode } from 'react';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type Strain = 'FUNGAL' | 'MINERAL' | 'FLUID' | 'ORGANIC' | 'KINETIC' | 'SPECTRAL' | 'NEURAL' | 'RECURSIVE';

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

export const CARDS: CardDef[] = [
  { id:'sporeling',    name:'Sporeling',    epithet:'"first breath of the bloom"',   rarity:'common',    strain:'FUNGAL',    potency:14, stability:55, flavor:'A cloud of microscopic hunger.', artKey:'sporeling' },
  { id:'cinder-mite',  name:'Cinder Mite',  epithet:'"ash that learned to crawl"',   rarity:'common',    strain:'MINERAL',   potency:12, stability:42, flavor:'Smolders for decades in silence.', artKey:'cinder-mite' },
  { id:'brine-wisp',   name:'Brine Wisp',   epithet:'"salt remembers the sea"',      rarity:'common',    strain:'FLUID',     potency:13, stability:48, flavor:'Condensed brine with a will.', artKey:'brine-wisp' },
  { id:'molt-husk',    name:'Molt Husk',    epithet:'"the shape that was shed"',     rarity:'common',    strain:'ORGANIC',   potency:15, stability:38, flavor:'Empty, yet it twitches.', artKey:'molt-husk' },
  { id:'gritling',     name:'Gritling',     epithet:'"compressed spite"',            rarity:'common',    strain:'MINERAL',   potency:11, stability:60, flavor:'Harder than intent, softer than stone.', artKey:'gritling' },
  { id:'pale-midge',   name:'Pale Midge',   epithet:'"dusk in six wings"',           rarity:'common',    strain:'NEURAL',    potency:16, stability:33, flavor:'A swarm of one mind.', artKey:'pale-midge' },

  { id:'chorus-moth',  name:'Chorus Moth',  epithet:'"sings in frequencies"',        rarity:'rare',      strain:'NEURAL',    potency:24, stability:58, flavor:'Resonates with nearby neurons.', artKey:'chorus-moth' },
  { id:'veinwalker',   name:'Veinwalker',   epithet:'"follows the river inside"',    rarity:'rare',      strain:'ORGANIC',   potency:26, stability:52, flavor:'Capillaries rearrange to guide it.', artKey:'veinwalker' },
  { id:'ferro-bloom',  name:'Ferro Bloom',  epithet:'"iron that chose to flower"',   rarity:'rare',      strain:'MINERAL',   potency:23, stability:64, flavor:'Magnetic petals orient north.', artKey:'ferro-bloom' },
  { id:'static-eel',   name:'Static Eel',   epithet:'"lightning in a spine"',        rarity:'rare',      strain:'KINETIC',   potency:27, stability:45, flavor:'Stores charge between heartbeats.', artKey:'static-eel' },
  { id:'hollow-saint', name:'Hollow Saint', epithet:'"prays to nothing"',            rarity:'rare',      strain:'SPECTRAL',  potency:25, stability:50, flavor:'Its halo is a scar.', artKey:'hollow-saint' },

  { id:'glass-oracle', name:'Glass Oracle', epithet:'"sees through itself"',         rarity:'epic',      strain:'SPECTRAL',  potency:36, stability:71, flavor:'Every angle is a prophecy.', artKey:'glass-oracle' },
  { id:'marrow-choir', name:'Marrow Choir', epithet:'"bones that harmonise"',        rarity:'epic',      strain:'ORGANIC',   potency:38, stability:56, flavor:'A cage of calcium and hymn.', artKey:'marrow-choir' },
  { id:'neon-larva',   name:'Neon Larva',   epithet:'"glows before it knows"',       rarity:'epic',      strain:'KINETIC',   potency:40, stability:48, flavor:'Bioluminescence as appetite.', artKey:'neon-larva' },
  { id:'dusk-ram',     name:'Dusk Ram',     epithet:'"horns hold the sunset"',       rarity:'epic',      strain:'MINERAL',   potency:35, stability:62, flavor:'Charges when the light leaves.', artKey:'dusk-ram' },

  { id:'aureate-host', name:'Aureate Host', epithet:'"it gilds what it consumes"',   rarity:'legendary', strain:'ORGANIC',   potency:54, stability:80, flavor:'A parasite draped in wealth.', artKey:'aureate-host' },
  { id:'pale-engine',  name:'The Pale Engine', epithet:'"turns without purpose"',    rarity:'legendary', strain:'KINETIC',   potency:58, stability:74, flavor:'Perpetual motion of regret.', artKey:'pale-engine' },
  { id:'vesper-crown', name:'Vesper Crown', epithet:'"worn by the last dusk"',       rarity:'legendary', strain:'SPECTRAL',  potency:56, stability:77, flavor:'Heavy with borrowed twilight.', artKey:'vesper-crown' },

  { id:'ouroboros-9',  name:'Ouroboros-9',  epithet:'"tail nine devours head one"',  rarity:'mythic',    strain:'RECURSIVE', potency:86, stability:91, flavor:'Its recursion has a limit. Nobody has found it.', artKey:'ouroboros-9' },
  { id:'last-cell',    name:'The Last Cell', epithet:'"divides the end"',            rarity:'mythic',    strain:'ORGANIC',   potency:92, stability:88, flavor:'The final division before silence.', artKey:'last-cell' },
];

export const byId = Object.fromEntries(CARDS.map(c => [c.id, c])) as Record<string, CardDef>;

export function cardArtJSX(key: string): ReactNode {
  switch (key) {
    case 'sporeling': return <Sporeling />;
    case 'cinder-mite': return <CinderMite />;
    case 'brine-wisp': return <BrineWisp />;
    case 'molt-husk': return <MoltHusk />;
    case 'gritling': return <Gritling />;
    case 'pale-midge': return <PaleMidge />;
    case 'chorus-moth': return <ChorusMoth />;
    case 'veinwalker': return <Veinwalker />;
    case 'ferro-bloom': return <FerroBloom />;
    case 'static-eel': return <StaticEel />;
    case 'hollow-saint': return <HollowSaint />;
    case 'glass-oracle': return <GlassOracle />;
    case 'marrow-choir': return <MarrowChoir />;
    case 'neon-larva': return <NeonLarva />;
    case 'dusk-ram': return <DuskRam />;
    case 'aureate-host': return <AureateHost />;
    case 'pale-engine': return <PaleEngine />;
    case 'vesper-crown': return <VesperCrown />;
    case 'ouroboros-9': return <Ouroboros9 />;
    case 'last-cell': return <LastCell />;
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

/* ---------- 20 motifs ---------- */
function Sporeling() {
  const g = 'g-sporeling';
  return (
    <>
      <Glow id={g} c="#8ab" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.35} />
      <circle cx={160} cy={128} r={48} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.6} />
      <circle cx={160} cy={128} r={28} fill="currentColor" opacity={0.12} />
      {[0,1,2,3,4,5].map(i => {
        const a = (i * 60) * Math.PI / 180; const d = 38; return (
          <circle key={i} cx={160 + Math.cos(a)*d} cy={128 + Math.sin(a)*d} r={5 + (i%2)*3} fill="currentColor" opacity={0.25} />
        );
      })}
      {[0,1,2,3,4,5,6].map(i => {
        const a = (i * 51.4) * Math.PI / 180; const r = 56 + (i%3)*8; return (
          <line key={i} x1={160 + Math.cos(a)*38} y1={128 + Math.sin(a)*38} x2={160 + Math.cos(a)*r} y2={128 + Math.sin(a)*r} stroke="currentColor" strokeWidth={0.6} opacity={0.35} />
        );
      })}
    </>
  );
}

function CinderMite() {
  const g = 'g-cinder';
  return (
    <>
      <Glow id={g} c="#c96" />
      <circle cx={160} cy={128} r={82} fill={`url(#${g})`} opacity={0.25} />
      <polygon points="160,72 184,140 140,140" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      <polygon points="160,184 136,116 180,116" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      {[0,1,2,3,4].map(i => {
        const x = 110 + i*25; return <line key={i} x1={x} y1={128-18} x2={x+10} y2={128+18} stroke="currentColor" strokeWidth={0.7} opacity={0.35} />;
      })}
      <circle cx={130} cy={98} r={3} fill="currentColor" opacity={0.5} />
      <circle cx={190} cy={152} r={4} fill="currentColor" opacity={0.4} />
      <circle cx={170} cy={88} r={2.5} fill="currentColor" opacity={0.6} />
    </>
  );
}

function BrineWisp() {
  const g = 'g-brine';
  return (
    <>
      <Glow id={g} c="#6cf" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      {Array.from({length:7}).map((_,i)=>{
        const y = 68 + i*20; return (
          <path key={i} d={`M 90 ${y} Q 125 ${y-12} 160 ${y} T 230 ${y}`} fill="none" stroke="currentColor" strokeWidth={1.2 - i*0.1} opacity={0.35 + (i%2)*0.15} />
        );
      })}
      <ellipse cx={160} cy={128} rx={18} ry={10} fill="currentColor" opacity={0.15} />
    </>
  );
}

function MoltHusk() {
  const g = 'g-molt';
  return (
    <>
      <Glow id={g} c="#ba8" />
      <circle cx={160} cy={128} r={80} fill={`url(#${g})`} opacity={0.25} />
      <path d="M 120 80 Q 160 40 200 80 Q 200 140 160 180 Q 120 140 120 80" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.45} />
      <path d="M 130 90 Q 160 60 190 90 Q 190 130 160 160 Q 130 130 130 90" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      <path d="M 140 100 Q 160 80 180 100 Q 180 120 160 140 Q 140 120 140 100" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
      <circle cx={160} cy={120} r={6} fill="currentColor" opacity={0.25} />
    </>
  );
}

function Gritling() {
  const g = 'g-grit';
  return (
    <>
      <Glow id={g} c="#889" />
      <circle cx={160} cy={128} r={84} fill={`url(#${g})`} opacity={0.25} />
      <polygon points="160,70 195,105 185,155 135,155 125,105" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.45} />
      <polygon points="160,90 180,110 175,140 145,140 140,110" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      {[0,1,2,3,4,5,6,7,8,9].map(i=>{
        const a=(i*36)*Math.PI/180; const r=24+i*3; return <circle key={i} cx={160+Math.cos(a)*r} cy={128+Math.sin(a)*r} r={2} fill="currentColor" opacity={0.4} />;
      })}
    </>
  );
}

function PaleMidge() {
  const g = 'g-midge';
  return (
    <>
      <Glow id={g} c="#abb" />
      <circle cx={160} cy={128} r={86} fill={`url(#${g})`} opacity={0.2} />
      {[0,1,2].map(i=>{
        const y=108+i*20;
        return <ellipse key={i} cx={160} cy={y} rx={28} ry={6} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />;
      })}
      {[0,1,2,3,4,5,6,7].map(i=>{
        const a=(i*45)*Math.PI/180; const d=42;
        return <circle key={i} cx={160+Math.cos(a)*d} cy={128+Math.sin(a)*d} r={2.5} fill="currentColor" opacity={0.5} />;
      })}
      <line x1={140} y1={128} x2={180} y2={128} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
    </>
  );
}

function ChorusMoth() {
  const g = 'g-chorus';
  return (
    <>
      <Glow id={g} c="#6cf" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      <path d="M 160 128 L 100 90 Q 80 128 100 166 Z" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <path d="M 160 128 L 220 90 Q 240 128 220 166 Z" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      {[0,1,2,3,4].map(i=>{
        const r=28+i*12;
        return <ellipse key={i} cx={160} cy={128} rx={r} ry={r*0.35} fill="none" stroke="currentColor" strokeWidth={0.6} opacity={0.25} />;
      })}
      <line x1={160} y1={70} x2={160} y2={186} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
    </>
  );
}

function Veinwalker() {
  const g = 'g-vein';
  return (
    <>
      <Glow id={g} c="#d68" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.22} />
      <circle cx={160} cy={128} r={6} fill="currentColor" opacity={0.35} />
      {Array.from({length:12}).map((_,i)=>{
        const a=(i*30)*Math.PI/180; const len=24+((i*7)%28);
        const x2=160+Math.cos(a)*len; const y2=128+Math.sin(a)*len;
        return <line key={i} x1={160} y1={128} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1} opacity={0.4} />;
      })}
      {Array.from({length:12}).map((_,i)=>{
        const a=(i*30)*Math.PI/180; const len=24+((i*7)%28);
        const x1=160+Math.cos(a)*len; const y1=128+Math.sin(a)*len;
        const a2=a+0.6; const len2=18;
        return <line key={i} x1={x1} y1={y1} x2={x1+Math.cos(a2)*len2} y2={y1+Math.sin(a2)*len2} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />;
      })}
    </>
  );
}

function FerroBloom() {
  const g = 'g-ferro';
  return (
    <>
      <Glow id={g} c="#8af" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {Array.from({length:8}).map((_,i)=>{
        const a=(i*45)*Math.PI/180;
        const x=160+Math.cos(a)*34; const y=128+Math.sin(a)*34;
        const x2=160+Math.cos(a)*70; const y2=128+Math.sin(a)*70;
        return <line key={i} x1={x} y1={y} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.2} opacity={0.45} />;
      })}
      {Array.from({length:8}).map((_,i)=>{
        const a=(i*45+22.5)*Math.PI/180;
        const x=160+Math.cos(a)*40; const y=128+Math.sin(a)*40;
        const x2=160+Math.cos(a)*62; const y2=128+Math.sin(a)*62;
        return <line key={i} x1={x} y1={y} x2={x2} y2={y2} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />;
      })}
      <polygon points="160,90 170,128 160,166 150,128" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
    </>
  );
}

function StaticEel() {
  const g = 'g-eel';
  return (
    <>
      <Glow id={g} c="#fc6" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      <polyline points="100,160 120,120 140,140 160,100 180,140 200,110 220,150" fill="none" stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <polyline points="110,170 130,130 150,150 170,110 190,150 210,120" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {[0,1,2,3,4].map(i=>{
        const x=110+i*24; const y=80+(i%2)*12;
        return <circle key={i} cx={x} cy={y} r={2.5} fill="currentColor" opacity={0.5} />;
      })}
    </>
  );
}

function HollowSaint() {
  const g = 'g-saint';
  return (
    <>
      <Glow id={g} c="#dde" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.18} />
      <ellipse cx={160} cy={128} rx={26} ry={40} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      {[0,1,2,3,4].map(i=>{
        const r=44+i*10;
        return <ellipse key={i} cx={160} cy={128} rx={r} ry={r*0.55} fill="none" stroke="currentColor" strokeWidth={0.7} opacity={0.3 - i*0.04} />;
      })}
      <circle cx={160} cy={128} r={8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
    </>
  );
}

function GlassOracle() {
  const g = 'g-glass';
  const pts = [0,1,2,3,4].map(i=>{
    const a=(i*72-90)*Math.PI/180;
    return `${160+Math.cos(a)*50},${128+Math.sin(a)*50}`;
  }).join(' ');
  return (
    <>
      <Glow id={g} c="#a8f" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      <polygon points={pts} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <polygon points={pts} fill="none" stroke="currentColor" strokeWidth={0.6} opacity={0.25} transform="rotate(36 160 128)" />
      <circle cx={160} cy={128} r={16} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.4} />
      {[0,1,2,3,4].map(i=>{
        const a=(i*72-90)*Math.PI/180;
        return <line key={i} x1={160} y1={128} x2={160+Math.cos(a)*50} y2={128+Math.sin(a)*50} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />;
      })}
    </>
  );
}

function MarrowChoir() {
  const g = 'g-marrow';
  return (
    <>
      <Glow id={g} c="#d88" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {Array.from({length:7}).map((_,i)=>{
        const y=78+i*16;
        return (
          <path key={i} d={`M 110 ${y} Q 160 ${y-18} 210 ${y}`} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.4} />
        );
      })}
      <line x1={160} y1={70} x2={160} y2={186} stroke="currentColor" strokeWidth={0.8} opacity={0.3} />
      {[0,1,2,3,4,5].map(i=>{
        const y=80+i*18;
        return <circle key={i} cx={135} cy={y} r={2.5} fill="currentColor" opacity={0.35} />;
      })}
      {[0,1,2,3,4,5].map(i=>{
        const y=80+i*18;
        return <circle key={i} cx={185} cy={y} r={2.5} fill="currentColor" opacity={0.35} />;
      })}
    </>
  );
}

function NeonLarva() {
  const g = 'g-neon';
  return (
    <>
      <Glow id={g} c="#8f8" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      {Array.from({length:6}).map((_,i)=>{
        const y=88+i*16;
        return <rect key={i} x={138} y={y} width={44} height={12} rx={6} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />;
      })}
      <line x1={148} y1={70} x2={172} y2={70} stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
      <line x1={140} y1={186} x2={180} y2={186} stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
    </>
  );
}

function DuskRam() {
  const g = 'g-dusk';
  return (
    <>
      <Glow id={g} c="#fa8" />
      <circle cx={160} cy={128} r={88} fill={`url(#${g})`} opacity={0.2} />
      <path d="M 160 168 Q 120 128 160 88 Q 200 128 160 168" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.45} />
      <path d="M 160 158 Q 130 128 160 98 Q 190 128 160 158" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.3} />
      <path d="M 160 148 Q 140 128 160 108 Q 180 128 160 148" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.2} />
      <line x1={160} y1={70} x2={160} y2={88} stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <line x1={148} y1={76} x2={160} y2={88} stroke="currentColor" strokeWidth={1} opacity={0.45} />
      <line x1={172} y1={76} x2={160} y2={88} stroke="currentColor" strokeWidth={1} opacity={0.45} />
    </>
  );
}

function AureateHost() {
  const g = 'g-gold';
  return (
    <>
      <Glow id={g} c="#fc6" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.28} />
      <circle cx={160} cy={128} r={56} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {Array.from({length:12}).map((_,i)=>{
        const a=(i*30)*Math.PI/180;
        return <line key={i} x1={160} y1={128} x2={160+Math.cos(a)*56} y2={128+Math.sin(a)*56} stroke="currentColor" strokeWidth={0.7} opacity={0.35} />;
      })}
      <circle cx={160} cy={128} r={22} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.6} />
      <circle cx={160} cy={128} r={8} fill="currentColor" opacity={0.25} />
      <ellipse cx={160} cy={128} rx={70} ry={20} fill="none" stroke="currentColor" strokeWidth={0.6} opacity={0.25} transform="rotate(30 160 128)" />
      <ellipse cx={160} cy={128} rx={70} ry={20} fill="none" stroke="currentColor" strokeWidth={0.6} opacity={0.25} transform="rotate(-30 160 128)" />
    </>
  );
}

function PaleEngine() {
  const g = 'g-engine';
  return (
    <>
      <Glow id={g} c="#8cf" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.22} />
      <circle cx={160} cy={128} r={60} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={160} cy={128} r={40} fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      <circle cx={160} cy={128} r={20} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.55} />
      {Array.from({length:8}).map((_,i)=>{
        const a=(i*45)*Math.PI/180;
        return <circle key={i} cx={160+Math.cos(a)*60} cy={128+Math.sin(a)*60} r={5} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.35} />;
      })}
      <line x1={160} y1={68} x2={160} y2={188} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <line x1={100} y1={128} x2={220} y2={128} stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
    </>
  );
}

function VesperCrown() {
  const g = 'g-vesper';
  return (
    <>
      <Glow id={g} c="#dbe" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.2} />
      {Array.from({length:7}).map((_,i)=>{
        const a=(i*30-90)*Math.PI/180;
        const x=160+Math.cos(a)*52; const y=128+Math.sin(a)*52;
        return <line key={i} x1={160} y1={128} x2={x} y2={y} stroke="currentColor" strokeWidth={1.2} opacity={0.45} />;
      })}
      <path d="M 120 148 Q 160 188 200 148" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      <circle cx={160} cy={128} r={12} fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.55} />
      <path d="M 140 110 Q 160 70 180 110" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
    </>
  );
}

function Ouroboros9() {
  const g = 'g-ouro';
  return (
    <>
      <Glow id={g} c="#f8a" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.22} />
      <path d="M 160 128 m -48 0 a 48 48 0 1 0 96 0 a 48 48 0 1 0 -96 0" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.5} />
      <path d="M 160 128 m -32 0 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35} />
      <path d="M 160 128 m -16 0 a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0" fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.25} />
      {[0,1,2,3,4,5,6,7,8].map(i=>{
        const a=(i*40)*Math.PI/180;
        return <circle key={i} cx={160+Math.cos(a)*58} cy={128+Math.sin(a)*58} r={2.5} fill="currentColor" opacity={0.5} />;
      })}
      <circle cx={160} cy={128} r={4} fill="currentColor" opacity={0.7} />
    </>
  );
}

function LastCell() {
  const g = 'g-cell';
  return (
    <>
      <Glow id={g} c="#f88" />
      <circle cx={160} cy={128} r={90} fill={`url(#${g})`} opacity={0.22} />
      <circle cx={138} cy={128} r={26} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <circle cx={182} cy={128} r={26} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.45} />
      <line x1={164} y1={128} x2={156} y2={128} stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      {[0,1,2,3,4,5,6,7].map(i=>{
        const a=(i*45)*Math.PI/180;
        return <circle key={i} cx={160+Math.cos(a)*72} cy={128+Math.sin(a)*72} r={2} fill="currentColor" opacity={0.3} />;
      })}
      <path d="M 160 60 L 160 70 M 160 186 L 160 196 M 92 128 L 102 128 M 218 128 L 228 128" stroke="currentColor" strokeWidth={0.8} opacity={0.25} />
    </>
  );
}
