// About.jsx
import React from "react";
import ProfessionalSkillset from "./ProfessionalSkillset";
import aboutImage from '../assets/aboutImage-removebg.png'

const About = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white py-16 px-6 b  lg:px-20  space-y-20">

            {/* About Me */}
            <div className="flex flex-col md:flex-row items-center md:py-10 py-15">
                {/* Left Side */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold pl-20 md:pl-40 lg:text-left">
                        Know Who <span className="text-indigo-400">I'M</span>
                    </h2>
                    <div className="text-lg tracking-wider">
                        <p className="leading-relaxed">
                            Hi Everyone, I am <span className="text-indigo-400 font-semibold">Satish Kumar </span>
                            from <span className="text-indigo-400">Bihar, India</span>. <br />
                            I am recently completed my B.Tech in Computer Science from Sagar Institute Of Research and Technology,Bhopal (2021–2025).
                        </p>
                        <div className="mt-10">
                            <p>
                                Apart from coding, some other activities that I love to do:
                            </p>
                            <ul className="space-y-2">
                                <li>👉 Playing Games</li>
                                <li>👉 Travelling</li>
                            </ul>
                        </div>
                        <div className="ml-30 mb-4">
                            <blockquote className="italic text-indigo-400 mt-6">
                                "Strive to build things that make a difference!"
                            </blockquote>
                            <p className="text-gray-400">— Satish</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex-1">
                    <img
                        src={aboutImage}
                        alt="Coding Illustration"
                        className="w-full max-w-xl mx-auto"
                    />
                </div>
            </div>

            {/* Professional Skillset */}
            <ProfessionalSkillset />

            {/* Tools Section */}
            <div className="text-center px-15">
                <h2 className="text-3xl font-bold mb-8 text-indigo-400">
                    Tools <span className=" text-white">I use</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-15 justify-items-center ">
                    {["../../public/windows-svgrepo-com.svg",
                        "../../public/visual-studio-svgrepo-com.svg",
                        "../../public/eclipseide-svgrepo-com.svg",
                        "../../public/postman-svgrepo-com.svg",
                    ].map(
                        (tool, i) => (
                            <div
                                key={i}
                                className="svgAbout p-6 rounded-xl border hover:scale-105 transition-transform"
                            >
                                <img src={tool} alt="tool" className="w-40 h-18  mx-auto " />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
