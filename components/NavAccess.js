import React, { useState } from "react";
import { FaUniversalAccess, FaWheelchair, FaEye, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAccessibleIcon } from 'react-icons/fa';
import Link from "next/link";

const NavAccess = () => {
  const [selectedSection, setSelectedSection] = useState("Introduction");

  const sections = [
    {
      name: "Introduction",
      color: "from-blue-400 to-blue-600",
      icon: <FaUniversalAccess size={40} />,
      subSections: [
        { title: "Introduction à l'Accessibilité", link: "/blog/developpement/accessibilite/introduction" },
      ],
    },
    {
      name: "WCAG",
      color: "from-green-400 to-green-600",
      icon: <FaAccessibleIcon size={40} />,
      subSections: [
        { title: "Les WCAG", link: "/blog/developpement/accessibilite/wcag" },
      ],
    },
    {
      name: "ARIA",
      color: "from-red-400 to-red-600",
      icon: <FaWheelchair size={40} />,
      subSections: [
        { title: "Utilisation des ARIA", link: "/blog/developpement/accessibilite/aria" },
      ],
    },
    {
      name: "Tests d'Accessibilité",
      color: "from-gray-400 to-gray-600",
      icon: <FaEye size={40} />,
      subSections: [
        { title: "Outils de Test", link: "/blog/developpement/accessibilite/tests" },
      ],
    },
  ];

  const handleButtonClick = (sectionName) => {
    setSelectedSection(selectedSection === sectionName ? null : sectionName);
  };

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-white">
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-16">
        {sections.map(({ name, color, icon }, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              className={`h-24 w-40 lg:h-32 lg:w-48 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-r ${color} hover:scale-110 border-[#fffffd] border-4 z-10 p-4 lg:p-0`}
              onClick={() => handleButtonClick(name)}
            >
              <motion.div whileHover={{ scale: 1.5, rotate: 360 }} transition={{ duration: 0.5 }}>
                {icon}
              </motion.div>
              <div className="text-[#fffffd] lg:text-xl mt-2 text-center">{name}</div>
            </button>
            {selectedSection === name && (
              <div className="flex justify-center items-center mt-2">
                <FaArrowUp className="text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {sections.map(({ name, color, subSections, icon }, index) => (
        selectedSection === name && (
          <div key={index} className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4 mt-8">
            {subSections.map((subSection, subIndex) => (
              <Link key={subIndex} href={subSection.link} legacyBehavior>
                <a className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500 border-2 hover:border-accent`}></div>
                  <div className="absolute flex justify-evenly w-full gap-64">
                    {icon}
                    {icon}
                  </div>
                  <h2 className="relative z-10 text-center text-white text-xl lg:text-2xl xl:text-3xl">{subSection.title}<span className="text-accent">.</span></h2>
                </a>
              </Link>
            ))}
          </div>
        )
      ))}
    </div>
  );
};

export default NavAccess;
