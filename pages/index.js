import React, { useEffect, useRef } from "react";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Head from 'next/head';

const Home = () => {
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
        <title>Développement Web | RomsDev&apos; Portfolio</title>
        <meta name="description" content="Développeur indépendant créant des sites web et applications sur mesure à La Ciotat et Marseille." />
        <meta name="keywords" content="création de sites sur mesure, création de boutiques en ligne, maintenance de sites web, agence web, développement backend, conception ux/ui, développement e-commerce, refonte de site internet, freelance développeur web, La Ciotat, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d&apos;Azur" />
        <link rel="canonical" href="https://romsdev.fr" />
      </Head>
      <div className="bg-primary/60 h-full hide-scrollbar" ref={contentRef} style={{ overflowY: 'auto' }}>
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h1 mt-12"
            >
              Transformer Vos Idées <br />
              <span className="text-accent">En Réalité Digitale</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Je transforme vos idées en solutions digitales. En tant que développeur indépendant, je crée des sites web et applications sur mesure qui répondent précisément à vos besoins.
            </motion.p>
            <div className="flex justify-center xl:hidden relative z-10">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden xl:flex relative z-10"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <ParticlesContainer />
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] z-10"
          >
            <Avatar />
            <div className="w-full h-48"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
