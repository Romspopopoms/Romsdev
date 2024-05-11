import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";

// Data
const aboutData = [
  {
    title: 'Mes connaissances',
    info: [
      {
        title: 'Développement Web',
        icons: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaReact key="react" />, <SiNextdotjs key="nextjs" />, <SiFramer key="framer" />],
      },
      {
        title: 'Design UI/UX',
        icons: [<FaFigma key="figma" />],
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  const contentRef = useRef(null);

  // Utilisez useEffect pour détecter le changement de taille de la fenêtre et ajuster la hauteur de la div de contenu
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        contentRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    // Appelez handleResize au chargement initial et à chaque changement de taille de fenêtre
    handleResize();
    window.addEventListener('resize', handleResize);

    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-24 xl:py-40 text-center xl:text-left"
    ref={contentRef} style={{ overflowY: 'auto' }}>
      <Circles />
      <motion.div variants={fadeIn('right, 0.2')} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px] ">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center mr-20 xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className="h2">
            Les <span className="text-accent">histoires</span>, une source d&apos;inspiration
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Développeur web autodidacte, mon portfolio met en avant mes compétences techniques à travers une sélection de projets. Chaque réalisation démontre mon approche rigoureuse et ma capacité à répondre aux besoins spécifiques, illustrant ainsi mon engagement envers l&apos;excellence et l&apos;innovation dans le développement web.
          </motion.p>
          {/* Metrics */}
        </div>
        <motion.div variants={fadeIn('left', 0.6)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] py-8 xl:py-32 ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div key={item.title} className={`${index === itemIndex ? "text-accent after:w-[100px] after:bg-accent after:transition-all after:duration-300" : ""} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((infoItem, infoIndex) => (
              <div key={infoIndex} className="flex-1 flex md:flex-row max-w-max gap-x-2 gap-y-3 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0 gap-2">{infoItem.title}</div>
                <div>{infoItem.stage}</div>
                {infoItem.icons?.map(icon => (
                  <div key={icon.key} className="text-2xl transition-all duration-500">
                    {icon}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="h-24 w-full xl:hidden"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
