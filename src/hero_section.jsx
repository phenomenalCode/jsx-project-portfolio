import img from './images/20240416_203306.jpg';
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
                    height: '300px',
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
                    }}
                />
            </div>

            {/* Text content */}
            <h1 style={{ marginTop: '2rem' }}>I am Darius Olsson Carter</h1>
            <p  style={{ fontWeight: 'bold' }
                
                }
                >
                I am a software engineer with a passion for creating user-friendly web applications.
                I have a strong background in computer science and a keen eye for design, which allows me to bridge the gap between functionality and aesthetics.
                My goal is to build applications that not only meet user needs but also provide an enjoyable experience.
            </p>
            <p style={{ fontWeight: 'bold' }}>
                I specialize in front-end development, crafting clean, intuitive user interfaces that ensure an inclusive experience across all devices and platforms.
                My development stack includes JavaScript, HTML, CSS, and React, allowing me to build responsive and engaging web applications. 
                I also work with Node.js to handle backend logic, giving me full control over the entire user experience—from front-end interaction to server-side processing.
                My focus is always on writing clean, maintainable code that enhances performance and accessibility for all users.
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