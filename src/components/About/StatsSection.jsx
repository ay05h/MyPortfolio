import React, { useState, useEffect, useRef } from "react";
import { stats } from "../../utils/Constansts";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    cgpa: 0,
    technologies: 0,
    projects: 0,
    certifications: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          current = current + increment;

          if (stat.key === "cgpa") {
            setCounts((prev) => ({
              ...prev,
              [stat.key]: Math.min(current, stat.target),
            }));
          } else {
            setCounts((prev) => ({
              ...prev,
              [stat.key]: Math.min(Math.floor(current), stat.target),
            }));
          }

          if (step >= steps) {
            setCounts((prev) => ({ ...prev, [stat.key]: stat.target }));
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);
  const formatValue = (key, value) => {
    if (key === "cgpa") {
      return value.toFixed(2);
    }
    return Math.floor(value);
  };

  return (
    <section
      ref={sectionRef}
      className="py-4 max-w-screen px-[5vw] md:px-[5vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="relative group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="stat-item text-center p-4 md:p-6 lg:p-8 bg-black bg-opacity-30 rounded-3xl backdrop-blur-lg border border-gray-600 border-opacity-30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-gray-400 hover:shadow-2xl hover:shadow-black/40 relative overflow-hidden min-w-[140px] md:min-w-[180px] lg:min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black/30 to-gray-700/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="stat-number text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-3">
                    {formatValue(stat.key, counts[stat.key])}
                    {stat.suffix}
                  </div>
                  <div className="stat-label text-gray-300 text-sm lg:text-base xl:text-lg font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                <div
                  className="absolute bottom-2 left-2 w-1 h-1 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
