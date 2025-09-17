import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      email: "",
      subject: "",
      msg: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello?  
            I’d love to hear from you. Drop me a message below!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I’m available for freelance projects, collaborations, or full-time
              roles. You can reach me anytime via email or LinkedIn.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <a
                  href="mailto:kumkumsahu1505@gmail.com"
                  target="_blank"
                  className="hover:text-yellow-400 transition"
                >
                  satishsatyarth2002@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span>Noida, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://github.com/Satishsatyarth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/satish-kumar-619164271/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none h-32 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-sm text-gray-400 mt-10">
        ⚠️ Currently the contact form is not functional. Please reach me
        directly via email:{" "}
        <a
          href="mailto:kumkumsahu1505@gmail.com"
          className="text-yellow-400 underline"
        >
          satishsatyarth2002@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
