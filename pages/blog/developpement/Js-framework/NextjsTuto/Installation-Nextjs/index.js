import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
# Créez un nouveau projet Next.js
npx create-next-app my-next-app

# Naviguez dans le répertoire du projet
cd my-next-app

# Lancez le serveur de développement
npm run dev
`;

const InstallationNextjs = () => {
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
        <title>Installation et Configuration de Next.js | RomsDev</title>
        <meta name="description" content="Apprenez à installer et configurer Next.js pour démarrer vos projets de développement web." />
        <meta name="keywords" content="Next.js, installation, configuration, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Installation et Configuration de Next.js<span className="text-accent">.</span>
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
            Dans cet article, nous allons voir comment installer et configurer Next.js pour créer des applications web dynamiques. Next.js est un framework React qui simplifie le développement web grâce à des fonctionnalités intégrées telles que le rendu côté serveur et le routage.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux de Next.js, consultez notre article sur 
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
            Installation <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La première étape consiste à créer un nouveau projet Next.js en utilisant Create Next App, un outil en ligne de commande qui vous aide à démarrer rapidement avec Next.js.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Vous pouvez créer un nouveau projet Next.js en utilisant la commande suivante :
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
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Configuration du Projet <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Après avoir créé votre projet Next.js, vous pouvez naviguer dans le répertoire du projet et lancer le serveur de développement :
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            <code className="bg-gray-800 p-2 rounded-lg mt-4">cd my-next-app</code><br />
            <code className="bg-gray-800 p-2 rounded-lg mt-2">npm run dev</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Votre application Next.js sera maintenant disponible à l&apos;adresse <code className="bg-gray-800 p-2 rounded-lg mt-4">http://localhost:3000</code>.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Vous pouvez maintenant commencer à développer votre application en modifiant les fichiers dans le répertoire <code className="bg-gray-800 p-2 rounded-lg mt-4">pages</code>.
          </p>
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
            Vous avez maintenant installé et configuré Next.js avec succès. Vous pouvez commencer à développer votre application en utilisant les fonctionnalités offertes par le framework Next.js.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 hover:underline">Article Suivant : Pages et Routing</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 hover:underline">Pages et Routing</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 hover:underline">Rendu Statique et Dynamique</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/API-Routes" className="text-blue-500 hover:underline">Routes API</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Styling" className="text-blue-500 hover:underline">Styling et CSS</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Deployement" className="text-blue-500 hover:underline">Déploiement</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default InstallationNextjs;
