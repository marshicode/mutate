import { useRef, useCallback, type PointerEvent } from 'react';
import { cardArtJSX } from '../data/cards';
import type { CardDef } from '../data/cards';

export function Card({ card, size = 'md', className = '', holo = false, dim = false }: {
  card: CardDef; size?: 'sm' | 'md' | 'lg'; className?: string; holo?: boolean; dim?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 20; // deg
    const ry = (x - 0.5) * 20;
    const gx = `${x * 100}%`;
    const gy = `${y * 100}%`;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--gx', gx);
    el.style.setProperty('--gy', gy);
  }, []);

  const handleLeave = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--gx', '50%');
    el.style.setProperty('--gy', '50%');
  }, []);

  const num = String(CARDS_ORDER.indexOf(card.id) + 1).padStart(3, '0');

  return (
    <div
      className={`card-wrap ${size==='lg'?'card-wrap--lg':''} ${className}`}
      style={{ opacity: dim ? 0.35 : 1, transition: 'opacity .3s' }}
    >
      <div
        ref={wrapRef}
        className="card"
        data-rarity={card.rarity}
        data-holo={holo || card.rarity === 'legendary' || card.rarity === 'mythic'}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <div className="card__stage">
          <div className="card__band" />
          <div className="card__glare" />
          <div className="card__foil" />
          <div className="card__top">
            <span>{num}</span>
            <span className="rarity-text">{card.rarity}</span>
          </div>
          <div className="card__art">
            <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
              {cardArtJSX(card.artKey)}
            </svg>
            <div className="card__scan" />
          </div>
          <div className="card__meta">
            <h3 className="card__name">{card.name}</h3>
            <p className="card__epithet">{card.epithet}</p>
            <dl className="card__stats">
              <div>
                <dt>POTENCY</dt>
                <dd>{card.potency}</dd>
              </div>
              <div>
                <dt>STABILITY</dt>
                <dd>{card.stability}%</dd>
              </div>
              <div>
                <dt>STRAIN</dt>
                <dd>{card.strain}</dd>
              </div>
            </dl>
          </div>
          <div className="card__foot">
            <span>MUTATE</span>
            <span>SPECIMEN {num}</span>
          </div>
          <div className="card__band bottom" />
        </div>
      </div>
    </div>
  );
}

const CARDS_ORDER = [
  'sporeling','cinder-mite','brine-wisp','molt-husk','gritling','pale-midge',
  'chorus-moth','veinwalker','ferro-bloom','static-eel','hollow-saint',
  'glass-oracle','marrow-choir','neon-larva','dusk-ram',
  'aureate-host','pale-engine','vesper-crown',
  'ouroboros-9','last-cell',
];

export function CardBack({ className = '' }: { className?: string }) {
  return (
    <div className={`card-wrap ${className}`}>
      <div className="card" data-rarity="common">
        <div className="card__stage" style={{ display:'grid', placeItems:'center' }}>
          <svg width="80" height="80" viewBox="0 0 64 64" fill="none" opacity="0.12">
            <rect fill="#07080a" width="64" height="64" rx="14"/>
            <path d="M20 48V22l12-8 12 8v26" stroke="#c9f75a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 14v26" stroke="#c9f75a" strokeWidth="4" strokeLinecap="round" opacity=".45"/>
          </svg>
          <div style={{ position:'absolute', inset:0, background:'repeating-conic-gradient(rgba(255,255,255,.03) 0% 5%, transparent 5% 10%)' }} />
        </div>
      </div>
    </div>
  );
}
