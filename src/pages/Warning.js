import React from 'react';
import { useNavigate } from 'react-router-dom';

const Warning = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: '#ff3333', // Red warning color
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', textTransform: 'uppercase' }}>
        ACCESS DENIED
      </h1>
      
      <p style={{ fontSize: '1.5rem', color: 'white', marginBottom: '40px' }}>
        You really shouldn't click on unknown links...
      </p>

      <button 
        onClick={() => navigate(-1)} // Go back to previous page
        style={{
          padding: '15px 40px',
          fontSize: '1.2rem',
          backgroundColor: 'transparent',
          color: '#dfff00',
          border: '0.5px solid #dfff00',
          borderRadius: '50px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontWeight: 'none',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#dfff00';
          e.target.style.color = 'black';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#dfff00';
        }}
      >
        &larr; Go Back to Safety
      </button>
    </div>
  );
};

export default Warning;