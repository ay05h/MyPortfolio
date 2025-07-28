import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../utils/Constansts";

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
  >
    <div className="relative z-10">
      <div className="text-center mb-16 sm:mb-20">
        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
            SKILLS
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
          A comprehensive collection of technical expertise and cutting-edge
          skills
          <br className="hidden sm:block" />
          refined through innovative projects and continuous learning
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            className={`group relative ${
              index === SkillsInfo.length - 1 && SkillsInfo.length % 2 !== 0
                ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto"
                : ""
            }`}
          >
            {/* Card Background with Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></div>

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                {/* Header Glow */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                <div className="relative p-8">
                  {/* Category Title */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                      {category.title}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group/skill relative"
                        style={{
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      >
                        {/* Skill Card */}
                        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-600/30 p-4 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover/skill:from-purple-500/10 group-hover/skill:to-blue-500/10 rounded-xl transition-all duration-300"></div>

                          <div className="relative flex flex-col items-center space-y-3">
                            {/* Icon Container */}
                            <div className="relative p-3 bg-gray-700/50 rounded-lg group-hover/skill:bg-gray-600/50 transition-all duration-300">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover/skill:opacity-100 rounded-lg transition-all duration-300"></div>
                              <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="relative w-8 h-8 object-contain filter group-hover/skill:drop-shadow-lg transition-all duration-300"
                              />
                            </div>

                            {/* Skill Name */}
                            <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white text-center leading-tight transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover/skill:via-purple-400/60 transition-all duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
