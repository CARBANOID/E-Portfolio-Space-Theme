"use client";

import { motion } from "framer-motion";

export default function AnimatedBlackHole() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-6 black-hole-container">
      {/* Accretion disk - outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full accretion-disk"
        style={{
          background: `
            conic-gradient(from 0deg,
              transparent,
              rgba(59, 130, 246, 0.3),
              rgba(147, 51, 234, 0.4),
              rgba(239, 68, 68, 0.3),
              rgba(245, 158, 11, 0.2),
              transparent
            )
          `,
          filter: 'blur(1px)',
        }}
      />
      
      {/* Outer energy ring - rotating */}
      <motion.div
        className="absolute inset-1 rounded-full energy-ring-outer"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 45%, 
              rgba(59, 130, 246, 0.6) 48%, 
              rgba(147, 51, 234, 0.7) 52%, 
              rgba(59, 130, 246, 0.6) 55%, 
              transparent 58%
            )
          `,
          filter: 'blur(0.8px)'
        }}
      />
      
      {/* Middle energy ring - counter-rotating */}
      <motion.div
        className="absolute inset-3 rounded-full energy-ring-middle"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 40%, 
              rgba(147, 51, 234, 0.5) 43%, 
              rgba(59, 130, 246, 0.6) 47%, 
              rgba(147, 51, 234, 0.5) 50%, 
              transparent 53%
            )
          `,
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* Inner energy ring - fast rotation */}
      <motion.div
        className="absolute inset-5 rounded-full energy-ring-inner"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 35%, 
              rgba(59, 130, 246, 0.4) 38%, 
              rgba(147, 51, 234, 0.5) 42%, 
              transparent 45%
            )
          `,
        }}
      />
      
      {/* Event horizon - the black hole center */}
      <motion.div
        className="absolute inset-7 rounded-full bg-black event-horizon"
        style={{
          background: `
            radial-gradient(circle at center,
              #000000 0%,
              #0a0a0a 70%,
              rgba(59, 130, 246, 0.1) 100%
            )
          `,
        }}
      />
      
      {/* Gravitational lensing effect */}
      <motion.div
        className="absolute -inset-2 rounded-full gravitational-lensing"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 70%, 
              rgba(59, 130, 246, 0.08) 75%, 
              rgba(147, 51, 234, 0.06) 80%,
              transparent 85%
            )
          `,
          filter: 'blur(3px)'
        }}
      />
          
      {/* Central initials with enhanced glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-white font-bold text-xl z-10 relative select-none"
          style={{
            textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
            fontFamily: 'monospace',
          }}
          animate={{
            textShadow: [
              '0 0 10px rgba(59, 130, 246, 0.5)',
              '0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.3)',
              '0 0 10px rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          SN
        </motion.span>
      </div>
    </div>
  );
}
