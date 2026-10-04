// Moving background layer: drifting light motes (like Hyacinth's bubbles)
// and hover cars cruising across the sky (like her goldfish).

const MOTES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 5) % 100,
  size: 3 + ((i * 7) % 5),
  dur: 18 + ((i * 7) % 14),
  delay: (i * 2.7) % 24,
  tone: ['blue', 'mint', 'pink'][i % 3],
}));

const HoverCar = () => (
  <svg viewBox="0 0 220 90" className="car" aria-hidden="true">
    <defs>
      <linearGradient id="beam" x1="0" x2="1">
        <stop offset="0" stopColor="var(--cream)" stopOpacity="0.55" />
        <stop offset="1" stopColor="var(--cream)" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="thrust">
        <stop offset="0" stopColor="var(--mint)" stopOpacity="0.9" />
        <stop offset="1" stopColor="var(--mint)" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--blue)" />
        <stop offset="1" stopColor="var(--navy)" />
      </linearGradient>
    </defs>
    {/* headlight beam */}
    <polygon points="196,44 220,30 220,62" fill="url(#beam)" />
    {/* thruster glow */}
    <ellipse className="thrust" cx="58" cy="66" rx="26" ry="10" fill="url(#thrust)" />
    <ellipse className="thrust" cx="156" cy="66" rx="26" ry="10" fill="url(#thrust)" />
    {/* body */}
    <path d="M14 48 L44 34 Q78 20 120 20 L160 24 Q192 30 200 44 L196 54 Q120 60 22 56 Z"
      fill="url(#body)" stroke="var(--blue)" strokeWidth="1.5" />
    {/* canopy */}
    <path d="M74 27 Q100 10 134 16 L148 27 Z" fill="var(--blue)" fillOpacity="0.55" stroke="var(--cream)" strokeOpacity="0.6" />
    {/* side stripe */}
    <path d="M30 47 L190 45" stroke="var(--mint)" strokeWidth="2" strokeLinecap="round" />
    {/* hover pods */}
    <rect x="40" y="56" width="36" height="7" rx="3" fill="var(--navy)" stroke="var(--blue)" />
    <rect x="138" y="56" width="36" height="7" rx="3" fill="var(--navy)" stroke="var(--blue)" />
    {/* lights */}
    <circle cx="197" cy="44" r="3" fill="var(--yellow)" />
    <rect x="12" y="46" width="7" height="4" fill="var(--pink)" />
  </svg>
);

export const Ambient = () => (
  <div className="ambient" aria-hidden="true">
    {MOTES.map((m, i) => (
      <span
        key={i}
        className={`mote mote--${m.tone}`}
        style={{
          left: `${m.left}%`,
          width: m.size,
          height: m.size,
          animationDuration: `${m.dur}s`,
          animationDelay: `-${m.delay}s`,
        }}
      />
    ))}
    <div className="flyer flyer--far"><div className="flyer-bob"><HoverCar /></div></div>
    <div className="flyer flyer--near"><div className="flyer-bob"><HoverCar /></div></div>
  </div>
);
