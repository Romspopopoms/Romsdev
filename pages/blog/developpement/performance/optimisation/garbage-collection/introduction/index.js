import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineHighlight, AiOutlineTool } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import NavBlog from '../../../../../../../components/NavBlog';

const IntroductionGarbageCollection = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Introduction au Garbage Collection | RomsDev</title>
        <meta name="description" content="Découvrez les bases de la gestion de la mémoire et du Garbage Collection pour optimiser les performances de vos applications web." />
        <meta name="keywords" content="Garbage Collection, Gestion de la mémoire, JavaScript, Optimisation des performances, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/garbage-collection/introduction" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction au Garbage Collection<span className="text-accent">.</span>
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
            Le Garbage Collection (GC) est un processus automatisé de gestion de la mémoire dans les langages de programmation modernes comme JavaScript. Il permet de libérer la mémoire allouée aux objets qui ne sont plus utilisés par le programme, évitant ainsi les fuites de mémoire et optimisant l&apos;utilisation de la mémoire disponible.
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
            Pourquoi le Garbage Collection? <span className="text-accent"><FaTrashAlt className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            La gestion de la mémoire est cruciale pour les performances des applications. Le Garbage Collection aide à :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mb-8">
            <li>Prévenir les fuites de mémoire.</li>
            <li>Optimiser l&apos;utilisation des ressources.</li>
            <li>Améliorer la stabilité de l&apos;application.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Fonctionnement du Garbage Collection <span className="text-accent"><AiOutlineTool className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Le Garbage Collection suit généralement deux étapes principales :
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center mb-8">
            <li><strong>Marquage :</strong> Identification des objets encore accessibles et marquage de ceux qui ne le sont plus.</li>
            <li><strong>Balayage :</strong> Libération de la mémoire occupée par les objets non marqués.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Conclusion <span className="text-accent"><FaTrashAlt className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le Garbage Collection est une composante essentielle de la gestion de la mémoire en JavaScript. En comprenant son fonctionnement et son importance, vous pouvez optimiser les performances de vos applications et prévenir les problèmes liés à la gestion de la mémoire.
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
              <li><Link href="/blog/developpement/performance/optimisation/garbage-collection/outils" className="text-blue-500 hover:underline">Article Suivant : Outils de Garbage Collection</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation" className="text-blue-500 hover:underline">Retour à la Section : Optimisation des Performances</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8 space-y-2">
              <li><Link href="/blog/developpement/performance/optimisation/minification/introduction" className="text-blue-500 hover:underline">Introduction à la Minification</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/lazy-loading" className="text-blue-500 hover:underline">Optimisation du Lazy Loading</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/caching" className="text-blue-500 hover:underline">Optimisation Réseau : Mise en Cache</Link></li>
              <li><Link href="/blog/developpement/performance/optimisation/tree-shaking" className="text-blue-500 hover:underline">Optimisation du Code : Tree Shaking</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default IntroductionGarbageCollection;
