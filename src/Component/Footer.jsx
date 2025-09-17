import React from "react";
import { FaLaptop, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Brand & About */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <FaLaptop className="text-yellow-500 text-3xl" />
            <h1 className="text-white font-bold text-2xl">Satish Kumar</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | Creating modern, responsive, and user-friendly digital experiences.  
            Portfolio of my projects, skills, and professional work.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm flex  gap-4">
            <li>
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
          <p className="text-sm text-gray-400 mb-4">📧 satishsatyarth2002@gmail.com</p>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/Satishsatyarth" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/satish-kumar-619164271/" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
              <FaLinkedin />
            </a>
            <a href="mailto:satishsatyarth2002@gmail.com" className="hover:text-yellow-500">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 px-4 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Satish Kumar. All Rights Reserved.  
        Designed & Developed with ❤️
      </div>
    </footer>
  );
};

export default Footer;
