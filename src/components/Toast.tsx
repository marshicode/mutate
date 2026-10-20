import { useEffect } from 'react';
import { useAppState } from '../store';

export function Toasts() {
  const { state, dispatch } = useAppState();
  return (
    <div className="toasts" aria-live="polite" aria-atomic="true">
      {state.toast.map(t => (
        <ToastItem key={t.id} toast={t} onDismiss={() => dispatch({ type: 'dismissToast', id: t.id })} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDismiss }: { toast: { id: string; message: string; type?: 'info' | 'error' }; onDismiss: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3200);
    return () => clearTimeout(timer);
  }, [onDismiss]);
  return (
    <div className={`toast ${toast.type === 'error' ? 'toast--error' : ''}`}>
      {toast.message}
    </div>
  );
}
