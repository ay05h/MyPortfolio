import React from "react";
import { education } from "../../utils/Constansts";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
    >
      <div className="relative z-10">
        {/* Header Section - Same as Skills */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
              EDUCATION
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
            My educational journey has been a pathway of continuous learning and
            growth
            <br className="hidden sm:block" />
            Here's a detailed overview of my academic achievements and
            experiences
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 h-full hidden lg:block opacity-60"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 h-full lg:hidden opacity-60"></div>

          {education.map((edu, index) => (
            <div key={edu.id} className="relative mb-12 sm:mb-16 last:mb-0">
              {/* Desktop Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-purple-500 w-16 h-16 rounded-full flex justify-center items-center z-20 sm:hidden lg:flex shadow-lg shadow-purple-500/30">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>

              {/* Mobile Timeline Node */}
              <div className="absolute left-2 sm:left-4 top-6 bg-gradient-to-br from-gray-800 to-gray-900 border-3 border-purple-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center z-10 lg:hidden shadow-lg shadow-purple-500/30">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-cover rounded-full"
                />
              </div>

              {/* Content Container */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                } justify-start`}
              >
                {/* Education Card */}
                <div
                  className={`
                  w-full ml-12 sm:ml-16 lg:ml-0 lg:w-[45%] 
                  ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}
                  group relative
                `}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></div>

                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-500 overflow-hidden p-6">
                    {/* Header Glow */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                    {/* Desktop Connection Line */}
                    <div
                      className={`
                      hidden lg:block absolute top-8 w-8 h-0.5 bg-gradient-to-r 
                      ${
                        index % 2 === 0
                          ? "right-0 translate-x-8 from-purple-400 to-transparent"
                          : "left-0 -translate-x-8 from-transparent to-purple-400"
                      }
                    `}
                    ></div>

                    <div className="relative space-y-4">
                      {/* Header Section */}
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-600/50">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-1">
                            {edu.degree}
                          </h3>
                          <h4 className="text-sm sm:text-base text-purple-300 font-medium mb-2">
                            {edu.school}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400 font-medium bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                            {edu.date}
                          </p>
                        </div>
                      </div>

                      {/* Grade Section */}
                      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-4 border border-purple-500/20 backdrop-blur-sm">
                        <p className="text-purple-200 font-semibold text-sm sm:text-base">
                          Grade:{" "}
                          <span className="text-white font-bold">
                            {edu.grade}
                          </span>
                        </p>
                      </div>

                      {/* Description */}
                      <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-600/20">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {edu.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/0 to-transparent group-hover:via-purple-400/60 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
