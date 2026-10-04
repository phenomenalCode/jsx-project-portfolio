import { useState } from 'react';
import Projects, { projectData } from './projects.jsx';
import { AboutMe } from './my_journey.jsx';
import HeroSection from './hero_section.jsx';
import { ContactInfo } from './contact.jsx';
import { Experience } from './internships.jsx';
import { Labs } from './labs.jsx';
import { Taskbar } from './taskbar.jsx';
import { Gate } from './gate.jsx';
import { Ambient } from './ambient.jsx';
import cityBg from './images/city-bg.jpg';

export const App = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [gateGone, setGateGone] = useState(false);

  const unlock = () => {
    setUnlocked(true);
    requestAnimationFrame(() => document.querySelector('.hero-actions a')?.focus({ preventScroll: true }));
    setTimeout(() => setGateGone(true), 700);
  };

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <img src={cityBg} alt="" className="backdrop-img" />
        <div className="backdrop-tint" />
        <div className="backdrop-scan" />
      </div>
      <Ambient />

      <div className={`app ${unlocked ? '' : 'app--locked'}`} aria-hidden={!unlocked} inert={!unlocked}>
        <Taskbar />
        <main>
          <HeroSection />
          <Experience />
          <AboutMe />
          <Labs />
          <Projects projectData={projectData} />
          <ContactInfo />
        </main>
        <footer className="footer">
          <p>&copy;  Darius Olsson Carter</p>
        </footer>
      </div>

      {!gateGone && <Gate open={unlocked} onUnlock={unlock} />}
    </>
  );
};
