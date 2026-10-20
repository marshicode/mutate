import { StoreProvider, useAppState } from './store';
import { Sidebar, MobileHeader, BottomNav } from './components/Nav';
import { Toasts } from './components/Toast';
import { AuthPanel } from './components/AuthPanel';
import { PackOpening } from './components/PackOpening';
import { FusionStage } from './components/FusionStage';
import { PacksScreen } from './screens/PacksScreen';
import { BinderScreen } from './screens/BinderScreen';
import { FusionScreen } from './screens/FusionScreen';

function AppShell() {
  const { state } = useAppState();

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <MobileHeader />
        <main className="main__content">
          {state.loading && !state.game ? (
            <div style={{ display:'grid', gap:16, marginTop:24 }}>
              <div className="skeleton" style={{ height:180 }} />
              <div className="skeleton" style={{ height:120 }} />
              <div className="skeleton" style={{ height:120 }} />
            </div>
          ) : (
            <>
              {state.screen === 'packs' && <PacksScreen />}
              {state.screen === 'binder' && <BinderScreen />}
              {state.screen === 'fusion' && <FusionScreen />}
            </>
          )}
        </main>
      </div>
      <BottomNav />
      <Toasts />
      <AuthPanel />
      <PackOpening />
      <FusionStage />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppShell />
    </StoreProvider>
  );
}
