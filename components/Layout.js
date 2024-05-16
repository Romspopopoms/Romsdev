import React from "react";
import Head from 'next/head';
import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children, seo }) => {
  const { pageTitle, pageDescription, keywords, imageUrl, pageUrl } = seo;

  const shortenTitle = (title) => title.length > 70 ? title.slice(0, 70) + "..." : title;
  const shortenDescription = (description) => description.length > 160 ? description.slice(0, 160) + "..." : description;

  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
      <Head>
        <title>{shortenTitle(pageTitle)}</title>
        <meta name="description" content={shortenDescription(pageDescription)} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="vW2uqRP0SI2mzRBW4TWIt9et5K4b81k-zzFJyANVKGw" />
        <link rel="icon" href="/ROMSDEVLOGO.ico" />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;