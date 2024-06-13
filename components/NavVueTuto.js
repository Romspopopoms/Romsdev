import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import Head from "next/head";

const NavVueTuto = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-white ">
      <Head>
        <title>Tutos et Guides Vue.js | Blog Développement</title>
        <meta name="description" content="Découvrez les bases de Vue.js avec ces tutoriels détaillés, conçus pour vous guider pas à pas." />
        <meta name="keywords" content="Vue.js, tutoriels, guides, développement web" />
        <meta name="author" content="Votre Nom" />
        <link rel="canonical" href="https://www.romsdev.fr/blog/developpement/Js-framework/VueTuto" />
      </Head>

      <div className="relative z-10 flex flex-col items-center w-full p-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6">Tutos et Guides Vue.js<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Découvrez les bases de Vue.js avec ces tutoriels détaillés, conçus pour vous guider pas à pas.</p>
        
        <div className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4">
          {[
            { href: "/blog/developpement/Js-framework/VueTuto/Introduction-Vue", title: "Introduction à Vue.js", gradient: "from-green-800 to-green-600", iconColor: "text-green-400" },
            { href: "/blog/developpement/Js-framework/VueTuto/Installation-Vue", title: "Installation et Configuration", gradient: "from-green-700 to-green-500", iconColor: "text-green-300" },
            { href: "/blog/developpement/Js-framework/VueTuto/Composants", title: "Composants", gradient: "from-green-600 to-green-400", iconColor: "text-green-200" },
            { href: "/blog/developpement/Js-framework/VueTuto/Directives", title: "Directives de Vue.js", gradient: "from-green-500 to-green-300", iconColor: "text-green-100" },
            { href: "/blog/developpement/Js-framework/VueTuto/Etat-Reactif", title: "État Reactif", gradient: "from-green-500 to-green-300", iconColor: "text-green-100" },
            { href: "/blog/developpement/Js-framework/VueTuto/Routing", title: "Routing avec Vue Router", gradient: "from-green-500 to-green-300", iconColor: "text-green-100" },
            { href: "/blog/developpement/Js-framework/VueTuto/Vuex", title: "Gestion d'État avec Vuex", gradient: "from-green-500 to-green-300", iconColor: "text-green-100" },
            { href: "/blog/developpement/Js-framework/VueTuto/Transitions-Animations", title: "Transitions et Animations", gradient: "from-green-500 to-green-300", iconColor: "text-green-100" },
          ].map((section, index) => (
            <Link key={index} href={section.href} className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500 border-2 hover:border-accent`}></div>
              <div className="absolute flex justify-evenly w-full gap-64">
                <FaVuejs className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
                <FaVuejs className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
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

export default NavVueTuto;
