import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './Work.css';

// Direct SVG Icons
const GithubIcon = ({ size = 20 }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.333.935 20.665.333 19.875.29c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36.105.415 2.227.055 1.265.07 1.648.07 4.85s-.015 3.585-.07 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.359-2.227.415-1.265.055-1.648.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.359-1.056-.415-2.227-.055-1.265-.07-1.648-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.359 2.227-.415 1.265-.055 1.648-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
);

const workData = [
  { id: "01", title: "Inside.", category: "Fitness System", desc: "A minimalist, AI-powered fitness system designed for progressive overload. Features automated workout generation.", tools: ["React", "Node", "Supabase"] },
  { id: "02", title: "CoLearn", category: "Collaborative Tool", desc: "Real-time collaborative study platform featuring shared code editors and live synchronization.", tools: ["React", "Firebase", "Socket.io"] },
  { id: "03", title: "IMGE", category: "Streetwear Brand", desc: "Conceptual Indian streetwear focusing on narrative-driven silhouettes and identity.", tools: ["Shopify", "Photoshop", "Blender"], live: "https://www.wearimge.in", instagram: "https://instagram.com/wearimge.in" },
  { id: "04", title: "PhishGuard", category: "ML Security", desc: "Chrome extension using machine learning models to detect phishing attempts in real-time.", tools: ["Python", "Chrome API", "React"], github: "https://github.com/Sriharsh-A" },
  { id: "05", title: "Feelit", category: "Computer Vision", desc: "Emotion-based music recommendation engine using facial landmark detection.", tools: ["TensorFlow", "Spotify API", "Python"], github: "https://github.com/Sriharsh-A" }
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="work-section">
      <h1 className="main-title">PROJECTS</h1>

      <div className="work-list">
        {workData.map((project, index) => (
          <div 
            className={`work-item ${hoveredIndex === index ? 'active' : ''}`} 
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="item-header">
              <span className="p-num">0{index + 1}</span>
              <h2 className="p-title">{project.title}</h2>
            </div>

            <div className="item-content">
              <div className="content-inner">
                <span className="p-cat">{project.category}</span>
                <p className="p-desc">{project.desc}</p>
                
                <div className="p-footer">
                  <div className="p-tools">
                    {project.tools.map(tool => (
                      <span key={tool} className="tool-chip">{tool}</span>
                    ))}
                  </div>

                  <div className="p-links">
                    {project.github && <a href={project.github} className="p-link"><GithubIcon /></a>}
                    {project.instagram && <a href={project.instagram} className="p-link"><InstagramIcon /></a>}
                    {project.live && <a href={project.live} className="p-link"><ExternalLink size={20} /></a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;