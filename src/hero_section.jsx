import img from './images/IMG_3912.jpeg';
import img2 from './images/shutterstock_394793860-1536x1177.jpg';
import img3 from './images/1659.jpg';
import myVideo from './videos/net-spirit-green.webm';
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
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                <div style={{ textAlign: 'left', maxWidth: '680px' }}>
                    <h1 className="hero-about">Darius Olsson Carter</h1>
                    <h2 className="hero-about" style={{ marginBottom: '2.9rem' , color: '#6fa8fc' }}>Junior IT Operations & Full-Stack Engineer | Systems, Automation & Infrastructure</h2>
                    <p className="hero-about" style={{ fontWeight: 'bold' }}>
                      I work where software meets infrastructure. I build and deploy full-stack applications, but what I enjoy most is understanding how systems actually run in production, monitoring them, automating the repetitive work, and troubleshooting problems down to the root cause.
                    </p>
                    <p className="hero-about" style={{ fontWeight: 'bold' }}>
                      My hands-on experience spans both sides. On the operations side, I have built and administered a Windows Server Active Directory environment (DNS, DHCP, Group Policy) automated with PowerShell, designed a segmented pfSense network, and built a Python-based network monitoring tool with detection rules and Prometheus metrics. On the development side, I build full-stack apps with React, TypeScript, and Node.js, working with authentication, APIs, and databases, backed by a full-stack bootcamp and four Cisco certifications.
                    </p>
                    <p className="hero-about" style={{ fontWeight: 'bold' }}>
                      I like analyzing problems methodically, documenting clearly, and improving how things run through automation and solid system design. I am looking to grow in a role focused on IT operations, infrastructure, and reliable systems, where I can keep building on both my development and operational experience.
                    </p>
                </div>

                <img
                    src={img3}
                    alt="HARDWARE"
                    style={{ width: '350px',marginRight: '30px', height: '590px', borderRadius: '8px' }}
                />
            </div>

            {/* Web App Image */}
      <video
  src={myVideo}
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: '300px',
    height: '300px',
    borderRadius: '10%',
    objectFit: 'cover',   // crucial — keeps the video filling the circle without distortion
    margin: '0 auto',
    display: 'block',
  }}
/>
            {/* Skills */}
            <h2 className="skills-list" style={{  color: '#6fa8fc', gap: '1rem', marginTop: '3rem', marginBottom: '1rem'
              
            }}>My Skills</h2>
           
              
                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>

          <div className="skills-card">
            <h3 style={{ backgroundColor: '#22ff9458', color: 'white' }}>Networking & Infrastructure</h3>
            <p className="skills-group">Active Directory · Group Policy (GPO) · DNS/DHCP · TCP/IP · Windows Server 2022 · pfSense · Linux/Ubuntu · Virtualization (VirtualBox)</p>
          </div>

          <div className="skills-card">
            <h3 style={{ backgroundColor: '#22ff9458', color: 'white' }}>Scripting, Automation & Monitoring</h3>
            <p className="skills-group">PowerShell · Bash · Python · CLI Tool Development · Automation Workflows · Prometheus · Log Analysis · CI/CD</p>
          </div>

          <div className="skills-card">
            <h3 style={{ backgroundColor: '#22ff9458', color: 'white' }}>Backend & Data</h3>
            <p className="skills-group">Node.js · Express · REST APIs · Authentication (JWT, Sessions) · MySQL · MongoDB · Unit Testing (Jest, pytest)</p>
          </div>

          <div className="skills-card">
            <h3 style={{ backgroundColor: '#22ff9458', color: 'white' }}>Frontend</h3>
            <p className="skills-group">JavaScript (ES6+) · TypeScript · React · React Native · HTML5/CSS3 · Responsive Design</p>
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