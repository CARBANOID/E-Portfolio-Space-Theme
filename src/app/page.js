"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlackHoleHero from "../components/BlackHoleHero";
import MobileGlassHero from "@/components/MobileGlassHero";
import AnimatedText from "@/components/AnimatedText"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen">
      
{/* Desktop Hero – hidden on small screens */}
      <div className="hidden sm:block -translate-y-8 md:-translate-y-21">
        <BlackHoleHero />
      </div>

      {/* Mobile Hero – only visible on small screens */}
      <div className="block sm:hidden transform -translate-y-23 md:-translate-y-10">
        <MobileGlassHero />
      </div>

      {/* Skills Section */}
      <section className="py-18 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText 
            el="h2"
            text="Technologies I Work With"
            className="text-3xl font-bold text-center mb-12 text-white" // Keep existing styles
            once={false} // Animate every time it comes into view
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Git",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="glass-card text-center p-6 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-white">
                  {tech}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText 
            el="h2"
            text="Featured Projects"
            className="text-3xl font-bold text-center mb-12 text-white" // Keep existing styles
            once={false} // Animate every time it comes into view
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <AnimatedText 
                  el="h3"
                  text="Portfolio Website"
                  className="text-xl font-semibold mb-3 text-white"
                  once={false}
                />
                <p className="text-white/80 mb-4">
                  A modern, responsive portfolio built with Next.js and Tailwind CSS featuring glassmorphic UI design
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Glassmorphism
                  </span>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="glass-btn glow-on-hover p-3 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <Image
                      src="/gitlogo.png"
                      alt="GitHub"
                      width={27}
                      height={27}
                      className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }} // Added a small delay
            >
              <div className="p-6">
                <AnimatedText 
                  el="h3"
                  text="NTFS File Recovery Tool"
                  className="text-xl font-semibold mb-3 text-white"
                  once={false}
                />
                <p className="text-white/80 mb-4">
                  System-level application for recovering deleted files from Window NTFS 3.1 file system using Master File Table
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    C++
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    NTFS
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    System Programming
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    MFT
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    File Recovery
                  </span>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="glass-btn glow-on-hover p-3 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <Image
                      src="/gitlogo.png"
                      alt="GitHub"
                      width={27}
                      height={27}
                      className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }} // Added a small delay
            >
              <div className="p-6">
                <AnimatedText 
                  el="h3"
                  text="AST-based Code Analyzer"
                  className="text-xl font-semibold mb-3 text-white"
                  once={false}
                />
                <p className="text-white/80 mb-4">
                  Plagiarism detection tool using Abstract Syntax Trees for anlyzing plagairism between C codes
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    C++
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Compiler Design
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    AST
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Clang
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Moore Machine
                  </span>
                  <span className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm">
                    Bison
                  </span>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://github.com/CARBANOID/C-PlagAST"
                    className="glass-btn glow-on-hover p-3 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <Image
                      src="/gitlogo.png"
                      alt="GitHub"
                      width={27}
                      height={27}
                      className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Section to Test Scrolling */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText 
            el="h2"
            text="Why Choose Me?"
            className="text-3xl font-bold text-center mb-12 text-white"
            once={false}
          />
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">System-Level Expertise</h3>
              <p className="text-white/80">Deep understanding of file systems, low-level programming, and system architecture.</p>
            </motion.div>
            <motion.div 
              className="glass-card p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Modern Web Development</h3>
              <p className="text-white/80">Proficient in React, Next.js, and modern web technologies with beautiful UI design.</p>
            </motion.div>
            <motion.div 
              className="glass-card p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Problem Solving</h3>
              <p className="text-white/80">Creative solutions to complex technical challenges with attention to detail.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
