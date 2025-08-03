// App.jsx
import React from 'react';
import styled from 'styled-components';
import Projects, { projectData } from './projects.jsx'; 
import { AboutMe } from './my_journey.jsx';
import HeroSection from './hero_section.jsx';
import { ContactInfo } from './contact.jsx';

// Styled Components
const AppWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #111;
  line-height: 1.6;
`;

const Header = styled.header`
  background-color: #001f7a;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #f5f7fa;
  color: #333;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.875rem;
  border-top: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Header>
        <Title>My Portfolio</Title>
      </Header>
      <Main>
        <HeroSection />
        <AboutMe />
        <Projects projectData={projectData} />
        <ContactInfo />
      </Main>
      <Footer>
        <p>&copy; Darius Carter’s Portfolio</p>
      </Footer>
    </AppWrapper>
  );
};
