import ResumeSection from '@/components/ResumeSection';
import AnimatedText from "@/components/AnimatedText"; // Import the new component

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedText 
          el="h1"
          text="About Me"
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          once={false}
        />
        
        <div className="glass-card rounded-lg p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              SN
            </div>
            <div className="flex-1 text-center md:text-left">
              <AnimatedText 
                el="h2"
                text="Sushant Negi"
                className="text-2xl font-semibold text-white mb-2"
                once={false}
              />
              <p className="text-blue-300 font-medium">
                Full-Stack Developer & System Programmer
              </p>
            </div>
          </div>
          
          <div className="space-y-6">            
            <p className="text-lg text-white/80 leading-relaxed">
              I&apos;m Sushant Negi, a passionate developer with a strong interest in system-level programming, 
              file system analysis, and full-stack web development. I build tools like NTFS file recovery apps
              and AST-based C code plagiarism detectors, and I love combining low-level logic with modern UI 
              frameworks like React and Next.js.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              I&apos;m always exploring how things work under the hood and enjoy solving real-world technical challenges.
              My approach combines deep technical knowledge with practical problem-solving to create meaningful solutions.
            </p>
          </div>        </div>

        {/* Resume Section */}
        <ResumeSection />
        
        {/* Skills & Interests Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-lg p-6">
            <AnimatedText 
              el="h3"
              text="Technical Expertise"
              className="text-xl font-semibold text-white mb-4"
              once={false}
            />
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50"></span>
                System-level Programming
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50"></span>
                File System Analysis
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50"></span>
                Full-Stack Web Development
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50"></span>
                AST-based Code Analysis
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-400/50"></span>
                React & Next.js
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-lg p-6">
            <AnimatedText 
              el="h3"
              text="Interests & Hobbies"
              className="text-xl font-semibold text-white mb-4"
              once={false}
            />
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50"></span>
                Building Developer Tools
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50"></span>
                Low-level System Programming
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50"></span>
                Modern UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50"></span>
                Solving Complex Problems
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg shadow-purple-400/50"></span>
                Continuous Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
