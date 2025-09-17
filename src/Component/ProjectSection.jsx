import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "World Atlas",
    description:
      "“World Atlas is a React-based web app that fetches real-time country data via REST APIs, allowing users to explore and filter countries by name, flag, and other details.”",
    image:
      "https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Html","CSS", "JavaScript","React","Tailwind CSS"],
    liveLink: "https://satishworldatlas.netlify.app/",
    githubLink: "https://github.com/Satishsatyarth/WorldAtlas",
  },
  {
    title: "EduCorner",
    description:
      "EduCorner is a learning platform that provides educational resources for students and learners.",
    image:
      "https://plus.unsplash.com/premium_vector-1725335969613-fd5fd8d7fc4f?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://satishsatyarth.github.io/EduCorner/",
    githubLink: "https://github.com/Satishsatyarth/EduCorner",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and achievements with a modern and responsive design.",
    image:
      "https://static.vecteezy.com/system/resources/previews/041/761/097/non_2x/personal-portfolio-illustration-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-background-vector.jpg",
    tags: ["Html", "CSS","JavaScript","React","Tailwind CSS"],
    liveLink: "https://portfolio-ruddy-mu-dnktul71sv.vercel.app/",
    githubLink: "https://github.com/Satishsatyarth/Portfolio",
  },
  {
    title: "Random-Password-Manager",
    description:
      "One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols. • One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.",
    image:
      "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg",
    tags: ["Html", "CSS", "JavaScript"],
    liveLink: "https://satishsatyarth.github.io/Random-Password-Manager/",
    githubLink:
      "https://github.com/Satishsatyarth/Random-Password-Manager",
  },
  {
    title: "BMI Calculator",
    description:
      "BMI Calculator — a simple tool to calculate body mass index and track health status.",
    image:
      "https://images.pexels.com/photos/6963017/pexels-photo-6963017.jpeg",
    tags: ["Html", "Css", "JavaScript"],
    liveLink: "https://satishsatyarth.github.io/BMI-Calculator/",
    githubLink: "https://github.com/Satishsatyarth/BMI-Calculator",
  },
  
  {
    title: "SpotifyClone",
    description:
      "Spotify Clone — a music streaming app replica with playlists, search, and playback features.",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Html", "CSS"],
    liveLink: "https://spotify-clone-five-ruddy.vercel.app/",
    githubLink: "https://github.com/Satishsatyarth/Spotify-Clone",
  }
  
];

const ProjectSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider relative inline-block">
            My Projects
            <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent works showcasing web apps, animations, and backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-yellow-500/30 transition-all"
            >
              {/* Project Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="p-5 flex flex-wrap gap-2 border-t border-gray-700">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
