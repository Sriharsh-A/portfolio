import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const previewData = experienceData.slice(0, 3);

  return (
    <div className="experience-main">
      <h1 className="section-title">Experience</h1>
      
      <div className="experience-deck">
        {previewData.map((item) => (
          <div 
            className="xp-card" 
            key={item.id} 
            onClick={() => setSelectedExp(item)}
          >
            <div className="xp-header">
              <span className="xp-date">{item.duration}</span>
              <span className="xp-company">{item.company}</span>
            </div>

            <div className="xp-body">
              <h3>{item.role}</h3>
              <p>{item.description.substring(0, 100)}...</p> 
            </div>
            
            <div className="xp-footer">
               <div className="neon-line"></div>
               <span className="click-hint">Click for details</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center', zIndex: 10 }}>
        <Link to="/all-experience" className="xp-see-more-btn">
          See All Experience &rarr;
        </Link>
      </div>

      {selectedExp && (
        <div className="xp-modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="xp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="xp-close-btn" onClick={() => setSelectedExp(null)}>×</button>
            <div className="xp-modal-header">
              <span className="xp-modal-date">{selectedExp.duration}</span>
              <h2>{selectedExp.role}</h2>
              <h4 className="xp-modal-company">{selectedExp.company}</h4>
            </div>
            {selectedExp.images && selectedExp.images.length > 0 && (
              <div className="xp-image-grid">
                {selectedExp.images.map((img, index) => (
                  <div key={index} className="xp-img-wrapper">
                    <img src={img} alt="Work Proof" className="xp-proof-img" />
                  </div>
                ))}
              </div>
            )}
            <p className="xp-full-desc">{selectedExp.description}</p>
            {selectedExp.link && (
              <div className="xp-modal-actions">
                <a
                  href={selectedExp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xp-view-btn"
                >
                  View Work &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
