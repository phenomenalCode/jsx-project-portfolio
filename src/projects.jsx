// projects.jsx
import React from 'react';
import styled from 'styled-components';

import img1 from './images/reconomy-logo.webp';
import img2 from './images/IMG_3828.webp';
import img3 from './images/weatherapps-android-1weather-5b751ae9c9e77c0057fc06d5.webp';

export const projectData = [
  {
    id: 1,
    title: 'Reconomy Check-In App',
    description: 'This project is a full-stack time-clock system for employee attendance management.',
    img: img1,
    github: 'https://github.com/phenomenalCode/Reconomy',
  },
  {
    id: 2,
    title: 'Happy Thoughts App',
    description:
      'Happy Thoughts is a full-stack web application where users can share and interact with positive messages (a.k.a. "thoughts"). The goal is to create a simple, joyful social experience that encourages kindness and community interaction.',
    img: img2,
    github: 'https://github.com/phenomenalCode/js-project-happy-thoughts/tree/happywbackend',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather forecast app.',
    img: img3,
    github: 'https://github.com/phenomenalCode/weather-app',
  },
];

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #001f7a;
  margin-bottom: 2rem;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #f5f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #001f7a;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
`;

const GitHubLink = styled.a`
  display: inline-block;
  background-color: #ffeb3b;
  color: #001f7a;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffe100;
  }
`;

const Projects = ({ projectData }) => {
  return (
    <Section id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <ProjectList>
        {projectData.map((project) => (
          <Card key={project.id}>
            <ProjectImage src={project.img} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>{project.description}</Description>
            {project.github && (
              <GitHubLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </GitHubLink>
            )}
          </Card>
        ))}
      </ProjectList>
    </Section>
  );
};

export default Projects;
