import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Head from "next/head";

const NavNextjsTuto = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen text-white bg-black">
      <Head>
        <title>Tutos et Guides Next.js | Blog Développement</title>
        <meta name="description" content="Découvrez les bases de Next.js avec ces tutoriels détaillés, conçus pour vous guider pas à pas." />
        <meta name="keywords" content="Next.js, tutoriels, guides, développement web" />
        <meta name="author" content="Votre Nom" />
        <link rel="canonical" href="https://www.votresite.com/blog/developpement/Js-framework/NextjsTuto" />
      </Head>

      <div className="relative z-10 flex flex-col items-center w-full p-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6">Tutos et Guides Next.js<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Découvrez les bases de Next.js avec ces tutoriels détaillés, conçus pour vous guider pas à pas.</p>
        
        <div className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4">
          {[
            { href: "/blog/developpement/Js-framework/NextjsTuto/Introduction-Nextjs", title: "Introduction à Next.js", gradient: "from-gray-800 to-gray-600", iconColor: "text-gray-400" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs", title: "Installation et Configuration", gradient: "from-gray-700 to-gray-500", iconColor: "text-gray-300" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/Pages-Routing", title: "Pages et Routing", gradient: "from-gray-600 to-gray-400", iconColor: "text-gray-200" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering", title: "Rendu Statique et Dynamique", gradient: "from-gray-500 to-gray-300", iconColor: "text-gray-100" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/API-Routes", title: "Routes API", gradient: "from-gray-400 to-gray-200", iconColor: "text-gray-100" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/Styling", title: "Styling et CSS", gradient: "from-gray-300 to-gray-100", iconColor: "text-gray-100" },
            { href: "/blog/developpement/Js-framework/NextjsTuto/Deployement", title: "Déploiement", gradient: "from-gray-200 to-gray-100", iconColor: "text-gray-100" },
          ].map((section, index) => (
            <Link key={index} href={section.href} className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500 border-2 hover:border-accent`}></div>
              <div className="absolute flex justify-evenly w-full gap-64">
                <SiNextdotjs className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
                <SiNextdotjs className={`size-8 ${section.iconColor} group-hover:rotate-180 transition-transform duration-1000 ease-linear`} />
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

export default NavNextjsTuto;
