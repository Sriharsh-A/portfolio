import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 
import './About.css';

import imgme from '../assets/me.jpeg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleResumeClick = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <>
      <Navbar />
      
      <div className="about-scroll-layout">
        <div className="back-button-container">
          <Link to="/" className="back-link">
            &larr; BACK TO HOME
          </Link>
        </div>

        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="image-frame">
              <img 
                src={imgme} 
                alt="Profile" 
              />
              
              <div className="corner-decor top-left"></div>
              <div className="corner-decor bottom-right"></div>
            </div>
          </div>

          <div className="about-content">
            <h1 className="about-title">WHO AM <span className="highlight">I?</span></h1>
            <h3 className="about-role">CREATIVE DEVELOPER & DESIGNER</h3>
            
            <div className="about-bio">
              <p>
                I’m <strong>Sriharsh Akkala</strong>, a 20-year-old founder, developer, and visual creator driven by
                the idea that creativity works best when disciplines collide.
              </p>
              <p>
                At 20, I founded a fashion brand, translating emotion, identity, and storytelling into wearable design.
                At the same time, I build web applications where logic meets experience—writing code not just to function, but to feel right.
              </p>
              <p>
                Beyond code and clothing, I work through photography and graphic design,
                using visuals as a language to capture mood, movement, and meaning.
                <strong>
                  Whether I’m designing a streetwear drop, developing a React app, or framing a shot,
                  my focus stays the same: clarity, impact, and authenticity.
                </strong>
                I don’t believe in choosing between art and engineering.
                I build at the intersection where ideas turn real, and concepts turn tangible.
              </p>
            </div>

            <div className="about-actions">
              <button className="btn-resume" onClick={handleResumeClick}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;