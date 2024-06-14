import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippetVercel = `
# Installer Vercel CLI
npm install -g vercel

# Déployer le projet
vercel
`;

const codeSnippetNetlify = `
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer le projet
netlify deploy
`;

const DeploymentNextjs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCodeVercel, setTypedCodeVercel] = React.useState("");
  const [typedCodeNetlify, setTypedCodeNetlify] = React.useState("");

  React.useEffect(() => {
    if (inView) {
      const typeVercel = async () => {
        for (let i = 0; i <= codeSnippetVercel.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCodeVercel(codeSnippetVercel.slice(0, i));
        }
      };
      typeVercel();

      const typeNetlify = async () => {
        for (let i = 0; i <= codeSnippetNetlify.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCodeNetlify(codeSnippetNetlify.slice(0, i));
        }
      };
      typeNetlify();
    }
  }, [inView]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Déploiement de Next.js | RomsDev</title>
        <meta name="description" content="Découvrez comment déployer vos applications Next.js en utilisant Vercel et Netlify." />
        <meta name="keywords" content="Next.js, déploiement, Vercel, Netlify, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Deployement" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Déploiement de Next.js<span className="text-accent">.</span>
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
            Dans cet article, nous allons explorer les différentes méthodes pour déployer une application Next.js. Nous couvrirons les étapes de déploiement sur Vercel et Netlify, deux plateformes populaires pour héberger des applications Next.js.
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
            Déploiement avec Vercel <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vercel est la plateforme de déploiement officielle pour les applications Next.js. Elle offre une intégration transparente avec Next.js et permet de déployer facilement vos projets.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Suivez ces étapes pour déployer votre application Next.js sur Vercel :
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
              {typedCodeVercel}
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
            Déploiement avec Netlify <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Netlify est une autre plateforme populaire pour déployer des applications Next.js. Elle offre des fonctionnalités puissantes telles que les déploiements automatiques et les prévisualisations de branches.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Suivez ces étapes pour déployer votre application Next.js sur Netlify :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {typedCodeNetlify}
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
            Déployer une application Next.js est simple et rapide grâce à des plateformes comme Vercel et Netlify. Choisissez celle qui convient le mieux à vos besoins et profitez de la puissance de Next.js en production.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Styling" className="text-blue-500 hover:underline">Styling et CSS</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default DeploymentNextjs;
