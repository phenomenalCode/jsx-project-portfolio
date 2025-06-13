<<<<<<< HEAD

import React from 'react';
import Projects, { projectData } from './projects.jsx'; 
import { AboutMe } from './my_journey.jsx';
import HeroSection from './hero_section.jsx';
import { ContactInfo } from './contact.jsx';
export const App = () => {
 


    return (
        <div className="app">
            <header>
                <h1>My Portfolio</h1>
            </header>
            <main>
                <HeroSection />
                <AboutMe />
                <Projects projectData={projectData} />
                <ContactInfo />

            </main>
            <footer>
                <p>&copy;  Darius Carters Portfolio</p>
            </footer>
        </div>
    );
}
=======
export const App = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>
    </>
  )
}
>>>>>>> upstream/main
