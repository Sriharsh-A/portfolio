import React, { useState, useRef } from 'react';
import './Photography.css';

import imgmonster from '../assets/monster.jpeg';
import imgCC from '../assets/cc.jpg';
import imgHS from '../assets/Hillscape.jpg';
import imgdog from '../assets/dog.jpeg';
import imglight from '../assets/light.jpeg';
import imgmdsh from '../assets/mdsh.jpeg';
import imgtrails from '../assets/trails.jpeg';

const photos = [
  imgmonster,
  imgCC,
  imgHS,
  imgdog,
  imglight,
  imgmdsh,
  imgtrails,
];

const Photography = () => {
  const [trail, setTrail] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 }); 
  const imageIndex = useRef(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent; 
    
    const distance = Math.hypot(
      offsetX - lastPosition.current.x, 
      offsetY - lastPosition.current.y
    );

    if (distance > 50) {
      const newImage = {
        x: offsetX,
        y: offsetY,
        src: photos[imageIndex.current % photos.length],
        id: Date.now(),
        rotation: Math.random() * 20 - 10,
      };

      setTrail((prev) => [...prev, newImage]);
      
      lastPosition.current = { x: offsetX, y: offsetY };
      imageIndex.current += 1;

      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <div className="photo-container" onMouseMove={handleMouseMove}>
      <h1 className="photo-title">Photography</h1>
      
      {trail.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt="trail"
          className="trail-image"
          style={{
            left: img.x,
            top: img.y,
            transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Photography;