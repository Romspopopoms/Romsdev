import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaAngular } from "react-icons/fa";
import Head from "next/head";

const NavAngularTuto = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-white ">
      <Head>
        <title>Tutos et Guides Angular | Blog Développement</title>
        <meta name="description" content="Découvrez les bases d'Angular avec ces tutoriels détaillés, conçus pour vous guider pas à pas." />
        <meta name="keywords" content="Angular, tutoriels, guides, développement web" />
        <meta name="author" content="Romsdev'" />
        <link rel="canonical" href="https://www.RomsDev.fr/blog/developpement/Js-framework/AngularTuto" />
      </Head>

      <div className="relative z-10 flex flex-col items-center w-full p-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6">Tutos et Guides Angular<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Découvrez les bases d&apos;Angular avec ces tutoriels détaillés, conçus pour vous guider pas à pas.</p>
        
        <div className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4">
          {[
            { href: "/blog/developpement/Js-framework/AngularTuto/Introduction-Angular", title: "Introduction à Angular", gradient: "from-red-400 to-red-600", iconColor: "text-red-300" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Installation-Angular", title: "Installation et Configuration", gradient: "from-red-500 to-red-700", iconColor: "text-red-200" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Composants", title: "Composants", gradient: "from-red-600 to-red-800", iconColor: "text-red-100" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Directives", title: "Directives d'Angular", gradient: "from-red-700 to-red-900", iconColor: "text-red-100" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Etat-Reactif", title: "État Reactif", gradient: "from-red-800 to-red-900", iconColor: "text-red-100" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Routing", title: "Routing avec Angular Router", gradient: "from-red-900 to-red-900", iconColor: "text-red-100" },
            { href: "/blog/developpement/Js-framework/AngularTuto/NgRx", title: "Gestion d'État avec NgRx", gradient: "from-red-700 to-red-800", iconColor: "text-red-100" },
            { href: "/blog/developpement/Js-framework/AngularTuto/Tests", title: "Tests et Debugging", gradient: "from-red-800 to-red-900", iconColor: "text-red-100" },
          ].map((section, index) => (
            <Link key={index} href={section.href} className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500 border-2 hover:border-accent`}></div>
              <div className="absolute flex justify-evenly w-full gap-64">
                <FaAngular className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
                <FaAngular className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
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

export default NavAngularTuto;
