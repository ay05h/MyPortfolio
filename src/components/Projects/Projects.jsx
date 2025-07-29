import React, { useState } from "react";
import { projects, projectCategories } from "../../utils/Constansts";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCode,
  FaTags,
  FaCalendarAlt,
} from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "text-green-400 bg-green-900/20 border-green-500/30";
      case "Completed":
        return "text-blue-400 bg-blue-900/20 border-blue-500/30";
      case "In Development":
        return "text-yellow-400 bg-yellow-900/20 border-yellow-500/30";
      default:
        return "text-gray-400 bg-gray-900/20 border-gray-500/30";
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
    >
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
              PROJECTS
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-300"></div>
            <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            A comprehensive showcase of innovative projects spanning full-stack
            development,
            <br className="hidden sm:block" />
            machine learning, and cutting-edge technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500/50 shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 border-gray-600/30 hover:border-purple-500/30 hover:text-purple-300"
              } backdrop-blur-sm`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid max-w-7xl mx-auto gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative cursor-pointer h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20 h-full flex flex-col">
                {/* Header Glow */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                      <span className="text-sm font-medium text-purple-300 bg-purple-900/20 px-3 py-1 rounded-full border border-purple-500/20">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <FaStar className="text-sm" />
                        <span className="text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Tech Highlights */}
                  {project.techHighlights && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techHighlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-blue-300 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  {project.status && (
                    <div className="mb-4">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </button>
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
          <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
            {/* Modal Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-50"></div>

            {/* Modal Header */}
            <div className="relative flex justify-between items-center p-6 border-b border-gray-700/50">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-white">
                  Project Details
                </h2>
                <span className="text-sm font-medium text-purple-300 bg-purple-900/20 px-3 py-1 rounded-full border border-purple-500/20">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200 hover:bg-gray-800/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6 sm:p-8">
                {/* Project Title and Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-0">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.status && (
                    <span
                      className={`text-sm font-medium px-4 py-2 rounded-full border ${getStatusColor(
                        selectedProject.status
                      )} w-fit`}
                    >
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-3"></div>
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Tech Highlights */}
                {selectedProject.techHighlights && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-3"></div>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProject.techHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-3 text-center"
                        >
                          <span className="text-sm font-medium text-blue-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-3"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 text-sm font-semibold text-purple-300 rounded-lg px-4 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 flex items-center justify-center space-x-2"
                    >
                      <FaGithub />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center space-x-2"
                    >
                      <FaExternalLinkAlt />
                      <span>View Live Demo</span>
                    </a>
                  )}
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
