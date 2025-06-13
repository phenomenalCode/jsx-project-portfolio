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
        backgroundColor: '#f5f7fa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#001f7a',
          textAlign: 'center',
        }}
      >
        Why i code!
      </h2>
      <p
        style={{
          fontWeight: 'bold',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '1rem',
        }}
      >
        My passion for technology is not just about writing code — it's about solving problems and finding
        innovative solutions. Throughout my studies and personal projects, I have practiced my ability to
        analyze complex challenges and break them down into manageable steps, which has strengthened both my
        structured and creative approach to development.
      </p>
      <p
        style={{
          fontWeight: 'bold',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
        During my studies, I had the opportunity to develop my skills in modern front-end technologies. I have
        built a solid understanding of designing and optimizing efficient and scalable solutions. I value the
        balance between logic and creativity in programming and especially enjoy working on user-centered
        solutions that combine functionality with design.
      </p>
    </motion.div>
  );
};