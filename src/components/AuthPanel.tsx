import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAppState } from '../store';

export function AuthPanel() {
  const { state, dispatch } = useAppState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    if (state.authTab === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else dispatch({ type: 'toast', message: 'Check your email to confirm.' });
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      else dispatch({ type: 'setAuth', open: false });
    }
    setBusy(false);
  };

  if (!state.authOpen) return null;

  return (
    <div className="overlay" onClick={() => dispatch({ type: 'setAuth', open: false })}>
      <div className="modal auth" onClick={e => e.stopPropagation()}>
        <div className="modal__head">
          <h3 style={{ margin:0, fontSize:16 }}>{state.authTab === 'signin' ? 'Sign in' : 'Create account'}</h3>
          <button className="btn btn--ghost" onClick={() => dispatch({ type: 'setAuth', open: false })} aria-label="Close">✕</button>
        </div>
        <div className="modal__body">
          <div className="auth__tabs">
            <button className="auth__tab" aria-selected={state.authTab==='signin'} onClick={() => dispatch({ type:'setAuth', open:true, tab:'signin' })}>Sign in</button>
            <button className="auth__tab" aria-selected={state.authTab==='signup'} onClick={() => dispatch({ type:'setAuth', open:true, tab:'signup' })}>Sign up</button>
          </div>
          <form onSubmit={submit}>
            <div className="auth__field">
              <label>Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" />
            </div>
            <div className="auth__field">
              <label>Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} placeholder="••••••" />
            </div>
            <button className="btn btn--primary" style={{ width:'100%' }} disabled={busy}>
              {busy ? '…' : (state.authTab==='signin' ? 'Sign in' : 'Create account')}
            </button>
          </form>
          <p className="auth__hint">{state.api.mode==='demo' ? 'Demo saves stay local. Sign in to persist to the cloud.' : ''}</p>
        </div>
      </div>
    </div>
  );
}
