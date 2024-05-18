import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const defaultSeo = {
    pageTitle: "Développement Web | RomsDev'",
    pageDescription: "Développeur indépendant créant des sites web sur mesure à La Ciotat et Marseille.",
    imageUrl: "/Romsdev.png",
    pageUrl: 'https://romsdev.fr',
    keywords: [
      "création de sites sur mesure",
      "création de boutiques en ligne",
      "maintenance de sites web",
      "agence web",
      "développement backend",
      "conception ux/ui",
      "développement e-commerce",
      "refonte de site internet",
      "freelance développeur web",
      "La Ciotat",
      "Marseille",
      "Bouches-du-Rhône",
      "Provence-Alpes-Côte d'Azur"
    ]
  };

  const [seo, setSeo] = useState(defaultSeo);

  useEffect(() => {
    if (pageProps.seo) {
      setSeo({ ...defaultSeo, ...pageProps.seo });
    } else {
      setSeo(defaultSeo);
    }
  }, [pageProps.seo]);

  return (
    <Layout {...seo}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>{seo.pageTitle}</title>
      </Head>
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
