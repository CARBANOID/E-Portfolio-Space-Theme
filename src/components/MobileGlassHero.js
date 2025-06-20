"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterText from "./TypewriterText";
import { useState } from "react";


export default function MobileGlassHero() {
  const [showNameAnimation, setShowNameAnimation] = useState(false);
  const [showDescriptionAnimation, setShowDescriptionAnimation] = useState(false);
  const [showButtonsAnimation, setShowButtonsAnimation] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div 
          className="glass-card max-w-4xl mx-auto px-8 py-12 sm:px-12 lg:px-16 text-center relative z-10 m-4" 
          style={{ background: 'rgba(255, 255, 255, 0.005)', backdropFilter: 'blur(3px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              SN
            </div>
          </motion.div>          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypewriterText
              text="Hi, I'm "
              className="text-white"
              delay={1200}
              speed={80}
              showCursor={false}
              onComplete={() => setShowNameAnimation(true)}
            />
            {showNameAnimation && (
              <TypewriterText
                text="Sushant Negi"
                className="text-blue-400"
                delay={0}
                speed={80}
                showCursor={false}
                onComplete={() => setShowDescriptionAnimation(true)}
              />
            )}
          </motion.h1>          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {showDescriptionAnimation && (
              <TypewriterText
                text="A passionate web developer creating beautiful, functional, and user-friendly digital experiences"
                className="text-white/80"
                delay={300}
                speed={30}
                showCursor={false}
                onComplete={() => setShowButtonsAnimation(true)}
              />
            )}
          </motion.p>          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showButtonsAnimation ? 1 : 0, 
              y: showButtonsAnimation ? 0 : 20 
            }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="glass-btn glow-on-hover text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="glass-btn glow-on-hover text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium cursor-pointer"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
