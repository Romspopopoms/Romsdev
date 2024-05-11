import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Vous pouvez également envisager de définir un état pour gérer le SEO
  const [seo, setSeo] = useState({
    pageTitle: "Développement Web | Création de site internet | RomsDev' Portfolio",
    pageDescription: "Je transforme vos idées en solutions digitales. En tant que développeur indépendant, je crée des sites web et applications sur mesure qui répondent précisément à vos besoins.",
    imageUrl: "/Romsdev.png",
    pageUrl: 'https://romsdev.fr'
  });

  // Mettre à jour le SEO si pageProps contient des informations spécifiques à la page
  useEffect(() => {
    if (pageProps.seo) {
      setSeo({...seo, ...pageProps.seo});
    }
  }, [pageProps.seo]);

  return (
    <Layout {...seo}>
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
