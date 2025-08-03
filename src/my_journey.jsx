// AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f7fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #001f7a;
  text-align: center;
`;

const Paragraph = styled.p`
  font-weight: bold;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AboutMe = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      aria-labelledby="about-me-heading"
    >
      <Heading id="about-me-heading">Why I Code!</Heading>
      <Paragraph>
        My passion for technology is not just about writing code — it's about solving problems and finding
        innovative solutions. Throughout my studies and personal projects, I have practiced my ability to
        analyze complex challenges and break them down into manageable steps, which has strengthened both my
        structured and creative approach to development.
      </Paragraph>
      <Paragraph>
        During my studies, I had the opportunity to develop my skills in modern front-end technologies. I have
        built a solid understanding of designing and optimizing efficient and scalable solutions. I value the
        balance between logic and creativity in programming and especially enjoy working on user-centered
        solutions that combine functionality with design.
      </Paragraph>
    </Container>
  );
};
