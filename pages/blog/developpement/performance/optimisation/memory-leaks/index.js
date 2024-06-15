import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaBug } from "react-icons/fa";
import NavBlog from "../../../../../../components/NavBlog";

const MemoryLeaks = () => {
  const articles = [
    {
      title: "Introduction aux Fuites de Mémoire",
      link: "/blog/developpement/performance/optimisation/memory-leaks/introduction",
      description: "Comprenez ce que sont les fuites de mémoire et pourquoi elles peuvent nuire aux performances de votre application.",
      icon: <FaBug size={40} className="text-blue-400" />
    },
    {
      title: "Détection des Fuites de Mémoire",
      link: "/blog/developpement/performance/optimisation/memory-leaks/detection",
      description: "Apprenez à identifier les fuites de mémoire dans votre code JavaScript.",
      icon: <FaBug size={40} className="text-green-400" />
    },
    {
      title: "Meilleures Pratiques pour Éviter les Fuites de Mémoire",
      link: "/blog/developpement/performance/optimisation/memory-leaks/meilleures-pratiques",
      description: "Découvrez comment éviter les fuites de mémoire et améliorer les performances de votre application.",
      icon: <FaBug size={40} className="text-red-400" />
    },
  ];

  return (
    <div className="h-full w-full bg-gray-900 text-white hide-scrollbar" style={{ overflowY: 'auto' }}>
      <div className="mt-28"></div>
      <Head>
        <title>Fuites de Mémoire | RomsDev</title>
        <meta name="description" content="Découvrez comment identifier, éviter et corriger les fuites de mémoire dans vos applications web." />
        <meta name="keywords" content="Fuites de mémoire, Optimisation des performances, JavaScript, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance/optimisation/memory-leaks" />
      </Head>
      <NavBlog />
      <div className="flex flex-col items-center justify-center mt-12 lg:mt-0 gap-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Fuites de Mémoire<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl lg:mt-6 mb-8">
          Découvrez comment identifier, éviter et corriger les fuites de mémoire dans vos applications web.
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

export default MemoryLeaks;
