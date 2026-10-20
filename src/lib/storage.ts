import type { GameState } from './game';

const KEY = 'mutate_demo_v1';

export function saveDemo(state: GameState) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
}

export function loadDemo(): GameState | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameState;
  } catch { return null; }
}

export function clearDemo() {
  try { localStorage.removeItem(KEY); } catch {}
}
