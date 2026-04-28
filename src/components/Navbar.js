import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  const handleNavigation = (e, targetId) => {
    e.preventDefault(); 

    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId: targetId } });
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="logo" 
        onClick={(e) => handleNavigation(e, 'home')}
      >
        S.
      </div>
      
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>

        <li><a href="/" onClick={(e) => handleNavigation(e, 'work')}>Projects</a></li>
        <li><a href="/" onClick={(e) => handleNavigation(e, 'experience')}>Experience</a></li>
        <li><a href="/" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a></li>
        
        <li><a href="/" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</a></li>

        <li><a href="/" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
