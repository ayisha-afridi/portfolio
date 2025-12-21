import React, { useState, useCallback, memo } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

// Memoized ProjectImageCarousel component to prevent unnecessary re-renders
const ProjectImageCarousel = memo(({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const hasMultipleImages = images.length > 1;

  return (
    <div className="relative w-full aspect-video mb-1 md:mb-2 overflow-hidden rounded-xl md:rounded-2xl group">
      {/* Main Image */}
      <img
        src={images[currentImageIndex]}
        alt="Project screenshot"
        className="w-full h-full p-1 sm:p-2 rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {/* Navigation arrows (only show if multiple images) */}
      {hasMultipleImages && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 rounded-full p-1 bg-slate-700 hover:bg-slate-500/50 opacity-50 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 rounded-full p-1 bg-slate-700 hover:bg-slate-500/50 opacity-50 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full ${
                  index === currentImageIndex ? "bg-gray-200" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});

// Memoized ProjectCard component
const ProjectCard = memo(({ project, index }) => {
  return (
    <div className="bg-zinc-900/45 border border-blue-300/45 hover:border-rose-200 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] flex flex-col relative group">
      <ProjectImageCarousel images={project.images} />

      <div className="p-3 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold lg:-mt-3 md:-mt-3 mb-2 py-1 text-blue-200 group-hover:text-rose-200 transition-colors">
          {project.title}
        </h3>

        <p className="flex-grow text-gray-100 mb-4 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-slate-700/50 text-white px-2 py-1 rounded-full text-sm hover:scale-[1.1] hover:bg-slate-700/45 hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-300 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

// Project data defined outside component to prevent recreation on each render
const projectsData = [
  {
    title: "This Personal Portfolio Website",
    description:
      "A personal portfolio website for displaying my web development skills, alongside my projects, skills, and experience.",
    technologies: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ayisha-afridi/portfolio",
    images: ["/images/portfolio_home.png"],
  },
  {
    title: "Responsive Gym Website",
    description:
      "A gym website that showcases different services and membership options for people in Saudi Arabia. The site includes registration and contact forms, as well as location information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: ["/images/gym_home.png", "/images/gym_services.png"],
  },
  {
    title: "School Cafeteria Management System",
    description:
      "A back-end project that enables different users such as, students and administrative staff, to view, interact with, and manage a school's cafeteria menu.",
    technologies: ["Java"],
    images: ["/images/javalogo2_free.png"],
  },
];

const Projects = () => {
  return (
    <section className="py-12 sm:py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <h2
          id="projects"
          className="text-3xl sm:text-4xl font-semibold py-2 mb-4 bg-gradient-to-l from-white to-blue-100 bg-clip-text text-transparent leading-relaxed"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
