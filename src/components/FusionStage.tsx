import { useEffect, useState } from 'react';
import { useAppState } from '../store';
import { Card } from './Card';

export function FusionStage() {
  const { state, dispatch } = useAppState();
  const [step, setStep] = useState<'orbit' | 'flash' | 'result'>('orbit');
  const data = state.fusionAnim;

  useEffect(() => {
    if (!data) return;
    setStep('orbit');
    const t1 = setTimeout(() => setStep('flash'), 1000);
    const t2 = setTimeout(() => setStep('result'), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [data]);

  if (!data) return null;

  return (
    <div className="fusion-overlay">
      {step !== 'result' && (
        <div className="fusion-orbits">
          {[0,1,2].map(i => (
            <div key={i} className="ghost" style={{ animationDelay: `${i * 80}ms` }}>
              <CardBackMini />
            </div>
          ))}
          {step === 'flash' && <div className="fusion-flash" />}
        </div>
      )}

      {step === 'result' && (
        <div style={{ textAlign: 'center', animation: 'popIn .5s ease' }}>
          <div style={{ fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.14em', color:'var(--accent)', marginBottom:12 }}>SPLICE SUCCESSFUL</div>
          <div style={{ width: 240, margin: '0 auto' }}>
            <Card card={data.card} size="lg" holo />
          </div>
          <div style={{ marginTop: 18 }}>
            <button className="btn btn--primary" onClick={() => dispatch({ type: 'setFusionAnim', fusionAnim: null })}>
              Collect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CardBackMini() {
  return (
    <div className="card-wrap">
      <div className="card" data-rarity="common" style={{ aspectRatio:'5/7.2' }}>
        <div className="card__stage" style={{ display:'grid', placeItems:'center' }}>
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" opacity="0.12">
            <rect fill="#07080a" width="64" height="64" rx="14"/>
            <path d="M20 48V22l12-8 12 8v26" stroke="#c9f75a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ position:'absolute', inset:0, background:'repeating-conic-gradient(rgba(255,255,255,.03) 0% 5%, transparent 5% 10%)' }} />
        </div>
      </div>
    </div>
  );
}
