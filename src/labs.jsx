import { motion } from 'framer-motion';

export const Labs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#00223f',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#6fa8fc', textAlign: 'center' }}>
        Security & Infrastructure Labs
      </h2>
      <p
        style={{
          fontSize: '0.95rem',
          color: '#6fa8fc',
          textAlign: 'center',
          marginBottom: '1.5rem',
          opacity: 0.85,
        }}
      >
        Windows Server 2022 · Active Directory · pfSense · PowerShell
      </p>

      <p style={{ color: '#6fa8fc', lineHeight: '1.7', marginBottom: '1rem' }}>
        A hands-on lab environment where I build, break, and harden real infrastructure. I built and
        administered a Windows Server 2022 Active Directory domain from scratch, DNS, DHCP, OUs, users,
        security groups, Group Policy, and share and NTFS permissions, automating administrative tasks
        with PowerShell.
      </p>

      <p style={{ color: '#6fa8fc', lineHeight: '1.7', marginBottom: '1rem' }}>
        On the network side, I designed a segmented pfSense network across three interfaces, configuring
        routing, firewall rules, and isolation between zones. Throughout, I documented every build step,
        failure, and fix, along with security testing and defensive hardening, so the whole process is
        reproducible.
      </p>

      
      <a
        href="https://github.com/phenomenalCode/LABS-NETWORK-CYBER"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#6fa8fc',
          fontWeight: 'bold',
          textDecoration: 'underline',
          display: 'block',
          textAlign: 'center',
          marginTop: '1rem'
        }}
      >
        View full walkthroughs on GitHub
      </a>
    </motion.div>
  );
};