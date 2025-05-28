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

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full py-4 md:py-5 text-white flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer flex-shrink-0">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ayush</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rai</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-300 flex-1 justify-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-200 ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="px-2 py-1 text-sm xl:text-base"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons - Desktop */}
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

        {/* Mobile/Tablet Menu Button */}
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

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-4/5 md:w-3/5 bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-4 sm:space-y-5 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="px-4 py-2 text-sm sm:text-base"
                >
                  {item.label}
                </button>
              </li>
            ))}
            {/* Social Icons in Mobile Menu */}
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
