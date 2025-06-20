import Image from 'next/image';
import AnimatedText from "@/components/AnimatedText"; // Import the new component

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <AnimatedText 
          el="h1"
          text="Contact Me"
          className="text-4xl font-bold text-center mb-8 text-white"
          once={false}
        />
        <div className="glass-card rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="glass-input w-full px-4 py-2 rounded-lg text-white placeholder-white/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="glass-input w-full px-4 py-2 rounded-lg text-white placeholder-white/50"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="glass-input w-full px-4 py-2 rounded-lg text-white placeholder-white/50 resize-none"
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>            
            <button
              type="submit"
              className="glass-btn glow-on-hover w-full text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-white/70 mb-4">
              Or connect with me on social media
            </p>              <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sushant-negi-687b06251/"
                className="glass-btn glow-on-hover px-6 py-3 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src="/linkedinLogo.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                />
              </a>
              <a
                href="https://github.com/CARBANOID"
                className="glass-btn glow-on-hover px-6 py-3 rounded-lg text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Image
                  src="/gitlogo.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">            
          <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Let&apos;s Build Something Amazing Together</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                I&apos;m always excited to work on interesting projects and collaborate with passionate people. 
                Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
