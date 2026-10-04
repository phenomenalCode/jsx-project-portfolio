import { ProjectTools } from './projects.jsx';
import { Window, Section } from './window.jsx';

export const Labs = () => (
  <Section
    id="labs"
    title="Security & Infrastructure Labs"
    intro="Windows Server 2022 · Active Directory · pfSense · PowerShell"
  >
    <Window title="labs/README.md">
      <ProjectTools tools={["Windows Server", "Active Directory", "pfSense", "PowerShell"]} />
      <div className="prose">
        <p>
          A hands-on lab environment where I build, break, and harden real infrastructure. I built and
          administered a Windows Server 2022 Active Directory domain from scratch, DNS, DHCP, OUs, users,
          security groups, Group Policy, and share and NTFS permissions, automating administrative tasks
          with PowerShell.
        </p>
        <p>
          On the network side, I designed a segmented pfSense network across three interfaces, configuring
          routing, firewall rules, and isolation between zones. Throughout, I documented every build step,
          failure, and fix, along with security testing and defensive hardening, so the whole process is
          reproducible.
        </p>
      </div>
      <a
        href="https://github.com/phenomenalCode/LABS-NETWORK-CYBER"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-start btn-small"
      >
        View full walkthroughs on GitHub
      </a>
    </Window>
  </Section>
);
