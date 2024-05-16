import React from "react";
import Head from 'next/head';
import TopLeftImg from "./TopLeftImg"; // Importez le composant correspondant
import Nav from "./Nav"; // Importez le composant correspondant
import Header from "./Header"; // Importez le composant correspondant

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Head>
        {/* Balise titre raccourcie */}
        <title>{shortenTitle(fullTitle)}</title>
        {/* Méta-description raccourcie */}
        <meta name="description" content={shortenDescription(pageDescription)} />
        <meta name="keywords" content={keywords.join(', ')} />
        {/* Les autres métadonnées */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="vW2uqRP0SI2mzRBW4TWIt9et5K4b81k-zzFJyANVKGw" />
        <link rel="icon" href="/ROMSDEVLOGO.ico" />
        <link rel="canonical" href={pageUrl} />
        {/* Ajoutez ici d'autres éléments de la balise Head si nécessaire */}
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
