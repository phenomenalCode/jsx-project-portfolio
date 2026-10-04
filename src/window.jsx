import { useEffect, useRef } from 'react';

// A titled panel. The title bar names what's inside; nothing else is decorative.
export const Window = ({ title, children, className = '', bodyClass = '' }) => (
  <div className={`win ${className}`}>
    {title && (
      <div className="win-bar">
        <span className="win-title">{title}</span>
      </div>
    )}
    <div className={`win-body ${bodyClass}`}>{children}</div>
  </div>
);

// Adds .show to the section the first time it scrolls into view; CSS slides its parts up.
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.section-head, .win, .card, .feature, .journey-photo, .contact-tile, .log-entry');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(target => { target.classList.add('motion-ready'); io.observe(target); });
    return () => io.disconnect();
  }, []);
  return ref;
};

export const Section = ({ id, title, intro, action, children }) => {
  const ref = useReveal();
  return (
    <section id={id} className="section reveal-section" ref={ref}>
      <div className="wrap">
        <header className="section-head">
          <div className="section-row">
            <h2 className="section-title"><span className="slash">/</span> {title}</h2>
            <span className="section-rule" aria-hidden="true" />
            {action && (
              <a className="section-action" href={action.href} target="_blank" rel="noopener noreferrer">
                {action.label}
              </a>
            )}
          </div>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
};
