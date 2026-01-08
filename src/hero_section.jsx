import img from './images/IMG_3912.jpeg';
import img2 from './images/shutterstock_394793860-1536x1177.jpg';

const HeroSection = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ padding: '2rem', textAlign: 'center' }}>
      
      {/* Circular Profile Image */}
      <div
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={img}
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
      </div>

      {/* Intro Text */}
      <h1 style={{ marginTop: '2rem' }}>I am Darius Olsson Carter</h1>
      <p style={{ fontWeight: 'bold', maxWidth: '700px', margin: '1rem auto' }}>
        Junior Frontend / Full-stack Developer passionate about building modern, user-friendly web and mobile applications. I combine technical foundations with usability, performance, and maintainable code.
      </p>
      <p style={{ fontWeight: 'bold', maxWidth: '700px', margin: '1rem auto' }}>
        I specialize in React and TypeScript, with experience in React Native and Node.js, allowing me to work across the full stack. I’ve built full-stack solutions with authentication, databases, APIs, state management, and cloud deployment. I take pride in writing clean, maintainable, and scalable code.
      </p>

      {/* Secondary Image */}
      <div
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '2rem auto',
        }}
      >
        <img src={img2} alt="Web App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Skills */}
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        <h2>My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>React Native (Expo)</li>
              <li>Material-UI (MUI)</li>
              <li>Responsive & Mobile-First Design</li>
              <li>Accessibility (WCAG basics)</li>
            </ul>
          </div>

          <div>
            <h3>State & Architecture</h3>
            <ul>
              <li>State Management (Zustand)</li>
              <li>Component-Based Architecture</li>
            </ul>
          </div>

          <div>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Authentication (JWT, Sessions)</li>
              <li>MongoDB (Mongoose)</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div>
            <h3>Tools & Deployment</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Deployment (Netlify, Render, Heroku)</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => scrollToElement('projects')}
        style={{
          marginTop: '2rem',
          backgroundColor: '#ffeb3b',
          color: '#001f7a',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          border: 'none',
          borderRadius: '9999px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ffe000')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffeb3b')}
      >
        View Projects
      </button>
    </section>
  );
};

export default HeroSection;
