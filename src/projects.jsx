import React from 'react';

import img1 from './images/reconomy-logo.png';
import img2 from './images/IMG_3828.jpeg';
import img3 from './images/weatherapps-android-1weather-5b751ae9c9e77c0057fc06d5.jpg';
import img4 from './images/IMG_3849.jpeg';
import img5 from './images/musicrewardsphoto.jpg';
import img6 from './images/exceltoMysql.png';
import img7 from './images/dataops.jpeg';
export const projectData = [
  {
    id: 1,
    title: 'Reconomy Check-In App',
    description: 'Check-in system and admin dashboard designed for Reconomy AB. A full-stack employee time-tracking system built with Node.js, Express, and MySQL, featuring Employee Management , Create, update, and filter employee records Time Logging , Log check-in/out events with optional comments Admin Login , Session-based authentication for protected routes Cross-Origin Support , Fully functional CORS setup for Netlify Heroku deployment, Backend hosted on Heroku, frontend on Netlify',
    img: img1,
    github: 'https://github.com/phenomenalCode/Reconomy',
  },
  {
    id: 2,
    title: 'Happy Thoughts',
    description: 'Happy Thoughts is a full-stack web app where users can post uplifting messages, like others thoughts, and manage their own posts. It includes user authentication, random thought display, and like tracking.Tools used: React, MUI, Node.js, Express, MongoDB (Mongoose), JWT, Netlify, Render.',
    img: img2,
    github: 'https://github.com/phenomenalCode/js-project-happy-thoughts/tree/happywbackend',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather forecast app. It displays current weather and a 4-day forecast using the OpenWeatherMap API. Users can search cities or cycle through presets (Stockholm, Gothenburg, Oslo). It shows temperature, weather icons, sunrise/sunset times, and updates the background dynamically based on conditions. Weather data is cached using localStorage.',
    img: img3,
    github: 'https://github.com/phenomenalCode/weather-app',
  },
 {
  id: 4,
  title: 'Task Manager',
  description: 'A full-stack task and project management app with authentication, group collaboration, and file uploads. Built with React (Vite), Zustand, and Material-UI on the frontend, and Node.js, Express, and MongoDB with GridFS on the backend. Features include dark mode, filtering, sorting, and real-time project completion tracking.',
  img: img4,
  github: 'https://github.com/phenomenalCode/project-final-darius/tree/main',
},{
  id: 5,
  title: 'Music Rewards App',
  description: 'MusicRewards is a TypeScript/React Native (Expo) app that provides short music "challenges" (listen to tracks to earn points). It\'s implemented with Expo and React Native, uses Zustand for local app state with AsyncStorage persistence, and expo-av for audio playback. UI is componentized into challenge cards, lists, and small UI primitives (GlassButton/GlassCard) with a central theme tokens file.',
  img: img5,
  github: 'https://github.com/phenomenalCode/Darius-Music-Reward-App/tree/main',
},
{
  id: 6,
  title: 'Extract excel data',
  description: 'Excel Employee Data Extractor – A Node.js script that reads employee info from Excel sheets and automatically imports it into a MySQL database, handling multiple sheets and rows with error logging.',
  img: img6,
  github: 'https://github.com/phenomenalCode/extract-data-from-excel-file/tree/main',
},
{
  id: 7,
  title: 'DataOps Formatter CLI',
  description: 'DataOps Formatter is a Python-based CLI tool for automating the formatting of CSV datasets into clean, aligned tables. It is designed for large datasets, workflow automation, and infrastructure-friendly pipelines. The project demonstrates robust logging, modular and testable code, Linux friendly command-line operations, and structured script design. Users can generate text or HTML output, validate CSV structure, and integrate the tool into cron jobs or CI/CD workflows, making it ideal for repeatable data processing and automation tasks.',
  img: img7,
  github: 'https://github.com/phenomenalCode/dataops-formatter/tree/main',
},
,

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