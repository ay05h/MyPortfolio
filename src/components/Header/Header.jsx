import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: [0, 0.1, 0.2, 0.3],
    };

    const observerCallback = (entries) => {
      const sortedEntries = entries.sort(
        (a, b) => b.intersectionRatio - a.intersectionRatio
      );

      const mostVisible = sortedEntries.find((entry) => entry.isIntersecting);

      if (mostVisible) {
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["about", "education", "skills", "projects", "contact"];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      } else {
        console.error(`Section with id "${sectionId}" not found!`);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScrollFallback = () => {
      const sections = ["about", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }
    };

    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScrollFallback, 100);
    };

    window.addEventListener("scroll", throttledScroll);

    handleScrollFallback();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [activeSection]);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const elementPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ${
        isScrolled
          ? "bg-[#050414]/20 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full py-4 md:py-5 text-white flex justify-between items-center">
        <div className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer flex-shrink-0">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ayush</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rai</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-300 flex-1 justify-center">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-200 ${
                  isActive ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="px-2 py-1 text-sm xl:text-base relative"
                >
                  {item.label}

                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex space-x-4 xl:space-x-5 flex-shrink-0">
          <a
            href="https://github.com/ay05h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-kumar-rai-ay05h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="lg:hidden flex-shrink-0">
          {isOpen ? (
            <FiX
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-4/5 md:w-3/5 bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-4 sm:space-y-5 py-6 text-gray-300">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                    isActive ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className="px-4 py-2 text-sm sm:text-base relative"
                  >
                    {item.label}

                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    )}
                  </button>
                </li>
              );
            })}

            <div className="flex space-x-6 pt-4 border-t border-gray-700 border-opacity-50">
              <a
                href="https://github.com/ay05h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-rai-ay05h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
