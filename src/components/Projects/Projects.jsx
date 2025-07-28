import React, { useState } from "react";
import { projects } from "../../utils/Constansts";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
    >
      <div className="relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
              PROJECTS
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-300"></div>
            <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            A comprehensive showcase of innovative projects and technical
            achievements
            <br className="hidden sm:block" />
            Demonstrating expertise across various technologies and development
            practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid max-w-7xl mx-auto gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20">
                {/* Header Glow */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                <div className="relative z-10 p-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-800/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p
                    className="text-gray-400 mb-6 leading-relaxed overflow-hidden group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-xs font-semibold text-purple-300 rounded-full px-3 py-1.5 group-hover:border-purple-400/50 group-hover:text-purple-200 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="inline-block bg-gray-700/50 text-xs font-semibold text-gray-400 rounded-full px-3 py-1.5">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/60 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-50"></div>

            {/* Modal Header */}
            <div className="relative flex justify-between items-center p-6 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold text-white">Project Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200 hover:bg-gray-800/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 p-6">
                  <div className="relative overflow-hidden rounded-xl bg-gray-800/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 lg:pt-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                    {selectedProject.description}
                  </p>

                  {/* All Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 text-xs font-semibold text-purple-300 rounded-full px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
