// pages/blog/developpement/performance/optimisation/tree-shaking.js

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaTree } from "react-icons/fa";
import NavBlog from "../../../../../../components/NavBlog";

const TreeShaking = () => {
  const articles = [
    {
      title: "Introduction au Tree Shaking",
      link: "/blog/developpement/performance/optimisation/tree-shaking/introduction",
      description: "Découvrez les principes du Tree Shaking et pourquoi il est essentiel pour optimiser vos applications web.",
      icon: <FaTree size={40} className="text-green-400" />
    },
    {
      title: "Outils de Tree Shaking",
      link: "/blog/developpement/performance/optimisation/tree-shaking/outils",
      description: "Explorez les outils de Tree Shaking les plus populaires et choisissez celui qui convient le mieux à votre projet.",
      icon: <FaTree size={40} className="text-blue-400" />
    },
    {
      title: "Meilleures Pratiques de Tree Shaking",
      link: "/blog/developpement/performance/optimisation/tree-shaking/meilleures-pratiques",
      description: "Apprenez les meilleures pratiques pour optimiser l'utilisation du Tree Shaking dans votre code.",
      icon: <FaTree size={40} className="text-red-400" />
    },
  ];

  return (
    <div className="h-full w-full bg-gray-900 text-white hide-scrollbar" style={{ overflowY: 'auto' }}>
      <div className="mt-28"></div>
      <Head>
        <title>Tree Shaking | RomsDev</title>
        <meta name="description" content="Découvrez les techniques de Tree Shaking pour optimiser les performances de vos applications web." />
        <meta name="keywords" content="Tree Shaking, Optimisation des performances, JavaScript, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/tree-shaking" />
      </Head>
      <NavBlog />
      <div className="flex flex-col items-center justify-center mt-12 lg:mt-0 gap-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Tree Shaking<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl lg:mt-6 mb-8">
          Découvrez les techniques de Tree Shaking pour optimiser les performances de vos applications web.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-16">
        {articles.map(({ title, link, description, icon }, index) => (
          <Link key={index} href={link} legacyBehavior>
            <a className="relative flex flex-col items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500">
              <div className="absolute top-4 left-4">
                {icon}
              </div>
              <h2 className="relative z-10 text-center text-white text-xl lg:text-2xl xl:text-3xl mb-2">{title}<span className="text-accent">.</span></h2>
              <p className="relative z-10 text-center text-gray-300 text-sm lg:text-base">{description}</p>
            </a>
          </Link>
        ))}
      </div>

      <div className="h-40"></div>
    </div>
  );
};

export default TreeShaking;
