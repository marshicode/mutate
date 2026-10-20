import { useAppState, useActions } from '../store';

export function Sidebar() {
  const { state } = useAppState();
  const { setScreen } = useActions();
  const profile = state.game?.profile;

  const items = [
    { key: 'packs' as const, label: 'Packs', icon: <PackIcon /> },
    { key: 'binder' as const, label: 'Binder', icon: <BinderIcon /> },
    { key: 'fusion' as const, label: 'Fusion', icon: <FusionIcon /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <svg width="28" height="28" viewBox="0 0 64 64" fill="none"><rect fill="#07080a" width="64" height="64" rx="14"/><path d="M20 48V22l12-8 12 8v26" stroke="#c9f75a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="sidebar__wordmark">MUTATE</span>
      </div>
      <div className="sidebar__tagline">Specimen Exchange</div>
      <nav className="sidebar__nav" aria-label="Primary">
        {items.map(it => (
          <button
            key={it.key}
            className="sidebar__item"
            aria-current={state.screen === it.key ? 'page' : undefined}
            onClick={() => setScreen(it.key)}
          >
            {it.icon}
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar__wallet">
        <div className="wallet__row">
          <span className="wallet__label">Credits</span>
          <span className="wallet__val">{profile ? profile.credits.toLocaleString() : '—'}</span>
        </div>
        <div className="wallet__row">
          <span className="wallet__label">Residue</span>
          <span className="wallet__val">{profile ? profile.residue.toLocaleString() : '—'}</span>
        </div>
      </div>
      <div className="sidebar__user">
        <div className={`user__dot ${state.api.mode}`} />
        <div>
          <div className="user__name">{profile?.handle ?? 'Guest'}</div>
          <div className="user__mode">{state.api.mode === 'demo' ? 'Demo save' : 'Cloud save'}</div>
        </div>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  const { state } = useAppState();
  const p = state.game?.profile;
  return (
    <header className="mob-header">
      <div className="mob-header__title">MUTATE</div>
      <div className="mob-header__right">
        <span className="text-accent" style={{ fontWeight:700 }}>{p ? p.credits.toLocaleString() : '—'}</span>
        <span style={{ color:'var(--ink-3)' }}>CR</span>
      </div>
    </header>
  );
}

export function BottomNav() {
  const { state } = useAppState();
  const { setScreen } = useActions();
  const items = [
    { key: 'packs' as const, label: 'Packs', icon: <PackIcon /> },
    { key: 'binder' as const, label: 'Binder', icon: <BinderIcon /> },
    { key: 'fusion' as const, label: 'Fusion', icon: <FusionIcon /> },
  ];
  return (
    <nav className="bottom-nav" aria-label="Mobile">
      {items.map(it => (
        <button key={it.key} className="bottom-nav__item" aria-current={state.screen === it.key ? 'page' : undefined} onClick={() => setScreen(it.key)}>
          {it.icon}
          <span>{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

function PackIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>; }
function BinderIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>; }
function FusionIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>; }
