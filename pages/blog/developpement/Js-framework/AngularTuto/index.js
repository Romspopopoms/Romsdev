import React from "react";
import Head from "next/head";
import NavBlog from "../../../../../components/NavBlog";
import NavAngularTuto from "../../../../../components/NavAngularTuto";

const AngularTuto = () => {
  return (
    <div className="h-screen w-full hide-scrollbar bg-gray-900" style={{ overflowY: 'auto' }}>
      <Head>
        <title>Tutoriels Angular | RomsDev</title>
        <meta name="description" content="Découvrez des tutoriels et des guides sur Angular pour améliorer vos compétences en développement web." />
        <meta name="keywords" content="Angular, tutoriels, développement web, JavaScript, guides" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto" />
      </Head>
      <div className="sm:mt-28 mt-28 lg:mt-28 xl:mt-28"></div>
      <NavBlog />
      <NavAngularTuto />
    </div>
  );
};

export default AngularTuto;