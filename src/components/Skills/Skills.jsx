import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../utils/Constansts";

const Skills = () => (
  <section
    id="skills"
    className="py-16 sm:py-20 md:py-24 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/*Heading Part*/}
    <div className="text-center mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
        SKILLS
      </h1>
      <div className="bg-[#8245ec] w-16 sm:w-20 md:w-24 h-1 mx-auto mt-2"></div>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 mt-6 sm:mt-8 leading-relaxed max-w-2xl mx-auto px-2">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/*Skill Part*/}
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-3 md:gap-4 lg:gap-5 py-6 sm:py-8 md:py-10 justify-center sm:justify-between">
      {SkillsInfo.map((category, index) => (
        <div
          key={category.title}
          className={`bg-gray-900 backdrop-blur-3xl px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-7 md:py-8 mb-6 sm:mb-8 md:mb-10 
          ${
            index === SkillsInfo.length - 1
              ? "w-full"
              : "w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.625rem)]"
          }
          rounded-xl sm:rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300
          shadow-[0_0_15px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.4)]`}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-tight text-center sm:text-left">
            {category.title}
          </h1>

          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full"
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 sm:gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 
                  bg-transparent border-2 border-gray-700 hover:border-gray-600 
                  rounded-2xl sm:rounded-3xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-center sm:text-left
                  transition-all duration-200 hover:scale-105 hover:bg-gray-800/30"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 font-medium truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
