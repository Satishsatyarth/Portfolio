import { Link } from "react-router-dom";
import image from "../assets/profile-removebg-preview.png";
import TypewriterEffect from "./TypeWriterEffect";
import AboutMeInHero from "./AboutMeInHero";

// import profile2 from '../assets/profile2.png';
const Hero = () => {
  return (
  <>
    <section
  id="home"
  className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white min-h-screen flex items-center py-20"
>
  <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12 ">
    {/* Left Content */}
    <div className="w-full md:w-1/2 max-w-[600px] text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-normal mb-4">
        Hi There!{" "}
        <span className="wave text-4xl font-bold inline-flex items-center gap-2">
          👋
        </span>
      </h1>

      <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
        I'M <span className="text-indigo-400">SATISH KUMAR</span>
      </h1>

      {/* Typewriter */}
      <div className="mb-6 text-lg sm:text-xl font-medium">
        <TypewriterEffect
          words={[
            "Java FullStack Developer",
            "Frontend Developer",
            "Software Developer",
            "Competitive Programmer",
          ]}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition shadow-lg"
        >
          View My Work
        </Link>

        <Link
          to="/contact"
          className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg font-medium hover:bg-indigo-400 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={image}
        alt="Developer Illustration"
        className="w-72 h-72 md:w-96 md:h-96 object-contain"
      />
    </div>
  </div>
</section>

    <AboutMeInHero/>
  </>
   
  );
};

export default Hero;
