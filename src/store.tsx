import React, { createContext, useContext, useReducer, useEffect, useCallback, useMemo } from 'react';
import type { CardDef } from './data/cards';
import type { PackDef } from './data/odds';
import type { GameState } from './lib/game';
import { createApi, type GameApi } from './lib/api';
import { supabase } from './lib/supabase';

type Screen = 'packs' | 'binder' | 'fusion';

interface Toast { id: string; message: string; type?: 'info' | 'error'; }

interface AppState {
  screen: Screen;
  game: GameState | null;
  loading: boolean;
  api: GameApi;
  toast: Toast[];
  reveal: { cards: CardDef[]; pityTriggered: boolean } | null;
  fusionAnim: { card: CardDef } | null;
  authOpen: boolean;
  authTab: 'signin' | 'signup';
}

type Action =
  | { type: 'setScreen'; screen: Screen }
  | { type: 'setGame'; game: GameState | null }
  | { type: 'setLoading'; loading: boolean }
  | { type: 'setApi'; api: GameApi }
  | { type: 'toast'; message: string; toastType?: 'info' | 'error' }
  | { type: 'dismissToast'; id: string }
  | { type: 'setReveal'; reveal: { cards: CardDef[]; pityTriggered: boolean } | null }
  | { type: 'setFusionAnim'; fusionAnim: { card: CardDef } | null }
  | { type: 'setAuth'; open: boolean; tab?: 'signin' | 'signup' };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'setScreen': return { ...state, screen: action.screen };
    case 'setGame': return { ...state, game: action.game };
    case 'setLoading': return { ...state, loading: action.loading };
    case 'setApi': return { ...state, api: action.api };
    case 'toast':
      return { ...state, toast: [...state.toast, { id: `${Date.now()}_${Math.random()}`, message: action.message, type: action.toastType ?? 'info' }] };
    case 'dismissToast':
      return { ...state, toast: state.toast.filter(t => t.id !== action.id) };
    case 'setReveal': return { ...state, reveal: action.reveal };
    case 'setFusionAnim': return { ...state, fusionAnim: action.fusionAnim };
    case 'setAuth': return { ...state, authOpen: action.open, authTab: action.tab ?? state.authTab };
    default: return state;
  }
}

const initialApi = createApi('demo');

const initialState: AppState = {
  screen: 'packs',
  game: null,
  loading: true,
  api: initialApi,
  toast: [],
  reveal: null,
  fusionAnim: null,
  authOpen: false,
  authTab: 'signin',
};

const StoreContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | null>(null);

export function useAppState() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useAppState outside StoreProvider');
  return ctx;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = useCallback(async () => {
    dispatch({ type: 'setLoading', loading: true });
    try {
      const game = await state.api.load();
      dispatch({ type: 'setGame', game });
    } catch (e) {
      dispatch({ type: 'toast', message: 'Failed to load save.', toastType: 'error' });
      dispatch({ type: 'setGame', game: null });
    } finally {
      dispatch({ type: 'setLoading', loading: false });
    }
  }, [state.api]);

  useEffect(() => { init(); }, [init]);

  // auth state listener
  useEffect(() => {
    if (!supabase) return;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        const api = createApi('cloud');
        dispatch({ type: 'setApi', api });
        api.load().then(g => dispatch({ type: 'setGame', game: g })).catch(() => {});
      } else if (event === 'SIGNED_OUT') {
        const api = createApi('demo');
        dispatch({ type: 'setApi', api });
        api.load().then(g => dispatch({ type: 'setGame', game: g })).catch(() => {});
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useActions() {
  const { state, dispatch } = useAppState();

  const setScreen = useCallback((screen: Screen) => dispatch({ type: 'setScreen', screen }), [dispatch]);

  const openPack = useCallback(async (pack: PackDef, currency: 'credits' | 'residue') => {
    dispatch({ type: 'setLoading', loading: true });
    const result = await state.api.openPack(pack, currency);
    dispatch({ type: 'setLoading', loading: false });
    if ('error' in result) {
      dispatch({ type: 'toast', message: result.error, toastType: 'error' });
      return;
    }
    dispatch({ type: 'setGame', game: result.state });
    dispatch({ type: 'setReveal', reveal: { cards: result.cards, pityTriggered: result.pityTriggered } });
  }, [state.api, dispatch]);

  const fuse = useCallback(async (uids: string[]) => {
    dispatch({ type: 'setLoading', loading: true });
    const result = await state.api.fuse(uids);
    dispatch({ type: 'setLoading', loading: false });
    if ('error' in result) {
      dispatch({ type: 'toast', message: result.error, toastType: 'error' });
      return;
    }
    dispatch({ type: 'setGame', game: result.state });
    dispatch({ type: 'setFusionAnim', fusionAnim: { card: result.card } });
  }, [state.api, dispatch]);

  const toast = useCallback((message: string, toastType?: 'info' | 'error') => {
    dispatch({ type: 'toast', message, toastType });
  }, [dispatch]);

  return useMemo(() => ({ setScreen, openPack, fuse, toast }), [setScreen, openPack, fuse, toast]);
}
