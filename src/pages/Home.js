import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './Home.css';

const MagneticLetter = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dX = clientX - centerX;
    const dY = clientY - centerY;

    x.set(dX * 0.35);
    y.set(dY * 0.35);
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
      className="magnetic-char"
    >
      {children}
    </motion.span>
  );
};

const Home = () => {
  const name = "SRIHARSH AKKALA";

  return (
    <div className="home-container">
      <div className="hero-content">
        <h2 className="greeting">HELLO, I AM</h2>
        
        <h1 className="name">
          {name.split("").map((letter, index) => (
            <MagneticLetter key={index}>
              {letter === " " ? "\u00A0" : letter}
            </MagneticLetter>
          ))}
        </h1>

        <p className="description">
          A Creative Developer & Designer building digital experiences.
          <br /> 
          Specializing in React, UI/UX, and Photography.
        </p>

        <div style={{ marginTop: '40px' }}>
          <Link to="/about" className="home-cta-btn">
            Learn More About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;