import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import AllExperience from './pages/AllExperience';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery'; 
import Contact from './pages/Contact'; 
import Warning from './pages/Warning';
import About from './pages/About';
import './App.css';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />

      <div className="grunge-overlay"></div>

      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <section id="home"><Home /></section>
              <section id="work"><Work /></section>
              <section id="experience"><Experience /></section>
              <section id="skills"><Skills /></section>
              <section id="gallery"><Gallery /></section>
              <section id="contact"><Contact /></section>
            </>
          } />

          <Route path="/all-experience" element={<AllExperience />} />  
          <Route path="/warning" element={<Warning />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;