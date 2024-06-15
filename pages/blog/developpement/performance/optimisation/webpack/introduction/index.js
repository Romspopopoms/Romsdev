// pages/blog/developpement/performance/optimisation/webpack/introduction.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import NavBlog from '../../../../../../../components/NavBlog';

const IntroductionWebpack = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Introduction à Webpack | RomsDev</title>
        <meta name="description" content="Découvrez les bases de Webpack et comment il peut optimiser le processus de développement." />
        <meta name="keywords" content="Webpack, Introduction, Optimisation des performances, JavaScript, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/webpack/introduction" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à Webpack<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Webpack est un bundler de modules pour les applications JavaScript modernes. Il traite les dépendances et génère des fichiers statiques qui représentent ces modules.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur les fonctionnalités avancées de Webpack, consultez notre 
            <Link href="/blog/developpement/performance/optimisation/webpack/outils" className="text-blue-500 underline ml-1">article sur les outils de Webpack</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Pourquoi Utiliser Webpack? <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Webpack permet de simplifier le processus de développement en gérant automatiquement les dépendances, en optimisant les fichiers et en offrant une large gamme de plugins pour améliorer les flux de travail. Voici quelques avantages :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mt-8">
            <li>Gestion des dépendances simplifiée.</li>
            <li>Optimisation des fichiers pour des temps de chargement plus rapides.</li>
            <li>Support pour les modules CSS et les fichiers statiques.</li>
            <li>Large écosystème de plugins et de loaders.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Navigation <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/webpack/outils" className="text-blue-500 hover:underline">Article Suivant : Outils de Webpack</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/webpack" className="text-blue-500 hover:underline">Retour à la Section : Webpack</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/caching" className="text-blue-500 hover:underline">Optimisation Réseau : Mise en Cache</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/lazy-loading" className="text-blue-500 hover:underline">Optimisation du Lazy Loading</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/tree-shaking" className="text-blue-500 hover:underline">Optimisation du Code : Tree Shaking</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/minification" className="text-blue-500 hover:underline">Minification du Code</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default IntroductionWebpack;
