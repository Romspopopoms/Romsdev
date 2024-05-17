import { useEffect, useRef } from 'react';
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import Head from 'next/head';

// Supposons que FadeIn est un objet contenant vos variantes d'animation
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const Services = () => {
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
    <>
      <Head>
        <title>Services | RomsDev' Portfolio</title>
        <meta name="description" content="Je propose des services personnalisés en branding, design et développement web, adaptés à chaque client." />
        <meta name="keywords" content="services web, branding, design, développement web, services personnalisés, RomsDev, La Ciotat, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur" />
        <link rel="canonical" href="https://romsdev.fr/services" />
      </Head>
      <motion.div
        className="h-full bg-primary/30 pt-12 flex flex-col items-center justify-center mt-20 xl:mt-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        ref={contentRef}
        style={{ overflowY: 'auto' }}
      >
        <Circles />
        <div className="container mx-auto flex flex-col xl:flex-row justify-center items-center gap-x-8 gap-y-4">
          <motion.div
            className="text-center xl:text-left xl:w-[30vw] mb-4 xl:mb-0"
            variants={fadeInVariant}
          >
            <h2 className="text-2xl xl:text-4xl font-bold mt-24">
              Mes Services <span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-[400px] mx-auto xl:mx-0">
              Je propose des services personnalisés en branding, design et développement web, adaptés à chaque client.
            </p>
          </motion.div>
          <motion.div className="w-full xl:max-w-[65%]" variants={fadeInVariant}>
            <ServiceSlider />
          </motion.div>
        </div>
        <motion.div variants={fadeInVariant}>
          <Bulb />
          <div className='xl:hidden h-32'></div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
