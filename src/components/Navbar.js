'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="glass-nav w-full" style={{ background: 'rgba(0, 0, 0, 0.01)', backdropFilter: 'blur(4px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="glass-btn glow-on-hover text-white/90 hover:text-white transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="glass-btn p-3 rounded-lg text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-md"
          style={{ 
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="glass-btn p-3 rounded-full text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-full max-w-sm space-y-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="glass-card block w-full text-center py-6 px-8 text-white/90 hover:text-white text-xl font-medium transition-all duration-300 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-95 transform"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              

            </div>
          </div>

          {/* Background overlay click to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
        </div>
      )}
    </>
  );
}