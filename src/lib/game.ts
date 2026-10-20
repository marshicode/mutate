import { rollPack as _rollPack, fuseRoll, nextRarity, RESIDUE_PER_RARITY, type PackDef } from '../data/odds';
import type { CardDef, Rarity } from '../data/cards';
import { CARDS } from '../data/cards';

export interface OwnedCard {
  uid: string;
  cardId: string;
  rarity: Rarity;
  acquiredAt: number;
  source: string;
}

export interface Profile {
  handle: string;
  credits: number;
  residue: number;
  packsOpened: number;
  pity: number;
}

export interface ActivityEntry {
  id: string;
  type: 'pack' | 'fusion' | 'recycle';
  label: string;
  ts: number;
}

export interface GameState {
  profile: Profile;
  inventory: OwnedCard[];
  activity: ActivityEntry[];
}

export type OpenResult = { cards: CardDef[]; state: GameState; pityTriggered: boolean };
export type FuseResult = { card: CardDef; state: GameState };

export function createDefaultState(): GameState {
  return {
    profile: { handle: 'ANONYMOUS', credits: 1500, residue: 40, packsOpened: 0, pity: 0 },
    inventory: seedInventory(),
    activity: [],
  };
}

function seedInventory(): OwnedCard[] {
  // seed a starter collection so the binder is never empty
  const seedIds: { cardId: string; source: string }[] = [
    { cardId: 'troll', source: 'starter' },
    { cardId: 'andy', source: 'starter' },
    { cardId: 'slerf', source: 'starter' },
    { cardId: 'popcat', source: 'starter' },
    { cardId: 'wojak', source: 'starter' },
    { cardId: 'trump', source: 'starter' },
    { cardId: 'doge', source: 'starter' },
    { cardId: 'troll', source: 'starter' },
    { cardId: 'andy', source: 'starter' },
  ];
  return seedIds.map((s, i) => ({
    uid: `s${i}`,
    cardId: s.cardId,
    rarity: CARDS.find(c => c.id === s.cardId)!.rarity,
    acquiredAt: Date.now() - 1000 * 60 * 60 * (i + 1),
    source: s.source,
  }));
}

export function openPack(state: GameState, pack: PackDef, rng: () => number, currency: 'credits' | 'residue'): OpenResult | { error: string } {
  const costKey = currency === 'credits' ? 'costCredits' : 'costResidue';
  const balance = state.profile[currency === 'credits' ? 'credits' : 'residue'];
  if (balance < pack[costKey]) return { error: `Not enough ${currency}.` };

  const { cards, pityTriggered } = _rollPack(pack, rng, state.profile.pity);
  const nextCredits = state.profile.credits - (currency === 'credits' ? pack.costCredits : 0);
  const nextResidue = state.profile.residue - (currency === 'residue' ? pack.costResidue : 0);
  const nextPity = pityTriggered ? 0 : (pack.id === 'spore' ? state.profile.pity + 1 : state.profile.pity);
  const nextPacks = state.profile.packsOpened + 1;

  const ownedIds = new Set(state.inventory.map(x => x.cardId));
  let extraResidue = 0;

  const newInventory = [...state.inventory];
  for (const c of cards) {
    newInventory.push({
      uid: `u${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
      cardId: c.id,
      rarity: c.rarity,
      acquiredAt: Date.now(),
      source: pack.id,
    });
    if (ownedIds.has(c.id)) {
      extraResidue += Math.round(RESIDUE_PER_RARITY[c.rarity] * 0.5);
    } else {
      ownedIds.add(c.id);
    }
  }

  const activity: ActivityEntry = {
    id: `a${Date.now()}`,
    type: 'pack',
    label: `Opened ${pack.name} — ${cards.map(c => c.name).join(', ')}`,
    ts: Date.now(),
  };

  const nextState: GameState = {
    profile: {
      ...state.profile,
      credits: nextCredits,
      residue: nextResidue + extraResidue,
      packsOpened: nextPacks,
      pity: nextPity,
    },
    inventory: newInventory,
    activity: [activity, ...state.activity].slice(0, 50),
  };

  return { cards, state: nextState, pityTriggered };
}

export function canFuse(inventory: OwnedCard[], uids: string[]): { ok: true; targetRarity: Rarity } | { ok: false; error: string } {
  if (uids.length !== 3) return { ok: false, error: 'Select exactly 3 specimens.' };
  const selected = inventory.filter(x => uids.includes(x.uid));
  if (selected.length !== 3) return { ok: false, error: 'Invalid selection.' };
  const rarities = new Set(selected.map(x => x.rarity));
  if (rarities.size !== 1) return { ok: false, error: 'All 3 must be the same rarity.' };
  const r = selected[0]!.rarity;
  if (r === 'mythic') return { ok: false, error: 'Mythic specimens cannot be spliced.' };
  const nr = nextRarity(r);
  if (!nr) return { ok: false, error: 'Cannot ascend further.' };
  return { ok: true, targetRarity: nr };
}

export function performFusion(state: GameState, uids: string[], rng: () => number): FuseResult | { error: string } {
  const check = canFuse(state.inventory, uids);
  if (!check.ok) return { error: check.error };
  const targetRarity = (check as { ok: true; targetRarity: Rarity }).targetRarity;
  const card = fuseRoll(targetRarity, rng);
  const nextInventory = state.inventory.filter(x => !uids.includes(x.uid));
  nextInventory.push({
    uid: `u${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    cardId: card.id,
    rarity: card.rarity,
    acquiredAt: Date.now(),
    source: 'fusion',
  });
  const activity: ActivityEntry = {
    id: `a${Date.now()}`,
    type: 'fusion',
    label: `Fused 3 specimens into ${card.name} (${card.rarity.toUpperCase()})`,
    ts: Date.now(),
  };
  const nextState: GameState = {
    ...state,
    inventory: nextInventory,
    activity: [activity, ...state.activity].slice(0, 50),
  };
  return { card, state: nextState };
}
