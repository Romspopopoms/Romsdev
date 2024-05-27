import NavBlog from "../../../../../components/NavBlog";
import NavReactTuto from "../../../../../components/NavReactTuto";
import React from "react";
import Head from "next/head";

const ReactTuto = () => {
  return (
    <div className="h-screen w-full hide-scrollbar bg-gray-900" style={{ overflowY: 'auto' }}>
      <Head>
        <title>Tutoriels React | RomsDev</title>
        <meta name="description" content="Découvrez des tutoriels et des guides sur React pour améliorer vos compétences en développement web." />
        <meta name="keywords" content="React, tutoriels, développement web, JavaScript, guides" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto" />
      </Head>
      <div className="sm:mt-28 mt-28 lg:mt-28 xl:mt-28"></div>
      <NavBlog />
      <NavReactTuto />
    </div>
  );
};

export default ReactTuto;
