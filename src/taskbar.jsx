import { Button } from './button.jsx';
import { useEffect, useRef, useState } from 'react';
import { GitHubIcon, MailIcon } from './icons.jsx';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#journey', label: 'Journey' },
  { href: '#labs', label: 'Labs' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Taskbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <header className="topbar" ref={ref}>
      <div className="topbar-inner">
        <a href="#top" className="brand">Darius Carter</a>

        <nav aria-label="Primary" className="topbar-nav">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="topbar-icons">
          <a href="mailto:carter3darius@gmail.com" aria-label="Email Darius"><MailIcon /></a>
          <a href="https://github.com/phenomenalCode" target="_blank" rel="noopener noreferrer" aria-label="Darius on GitHub"><GitHubIcon /></a>
          <Button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'close' : 'menu'}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
};
