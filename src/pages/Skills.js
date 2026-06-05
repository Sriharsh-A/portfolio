import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const allSkills = {
  technical: [
    "React JS", "HTML", "CSS",
    "Java", "Python", "SQL", "GitHub", "Antigravity", "Claude"
  ],
  creative: [
    "UI/UX Design", "Typography", "Photography", "Branding", 
    "Photoshop", "Lightroom", "Veo", "Video Editing", "Seedance", "Gemini ImageFX", "Capcut Pro"
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (cat) => {
    setActiveCategory(activeCategory === cat ? null : cat);
  };

  return (
    <div className="skills-container">
      <h1 className="section-title">SKILLS</h1>
      
      <div className="skills-wrapper">
        {/* TECHNICAL BLOCK */}
        <div className={`skill-category-block ${activeCategory === 'technical' ? 'active' : ''}`}>
          <div className="category-header" onClick={() => toggleCategory('technical')}>
            <div className="cat-info">
              <span className="cat-index">01</span>
              <h2 className="cat-title">TECHNICAL</h2>
            </div>
            <span className="cat-plus">{activeCategory === 'technical' ? '-' : '+'}</span>
          </div>

          <AnimatePresence>
            {activeCategory === 'technical' && (
              <motion.div 
                className="skills-grid"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="grid-inner">
                  {allSkills.technical.map((skill) => (
                    <div key={skill} className="skill-pill">{skill}</div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CREATIVE BLOCK */}
        <div className={`skill-category-block ${activeCategory === 'creative' ? 'active' : ''}`}>
          <div className="category-header" onClick={() => toggleCategory('creative')}>
            <div className="cat-info">
              <span className="cat-index">02</span>
              <h2 className="cat-title">CREATIVE</h2>
            </div>
            <span className="cat-plus">{activeCategory === 'creative' ? '-' : '+'}</span>
          </div>

          <AnimatePresence>
            {activeCategory === 'creative' && (
              <motion.div 
                className="skills-grid"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="grid-inner">
                  {allSkills.creative.map((skill) => (
                    <div key={skill} className="skill-pill">{skill}</div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;