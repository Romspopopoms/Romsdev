import React from "react";
import Head from "next/head";
import NavBlog from "../../../../components/NavBlog";
import NavVueTuto from "../../../../components/NavVueTuto";

const VueTuto = () => {
  return (
    <div className="h-screen w-full hide-scrollbar bg-gray-900" style={{ overflowY: 'auto' }}>
      <Head>
        <title>Tutoriels Vue.js | RomsDev</title>
        <meta name="description" content="Découvrez des tutoriels et des guides sur Vue.js pour améliorer vos compétences en développement web." />
        <meta name="keywords" content="Vue.js, tutoriels, développement web, JavaScript, guides" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto" />
      </Head>
      <div className="sm:mt-28 mt-28 lg:mt-28 xl:mt-28"></div>
      <NavBlog />
      <NavVueTuto />
    </div>
  );
};

export default VueTuto;
