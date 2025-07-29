import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: FiMail,
      text: "dev.ayushkumar.in@gmail.com",
      href: "mailto:dev.ayushkumar.in@gmail.com",
    },
    {
      icon: FiPhone,
      text: "+91 75100 65645",
      href: "tel:+917510065645",
    },
    {
      icon: FiMapPin,
      text: "Coimbatore, Tamil Nadu",
      href: "https://maps.google.com/?q=Coimbatore+Tamil+Nadu",
    },
  ];

  return (
    <footer className="w-full relative bg-gradient-to-t from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-t border-gray-700/50 mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-xl sm:text-2xl font-bold cursor-pointer inline-block">
                  <span className="text-[#8245ec]">&lt;</span>
                  <span className="text-white">Ayush</span>
                  <span className="text-[#8245ec]">/</span>
                  <span className="text-white">Kumar</span>
                  <span className="text-[#8245ec]">/</span>
                  <span className="text-white">Rai</span>
                  <span className="text-[#8245ec]">&gt;</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                Passionate full-stack developer and AI enthusiast dedicated to
                creating innovative solutions and pushing the boundaries of
                technology. Always excited to collaborate on meaningful
                projects.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/ay05h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gray-800/50 hover:bg-gray-700/60 rounded-lg flex items-center justify-center border border-gray-600/30 hover:border-purple-500/40 transition-all duration-300"
                >
                  <FaGithub className="text-gray-300 group-hover:text-white text-lg transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-kumar-rai-ay05h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gray-800/50 hover:bg-gray-700/60 rounded-lg flex items-center justify-center border border-gray-600/30 hover:border-blue-500/40 transition-all duration-300"
                >
                  <FaLinkedin className="text-gray-300 group-hover:text-blue-400 text-lg transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-3"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.href.slice(1))
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-3"></div>
                Contact Info
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base flex items-start group"
                    >
                      <info.icon
                        className="text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300"
                        size={16}
                      />
                      <span className="break-words">{info.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center text-gray-400 text-sm">
                <span>© {currentYear} Ayush Kumar Rai</span>
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
              >
                <span>Back to Top</span>
                <div className="w-8 h-8 bg-gray-800/50 group-hover:bg-purple-600/20 rounded-lg flex items-center justify-center border border-gray-600/30 group-hover:border-purple-500/40 transition-all duration-300">
                  <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
