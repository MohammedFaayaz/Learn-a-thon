import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";

const Navbar = ({ onRulesClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "rules" && onRulesClick) {
      onRulesClick(); 
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
    setIsOpen(false); 
  };

  const navItems = [
    "about",
    "themes",
    "timeline",
    "prizes",
    "rules",
    "sponsors",
    "faq",
    "contact",
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Hackathon Logo" className="h-10 w-10 rounded-full" />
            <h1 className="text-2xl font-bold text-cyan-700 tracking-wide">
              Learn-A-Thon
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium capitalize"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-3xl text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2 animate-slide-down">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition capitalize"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
