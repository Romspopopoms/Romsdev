import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  margin: 0;
  padding: 0;
}

h1 {
  color: #0070f3;
}
`;

const StylingNextjs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode, setTypedCode] = React.useState("");

  React.useEffect(() => {
    if (inView) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode(codeSnippet.slice(0, i));
        }
      };
      type();
    }
  }, [inView]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Styling et CSS dans Next.js | RomsDev</title>
        <meta name="description" content="Découvrez comment ajouter du style et utiliser du CSS dans vos projets Next.js." />
        <meta name="keywords" content="Next.js, CSS, styling, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Styling" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Styling et CSS dans Next.js<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Next.js offre plusieurs façons d&apos;ajouter du style à vos applications. Que vous préfériez utiliser du CSS standard, des modules CSS, ou des frameworks CSS comme Tailwind CSS, Next.js a une solution pour vous. Dans cet article, nous allons explorer différentes méthodes pour ajouter du style à vos composants.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts de base de Next.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Introduction-Nextjs" className="text-blue-500 underline ml-1">l&apos;Introduction à Next.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation du CSS Standard <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Next.js permet d&apos;importer des fichiers CSS directement dans vos composants. Créez un fichier <code className="bg-gray-800 p-2 rounded-lg">styles.css</code> et ajoutez-y vos styles.
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            ref={ref}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {typedCode}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-4">
            Ensuite, importez le fichier CSS dans votre composant principal (par exemple, <code className="bg-gray-800 p-2 rounded-lg">pages/_app.js</code>).
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation des Modules CSS <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Les modules CSS permettent de localiser le scope des styles à un composant spécifique. Cela aide à éviter les conflits de noms et à garder vos styles organisés.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Créez un fichier CSS avec le suffixe <code className="bg-gray-800 p-2 rounded-lg">.module.css</code>, puis importez et utilisez les styles dans votre composant :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
/* styles.module.css */
.header {
  color: #0070f3;
}
`}
            </code>
          </motion.pre>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
import styles from './styles.module.css';

function Header() {
  return <h1 className={styles.header}>Hello, Next.js!</h1>;
}

export default Header;
`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de Tailwind CSS <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Tailwind CSS est un framework CSS utilitaire qui permet de créer rapidement des interfaces utilisateur modernes. Pour l&apos;installer dans votre projet Next.js, suivez ces étapes :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-4">
            Configurez Tailwind CSS en ajoutant les chemins de vos fichiers Next.js dans le fichier <code className="bg-gray-800 p-2 rounded-lg">tailwind.config.js</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-4">
            Importez Tailwind CSS dans votre fichier <code className="bg-gray-800 p-2 rounded-lg">styles/globals.css</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
{`
@tailwind base;
@tailwind components;
@tailwind utilities;
`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Conclusion <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Que vous choisissiez d&apos;utiliser du CSS standard, des modules CSS, ou un framework comme Tailwind CSS, Next.js offre une flexibilité pour styliser vos applications. Essayez différentes approches pour trouver celle qui convient le mieux à votre projet.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Deployement" className="text-blue-500 hover:underline">Article Suivant : Déploiement</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Introduction-Nextjs" className="text-blue-500 hover:underline">Introduction à Next.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 hover:underline">Installation et Configuration</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 hover:underline">Pages et Routing</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 hover:underline">Rendu Statique et Dynamique</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/API-Routes" className="text-blue-500 hover:underline">Routes API</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default StylingNextjs;
