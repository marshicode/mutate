import { useRef, useCallback, type PointerEvent } from 'react';
import { CARDS, cardArtJSX } from '../data/cards';
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

  const num = String(CARDS.findIndex(c => c.id === card.id) + 1).padStart(3, '0');

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
            <svg viewBox="60 20 200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              {cardArtJSX(card.artKey)}
            </svg>
            <div className="card__scan" />
          </div>
          <div className="card__meta">
            <h3 className="card__name">{card.name}</h3>
            <dl className="card__stats">
              <div>
                <dt>POTENCY</dt>
                <dd>{card.potency}</dd>
              </div>
              <div>
                <dt>STABILITY</dt>
                <dd>{card.stability}%</dd>
              </div>
            </dl>
          </div>
          <div className="card__foot">
            <span>{card.strain}</span>
            <span>{num}</span>
          </div>
          <div className="card__band bottom" />
        </div>
      </div>
    </div>
  );
}

export function CardMini({ card, count }: { card: CardDef; count?: number }) {
  return (
    <div className="mini" data-rarity={card.rarity}>
      <div className="mini__art">
        <svg viewBox="60 20 200 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {cardArtJSX(card.artKey)}
        </svg>
        {count !== undefined && count > 1 && <span className="mini__count">×{count}</span>}
      </div>
      <div className="mini__name">{card.name}</div>
    </div>
  );
}

export function CardBackFace() {
  return (
    <div className="card-back">
      <div className="card-back__ring" />
      <div className="card-back__ring inner" />
      <svg className="card-back__sigil" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M20 48V22l12-8 12 8v26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 14v26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
      </svg>
      <span className="card-back__mark">MUTATE</span>
      <span className="card-back__sub">SPECIMEN</span>
    </div>
  );
}

export function CardBack({ className = '' }: { className?: string }) {
  return (
    <div className={`card-wrap ${className}`}>
      <div className="card" data-rarity="common">
        <div className="card__stage">
          <CardBackFace />
        </div>
      </div>
    </div>
  );
}
