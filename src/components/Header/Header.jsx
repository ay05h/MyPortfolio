import React, { useState, useEffect } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    { id: "contact ", label: "Contect" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ayush</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rai</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Window Navbar */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ay05h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          ></a>
        </div>
      </nav>
    </>
  );
};

export default Header;
