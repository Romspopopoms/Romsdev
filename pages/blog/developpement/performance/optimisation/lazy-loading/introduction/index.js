// pages/blog/developpement/performance/optimisation/lazy-loading/introduction.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineHighlight } from 'react-icons/ai';
import NavBlog from '../../../../../../../components/NavBlog';

const IntroductionLazyLoading = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Introduction au Lazy Loading | RomsDev</title>
        <meta name="description" content="Découvrez les bases du lazy loading et pourquoi il est essentiel pour les performances web." />
        <meta name="keywords" content="Lazy Loading, Introduction, Optimisation des performances, JavaScript, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/lazy-loading/introduction" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction au Lazy Loading<span className="text-accent">.</span>
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
            Le lazy loading est une technique qui permet de différer le chargement des ressources non critiques au moment où elles sont réellement nécessaires, ce qui améliore les performances de la page web. Il est particulièrement utile pour les images, les vidéos et d&apos;autres contenus volumineux.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour explorer d&apos;autres techniques d&apos;optimisation, consultez notre section sur 
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
            Pourquoi Utiliser le Lazy Loading? <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le lazy loading améliore les performances en réduisant la quantité de données à charger initialement. Voici quelques avantages :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mt-8 space-y-4">
            <li>Réduction des temps de chargement des pages.</li>
            <li>Économie de bande passante.</li>
            <li>Amélioration de l&apos;expérience utilisateur.</li>
            <li>Optimisation des ressources serveur.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Conclusion <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le lazy loading est une technique essentielle pour améliorer les performances web. En différant le chargement des ressources, vous pouvez offrir une meilleure expérience utilisateur et optimiser les performances de votre site.
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
              Navigation <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/lazy-loading/outils" className="text-blue-500 hover:underline">Article Suivant : Outils de Lazy Loading</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation" className="text-blue-500 hover:underline">Retour à la Section : Optimisation des Performances</Link></li>
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

export default IntroductionLazyLoading;
