import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-yellow-400 text-5xl mb-4" />,
    title: "Web Development",
    description:
      "Custom website development tailored to your business needs using the latest technologies and frameworks.",
  },
  {
    icon: <FaLaptopCode className="text-yellow-400 text-5xl mb-4" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and visually engaging user interfaces using React, Tailwind CSS, and other cutting-edge frontend technologies.",
  },
  {
    icon: <FaMobileAlt className="text-yellow-400 text-5xl mb-4" />,
    title: "Responsive Design",
    description:
      "Websites that look great and function perfectly on all devices from desktop to mobile.",
  },
  {
    icon: <FaServer className="text-yellow-400 text-5xl mb-4" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with databases, APIs, and authentication systems.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
            My Services
            <span className="block h-1 w-20 bg-yellow-400 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="text-gray-200 text-base mt-4 max-w-2xl mx-auto">
            I provide scalable, modern, and responsive web solutions — from
            front-end design to full-stack development — to bring your ideas to
            life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg 
              hover:shadow-yellow-400/30 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
