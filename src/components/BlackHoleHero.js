"use client";

import AnimatedBlackHole from "./AnimatedBlackHole";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlackHoleHero() {
  const [particles, setParticles] = useState([]);
  const [showNameAnimation, setShowNameAnimation] = useState(false);
  const [showDescriptionAnimation, setShowDescriptionAnimation] = useState(false);
  const [showButtonsAnimation, setShowButtonsAnimation] = useState(false);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      left: `${30 + Math.random() * 40}%`,
      top: `${30 + Math.random() * 40}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Black Hole Video Container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[80vw] h-[80vw] sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[650px] lg:h-[650px] rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              mixBlendMode: "lighten",
              filter: "contrast(1.1) brightness(1.05)",
            }}
          >
            <source src="/space-black-hole.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/15 rounded-full" />
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-15">
        <div className="w-[84vw] h-[84vw] sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[620px] lg:h-[620px] rounded-full bg-gradient-radial from-blue-500/25 via-blue-400/15 to-transparent blur-lg" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-2xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Shift up into the circle */}
        <div className="transform -translate-y-8 md:-translate-y-10">
          <AnimatedBlackHole />          <motion.h1
            className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TypewriterText
              text="Hi, I'm "
              className="text-white"
              delay={800}
              speed={80}
              showCursor={false}
              onComplete={() => setShowNameAnimation(true)}
            />
            {showNameAnimation && (
              <TypewriterText
                text="Sushant Negi"
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                delay={0}
                speed={80}
                showCursor={false}
                onComplete={() => setShowDescriptionAnimation(true)}
              />
            )}
          </motion.h1>          <motion.p
            className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {showDescriptionAnimation && (
              <TypewriterText
                text="A passionate web developer creating beautiful, functional and user‑friendly digital experiences"
                className="text-white/90"
                delay={300}
                speed={30}
                showCursor={false}
                onComplete={() => setShowButtonsAnimation(true)}
              />
            )}
          </motion.p>          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showButtonsAnimation ? 1 : 0, 
              y: showButtonsAnimation ? 0 : 20 
            }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="glass-btn glow-on-hover text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-all duration-300 font-medium"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="glass-btn glow-on-hover text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-all duration-300 font-medium"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                style={{ left: p.left, top: p.top }}
                animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
