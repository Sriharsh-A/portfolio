import React, { useState } from 'react';
import './Experience.css';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="xp-container">
      <div className="xp-wrapper">
        {experienceData.map((item, index) => (
          <div 
            className={`xp-row ${activeIndex === index ? 'active' : ''}`} 
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="xp-content">
              <span className="xp-number">0{index + 1}</span>
              <h2 className="xp-large-title">{item.role}</h2>
              <span className="xp-meta">{item.company} // {item.duration}</span>
              
              <div className="xp-dropdown">
                <div className="xp-dropdown-inner">
                  <p className="xp-full-desc">{item.description}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="xp-view-btn"
                    >
                      VIEW WORK &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="xp-underline"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;