import React, { useState, useRef } from 'react';
import './Gallery.css';

import imgmonster from '../assets/monster.jpeg';
import imgCC from '../assets/cc.jpg';
import imgHS from '../assets/Hillscape.jpg';
import imgdog from '../assets/dog.jpeg';
import imglight from '../assets/light.jpeg';
import imgmdsh from '../assets/mdsh.jpeg';

const photographyImages = [
  imgmonster,
  imgCC,
  imgHS,
  imgdog,
  imglight,
  imgmdsh,
];

const Gallery = () => {
  const [trail, setTrail] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    
    const distance = Math.hypot(
      offsetX - lastPos.current.x,
      offsetY - lastPos.current.y
    );

    if (distance > 100) {
      const newImage = {
        x: offsetX,
        y: offsetY,
        src: photographyImages[indexRef.current % photographyImages.length],
        id: Date.now(),
        rotation: Math.random() * 20 - 10,
      };

      setTrail((prev) => [...prev, newImage]);
      lastPos.current = { x: offsetX, y: offsetY };
      indexRef.current += 1;

      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <div className="gallery-full-page" onMouseMove={handleMouseMove}>
      <h1 className="gallery-main-title">GALLERY</h1>

      {trail.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt="trail"
          className="trail-img"
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

export default Gallery;
