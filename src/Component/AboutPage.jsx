import React from "react";
import profile from '../assets/myImage.jpg'
import resume from '../assets/SatishResume.pdf'

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-xl border-4 border-white object-cover"
          />
        </div>

        {/* Intro + Skills */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">About Me</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Hi, I’m <span className="font-semibold text-cyan-300">Satish kumar</span>,
            a passionate <span className="text-cyan-200">Full Stack Developer </span>
            who loves building fast, accessible, and visually engaging digital experiences.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "React.js",
                "MySQL",
                "Java",
                "JDBC",
                "SQL"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg text-sm shadow-md 
                   hover:bg-cyan-400 hover:scale-105 transition transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>


          {/* Resume Button */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={resume}
              download
              className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:bg-cyan-400 transition"
            >
              Download Resume
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-200 font-semibold hover:bg-cyan-600/40 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
