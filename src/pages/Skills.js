import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Move static data outside to prevent unnecessary re-renders
const allSkills = {
  technical: [
    "React JS", "JavaScript", "HTML5", "CSS3",
    "Git", "Python", "SQL", "Java"
  ],
  creative: [
    "UI/UX", "Photoshop", "Figma", "Photography", 
    "Video Editing", "Typography", "Branding", "Lightroom"
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const constraintsRef = useRef(null);

  const positions = useMemo(() => {
    if (!activeCategory) return [];
    
    const skillsList = allSkills[activeCategory];
    const generatedPositions = [];
    const cols = 3; 
    const rows = 3;
    
    // Using 80% of viewport to keep items away from edges
    const cellWidth = (window.innerWidth * 0.8) / cols;
    const cellHeight = (window.innerHeight * 0.8) / rows;
    
    let slots = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        slots.push({ r, c });
      }
    }
    
    // Shuffle slots for random distribution
    slots = slots.sort(() => Math.random() - 0.5);
    
    skillsList.forEach((skill, index) => {
      const slot = slots[index] || slots[0];
      const startX = (slot.c * cellWidth) - (window.innerWidth * 0.4) + (cellWidth / 2);
      const startY = (slot.r * cellHeight) - (window.innerHeight * 0.4) + (cellHeight / 2);
      
      // Add "Jitter" so they don't look like a perfect grid
      const jitterX = (Math.random() - 0.5) * (cellWidth * 0.4);
      const jitterY = (Math.random() - 0.5) * (cellHeight * 0.4);
      
      generatedPositions.push({
        id: index,
        x: startX + jitterX,
        y: startY + jitterY,
        rotation: Math.random() * 20 - 10 
      });
    });
    return generatedPositions;
  }, [activeCategory]);

  return (
    <div className="skills-container">
      <div className="skills-bg-grid"></div>
      
      <div className={`cards-wrapper ${activeCategory ? 'dimmed' : ''}`}>
        <div 
          className="category-card technical" 
          onClick={() => setActiveCategory('technical')}
        >
          <div className="card-border-glow"></div>
          <span className="card-index">01</span>
          <h2>TECHNICAL</h2>
          <div className="card-line"></div>
          <p className="card-desc">CODE & ARCHITECTURE</p>
          <button className="card-btn">INITIALIZE &rarr;</button>
        </div>

        <div 
          className="category-card creative" 
          onClick={() => setActiveCategory('creative')}
        >
          <div className="card-border-glow"></div>
          <span className="card-index">02</span>
          <h2>CREATIVE</h2>
          <div className="card-line"></div>
          <p className="card-desc">DESIGN & VISUALS</p>
          <button className="card-btn">RENDER &rarr;</button>
        </div>
      </div>

      {activeCategory && (
        <motion.div className="scatter-area" ref={constraintsRef}>
          <button className="close-btn" onClick={() => setActiveCategory(null)}>
            &times; TERMINATE SESSION
          </button>

          {allSkills[activeCategory].map((skill, index) => {
            const pos = positions[index];
            if (!pos) return null; // Safety check

            return (
              <motion.div 
                key={skill} // Better to use skill name as key if unique
                className="floating-skill"
                drag 
                dragConstraints={constraintsRef} 
                dragElastic={0.2} 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: pos.x, 
                  y: pos.y,
                  rotate: pos.rotation,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.05, 
                    type: "spring",
                    stiffness: 100 
                  }
                }}
                whileHover={{ scale: 1.1, cursor: "grab", zIndex: 100 }}
                whileDrag={{ scale: 1.2, cursor: "grabbing", zIndex: 100 }}
              >
                <div className="skill-content">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Skills;