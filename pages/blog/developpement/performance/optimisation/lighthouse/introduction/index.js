// pages/blog/developpement/performance/optimisation/lighthouse/introduction.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineHighlight, AiOutlineFileText, AiOutlineTool } from 'react-icons/ai';
import NavBlog from '../../../../../../../components/NavBlog';

const IntroductionLighthouse = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Introduction à Lighthouse | RomsDev</title>
        <meta name="description" content="Découvrez les bases de Lighthouse et comment il peut améliorer les performances de votre site web." />
        <meta name="keywords" content="Lighthouse, Introduction, Optimisation des performances, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/lighthouse/introduction" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à Lighthouse<span className="text-accent">.</span>
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
          <p className="text-lg lg:text-xl text-center mb-8">
            Lighthouse est un outil open-source développé par Google pour améliorer la qualité des pages web. Il propose des audits sur les performances, l&apos;accessibilité, les meilleures pratiques et le SEO.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Pour en savoir plus sur les autres techniques d&apos;optimisation, consultez notre section sur 
            <Link href="/blog/developpement/performance/optimisation" className="text-blue-500 underline ml-1">l&apos;Optimisation des Performances</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Pourquoi Utiliser Lighthouse? <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Lighthouse permet de détecter les problèmes de performance et d&apos;accessibilité sur votre site web et propose des solutions pour les corriger. Voici quelques avantages de l&apos;utilisation de Lighthouse :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mt-8 space-y-4">
            <li>Amélioration des temps de chargement des pages.</li>
            <li>Meilleure accessibilité pour les utilisateurs.</li>
            <li>Conformité avec les meilleures pratiques du web.</li>
            <li>Optimisation pour les moteurs de recherche (SEO).</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Comment Utiliser Lighthouse? <span className="text-accent"><AiOutlineTool className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Lighthouse peut être utilisé de plusieurs façons : via les DevTools de Chrome, en tant que module Node.js, ou en ligne de commande. Voici quelques ressources pour vous aider à démarrer :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mt-8 space-y-4">
            <li><Link href="https://developers.google.com/web/tools/lighthouse" className="text-blue-500 hover:underline">Documentation officielle de Lighthouse</Link></li>
            <li><Link href="https://developers.google.com/web/tools/lighthouse#devtools" className="text-blue-500 hover:underline">Utiliser Lighthouse avec Chrome DevTools</Link></li>
            <li><Link href="https://www.npmjs.com/package/lighthouse" className="text-blue-500 hover:underline">Module Lighthouse sur npm</Link></li>
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
              Navigation <span className="text-accent"><AiOutlineTool className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/lighthouse/outils" className="text-blue-500 hover:underline">Article Suivant : Outils de Lighthouse</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/lighthouse" className="text-blue-500 hover:underline">Retour à la Section : Lighthouse</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/caching" className="text-blue-500 hover:underline">Optimisation Réseau : Mise en Cache</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/memory-leaks" className="text-blue-500 hover:underline">Gestion de la Mémoire : Fuites de Mémoire</Link></li>
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

export default IntroductionLighthouse;
