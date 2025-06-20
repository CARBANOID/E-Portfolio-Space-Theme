import ProjectCard from "../../components/ProjectCard";
import AnimatedText from "@/components/AnimatedText"; // Import the new component

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS featuring glassmorphic UI design",
      technologies: ["Next.js", "React", "Tailwind CSS", "Glassmorphism"],
      image: "/next.svg",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "NTFS File Recovery Tool",
      description: "System-level application for recovering deleted files from Window NTFS 3.1 file system using Master File Table",
      technologies: ["C++", "NTFS", "System Programming", "MFT" , "File Recovery"],
      image: "/file.svg",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AST-based Code Analyzer",
      description: "Plagiarism detection tool using Abstract Syntax Trees for anlyzing plagairism between C codes",
      technologies: ["C++", "Compiler Design" ,"AST", "Clang", "Moore Machine", "Bison"],
      image: "/globe.svg",
      githubUrl: "https://github.com/CARBANOID/C-PlagAST"
    }
  ];
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedText 
          el="h1"
          text="My Projects"
          className="text-4xl font-bold text-center mb-12 text-white"
          once={false}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Additional Project Categories */}
        <div className="mt-16">
          <AnimatedText 
            el="h2"
            text="Project Categories"
            className="text-2xl font-bold text-center mb-8 text-white"
            once={false}
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg text-center">
              <AnimatedText 
                el="h3"
                text="System Programming"
                className="text-lg font-semibold text-white mb-2"
                once={false}
              />
              <p className="text-white/80 text-sm">Low-level tools and file system utilities</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <AnimatedText 
                el="h3"
                text="Web Development"
                className="text-lg font-semibold text-white mb-2"
                once={false}
              />
              <p className="text-white/80 text-sm">Modern web applications and portfolios</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <AnimatedText 
                el="h3"
                text="AI & Machine Learning"
                className="text-lg font-semibold text-white mb-2"
                once={false}
              />
              <p className="text-white/80 text-sm">Exploring AI concepts and applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
