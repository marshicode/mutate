import { useEffect, useState, useCallback } from 'react';
import { useAppState } from '../store';
import { cardArtJSX } from '../data/cards';
import type { CardDef } from '../data/cards';

export function PackOpening() {
  const { state, dispatch } = useAppState();
  const [step, setStep] = useState<'sealed' | 'tear' | 'reveal' | 'summary'>('sealed');
  const [revealed, setRevealed] = useState(0);
  const data = state.reveal;

  useEffect(() => {
    if (data && step === 'sealed') {
      const t = setTimeout(() => setStep('tear'), 800);
      return () => clearTimeout(t);
    }
  }, [data, step]);

  useEffect(() => {
    if (step === 'tear') {
      const t = setTimeout(() => setStep('reveal'), 900);
      return () => clearTimeout(t);
    }
  }, [step]);

  const revealNext = useCallback(() => {
    if (!data) return;
    if (revealed < data.cards.length) {
      setRevealed(r => r + 1);
    } else {
      setStep('summary');
    }
  }, [data, revealed]);

  const close = useCallback(() => {
    dispatch({ type: 'setReveal', reveal: null });
    setStep('sealed');
    setRevealed(0);
  }, [dispatch]);

  if (!data) return null;

  return (
    <div className="pack-opening" onClick={step === 'reveal' ? revealNext : undefined}>
      <div className="pack-opening__center">
        {step === 'sealed' && (
          <div style={{ animation: 'float 3s ease-in-out infinite' }}>
            <div className="pack" style={{ width: 220, margin: '0 auto', borderColor: 'var(--accent)' }}>
              <div className="pack__crimp top" />
              <div className="pack__crimp bottom" />
              <div className="pack__band" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
              <div className="pack__inner">
                <div className="pack__title" style={{ color:'var(--accent)' }}>SEALED</div>
                <div className="pack__count">{data.cards.length}</div>
                <div className="pack__note">Tap to tear</div>
              </div>
            </div>
          </div>
        )}

        {step === 'tear' && (
          <div style={{ animation: 'shake .5s ease' }}>
            <div className="pack" style={{ width: 220, margin: '0 auto', borderColor: 'var(--accent)' }}>
              <div className="pack__inner">
                <div className="pack__title" style={{ color:'var(--accent)' }}>OPENING</div>
              </div>
            </div>
            <div style={{ marginTop: 12, color:'var(--accent)', fontFamily:'var(--mono)', fontSize:12, letterSpacing:'.1em' }}>TEARING SEAL…</div>
          </div>
        )}

        {step === 'reveal' && (
          <>
            <div style={{ fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.12em', color:'var(--ink-3)', marginBottom:12 }}>
              TAP TO REVEAL {revealed}/{data.cards.length}
            </div>
            <div className="pack-opening__cards">
              {data.cards.map((card, i) => (
                <div key={i} className="pack-opening__card">
                  <div style={{ perspective: 1000 }}>
                    <div
                      className="card"
                      data-rarity={card.rarity}
                      data-holo={card.rarity === 'legendary' || card.rarity === 'mythic'}
                      style={{
                        transform: i < revealed ? 'rotateY(0deg)' : 'rotateY(180deg)',
                        transition: 'transform .7s cubic-bezier(.22,1,.36,1)',
                        aspectRatio: '5/7.2',
                      }}
                    >
                      {i < revealed ? (
                        <CardLite card={card} />
                      ) : (
                        <div className="card-back" />
                      )}
                    </div>
                  </div>
                  {i < revealed && (
                    <div style={{ textAlign:'center', marginTop:8, fontFamily:'var(--mono)', fontSize:11, color:'var(--ink-3)' }}>
                      {card.rarity.toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn--ghost" onClick={(e) => { e.stopPropagation(); setRevealed(data.cards.length); }}>Reveal all</button>
            </div>
          </>
        )}

        {step === 'summary' && (
          <div style={{ textAlign:'center', animation: 'popIn .4s ease' }}>
            <div style={{ fontSize: 28, fontWeight:700, marginBottom:8 }}>Pull complete</div>
            <div style={{ color:'var(--ink-3)', fontSize:13, marginBottom:20 }}>
              {data.pityTriggered && <span className="text-accent" style={{ display:'block', marginBottom:4 }}>PITY TRIGGERED — EPIC GUARANTEED</span>}
              {data.cards.map(c => c.name).join(' · ')}
            </div>
            <button className="btn btn--primary" onClick={close}>Add to binder</button>
          </div>
        )}
      </div>
    </div>
  );
}

function CardLite({ card }: { card: CardDef }) {
  return (
    <div className="card__stage">
      <div className="card__band" />
      <div className="card__art">
        <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
          {cardArtJSX(card.artKey)}
        </svg>
      </div>
      <div className="card__meta">
        <h3 className="card__name">{card.name}</h3>
      </div>
      <div className="card__band bottom" />
    </div>
  );
}
