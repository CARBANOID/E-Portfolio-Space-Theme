'use client';

import { useState, useEffect, useRef } from 'react';

export default function AlwaysActiveCursor() {
  // Track mouse and cursor positions
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // For magnetic effect
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  
  // Performance optimization with refs
  const animationFrameRef = useRef();
  const mousePositionRef = useRef({ x: 0, y: 0 });  // Function to detect mobile devices
  const isMobileDevice = () => {
    return (typeof window !== 'undefined') && 
      (window.matchMedia('(hover: none) and (pointer: coarse)').matches || 
       window.innerWidth <= 768);
  };

  useEffect(() => {
    // Skip cursor effect on mobile devices
    if (isMobileDevice()) {
      setIsMounted(false);
      return;
    }
    
    // Only activate cursor on desktop devices
    document.body.style.cursor = 'none';
    setIsMounted(true);
    
    // Initialize with current mouse position if available
    const initialPos = { 
      x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
      y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
    };
    setMousePosition(initialPos);
    setCursorPosition(initialPos);
    mousePositionRef.current = initialPos;

    // Track mouse movement
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      
      // Update refs immediately for smooth animation
      mousePositionRef.current = newPos;
      
      // Update state (will be used for rendering)
      setMousePosition(newPos);      // Check for interactive elements to disable animations
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        // More comprehensive interactive element detection
        const isInteractive = 
          // Direct element checks
          target.tagName === 'BUTTON' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'SELECT' || 
          target.tagName === 'A' ||
          target.tagName === 'TEXTAREA' ||
          target.type === 'submit' ||
          target.type === 'button' ||
          // Parent element checks
          target.closest('button') || 
          target.closest('input') || 
          target.closest('select') || 
          target.closest('textarea') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          // Class-based checks (more comprehensive)
          target.classList.contains('glow-on-hover') ||
          target.classList.contains('cursor-pointer') ||
          target.classList.contains('glass-btn') ||
          target.closest('.glow-on-hover') ||
          target.closest('.cursor-pointer') ||
          target.closest('.glass-btn') ||
          // CSS cursor check
          window.getComputedStyle(target).cursor === 'pointer' ||
          // Additional Next.js Link detection
          target.getAttribute('href') !== null ||
          target.closest('[href]') ||
          // Any element with click handlers or interactive roles
          target.onclick !== null ||
          target.getAttribute('role') === 'button' ||          target.getAttribute('tabindex') !== null;
        
        setIsHovering(isInteractive);
        setHoveredElement(isInteractive ? target : null);
      } else {
        setIsHovering(false);
        setHoveredElement(null);
      }
      setMagneticOffset({ x: 0, y: 0 });
    };

    // Animation function - very high easing for quick response
    const animateCursor = () => {
      setCursorPosition(prev => {
        // Get current mouse position from ref for immediate response
        const mousePos = mousePositionRef.current;
        
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
          // Use consistent easing regardless of hover state
        const easing = 0.5;
        
        return {
          x: prev.x + dx * easing,
          y: prev.y + dy * easing
        };
      });
      
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    // Start cursor animation
    animateCursor();
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // No dependencies to prevent rerunning this effect
  // Calculate final position without magnetic offset
  const position = {
    x: cursorPosition.x,
    y: cursorPosition.y
  };

  return (
    <>
      {/* Only render after mounting to prevent hydration mismatch */}
      {isMounted && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            pointerEvents: 'none', 
            zIndex: 99999,
            overflow: 'hidden'
          }}        >          {/* Large Background Orb - Advanced Team Style */}
          <div
            style={{
              position: 'absolute',
              left: position.x - 200,
              top: position.y - 200,
              width: '400px',
              height: '400px',
              background: `radial-gradient(circle, 
                rgba(139, 92, 246, 0.15) 0%, 
                rgba(59, 130, 246, 0.1) 25%, 
                rgba(6, 182, 212, 0.08) 50%, 
                rgba(168, 85, 247, 0.05) 75%, 
                transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: isHovering ? 0.3 : 0.7,
              transform: `scale(1) translate3d(0, 0, 0)`,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform, opacity',
            }}
          />
            {/* Medium Orb Layer */}
          <div
            style={{
              position: 'absolute',
              left: position.x - 120,
              top: position.y - 120,
              width: '240px',
              height: '240px',
              background: `radial-gradient(circle, 
                rgba(139, 92, 246, 0.25) 0%, 
                rgba(59, 130, 246, 0.18) 35%, 
                rgba(6, 182, 212, 0.12) 70%, 
                transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(30px)',
              opacity: isHovering ? 0.2 : 0.8,
              transform: `scale(1) translate3d(0, 0, 0)`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform, opacity',
            }}
          />          {/* Inner Glow */}
          <div
            style={{
              position: 'absolute',
              left: position.x - 60,
              top: position.y - 60,
              width: '120px',
              height: '120px',
              background: `radial-gradient(circle, 
                rgba(139, 92, 246, 0.4) 0%, 
                rgba(59, 130, 246, 0.25) 40%, 
                transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(15px)',
              opacity: isHovering ? 0.1 : 0.6,
              transform: `scale(1) translate3d(0, 0, 0)`,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              willChange: 'transform, opacity',
            }}          />          {/* Main cursor dot */}
          {!isHovering && (
            <div
              style={{
                position: 'absolute',
                left: position.x - 5,
                top: position.y - 5,
                width: '10px',
                height: '10px',
                background: 'radial-gradient(circle, #ffffff 0%, #8b5cf6 60%, #3b82f6 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0 0 8px #8b5cf6, 0 0 16px rgba(139, 92, 246, 0.5)',
                transition: 'width 0.1s ease, height 0.1s ease, background 0.1s ease',
                zIndex: 2,
                willChange: 'transform, left, top',
              }}
            />
          )}          {/* Outer ring for enhanced visual feedback */}
          {!isHovering && (
            <div
              style={{
                position: 'absolute',
                left: position.x - 18,
                top: position.y - 18,
                width: '36px',
                height: '36px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50%',
                opacity: 0.7,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)',
                animation: 'neon-pulse 2s infinite ease-in-out',
                zIndex: 1,
                willChange: 'left, top',
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
