"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AnimatedText = ({ text, className, once, el: Wrapper = "div", delay = 0 }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once !== undefined ? once : true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05 * i + delay / 1000,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: "150%",
      rotate: 10,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotate: 0,
      transition: { type: "spring", damping: 12, stiffness: 100, duration: 0.6 },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        style={{ display: 'inline-block', overflow: 'hidden' }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block', marginRight: "0.25em" }}
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
