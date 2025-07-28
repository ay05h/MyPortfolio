import React, { useState, useEffect } from "react";
import { SkillsInfo } from "../../utils/Constansts";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
    >
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
              SKILLS
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-300"></div>
            <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
            Comprehensive technical expertise across modern development stack
          </p>
        </div>

        {/* Skills Container */}
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {SkillsInfo.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500/50 shadow-lg shadow-purple-500/25"
                    : "bg-gray-800/50 text-gray-300 border-gray-600/30 hover:border-purple-500/30 hover:text-purple-300"
                } backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="relative">
            {SkillsInfo.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`transition-all duration-500 ${
                  activeCategory === categoryIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                {/* Category Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sm:p-8 overflow-hidden">
                  {/* Header Glow */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                  {/* Category Title */}
                  <div className="relative flex items-center justify-center space-x-3 mb-6 sm:mb-8">
                    <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide text-center">
                      {category.title}
                    </h2>
                    <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                  </div>

                  {/* Skills Grid - Animated */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`group relative transform transition-all duration-500 hover:scale-105 ${
                          isVisible && activeCategory === categoryIndex
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {/* Skill Card */}
                        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-600/20 p-3 sm:p-4 transition-all duration-300 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10">
                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300"></div>

                          <div className="relative flex flex-col items-center space-y-2 sm:space-y-3">
                            {/* Icon Container */}
                            <div className="relative p-2 sm:p-2.5 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300">
                              <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                              />
                            </div>

                            {/* Skill Name */}
                            <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white text-center leading-tight transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/50 transition-all duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-xl"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {SkillsInfo.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-purple-400 to-blue-400 w-8"
                    : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
