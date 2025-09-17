// ProfessionalSkillset.jsx
import React from "react";

const skills = [
  "./../public/html-124-svgrepo-com.svg",
  "../../public/css3-02-svgrepo-com.svg",
  "../../public/material-ui-svgrepo-com.svg",
  "../../public/tailwind-css-svgrepo-com.svg",
  "../../public/java-script-svgrepo-com.svg",
  "../../public/java-svgrepo-com.svg",
  "../../public/react-svgrepo-com.svg",
  "../../public/dbs-mysql-svgrepo-com.svg",
  "../../public/github-svgrepo-com.svg",
 
];

const ProfessionalSkillset = () => {
  return (
    <div className="text-center px-15">
      <h2 className="text-3xl font-bold mb-8">
        Professional <span className="text-indigo-400">Skillset</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15 justify-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
           className="svgAbout p-6 rounded-lg border hover:scale-105 transition-transform"
          >
            <img src={`/${skill}`} alt={skill} className="w-40 h-18 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkillset;
