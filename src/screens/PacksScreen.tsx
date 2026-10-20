import { useState } from 'react';
import { PACKS } from '../data/odds';
import { useAppState, useActions } from '../store';
import { PackCard } from '../components/PackCard';
import type { PackDef } from '../data/odds';

export function PacksScreen() {
  const { state } = useAppState();
  const { openPack } = useActions();
  const [currency, setCurrency] = useState<Record<string, 'credits' | 'residue'>>({
    spore: 'credits', prime: 'credits', relic: 'credits',
  });

  const profile = state.game?.profile;
  const activity = state.game?.activity ?? [];

  const handleOpen = async (pack: PackDef, cur: 'credits' | 'residue') => {
    await openPack(pack, cur);
  };

  return (
    <div style={{ animation: 'fadeIn .4s ease' }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:8 }}>
        <div>
          <h1 style={{ margin: '0 0 4px', fontSize: 32, letterSpacing:'-.02em' }}>Packs</h1>
          <p style={{ margin:0, color:'var(--ink-3)', fontSize:14 }}>Collect specimens. Splice duplicates. Ascend.</p>
        </div>
        <div style={{ display:'flex', gap:12, fontFamily:'var(--mono)', fontSize:12 }}>
          <span><span className="text-accent" style={{ fontWeight:700 }}>{profile?.credits ?? 0}</span> CR</span>
          <span><span style={{ color:'var(--ink-2)', fontWeight:700 }}>{profile?.residue ?? 0}</span> RZ</span>
        </div>
      </div>

      <div className="pack-grid">
        {PACKS.map(pack => {
          const cur = currency[pack.id] ?? 'credits';
          const cost = cur === 'credits' ? pack.costCredits : pack.costResidue;
          const bal = cur === 'credits' ? (profile?.credits ?? 0) : (profile?.residue ?? 0);
          const can = bal >= cost;
          return (
            <div key={pack.id} style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <PackCard pack={pack} onOpen={(c) => handleOpen(pack, c)} disabled={!can || state.loading} currency={cur} />
              <div style={{ display:'flex', gap:6, justifyContent:'center' }}>
                <button className={`btn ${cur==='credits'?'btn--primary':'btn--ghost'}`} style={{ fontSize:12, padding:'6px 10px' }} onClick={() => setCurrency(v=>({...v,[pack.id]:'credits'}))}>Credits</button>
                <button className={`btn ${cur==='residue'?'btn--primary':'btn--ghost'}`} style={{ fontSize:12, padding:'6px 10px' }} onClick={() => setCurrency(v=>({...v,[pack.id]:'residue'}))}>Residue</button>
              </div>
            </div>
          );
        })}
      </div>

      <section style={{ marginBottom:28 }}>
        <h2 className="label" style={{ marginBottom:10 }}>Odds</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16 }}>
          {PACKS.map(pack => (
            <div key={pack.id} style={{ background:'var(--panel)', border:'1px solid var(--line)', borderRadius:'var(--r)', padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:8 }}>{pack.name}</div>
              <table className="odds">
                <thead>
                  <tr><th>Rarity</th><th style={{ textAlign:'right' }}>%</th></tr>
                </thead>
                <tbody>
                  {(['common','rare','epic','legendary','mythic'] as const).map(r => {
                    const v = pack.odds[r] * 100;
                    if (v === 0) return null;
                    return (
                      <tr key={r}>
                        <td><span className="dot" style={{ background: `var(--c-${r})` }} />{r}</td>
                        <td style={{ textAlign:'right', fontFamily:'var(--mono)' }}>{v.toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {activity.length > 0 && (
        <section>
          <h2 className="label" style={{ marginBottom:10 }}>Recent activity</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {activity.slice(0, 6).map(a => (
              <div key={a.id} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 12px', background:'var(--panel)', border:'1px solid var(--line)', borderRadius:'var(--r-sm)' }}>
                <span style={{ fontSize:13 }}>{a.label}</span>
                <span style={{ fontFamily:'var(--mono)', fontSize:11, color:'var(--ink-3)' }}>{new Date(a.ts).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
