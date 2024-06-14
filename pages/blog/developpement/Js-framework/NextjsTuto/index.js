import React from "react";
import Head from "next/head";
import NavBlog from "../../../../../components/NavBlog";
import NavNextjsTuto from "../../../../../components/NavNextjsTuto";

const NextjsTuto = () => {
  return (
    <div className="h-screen w-full hide-scrollbar" style={{ overflowY: 'auto' }}>
      <Head>
        <title>Tutoriels Next.js | RomsDev</title>
        <meta name="description" content="Découvrez des tutoriels et des guides sur Next.js pour améliorer vos compétences en développement web." />
        <meta name="keywords" content="Next.js, tutoriels, développement web, JavaScript, guides" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto" />
      </Head>
      <div className="sm:mt-28 mt-28 lg:mt-28 xl:mt-28"></div>
      <NavBlog />
      <NavNextjsTuto />
    </div>
  );
};

export default NextjsTuto;
