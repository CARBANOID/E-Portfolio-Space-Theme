'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  
  return (
    <footer className="glass-footer text-white py-8 mt-20" style={{ background: 'rgba(0, 0, 0, 0.01)', backdropFilter: 'blur(4px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/70">
              © {new Date().getFullYear()} Sushant Negi. All rights reserved.
            </p>
          </div>
          {!isContactPage && (
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/sushant-negi-687b06251/"
                className="glass-btn glow-on-hover px-4 py-2 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src="/linkedinLogo.png"
                  alt="LinkedIn"
                  width={27}
                  height={27}
                  className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                />
              </a>
              <a
                href="https://github.com/CARBANOID"
                className="glass-btn glow-on-hover px-4 py-2 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                aria-label="GitHub Profile"
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
          )}
        </div>
      </div>
    </footer>
  );
}
