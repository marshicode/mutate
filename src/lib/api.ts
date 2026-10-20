import type { CardDef } from '../data/cards';
import type { PackDef } from '../data/odds';
import type { FuseResult, GameState, OpenResult, OwnedCard } from './game';
import { createDefaultState, openPack as gameOpenPack, performFusion } from './game';
import { loadDemo, saveDemo } from './storage';
import { getDemoRng } from './rng';
import { supabase, isSupabaseConfigured } from './supabase';

export interface GameApi {
  mode: 'demo' | 'cloud';
  load(): Promise<GameState>;
  openPack(pack: PackDef, currency: 'credits' | 'residue'): Promise<OpenResult | { error: string }>;
  fuse(uids: string[]): Promise<FuseResult | { error: string }>;
  reset?(): Promise<GameState>;
}

export function createApi(mode: 'demo' | 'cloud'): GameApi {
  if (mode === 'cloud' && isSupabaseConfigured) return new RemoteApi();
  return new DemoApi();
}

class DemoApi implements GameApi {
  mode: 'demo' = 'demo';
  private rng = getDemoRng();

  async load(): Promise<GameState> {
    return loadDemo() ?? createDefaultState();
  }

  async openPack(pack: PackDef, currency: 'credits' | 'residue'): Promise<OpenResult | { error: string }> {
    const state = await this.load();
    const result = gameOpenPack(state, pack, this.rng, currency);
    if ('error' in result) return result;
    saveDemo(result.state);
    return result;
  }

  async fuse(uids: string[]): Promise<FuseResult | { error: string }> {
    const state = await this.load();
    const result = performFusion(state, uids, this.rng);
    if ('error' in result) return result;
    saveDemo(result.state);
    return result;
  }

  async reset(): Promise<GameState> {
    const s = createDefaultState();
    saveDemo(s);
    return s;
  }
}

class RemoteApi implements GameApi {
  mode: 'cloud' = 'cloud';

  async load(): Promise<GameState> {
    if (!supabase) throw new Error('Supabase not configured');
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    const { data: cards } = await supabase.from('cards').select('*').eq('user_id', user.id).order('acquired_at', { ascending: false });
    const { data: activity } = await supabase.from('activity').select('*').eq('user_id', user.id).order('ts', { ascending: false }).limit(50);
    return {
      profile: {
        handle: profile?.handle ?? 'USER',
        credits: profile?.credits ?? 0,
        residue: profile?.residue ?? 0,
        packsOpened: profile?.packs_opened ?? 0,
        pity: profile?.pity ?? 0,
      },
      inventory: (cards ?? []).map((c: any): OwnedCard => ({
        uid: c.uid,
        cardId: c.card_id,
        rarity: c.rarity,
        acquiredAt: new Date(c.acquired_at).getTime(),
        source: c.source,
      })),
      activity: (activity ?? []).map((a: any) => ({ id: a.id, type: a.type, label: a.label, ts: new Date(a.ts).getTime() })),
    };
  }

  async openPack(pack: PackDef, currency: 'credits' | 'residue'): Promise<OpenResult | { error: string }> {
    if (!supabase) return { error: 'Supabase not configured' };
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    if (!token) return { error: 'Not authenticated' };
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/open-pack`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ packId: pack.id, currency }),
    });
    if (!res.ok) return { error: (await res.json()).error ?? 'Server error' };
    const data = await res.json();
    const state = await this.load();
    return { cards: data.cards as CardDef[], state, pityTriggered: data.pityTriggered ?? false };
  }

  async fuse(uids: string[]): Promise<FuseResult | { error: string }> {
    if (!supabase) return { error: 'Supabase not configured' };
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    if (!token) return { error: 'Not authenticated' };
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fuse-cards`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ uids }),
    });
    if (!res.ok) return { error: (await res.json()).error ?? 'Server error' };
    const data = await res.json();
    const state = await this.load();
    return { card: data.card as CardDef, state };
  }
}
