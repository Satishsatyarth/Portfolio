import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SatishProfile from "../assets/SatishProfile.jpeg";
import avatar from "../assets/avtar.svg";
const AboutMeInHero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-normal text-center md:text-left">
            LET ME <span className="text-indigo-400">INTRODUCE</span> MYSELF
          </h1>

          <div className="mt-6 space-y-4 text-xl leading-relaxed">
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in classics like{" "}
              <span className="text-indigo-400 font-semibold">
                Java, Javascript and MERN Stack.
              </span>
            </p>
            <p>
              My field of Interest's are building new{" "}
              <span className="text-indigo-400 italic">
                Web Technologies and Products
              </span>{" "}
              and also interested in{" "}
              <span className="text-indigo-400 italic">Algorithms.</span>
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with <span className="text-indigo-400 font-semibold">java</span>{" "}
              and{" "}
              <span className="text-indigo-400 italic">
                Modern Javascript Library and Frameworks
              </span>{" "}
              like{" "}
              <span className="text-indigo-400 font-semibold">React.js</span>.
            </p>
          </div>
        </div>

        {/* Right Image (Flip Avatar/Image) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 perspective" onClick={toggleFlip}>
            <div
              className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d  hover:rotate-y-180
          ${isFlipped ? "rotate-y-180" : ""}`}
            >
              {/* Front Avatar */}
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back Image */}
              <div className="absolute w-full h-full rotate-y-180 backface-hidden flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src={SatishProfile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">FIND ME ON</h2>
        <p className="text-gray-400">
          Feel free to <span className="text-indigo-400">connect</span> with me
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl text-indigo-400 ">
          <a
            className="bg-white w-10  rounded-full overflow-hidden flex items-center justify-center p-2"
            href="https://github.com/Satishsatyarth"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="bg-white w-10  rounded-full overflow-hidden flex items-center justify-center p-2"
            href="https://www.linkedin.com/in/satish-kumar-619164271/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-white w-10  rounded-full overflow-hidden flex items-center justify-center p-2"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeInHero;
