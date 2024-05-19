import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../components/ProjectData';
import ProjectDetailsModal from '../../components/ProjectDetailsModal';
import Image from 'next/image';
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from 'next/head';

const imageWidth = 200; // Width of the image in pixels
const imageHeight = 200; // Height of the image in pixels

const listItem = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectItem = ({ project, onClick }) => {
  return (
    <motion.div 
      variants={listItem}
      className="flex flex-col items-center col-span-1 p-4 bg-primary/30 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:shadow-red-500 gap-2"
      onClick={() => onClick(project)}
    >
      <Image 
        src={project.image} 
        alt={project.title} 
        width={imageWidth} 
        height={imageHeight}
        objectFit='cover'
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
};

const InnovativeProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        contentRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Projets Innovants | RomsDev&apos; Portfolio</title>
        <meta name="description" content="Découvrez mes projets innovants en développement web, chaque projet démontrant une approche unique et efficace pour répondre aux besoins spécifiques de mes clients." />
        <meta name="keywords" content="projets innovants, développement web, portfolio, RomsDev, La Ciotat, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d&apos;Azur" />
        <link rel="canonical" href="https://romsdev.fr/work" />
      </Head>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={listContainer}
        className="container mx-auto px-4 py-24 hide-scrollbar"
        ref={contentRef}
        style={{ overflowY: 'auto' }}
      >
        <Circles />
        <motion.h2 
          className="text-2xl md:text-4xl font-bold mt-4 text-center"
          variants={listItem}
        >
          Projets Innovants <span className="text-accent">.</span>
        </motion.h2>
        <motion.p 
          className="mt-4 xl:mt-8 max-w-[400px] mx-auto text-center"
          variants={listItem}
        >
          Voici un aperçu de mes projets clés, chacun démontrant une approche unique et efficace pour répondre aux besoins spécifiques de mes clients.
        </motion.p>
        <motion.div 
          variants={listContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"
        >
          {projectsData.map((project) => (
            <ProjectItem key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </motion.div>
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
        <Bulb />
      </motion.div>
    </>
  );
};

export default InnovativeProjects;
