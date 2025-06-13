import React from 'react';

import img1 from './images/reconomy-logo.png';
import img2 from './images/unnamed.jpg';
import img3 from './images/weatherapps-android-1weather-5b751ae9c9e77c0057fc06d5.jpg';
export const projectData = [
  {
    id: 1,
    title: 'Reconomy Check-In App',
    description: 'Check-in system and admin page designed for Reconomy AB.',
    img: img1,
    github: 'https://github.com/your-username/reconomy-checkin',
  },
  {
    id: 2,
    title: 'Velita Clinique Booking',
    description: 'Booking form, admin page & check-in page for Velita Clinique.',
    img: img2,
    github: 'https://github.com/your-username/velita-clinique',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather forecast app.',
    img: img3,
    github: 'https://github.com/your-username/weather-app',
  },
];


const Projects = ({ projectData }) => {
    return (
        <div className="projects">
          <div id="projects"></div>
        <h2>My Projects</h2>
        <div className="project-list">
            {projectData.map((project) => (
            <div key={project.id} className="project-card">
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.github && (
                <a href={project.github} target="https://github.com/phenomenalCode/react_portfolio.git" rel="noopener noreferrer">
                    View on GitHub
                </a>
                )}
            </div>
            ))}
        </div>
        </div> 
  );
};

export default Projects;