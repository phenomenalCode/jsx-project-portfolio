import { Window, Section } from './window.jsx';

// Add your LinkedIn profile URL here to make the tile clickable.
const LINKEDIN_URL = '';

export const ContactInfo = () => {
  const tiles = [
    { label: 'Email address', value: 'carter3darius@gmail.com', href: 'mailto:carter3darius@gmail.com', glyph: '@' },
    { label: 'GitHub', value: 'phenomenalCode', href: 'https://github.com/phenomenalCode', glyph: '</>' },
    { label: 'LinkedIn', value: 'Darius Olsson Carter', href: LINKEDIN_URL, glyph: 'in' },
  ];

  return (
    <Section id="contact" title="Contact">
      <Window title="new_message.txt">
        <div className="contact-grid">
          {tiles.map((t) => {
            const inner = (
              <>
                <span className="contact-glyph" aria-hidden="true">{t.glyph}</span>
                <span>
                  <span className="contact-label">{t.label}</span>
                  <span className="contact-value">{t.value}</span>
                </span>
              </>
            );
            return t.href ? (
              <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" className="contact-tile">
                {inner}
              </a>
            ) : (
              <div key={t.label} className="contact-tile">{inner}</div>
            );
          })}
        </div>
      </Window>
    </Section>
  );
};
