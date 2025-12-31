// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { personalData } from './data';
import { Github, Mail, ExternalLink, Code, Briefcase, User } from 'lucide-react';

function App() {
  // Simple mouse tracking background effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* Dynamic Background Glow following mouse */}
      <div 
        className="background-glow" 
        style={{ 
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.07), transparent 40%)` 
        }}
      />

      <div className="container">
        
        {/* HERO SECTION */}
        <header>
          <div className="badge">Welcome to my portfolio</div>
          <h1>{personalData.name}</h1>
          <h2>{personalData.title}</h2>
          <p style={{ maxWidth: '600px', lineHeight: '1.6', color: '#94a3b8' }}>
            {personalData.about}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href={`mailto:${personalData.email}`} className="btn">
              <Mail size={18} /> Contact Me
            </a>
            <a href={personalData.github} className="btn" style={{ background: '#334155' }}>
              <Github size={18} /> GitHub
            </a>
          </div>
        </header>

        {/* SKILLS SECTION */}
        <section>
          <h3 className="section-title"><Code size={24} style={{ marginRight: '10px' }}/>Skills</h3>
          <div>
            {personalData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section>
          <h3 className="section-title"><Briefcase size={24} style={{ marginRight: '10px' }}/>Experience</h3>
          <div className="card-grid">
            {personalData.experience.map((exp) => (
              <div key={exp.id} className="card">
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>{exp.role}</h4>
                <div style={{ color: '#38bdf8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {exp.company} | {exp.date}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <h3 className="section-title"><User size={24} style={{ marginRight: '10px' }}/>Projects</h3>
          <div className="card-grid">
            {personalData.projects.map((project) => (
              <div key={project.id} className="card">
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>{project.title}</h4>
                <span style={{ fontSize: '0.8rem', border: '1px solid #c084fc', color: '#c084fc', padding: '2px 8px', borderRadius: '4px' }}>
                  {project.tech}
                </span>
                <p style={{ color: '#94a3b8', marginTop: '1rem' }}>{project.desc}</p>
                
                {}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ marginTop: '5rem', paddingBottom: '2rem', textAlign: 'center', color: '#64748b' }}>
          <p>© {new Date().getFullYear()} {personalData.name}. Built with React.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;