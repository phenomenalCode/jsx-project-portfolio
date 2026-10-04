import { Button } from './button.jsx';
import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from './icons.jsx';

// Passcode gate. To change the passcode run: echo -n "NEWCODE" | sha256sum
// Client-side only: a curtain, not a lock.
const PASS_HASH = 'ae1f31e1ba28b07bde594969df8f0121931f39f7e83c632ab974ee5fe1c78245';
const LENGTH = 4;

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const Gate = ({ open, onUnlock }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [opening, setOpening] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { const before = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = before; }; }, []);

  const check = async (code) => {
    if (opening || open || !/^\d{4}$/.test(code)) return;
    if ((await sha256(code.trim())) === PASS_HASH) {
      inputRef.current?.blur();
      setOpening(true);
      setTimeout(onUnlock, 450);
    } else {
      setError('Wrong password. Try again.');
      setValue('');
      setShake(false);
      requestAnimationFrame(() => setShake(true));
    }
  };

  const onChange = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, LENGTH);
    setValue(v);
    setError('');
    if (v.length >= LENGTH) check(v);
  };

  return (
    <div
      className={`gate ${open ? 'gate--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      onClick={() => inputRef.current?.focus()}
    >
      <form
        className={`gate-card ${shake ? 'is-shaking' : ''}`}
        autoComplete="off"
        onSubmit={(e) => { e.preventDefault(); check(value); }}
        onAnimationEnd={() => setShake(false)}
      >
        <svg className={`folder ${opening ? 'is-open' : ''}`} viewBox="0 0 64 52" aria-hidden="true">
          <path className="folder-back" d="M2 8a4 4 0 0 1 4-4h15.5l6 6H58a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
          <rect className="folder-paper" x="8" y="12" width="48" height="30" rx="2" />
          <path className="folder-front" d="M2 19a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
        </svg>
        <p id="gate-title" className="gate-name">darius-olsson-carter-portfolio</p>

        <label htmlFor="gate-input" className="sr-only">Password</label>
        <div className="gate-field">
          <input
            id="gate-input"
            ref={inputRef}
            type="password"
            autoComplete="current-password"
            inputMode="numeric"
            maxLength={LENGTH}
            placeholder="Password"
            value={value}
            onChange={onChange}
            className="gate-input"
            required
          />
          <Button type="submit" className="gate-go" aria-label="Open portfolio"><ArrowIcon /></Button>
        </div>
        <p role="alert" className="gate-error">{error}</p>
      </form>
    </div>
  );
};
