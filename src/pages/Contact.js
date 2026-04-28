import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="contact-section" id="contact">
      <div className="contact-wrapper">
        
        <div className="contact-main">
          
          <div className="contact-left">
            <div className="contact-logo-mark">
              <span className="logo-char">S.</span>
              
            </div>

            <p className="contact-msg">
              Found anything interesting? Or just want to say hi? <br />
              Hit me up! 
            </p>
          </div>

          <div className="contact-right">
            
            <div className="social-row">
              <a href="https://github.com/Sriharsh-A" target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub />
              </a>
              
              <a href="https://instagram.com/harshgotskills_" target="_blank" rel="noreferrer" className="icon-link">
                <FaInstagram />
              </a>

              <a href="mailto:sriharshakkala@gmail.com" className="icon-link">
                <FaEnvelope />
              </a>

              <a href="https://www.linkedin.com/in/sriharsh-akkala-70b0472b5/" target="_blank" rel="noreferrer" className="icon-link">
                <FaLinkedinIn />
              </a>
            </div>

          </div>
        </div>

        <div className="contact-separator"></div>

        <div className="contact-footer-meta">
          <div className="meta-info">
            <div className="location-time">
              <span className="pin"></span> HYDERABAD, {formattedTime} IST
            </div>
            <div className="version-tag">
              Built using React
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;