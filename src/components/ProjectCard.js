import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-lg overflow-hidden hover:scale-105 cursor-pointer transition-all duration-300 no-scrollbar">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">
          {project.title}
        </h3>
        <p className="text-white/80 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="glass-btn px-3 py-1 text-blue-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
            <div className="flex space-x-6">
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
      </div>
    </div>
  );
}
