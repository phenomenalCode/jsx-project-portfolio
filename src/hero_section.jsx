import myVideo from './videos/net-spirit-green.webm';
import { Window, Section } from './window.jsx';

const SKILLS = [
  {
    title: 'Networking & Infrastructure',
    items: 'Active Directory · Group Policy (GPO) · DNS/DHCP · TCP/IP · Windows Server 2022 · pfSense · Linux/Ubuntu · Virtualization (VirtualBox)',
  },
  {
    title: 'Scripting, Automation & Monitoring',
    items: 'PowerShell · Bash · Python · CLI Tool Development · Automation Workflows · Prometheus · Log Analysis · CI/CD',
  },
  {
    title: 'Backend & Data',
    items: 'Node.js · Express · REST APIs · Authentication (JWT, Sessions) · MySQL · MongoDB · Unit Testing (Jest, pytest)',
  },
  {
    title: 'Frontend',
    items: 'JavaScript (ES6+) · TypeScript · React · React Native · HTML5/CSS3 · Responsive Design',
  },
];

const HeroSection = () => (
  <>
    {/* ——— Hero ——— */}
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1 className="hero-name">
            Darius Olsson Carter<span className="cursor" aria-hidden="true" />
          </h1>
          <h2 className="hero-role">IT, Software &amp; Systems</h2>

          <div className="hero-actions">
            <a href="#about" className="btn-start">About me</a>
          </div>
        </div>

        <div className="hero-visual">
          <video src={myVideo} autoPlay loop muted playsInline className="hero-video" />
        </div>
      </div>
    </section>

    {/* ——— About ——— */}
    <Section id="about" title="About me">
      <Window title="about_me.txt">
        <div className="prose">
          <p>
            I work where software meets infrastructure. I build and deploy full-stack applications, but what I enjoy most is understanding how systems actually run in production, monitoring them, automating the repetitive work, and troubleshooting problems down to the root cause.
          </p>
          <p>
            My hands-on experience spans both sides. On the operations side, I have built and administered a Windows Server Active Directory environment (DNS, DHCP, Group Policy) automated with PowerShell, designed a segmented pfSense network, and built a Python-based network monitoring tool with detection rules and Prometheus metrics. On the development side, I build full-stack apps with React, TypeScript, and Node.js, working with authentication, APIs, and databases, backed by a full-stack bootcamp and four Cisco certifications.
          </p>
          <p>
            I like analyzing problems methodically, documenting clearly, and improving how things run through automation and solid system design. I am looking to grow in a role focused on IT operations, infrastructure, and reliable systems, where I can keep building on both my development and operational experience.
          </p>
        </div>
      </Window>
    </Section>

    {/* ——— Skills ——— */}
    <Section id="skills" title="My Skills">
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <Window key={group.title} title={group.title} className="win--mint">
            <ul className="chips">
              {group.items.split(' · ').map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </Window>
        ))}
      </div>
    </Section>
  </>
);

export default HeroSection;
