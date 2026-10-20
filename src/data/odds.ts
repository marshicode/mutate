import type { CardDef, Rarity } from './cards';
import { CARDS } from './cards';

export interface PackDef {
  id: string;
  name: string;
  costCredits: number;
  costResidue: number;
  cards: number;
  floorRarity: Rarity | null;
  odds: Record<Rarity, number>;
  accent: string;
}

export const PACKS: PackDef[] = [
  {
    id: 'spore',
    name: 'SPORE PACK',
    costCredits: 120,
    costResidue: 100,
    cards: 3,
    floorRarity: 'rare',
    odds: { common: 0.62, rare: 0.26, epic: 0.09, legendary: 0.026, mythic: 0.004 },
    accent: '#46c8e6',
  },
  {
    id: 'prime',
    name: 'PRIME PACK',
    costCredits: 320,
    costResidue: 260,
    cards: 5,
    floorRarity: 'epic',
    odds: { common: 0, rare: 0.48, epic: 0.34, legendary: 0.14, mythic: 0.04 },
    accent: '#a37bff',
  },
  {
    id: 'relic',
    name: 'RELIC PACK',
    costCredits: 850,
    costResidue: 700,
    cards: 3,
    floorRarity: 'legendary',
    odds: { common: 0, rare: 0, epic: 0, legendary: 0.88, mythic: 0.12 },
    accent: '#f5c451',
  },
];

export const RARITY_ORDER: Rarity[] = ['common','rare','epic','legendary','mythic'];

export function rarityIndex(r: Rarity) { return RARITY_ORDER.indexOf(r); }

export function nextRarity(r: Rarity): Rarity | null {
  const i = rarityIndex(r);
  return i < RARITY_ORDER.length - 1 ? RARITY_ORDER[i+1] : null;
}

export const RESIDUE_PER_RARITY: Record<Rarity, number> = {
  common: 5, rare: 15, epic: 40, legendary: 120, mythic: 300,
};

export function cardsOfRarity(r: Rarity): CardDef[] {
  return CARDS.filter(c => c.rarity === r);
}

export function rollPack(pack: PackDef, rng: () => number, pityCount: number): { cards: CardDef[]; pityTriggered: boolean } {
  const pool = { ...pack.odds };
  let pityTriggered = false;
  if (pack.id === 'spore' && pityCount >= 9) {
    // guarantee epic on the 10th pack
    pool.epic += pool.common + pool.rare;
    pool.common = 0; pool.rare = 0;
    pityTriggered = true;
  }
  const drawn: CardDef[] = [];
  for (let i = 0; i < pack.cards; i++) {
    const r = weightedRarity(pool, rng);
    const candidates = cardsOfRarity(r);
    const card = candidates[Math.floor(rng() * candidates.length)];
    drawn.push(card);
  }
  // floor enforcement
  if (pack.floorRarity) {
    const fi = rarityIndex(pack.floorRarity);
    for (let i = 0; i < drawn.length; i++) {
      if (rarityIndex(drawn[i].rarity) < fi) {
        // re-roll this slot to floor
        const candidates = cardsOfRarity(pack.floorRarity);
        drawn[i] = candidates[Math.floor(rng() * candidates.length)];
      }
    }
  }
  return { cards: drawn, pityTriggered };
}

function weightedRarity(weights: Record<Rarity, number>, rng: () => number): Rarity {
  const entries = Object.entries(weights) as [Rarity, number][];
  const total = entries.reduce((s, [,w]) => s + w, 0);
  let r = rng() * total;
  for (const [rarity, w] of entries) {
    if ((r -= w) <= 0) return rarity;
  }
  return entries[entries.length - 1][0];
}

export function fuseRoll(targetRarity: Rarity, rng: () => number): CardDef {
  const candidates = cardsOfRarity(targetRarity);
  return candidates[Math.floor(rng() * candidates.length)];
}
