import type { PackDef } from '../data/odds';

export function PackCard({ pack, onOpen, disabled, currency }: {
  pack: PackDef; onOpen: (currency: 'credits' | 'residue') => void; disabled?: boolean; currency: 'credits' | 'residue';
}) {
  const cost = currency === 'credits' ? pack.costCredits : pack.costResidue;
  const currencyLabel = currency === 'credits' ? 'CR' : 'RZ';
  return (
    <div className="pack" style={{ borderColor: pack.accent }}>
      <div className="pack__crimp top" />
      <div className="pack__crimp bottom" />
      <div className="pack__band" style={{ background: `linear-gradient(90deg, transparent, ${pack.accent}, transparent)` }} />
      <div className="pack__inner">
        <div className="pack__title" style={{ color: pack.accent }}>{pack.name}</div>
        <div className="pack__count">{pack.cards}</div>
        <div className="pack__note">{pack.floorRarity ? `Floor: ${pack.floorRarity.toUpperCase()}` : 'Standard odds'}</div>
      </div>
      <div className="pack__price">
        <button className="btn btn--primary" disabled={disabled} onClick={() => onOpen(currency)}>
          OPEN — <span>{cost}</span> {currencyLabel}
        </button>
      </div>
    </div>
  );
}
