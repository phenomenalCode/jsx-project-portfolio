import img3 from './images/1659.jpg';
import { Window, Section } from './window.jsx';

export const AboutMe = () => (
  <Section id="journey" title="My Journey">
    <div className="journey-grid">
    <Window title="my_journey.txt">
      <div className="prose">
        <p>
          I came into tech through building. I studied IT and programming at JENSEN and then went through the
          Technigo full-stack bootcamp, learning to design and deploy real applications with React, TypeScript,
          and Node.js, and I got hooked on the problem-solving side, breaking complex challenges into manageable
          steps and figuring out how the pieces actually fit together.
        </p>
        <p>
          The more I built, the more I wanted to understand what happens beneath the application, how systems run,
          stay stable, and fail. That pulled me toward IT operations and infrastructure. I earned four Cisco
          certifications in networking and security, and I taught myself by building: a Windows Server Active
          Directory environment from scratch (DNS, DHCP, Group Policy, all automated with PowerShell), a segmented
          pfSense network, and a Python-based network monitoring tool that ingests live traffic, runs detection
          rules, and exposes Prometheus metrics.
        </p>
        <p>
          What I enjoy most is the operational side, monitoring, automation, and troubleshooting problems down to
          the root cause, backed by the ability to actually build the tooling around it. I document everything I do,
          I learn fast, and I'm looking to grow in a role focused on IT operations, infrastructure, and reliable
          systems.
        </p>
      </div>
    </Window>
    <figure className="journey-photo">
      <img src={img3} alt="HARDWARE" />
    </figure>
    </div>
  </Section>
);
