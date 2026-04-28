import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import './InteractiveName.css';

const MagneticLetter = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement with spring physics
  const springConfig = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center of the letter
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance between mouse and letter center
    const dX = clientX - centerX;
    const dY = clientY - centerY;

    // Set how much the letter "pulls" towards the mouse (0.3 = 30% of distance)
    x.set(dX * 0.3);
    y.set(dY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY, display: 'inline-block' }}
      className="interactive-letter"
    >
      {children}
    </motion.span>
  );
};

const InteractiveName = ({ name }) => {
  return (
    <h1 className="interactive-name">
      {name.split("").map((letter, index) => (
        <MagneticLetter key={index}>
          {letter === " " ? "\u00A0" : letter}
        </MagneticLetter>
      ))}
    </h1>
  );
};

export default InteractiveName;