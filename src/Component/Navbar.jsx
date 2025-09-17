import React, { useState } from "react";
import { FaLaptop, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/SatishResume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="bg-gray-900 text-white fixed w-full shadow-lg z-50">
      <div className="flex justify-between items-center h-16 px-6 md:px-6 lg:px-20 ">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <FaLaptop className="text-yellow-400" />
          <span className="text-white">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`relative transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}`
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
                }`}
            >
              {item}
              {/* underline effect */}
              <span
                className={`absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 
                  transition-transform duration-300 
                  ${location.pathname === `/${item.toLowerCase()}`
                    ? "scale-x-100"
                    : "scale-x-0"
                  }`}
              />
            </Link>
          ))}

          {/* Resume Button (desktop only) */}
          <div className="hidden md:block">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
            >
              Resume
            </a>
          </div>
        </nav>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-700 transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Slide in from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-6 h-16 border-b border-gray-700">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`block transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}`
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Resume button in mobile menu */}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
