'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/index/Footer';
import Nav from '../../components/index/Nav';
import ClienForm from '../../components/index/ClientForm';
import MyWork from '../../components/index/MyWork';
import Skills from '../../components/index/Skills';
import Main from '../../components/index/Main';
import Experience from '../../components/index/Experience';

export default function Home() {
  const [showClientForm, setShowClientForm] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showClientForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showClientForm]);

  return (
    <div>
      {/* Form for client information */}
      {showClientForm ? <ClienForm setShowClientForm={setShowClientForm} /> : ''}

      {/* Nav bar component */}
      <Nav />

      {/* front page */}
      <div id="home" className="duration-300">
        <Main />
      </div>

      {/* About my skills */}
      <div id="skills">
        <Skills />
      </div>

      {/* Experience section */}
      <div id="experience" className="max-w-screen overflow-hidden">
        <Experience />
      </div>

      {/* Projects */}
      <div id="projects">
        <MyWork />
      </div>

      {/* footer area */}
      <div id="message">
        <Footer id="#contact" setShowClientForm={setShowClientForm} />
      </div>
    </div>
  );
}
