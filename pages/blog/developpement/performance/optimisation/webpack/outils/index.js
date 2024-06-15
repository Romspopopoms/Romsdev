// pages/blog/developpement/performance/optimisation/webpack/outils.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineTool, AiOutlineHighlight } from 'react-icons/ai';
import NavBlog from '../../../../../../../components/NavBlog';

const OutilsWebpack = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Outils de Webpack | RomsDev</title>
        <meta name="description" content="Explorez les outils et plugins de Webpack pour améliorer vos flux de travail." />
        <meta name="keywords" content="Webpack, Outils, Plugins, JavaScript, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/webpack/outils" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Outils de Webpack<span className="text-accent">.</span>
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
            Webpack offre une multitude d&apos;outils et de plugins pour améliorer vos flux de travail et optimiser vos applications. Dans cet article, nous allons explorer certains des outils les plus populaires.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Pour en savoir plus sur les bases de Webpack, consultez notre 
            <Link href="/blog/developpement/performance/optimisation/webpack/introduction" className="text-blue-500 underline ml-1">Introduction à Webpack</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Outils et Plugins <span className="text-accent"><AiOutlineTool className="inline-block ml-2" /></span>
          </h2>
          <ul className="list-disc list-inside text-lg lg:text-xl text-center space-y-4">
            <li><strong>webpack-dev-server:</strong> Un serveur de développement qui fournit des fonctionnalités de rechargement à chaud.</li>
            <li><strong>webpack-merge:</strong> Un outil pour combiner plusieurs configurations Webpack.</li>
            <li><strong>clean-webpack-plugin:</strong> Un plugin pour nettoyer les répertoires de sortie avant chaque construction.</li>
            <li><strong>html-webpack-plugin:</strong> Un plugin pour simplifier la création de fichiers HTML qui incluent tous vos bundles Webpack.</li>
            <li><strong>mini-css-extract-plugin:</strong> Un plugin pour extraire le CSS dans des fichiers séparés.</li>
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
              <li><Link href="/blog/developpement/performance/optimisation/webpack/meilleures-pratiques" className="text-blue-500 hover:underline">Article Suivant : Meilleures Pratiques de Webpack</Link></li>
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

export default OutilsWebpack;
