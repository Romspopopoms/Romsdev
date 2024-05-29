import React, { useState } from "react";
import { FaAngular, FaArrowLeft, FaArrowUp, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const NavJsDev = () => {
  const [selectedFramework, setSelectedFramework] = useState('React');

  const frameworks = [
    { 
      name: 'React', 
      color: 'from-blue-500 to-blue-300', 
      icon: <FaReact size={40} />, 
      guideLink: '/blog/developpement/Js-framework/ReactTuto', 
      projectLink: '/blog/developpement/Js-framework/ReactProjects' 
    },
    { 
      name: 'Vue', 
      color: 'from-green-500 to-green-300', 
      icon: <FaVuejs size={40} />, 
      guideLink: '/blog/developpement/Js-framework/VueTuto', 
      projectLink: '/blog/developpement/Js-framework/VueProjects' 
    },
    { 
      name: 'Angular', 
      color: 'from-red-500 to-red-300', 
      icon: <FaAngular size={40} />, 
      guideLink: '/blog/developpement/Js-framework/AngularTuto', 
      projectLink: '/blog/developpement/Js-framework/AngularProjects' 
    },
    { 
      name: 'Nextjs', 
      color: 'from-gray-800 to-gray-600', 
      icon: <SiNextdotjs size={40} />, 
      guideLink: '/blog/developpement/Js-framework/NextjsTuto', 
      projectLink: '/blog/developpement/Js-framework/NextjsProjects' 
    },
  ];

  const handleButtonClick = (framework) => {
    setSelectedFramework(framework);
  };

  const slideIn = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 0, opacity: 0 },
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4 mt-16 max-w-7xl mx-auto">
      <Link href="/blog/developpement" className="fixed top-20 left-[90%] iph:left-[92%] md:left-[95%] lg:left-[96%] lg:top-[3.6%] xl:top-[14.5%] xl:left-[97%] xxl:left-[98%] h-auto w-full xl:w-auto bg-white/10 rounded-l-full xl:rounded-full p-2">
        <FaArrowLeft className="size-6 hover:text-accent" />
      </Link>

      <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-2 lg:gap-2 gap-2 md:gap-3 xl:gap-4 lg:col-span-1">
        {frameworks.map(({ name, color, icon }, index) => (
          <div key={index} className="flex flex-col items-center ">
            <button
              className={`h-20 w-20 lg:h-32 lg:w-32 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-r ${color} hover:scale-110 border-[#fffffd] border-4 z-10 p-4 lg:p-0`}
              onClick={() => handleButtonClick(name)}
            >
              <motion.div whileHover={{ scale: 1.5, rotate: 360 }} transition={{ duration: 0.5 }}>
                {icon}
              </motion.div>
              <div className="text-[#fffffd] lg:text-xl mt-2">{name}</div>
            </button>
            {selectedFramework === name && (
              <div className="flex justify-center items-center mt-2">
                <FaArrowUp className="text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {frameworks.map(({ name, color, guideLink, projectLink, icon }, index) => (
        selectedFramework === name && (
          <div key={index} className="flex flex-col gap-4 mt-8 lg:mt-0 w-full lg:col-span-2 items-center">
            <motion.div
              key={`${index}-guide`}
              className="flex flex-col items-center justify-center w-full max-w-2xl  rounded-md mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideIn}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Link href={guideLink} className="group block w-full mb-8">
                <div className={`relative flex items-center justify-center h-32 rounded-md shadow-lg overflow-hidden bg-gradient-to-r ${color} border-2 hover:border-accent`}>
                  <motion.div whileHover={{ scale: 1.1, x: 30 }} transition={{ duration: 0.3 }} className="absolute inset-0 z-0 opacity-25">
                    {icon}
                  </motion.div>
                  <h2 className="relative z-10 lg:text-3xl text-2xl text-center text-white group-hover:text-accent transition duration-300">
                    Tutoriels et Guides Pratiques<span className="text-accent group-hover:text-white">.</span>
                  </h2>
                </div>
              </Link>
            </motion.div>
            <motion.div
              key={`${index}-project`}
              className="flex flex-col items-center justify-center w-full max-w-2xl rounded-md mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideIn}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Link href={projectLink} className="group block w-full">
                <div className={`relative flex items-center h-32 justify-center p-8 rounded-md shadow-lg overflow-hidden bg-gradient-to-r ${color} border-2 hover:border-accent`}>
                  <motion.div whileHover={{ scale: 1.1, x: 30 }} transition={{ duration: 0.3 }} className="absolute inset-0 z-0 opacity-25">
                    {icon}
                  </motion.div>
                  <h1 className="relative z-10 text-2xl lg:text-3xl text-white text-center group-hover:text-accent transition duration-300">
                    Projets et Etudes de cas<span className="text-accent group-hover:text-white">.</span>
                  </h1>
                </div>
              </Link>
            </motion.div>
          </div>
        )
      ))}
    </div>
  );
};

export default NavJsDev;
