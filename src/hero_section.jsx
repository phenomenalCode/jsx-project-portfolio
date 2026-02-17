import img from './images/IMG_3912.jpeg';
import img2 from './images/shutterstock_394793860-1536x1177.jpg';

const HeroSection = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="hero-section" style={{ padding: '2rem', textAlign: 'center' }}>
            {/* Circular Profile Image */}
           <div
  style={{
    width: '300px',
    height: '400px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto',
  }}
>
  <img 
    src={img} 
    alt="Profile" 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(0.9)', // scale down to zoom out
      transition: 'transform 0.3s', // optional, smooth effect
    }}
  />
</div>


            {/* Text content */}
            <h1 style={{ marginTop: '2rem' }}>I am Darius Olsson Carter</h1>
            <p  style={{ fontWeight: 'bold' }
                
                }
                >
              I am Darius Olsson Carter, a Junior Software Engineer with experience building and deploying full-stack systems. I combine application development with an understanding of infrastructure, automation, and how software operates in real production environments.
            </p>
            <p style={{ fontWeight: 'bold' }}>
              My background includes frontend development with React and TypeScript, backend services with Node.js, and working with authentication, APIs, and database design. Through my projects, I have built and deployed complete solutions, gaining hands-on experience with Linux environments, logging, automation scripts, and structured system workflows.

I enjoy analyzing technical problems, structuring maintainable solutions, and improving workflows through automation and clear system design. Working across both development and operational aspects of software has strengthened my ability to understand systems end-to-end rather than focusing on a single layer.

I am seeking opportunities where I can continue growing as a software engineer while deepening my competence in systems, infrastructure, and reliable technical environments.
            </p>

            {/* Web App Image */}
            <img
                src={img2}
                alt="Web App"
                style={{ width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            />

            {/* Skills */}
            <h2 className="skills-list" style={{ marginTop: '2rem' ,
                left: '200px',
            }}>My Skills</h2>
           
              
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          
          <div>
            <h3 style={{ backgroundColor: '#001f7a', color: 'white' }}>Frontend</h3>
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
            <h3  style={{ backgroundColor: '#001f7a', color: 'white' }}>State & Architecture</h3>
            <ul>
              <li>State Management (Zustand)</li>
              <li>Component-Based Architecture</li>
            </ul>
          </div>

          <div>
            <h3  style={{ backgroundColor: '#001f7a', color: 'white' }}>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Authentication (JWT, Sessions)</li>
              <li>MongoDB (Mongoose)</li>
              <li>MySQL</li>
              <li>Logging, Error Handling & Testable Code</li>
              <li>Workflow & File Processing Scripts</li>
              <li>CLI Tool Development & Automation</li>
            </ul>
          </div>

          <div>
            <h3  style={{ backgroundColor: '#001f7a', color: 'white' }}>Linux & Infrastructure</h3>
            <ul>
              <li>Linux Command-Line Operations & Scripting</li>
              <li>System Administration Basics</li>
              <li>Virtualization (VirtualBox)</li>
              <li>Automation-Friendly Workflows</li>
              <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
            </ul>

          </div>

          <div>
            <h3  style={{ backgroundColor: '#001f7a', color: 'white' }}>Tools & Deployment</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Deployment (Netlify, Render, Heroku)</li>
              <li>Vite, NPM, Bash Scripting</li>
            </ul>
          </div>

        </div>
      

            {/* Button */}
            <button 
            onClick={ () => scrollToElement('projects')
                
            }
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
                    transition: 'background-color 0.2s ease'
                }}
            >
                View Projects
            </button>
        </div>
    );
}

export default HeroSection;