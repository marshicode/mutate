import { useState, useMemo } from 'react';
import { byId } from '../data/cards';
import type { CardDef, Rarity } from '../data/cards';
import { RARITY_ORDER, nextRarity } from '../data/odds';
import { useAppState, useActions } from '../store';
import { Card, CardMini } from '../components/Card';
import { canFuse } from '../lib/game';

export function FusionScreen() {
  const { state } = useAppState();
  const { fuse, toast } = useActions();
  const [selectedRarity, setSelectedRarity] = useState<Rarity>('common');
  const [selectedUids, setSelectedUids] = useState<string[]>([]);

  const inventory = state.game?.inventory ?? [];

  const byRarity = useMemo(() => {
    const map: Record<string, typeof inventory> = {};
    for (const r of RARITY_ORDER) map[r] = [];
    for (const o of inventory) {
      if (!map[o.rarity]) map[o.rarity] = [];
      map[o.rarity]!.push(o);
    }
    return map;
  }, [inventory]);

  const candidates = byRarity[selectedRarity] ?? [];
  const next = nextRarity(selectedRarity);

  // group duplicate copies so the tray shows one tile per character
  const grouped = useMemo(() => {
    const map = new Map<string, { card: CardDef; uids: string[] }>();
    for (const item of candidates) {
      const card = byId[item.cardId];
      if (!card) continue;
      const entry = map.get(card.id) ?? { card, uids: [] };
      entry.uids.push(item.uid);
      map.set(card.id, entry);
    }
    return [...map.values()];
  }, [candidates]);

  const select = (uid: string) => {
    if (selectedUids.includes(uid)) {
      setSelectedUids(prev => prev.filter(u => u !== uid));
      return;
    }
    if (selectedUids.length >= 3) return;
    setSelectedUids(prev => [...prev, uid]);
  };

  const check = canFuse(inventory, selectedUids);

  const doFuse = async () => {
    if (!check.ok) { toast(check.error, 'error'); return; }
    await fuse(selectedUids);
    setSelectedUids([]);
  };

  return (
    <div style={{ animation: 'fadeIn .4s ease' }}>
      <h1 style={{ margin: '0 0 4px', fontSize: 32, letterSpacing:'-.02em' }}>Fusion</h1>
      <p style={{ margin:'0 0 16px', color:'var(--ink-3)', fontSize:14 }}>Splice 3 specimens of the same rarity into a guaranteed higher rarity specimen.</p>

      <div style={{ display:'flex', gap:8, marginBottom:16, flexWrap:'wrap' }}>
        {RARITY_ORDER.map(r => (
          <button key={r} className="chip" aria-pressed={selectedRarity===r} onClick={() => { setSelectedRarity(r); setSelectedUids([]); }} style={{ color: selectedRarity===r ? `var(--c-${r})` : undefined }}>
            {r} <span style={{ color:'var(--ink-3)', fontWeight:400 }}>({(byRarity[r] ?? []).length})</span>
          </button>
        ))}
      </div>

      <div className="fusion">
        <div className="fusion__stage">
          <div className="fusion__slots">
            {[0,1,2].map(i => {
              const uid = selectedUids[i];
              const item = uid ? inventory.find(x => x.uid === uid) : undefined;
              const card = item ? byId[item.cardId] : undefined;
              return (
                <div key={i} className={`fusion__slot ${card ? 'has-card' : ''}`} onClick={() => uid && select(uid)}>
                  {card ? (
                    <div style={{ width:'100%' }}>
                      <Card card={card} size="sm" />
                    </div>
                  ) : (
                    <span>EMPTY</span>
                  )}
                </div>
              );
            })}
            <div className="fusion__arrow">→</div>
            <div className={`fusion__result ${check.ok ? 'revealed' : ''}`}>
              {check.ok && next ? (
                <div style={{ textAlign:'center' }}>
                  <div className="label" style={{ marginBottom:6, color:'var(--accent)' }}>GUARANTEED</div>
                  <div style={{ fontWeight:700, color:`var(--c-${next})` }}>{next.toUpperCase()}</div>
                </div>
              ) : (
                <span className="label">OUTPUT</span>
              )}
            </div>
          </div>
          <button className="btn btn--primary" style={{ width:'100%', marginTop:12 }} disabled={!check.ok || state.loading} onClick={doFuse}>
            {state.loading ? 'SPLICING…' : `SPLICE 3 → 1`}
          </button>
          {selectedRarity === 'mythic' && (
            <div style={{ marginTop:8, fontSize:12, color:'var(--danger)' }}>Mythic specimens are apex — they cannot be spliced.</div>
          )}
        </div>

        <div className="fusion__tray">
          <h3 className="label">Inventory — {selectedRarity}</h3>
          <div className="fusion__list">
            {grouped.map(entry => {
              const selectedCount = entry.uids.filter(u => selectedUids.includes(u)).length;
              const remaining = entry.uids.filter(u => !selectedUids.includes(u));
              return (
                <div
                  key={entry.card.id}
                  className={`tray-thumb ${selectedCount > 0 ? 'selected' : ''} ${remaining.length === 0 ? 'disabled' : ''}`}
                  onClick={() => remaining[0] && select(remaining[0])}
                  title={`${entry.card.name} — ${entry.uids.length} owned`}
                >
                  <CardMini card={entry.card} count={entry.uids.length} />
                </div>
              );
            })}
            {grouped.length === 0 && <div style={{ color:'var(--ink-3)', fontSize:12 }}>No specimens of this rarity.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
