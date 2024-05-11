// pages/_app.js
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Import du composant Head

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // SEO par défaut pour toutes les pages, modifiable par pageProps si nécessaire
  const defaultSeo = {
    pageTitle: "Développement Web | Création de site internet | RomsDev&apos; Portfolio",
    pageDescription: "Je transforme vos idées en solutions digitales. En tant que développeur indépendant, je crée des sites web et applications sur mesure qui répondent précisément à vos besoins.",
    imageUrl: "/Romsdev.png",
    pageUrl: 'https://romsdev.fr'
  };

  return (
    <Layout {...defaultSeo}> 
      <Head>
        <title>Développement Web | Création de site internet | RomsDev&apos; Portfolio</title> {/* Modification du méta titre */}
        <link rel="icon" href="/ROMSDEVLOGO.ico" /> {/* Lien vers le favicon */}
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

export default MyApp