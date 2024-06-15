// pages/blog/developpement/performance/optimisation/lighthouse/outils.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineTool, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import NavBlog from '../../../../../../../components/NavBlog';

const OutilsLighthouse = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Outils de Lighthouse | RomsDev</title>
        <meta name="description" content="Explorez les outils et fonctionnalités de Lighthouse pour optimiser les performances de vos applications." />
        <meta name="keywords" content="Lighthouse, Outils, Optimisation des performances, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/lighthouse/outils" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Outils de Lighthouse<span className="text-accent">.</span>
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
            Lighthouse est un outil puissant pour améliorer les performances de votre site web. Dans cet article, nous explorerons les différentes fonctionnalités et outils offerts par Lighthouse pour vous aider à optimiser votre site.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Pour comprendre les bases de Lighthouse, consultez notre 
            <Link href="/blog/developpement/performance/optimisation/lighthouse/introduction" className="text-blue-500 underline ml-1">Introduction à Lighthouse</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Fonctionnalités Principales <span className="text-accent"><AiOutlineTool className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Lighthouse offre plusieurs fonctionnalités pour vous aider à analyser et améliorer votre site :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center space-y-4">
            <li><strong>Audit des Performances:</strong> Analyse la vitesse de chargement et les performances de votre site.</li>
            <li><strong>Audit d&apos;Accessibilité:</strong> Vérifie l&apos;accessibilité de votre site pour les utilisateurs handicapés.</li>
            <li><strong>Audit des Meilleures Pratiques:</strong> Vérifie si votre site suit les meilleures pratiques de développement web.</li>
            <li><strong>Audit SEO:</strong> Analyse l&apos;optimisation de votre site pour les moteurs de recherche.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Utilisation des DevTools de Chrome <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Vous pouvez exécuter Lighthouse directement depuis les DevTools de Chrome. Voici comment :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center space-y-4">
            <li>Ouvrez les DevTools de Chrome (F12 ou Ctrl+Shift+I).</li>
            <li>Allez à l&apos;onglet &apos;Lighthouse&apos;.</li>
            <li>Choisissez les audits que vous souhaitez effectuer et cliquez sur &apos;Generate Report&apos;.</li>
          </ul>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour plus d&apos;informations, consultez la 
            <Link href="https://developers.google.com/web/tools/lighthouse#devtools" className="text-blue-500 underline ml-1">documentation officielle de Google</Link>.
          </p>
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
              <li><Link href="/blog/developpement/performance/optimisation/lighthouse/meilleures-pratiques" className="text-blue-500 hover:underline">Article Suivant : Meilleures Pratiques avec Lighthouse</Link></li>
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

export default OutilsLighthouse;
