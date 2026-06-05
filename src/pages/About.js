import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 
import './About.css';

import imgme from '../assets/me.jpeg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

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
               I'm Sriharsh Akkala, a 20-year-old founder, creator, and Information Technology student driven by curiosity, creativity, and emerging technology.

As the Co-Founder and Design Head of IMGE, I transform ideas, emotions, and stories into visual experiences through fashion, branding, and digital content. My work sits at the intersection of creativity and technology, where concepts become tangible products and experiences.

I'm particularly fascinated by Artificial Intelligence, prompt engineering, and creative workflows. I actively explore AI tools to generate images, videos, marketing assets, and content, constantly experimenting with new ways technology can amplify human creativity.

Beyond AI and entrepreneurship, I work as an automotive photographer, capturing stories through visuals and collaborating with clients on professional shoots. Photography has taught me how to communicate emotion, attention to detail, and storytelling through a single frame.

Whether I'm building a brand, creating AI-generated campaigns, analyzing data, or documenting a machine through my lens, my goal remains the same: to create work that is meaningful, impactful, and memorable.
              </p>
              <p><strong>Does it look AI-generated?</strong> <br></br>
<strong>
Yesss. It probably is.</strong></p>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;