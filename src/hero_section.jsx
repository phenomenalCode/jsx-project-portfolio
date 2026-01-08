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
               I’m Darius Olsson Carter, a Junior Frontend / Full-stack Developer with a strong focus on building modern, 
               user-friendly web and mobile applications. I combine solid technical foundations with a clear understanding of usability, performance, and maintainable code.
            </p>
            <p style={{ fontWeight: 'bold' }}>
                I specialize in frontend development using React and TypeScript, creating clean, responsive, and accessible user interfaces. I also have hands-on experience with React Native for mobile apps and Node.js on the backend, which allows me to work across the full stack and understand how frontend and backend systems interact in real-world applications.

Through personal projects and professional experience,
 I’ve built and deployed full-stack solutions involving authentication, databases, APIs, state management, and cloud deployment.
  I enjoy turning complex requirements into structured, 
  intuitive solutions and take pride in writing code that is easy to understand, extend, and maintain.

I’m motivated by continuous learning, collaboration, and building digital products that create real value for users.
 I’m currently seeking opportunities as a junior frontend or full-stack developer where I can grow alongside experienced teammates and contribute to high-quality, user-focused products.
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
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Responsive Design</li>
            </ul>

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