// pages/blog/developpement/performance/optimisation.js

import React from "react";
import Head from "next/head";
import NavBlog from "../../../../../components/NavBlog";
import NavPerformance from "../../../../../components/NavPerformance";

const Optimisation = () => {
  return (
    <div className="h-full w-full bg-gray-900 text-white hide-scrollbar" style={{ overflowY: 'auto' }}>
      <div className="mt-28"></div>
      <Head>
        <title>Optimisation des Performances | RomsDev</title>
        <meta name="description" content="Découvrez des techniques et des outils pour optimiser les performances de vos applications web." />
        <meta name="keywords" content="Optimisation des performances, JavaScript, Développement web, Performance" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation" />
      </Head>
      <NavBlog />
      <div className="flex flex-col items-center justify-center mt-12 lg:mt-0 gap-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Optimisation des Performances<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl lg:mt-6 mb-8">
          Découvrez des techniques et des outils pour optimiser les performances de vos applications web.
        </p>
      </div>
      <NavPerformance />
      <div className="h-40"></div>
    </div>
  );
};

export default Optimisation;
