import { useEffect, useRef, useState } from 'react';
import { Button } from './button.jsx';
import { Section } from './window.jsx';
import { GitHubIcon, ArrowIcon } from './icons.jsx';

import img1 from './images/reconomy-logo.png';
import img2 from './images/IMG_3828.jpeg';
import img3 from './images/weatherapps-android-1weather-5b751ae9c9e77c0057fc06d5.jpg';
import img4 from './images/IMG_3849.jpeg';
import img5 from './images/musicrewardsphoto.jpg';
import img6 from './images/exceltoMysql.png';
import img7 from './images/dataops.jpeg';
import img8 from './images/NOC-PROJ.png';
export const projectData = [
  {
    id: 1,
    tools: ['Python', 'SQLite', 'Prometheus', 'nmap', 'Docker', 'pytest'],
    title: 'Sentinel.sh — Network Monitoring Engine',
    description: 'A self-hosted network-operations tool for a home LAN. Reads live DNS query traffic directly from Pi-hole\'s database and runs stateful detection rules over it: one that flags devices making bursts of blocked lookups (possible malware or IoT beaconing), and one that flags unrecognized devices joining the network. A background thread runs nmap ARP sweeps to keep a live device inventory independent of DNS activity. Every detection becomes a uniform green/amber/red status through a decoupled contract, so new rules or outputs plug in without touching the core. Instrumented with labeled Prometheus metrics on a /metrics endpoint, persists devices and alerts to SQLite, and includes a CLI console for querying live state. Built with Python, SQLite, Prometheus, nmap, Pi-hole and Docker.',
    img: img8,
    github: null,
    privateRepo: true,
  },
  {
    id: 2,
    tools: ['Python', 'CSV', 'unittest', 'Linux', 'CLI'],
    title: 'DataOps Formatter CLI',
    description: 'DataOps Formatter is a Python-based CLI tool for automating the formatting of CSV datasets into clean, aligned tables. The project demonstrates robust logging, modular and testable code, and Linux-friendly command-line operations. Comprehensive unit tests were implemented using Python\'s unittest framework, following a test-driven development (TDD) approach to ensure correctness and reliability. Users can generate text or HTML output, validate CSV structure, and integrate the tool into cron jobs or CI/CD workflows, making it ideal for repeatable data processing and automation tasks.',
    img: img7,
    github: 'https://github.com/phenomenalCode/dataops-formatter/tree/main',
  },
  {
    id: 3,
    tools: ['Node.js', 'Express', 'MySQL', 'Netlify', 'Heroku'],
    title: 'Reconomy Check-In App',
    description: 'Check-in system and admin dashboard designed for Reconomy AB. A full-stack employee time-tracking system built with Node.js, Express, and MySQL, featuring Employee Management , Create, update, and filter employee records Time Logging , Log check-in/out events with optional comments Admin Login , Session-based authentication for protected routes Cross-Origin Support , Fully functional CORS setup for Netlify Heroku deployment, Backend hosted on Heroku, frontend on Netlify',
    img: img1,
    github: 'https://github.com/phenomenalCode/Reconomy',
  },
  {
    id: 4,
    tools: ['React (Vite)', 'Zustand', 'Material UI', 'Node.js', 'Express', 'MongoDB', 'GridFS'],
    title: 'Task Manager',
    description: 'Designed and developed a full-stack task and collaboration system supporting team workflows, project tracking, and file management. Implements secure JWT authentication, modular state management with Zustand, and scalable backend architecture using Node.js, Express, and MongoDB',
    img: img4,
    github: 'https://github.com/phenomenalCode/project-final-darius/tree/main',
  },
  {
    id: 5,
    tools: ['React Native (Expo)', 'TypeScript', 'Zustand', 'AsyncStorage', 'expo-av', 'Kotlin'],
    title: 'Music Rewards App',
    description: ' MusicRewards is a TypeScript-based React Native (Expo) mobile application that delivers short music challenges where users earn points by listening to tracks. The app uses Zustand for structured state management with AsyncStorage for persistent local storage, and integrates native audio playback through expo-av. On the Android side, I modified native Kotlin files (MainActivity.kt and MainApplication.kt) to configure the React Native host, register native modules, and support custom dev-client / EAS builds. The UI is built with reusable, component-based architecture (challenge cards, lists, and custom UI primitives such as GlassButton and GlassCard) organized around a centralized design token system for consistent theming',
    img: img5,
    github: 'https://github.com/phenomenalCode/Darius-Music-Reward-App/tree/main',
  },
  {
    id: 6,
    tools: ['React', 'MUI', 'Node.js', 'Express', 'MongoDB (Mongoose)', 'JWT', 'Netlify', 'Render'],
    title: 'Happy Thoughts',
    description: 'Happy Thoughts is a full-stack web app where users can post uplifting messages, like others thoughts, and manage their own posts. It includes user authentication, random thought display, and like tracking.Tools used: React, MUI, Node.js, Express, MongoDB (Mongoose), JWT, Netlify, Render.',
    img: img2,
    github: 'https://github.com/phenomenalCode/js-project-happy-thoughts/tree/happywbackend',
  },
  {
    id: 7,
    tools: ['Node.js', 'MySQL', 'Excel'],
    title: 'Excel Employee Data Extractor',
    description: 'Excel Employee Data Extractor – A Node.js script that reads employee info from Excel sheets and automatically imports it into a MySQL database, handling multiple sheets and rows with error logging.',
    img: img6,
    github: 'https://github.com/phenomenalCode/extract-data-from-excel-file/tree/main',
  },
  {
    id: 8,
    tools: ['React', 'Vite', 'CSS', 'OpenWeatherMap API'],
    title: 'Weather App',
    description: 'A simple weather forecast app. It displays current weather and a 4-day forecast using the OpenWeatherMap API. Users can search cities or cycle through presets (Stockholm, Gothenburg, Oslo). It shows temperature, weather icons, sunrise/sunset times, and updates the background dynamically based on conditions. Weather data is cached using localStorage.',
    img: img3,
    github: 'https://github.com/phenomenalCode/weather-app',
  },


];


// Shown large in the slider at the top; everything else goes in the 3-up grid.
const FEATURED_IDS = [1, 2];

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [clamped, setClamped] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const measure = () => setClamped(el.scrollHeight > el.clientHeight + 2);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <article className="card">
      <div className="card-media">
        <img src={project.img} alt={project.title} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3 className="card-title">{project.title}</h3>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="icon-link" aria-label={`${project.title} on GitHub`}>
              <GitHubIcon />
            </a>
          )}
        </div>
        <ProjectTools tools={project.tools} />
        <p ref={descRef} className={`card-desc ${open ? 'is-open' : ''}`}>{project.description}</p>
        {(clamped || open) && (
          <Button className="more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? 'Show less' : 'Read more'}
          </Button>
        )}
      </div>
    </article>
  );
};

export const ProjectTools = ({ tools }) => (
  <div className="project-tools">
    <span className="tools-label">Built with</span>
    <ul className="tool-list">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
  </div>
);

const Projects = ({ projectData }) => {
  const featured = projectData.filter((p) => FEATURED_IDS.includes(p.id));
  const rest = projectData.filter((p) => !FEATURED_IDS.includes(p.id));
  const [index, setIndex] = useState(0);
  const go = (d) => setIndex((i) => (i + d + featured.length) % featured.length);

  return (
    <Section
      id="projects"
      title="My Projects"
      action={{ href: 'https://github.com/phenomenalCode?tab=repositories', label: 'View all on GitHub' }}
    >
      <div className="feature" tabIndex={0} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } }} aria-roledescription="carousel" aria-label="Featured projects">
        <div className={`feature-track feature-track--${index}`}>
          {featured.map((p, k) => (
            <article
              key={p.id}
              className="slide"
              aria-roledescription="slide"
              aria-label={`${k + 1} of ${featured.length}`}
              inert={k !== index}
            >
              <img src={p.img} alt={p.title} className="slide-img" />
              <div className="slide-body">
                <h3 className="slide-title">{p.title}</h3>
                <ProjectTools tools={p.tools} />
                <p>{p.description}</p>
                {p.privateRepo && <p className="source-note">Source available on request</p>}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="slide-link">
                    <GitHubIcon /> View on GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <Button className="feature-nav feature-nav--prev" onClick={() => go(-1)} aria-label="Previous project">
          <ArrowIcon dir="left" />
        </Button>
        <Button className="feature-nav feature-nav--next" onClick={() => go(1)} aria-label="Next project">
          <ArrowIcon />
        </Button>
      </div>
      <div className="dots">
        {featured.map((p, k) => (
          <Button
            key={p.id}
            className="dot"
            aria-label={`Show ${p.title}`}
            aria-current={k === index ? "true" : "false"}
            onClick={() => setIndex(k)}
          />
        ))}
      </div>

      <div className="card-grid">
        {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  );
};

export default Projects;
