"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";

const AnimatedText = ({ text, className, once, el: Wrapper = "div", delay = 0 }) => {
  const words = useMemo(() => text.split(" "), [text]);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: once !== undefined ? once : true, 
    amount: 0.1,
    margin: "0px 0px -10% 0px" // Only trigger when element is closer to viewport
  });
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Reduced from 0.08 for snappier animation
        delayChildren: 0.04 * i + delay / 1000, // Reduced from 0.05
      },
    }),
  }), [delay]);

  const childVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: "100%", // Reduced from 150% for less dramatic effect
      rotate: 5, // Reduced from 10
      transition: { type: "tween", duration: 0.3, ease: "easeOut" }, // Changed from spring to tween for better performance
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotate: 0,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" }, // Changed from spring to tween
    },
  }), []);
  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        style={{ 
          display: 'inline-block', 
          overflow: 'hidden',
          willChange: isInView ? 'transform, opacity' : 'auto' // Optimize for animations
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ 
              display: 'inline-block', 
              marginRight: "0.25em",
              willChange: isInView ? 'transform, opacity' : 'auto', // Optimize for animations
              transform: 'translateZ(0)' // Force GPU acceleration
            }}
            className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
