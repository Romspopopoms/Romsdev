import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
