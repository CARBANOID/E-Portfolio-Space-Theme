'use client';

import { useState } from 'react';

export default function ResumeSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="glass-card rounded-lg p-8 md:p-10 my-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        My Resume
      </h2>
      
      <p className="text-white/80 mb-8 max-w-xl mx-auto">
        Take a deeper look at my professional experience, skills, and qualifications.
        Feel free to download my resume for a comprehensive overview of my background.
      </p>
      
      <a 
        href="/Resume.pdf" 
        target="_blank"
        className={`glass-btn glow-on-hover inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white/90 hover:text-white transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        download="Sushant_Negi_Resume.pdf"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" 
          />
        </svg>
        Download Resume
      </a>
      
      
    </div>
  );
}
