// HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import img from './images/IMG_3912-CRllRyM8.webp';
import img2 from './images/shutterstock_394793860-1536x1177.webp';

// Styled Components
const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #ffffff; /* white background */
`;


const ProfileImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  margin-top: 2rem;
  font-size: 2rem;
  color: #001f7a;
`;

const Paragraph = styled.p`
  font-weight: bold;
  color: #333;
  max-width: 800px;
  margin: 1rem auto;
`;

const WebAppImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 2rem auto;
  display: block;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const SkillsTitle = styled.h2`
  margin-top: 2rem;
  color: #001f7a;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: bold;
`;

const SkillItem = styled.li`
  margin: 0.25rem 0;
`;

const ScrollButton = styled.button`
  margin-top: 2rem;
  background-color: #ffeb3b;
  color: #001f7a;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffe600;
  }
`;

// Component
const HeroSection = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section aria-labelledby="hero-heading">
      <ProfileImageWrapper>
        <ProfileImage src={img} alt="Portrait of Darius Olsson Carter" />
      </ProfileImageWrapper>

      <Heading id="hero-heading">I am Darius Olsson Carter</Heading>

      <Paragraph>
        I am a junior web developer with a passion for creating user-friendly web applications.
        I have a strong background in computer science and a keen eye for design, which allows me
        to bridge the gap between functionality and aesthetics. My goal is to build applications that
        not only meet user needs but also provide an enjoyable experience.
      </Paragraph>

      <Paragraph>
        I specialize in front-end development, crafting clean, intuitive user interfaces that ensure
        an inclusive experience across all devices and platforms. My development stack includes
        JavaScript, HTML, CSS, and React, allowing me to build responsive and engaging web applications.
        I also work with Node.js to handle backend logic, giving me full control over the entire user
        experience—from front-end interaction to server-side processing.
      </Paragraph>

      <WebAppImage src={img2} alt="Screenshot of a web application built by Darius" />

      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>HTML</SkillItem>
        <SkillItem>CSS</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Node.js</SkillItem>
        <SkillItem>Responsive Design</SkillItem>
      </SkillsList>

      <ScrollButton onClick={() => scrollToElement('projects')}>
        View Projects
      </ScrollButton>
    </Section>
  );
};

export default HeroSection;
