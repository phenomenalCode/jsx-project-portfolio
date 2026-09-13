import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#00223f',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#6fa8fc',
          textAlign: 'center',
        }}
      >
        My Journey
      </h2>
      <p
        style={{
          lineHeight: '1.7',
          color: '#6fa8fc',
          marginBottom: '1rem',
        }}
      >
        I came into tech through building. I started with full-stack development at the Technigo bootcamp,
        learning to design and deploy real applications with React, TypeScript, and Node.js, and I got hooked
        on the problem-solving side, breaking complex challenges into manageable steps and figuring out how the
        pieces actually fit together.
      </p>
      <p
        style={{
          lineHeight: '1.7',
          color: '#6fa8fc',
          marginBottom: '1rem',
        }}
      >
        The more I built, the more I wanted to understand what happens beneath the application, how systems run,
        stay stable, and fail. That pulled me toward IT operations and infrastructure. I earned four Cisco
        certifications in networking and security, and I taught myself by building: a Windows Server Active
        Directory environment from scratch (DNS, DHCP, Group Policy, all automated with PowerShell), a segmented
        pfSense network, and a Python-based network monitoring tool that ingests live traffic, runs detection
        rules, and exposes Prometheus metrics.
      </p>
      <p
        style={{
          lineHeight: '1.7',
          color: '#6fa8fc',
          marginBottom: 0,
        }}
      >
        What I enjoy most is the operational side, monitoring, automation, and troubleshooting problems down to
        the root cause, backed by the ability to actually build the tooling around it. I document everything I do,
        I learn fast, and I'm looking to grow in a role focused on IT operations, infrastructure, and reliable
        systems.
      </p>
    </motion.div>
  );
};