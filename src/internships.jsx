import { motion } from 'framer-motion';

export const Experience = () => {
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
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#6fa8fc', textAlign: 'center' }}>
        Experience
      </h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#6fa8fc', marginBottom: '0.25rem' }}>
          Junior Developer / IT Consultant — Reconomy AB
        </h3>
        <p style={{ color: '#6fa8fc', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>
          Internship · 2024
        </p>
        <p style={{ color: '#6fa8fc', lineHeight: '1.6', marginBottom: 0 }}>
          Provided hands-on IT support in a live business environment, troubleshooting computers,
          software, and network issues for staff, and handling installations and hardware repairs.
          Also built and deployed a full-stack employee check-in and time-tracking system with
          session-based authentication, SQL-injection prevention, and a CORS-secured API.
        </p>
      </div>

      <div>
        <h3 style={{ color: '#6fa8fc', marginBottom: '0.25rem' }}>
          Web Developer — Right by Me
        </h3>
        <p style={{ color: '#6fa8fc', fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>
          Internship · 2025
        </p>
        <p style={{ color: '#6fa8fc', lineHeight: '1.6', marginBottom: 0 }}>
          Built, updated, and maintained website content and pages in WordPress, handling
          configuration, troubleshooting, and content management, and contributing ideas to
          improve workflows.
        </p>
      </div>
    </motion.div>
  );
};