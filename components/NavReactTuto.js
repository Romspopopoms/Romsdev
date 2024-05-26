import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaReact } from "react-icons/fa";
import Head from "next/head";

const NavReactTuto = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-white ">
      <Head>
        <title>Tutos et Guides React | Blog Développement</title>
        <meta name="description" content="Découvrez les bases de React avec ces tutoriels détaillés, conçus pour vous guider pas à pas." />
        <meta name="keywords" content="React, tutoriels, guides, développement web" />
        <meta name="author" content="Votre Nom" />
        <link rel="canonical" href="https://www.votresite.com/blog/developpement/Js-framework/ReactTuto" />
      </Head>

      <Link href="/blog/developpement" className="fixed top-20 left-4 lg:left-20 xl:top-24 bg-white/10 rounded-full p-2 z-30">
        <FaArrowLeft className="text-2xl hover:text-accent" />
      </Link>

      <div className="relative z-10 flex flex-col items-center w-full p-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6">Tutos et Guides React<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Découvrez les bases de React avec ces tutoriels détaillés, conçus pour vous guider pas à pas.</p>
        
        <div className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4">
          {[
            { href: "/blog/developpement/Js-framework/ReactTuto/Introduction-React", title: "Introduction à React", gradient: "from-blue-400 to-blue-600", iconColor: "text-blue-300" },
            { href: "/blog/developpement/Js-framework/ReactTuto/Demarrage-React", title: "Démarrage avec React", gradient: "from-blue-500 to-blue-700", iconColor: "text-blue-200" },
            { href: "/blog/developpement/Js-framework/ReactTuto/Composants-Props", title: "Composants et Props", gradient: "from-blue-600 to-blue-800", iconColor: "text-blue-100" },
            { href: "/blog/developpement/Js-framework/ReactTuto/Gestion-des-Etats", title: "Gestion des États", gradient: "from-blue-700 to-blue-900", iconColor: "text-blue-100" },
            { href: "/blog/developpement/Js-framework/ReactTuto/Les-Cycles-de-vie", title: "Les Cycles de Vie", gradient: "from-blue-800 to-blue-900", iconColor: "text-blue-100" },
          ].map((section, index) => (
            <Link key={index} href={section.href} className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500`}></div>
              <div className="absolute flex justify-evenly w-full gap-16">
                <FaReact className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
                <FaReact className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
              </div>
              <h2 className="relative z-10 text-center text-white text-xl lg:text-2xl xl:text-3xl">{section.title}<span className="text-accent">.</span></h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-60 xl:h-40"></div>
    </div>
  );
};

export default NavReactTuto;
