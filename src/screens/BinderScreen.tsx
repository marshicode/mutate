import { useState, useMemo } from 'react';
import { CARDS } from '../data/cards';
import type { CardDef, Rarity } from '../data/cards';
import { useAppState } from '../store';
import { Card } from '../components/Card';

const RARITIES: Rarity[] = ['common','rare','epic','legendary','mythic'];

export function BinderScreen() {
  const { state } = useAppState();
  const [filter, setFilter] = useState<Rarity | 'all'>('all');
  const [query, setQuery] = useState('');
  const [modalCard, setModalCard] = useState<CardDef | null>(null);

  const inventory = state.game?.inventory ?? [];

  const ownedMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const o of inventory) {
      map.set(o.cardId, (map.get(o.cardId) ?? 0) + 1);
    }
    return map;
  }, [inventory]);

  const visible = useMemo(() => {
    return CARDS.filter(c => {
      if (filter !== 'all' && c.rarity !== filter) return false;
      if (query.trim() && !c.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [filter, query]);

  const ownedCount = useMemo(() => CARDS.filter(c => (ownedMap.get(c.id) ?? 0) > 0).length, [ownedMap]);
  const total = CARDS.length;

  return (
    <div style={{ animation: 'fadeIn .4s ease' }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:12 }}>
        <div>
          <h1 style={{ margin: '0 0 4px', fontSize: 32, letterSpacing:'-.02em' }}>Binder</h1>
          <p style={{ margin:0, color:'var(--ink-3)', fontSize:14 }}>{ownedCount}/{total} specimens collected</p>
        </div>
      </div>

      <div className="binder__toolbar">
        <input className="binder__search" placeholder="Search specimens…" value={query} onChange={e=>setQuery(e.target.value)} />
        <div className="binder__chips">
          <button className="chip" aria-pressed={filter==='all'} onClick={()=>setFilter('all')}>All</button>
          {RARITIES.map(r => (
            <button key={r} className="chip" aria-pressed={filter===r} onClick={()=>setFilter(r)} style={{ color: filter===r ? `var(--c-${r})` : undefined }}>{r}</button>
          ))}
        </div>
      </div>

      <div className="binder__grid">
        {visible.map(card => {
          const count = ownedMap.get(card.id) ?? 0;
          const locked = count === 0;
          return (
            <div key={card.id} className={`binder__card ${locked ? 'locked' : ''}`} onClick={() => !locked && setModalCard(card)}>
              <div className="card-wrap">
                <Card card={card} size="sm" dim={locked} />
              </div>
              {!locked && <div className="count">×{count}</div>}
            </div>
          );
        })}
      </div>

      {modalCard && (
        <div className="overlay" onClick={() => setModalCard(null)}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>
            <div className="modal__head">
              <span className="label">Specimen detail</span>
              <button className="btn btn--ghost" onClick={() => setModalCard(null)} aria-label="Close">✕</button>
            </div>
            <div className="modal__body" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, alignItems:'start' }}>
              <div>
                <Card card={modalCard} size="md" holo />
              </div>
              <div>
                <h2 style={{ margin:'0 0 4px', fontSize:22 }}>{modalCard.name}</h2>
                <p style={{ margin:'0 0 12px', color:'var(--ink-2)', fontSize:13 }}>{modalCard.epithet}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:8, fontSize:13 }}>
                  <div><span className="label">Rarity</span> <span style={{ color:`var(--c-${modalCard.rarity})`, fontWeight:700 }}>{modalCard.rarity.toUpperCase()}</span></div>
                  <div><span className="label">Strain</span> {modalCard.strain}</div>
                  <div><span className="label">Potency</span> {modalCard.potency}</div>
                  <div><span className="label">Stability</span> {modalCard.stability}%</div>
                  <div style={{ marginTop:6, color:'var(--ink-3)', fontSize:12, fontStyle:'italic' }}>{modalCard.flavor}</div>
                </div>
                <div style={{ marginTop:14, fontFamily:'var(--mono)', fontSize:12, color:'var(--ink-3)' }}>
                  Owned: <span style={{ color:'var(--ink)', fontWeight:700 }}>{ownedMap.get(modalCard.id) ?? 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
