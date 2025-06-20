"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ 
  text, 
  className, 
  delay = 0, 
  speed = 50, 
  showCursor = true,
  onComplete,
  children // For mixed content like spans within text
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, delay, speed, isComplete, onComplete]);

  return (
    <span className={className}>
      {children ? (
        // For mixed content (like text with spans)
        <>
          {displayedText}
          {children && isComplete && children}
        </>
      ) : (
        displayedText
      )}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

export default TypewriterText;
