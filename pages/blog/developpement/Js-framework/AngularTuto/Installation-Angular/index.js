import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
# Installation de l'Angular CLI
npm install -g @angular/cli

# Créez un nouveau projet Angular
ng new my-angular-app

# Naviguez dans le répertoire du projet
cd my-angular-app

# Lancez le serveur de développement
ng serve
`;

const InstallationAngular = () => {
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
        <title>Installation et Configuration d&apos;Angular | RomsDev</title>
        <meta name="description" content="Apprenez à installer et configurer Angular pour démarrer vos projets de développement web." />
        <meta name="keywords" content="Angular, installation, configuration, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/Installation-Angular" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Installation et Configuration d&apos;Angular<span className="text-accent">.</span>
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
            Dans cet article, nous allons voir comment installer et configurer Angular pour créer des applications web dynamiques. Nous allons utiliser Angular CLI pour simplifier le processus de configuration.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux d&apos;Angular, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/AngularTuto/Introduction-Angular" className="text-blue-500 underline ml-1">l&apos;Introduction à Angular</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Installation <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La première étape consiste à installer Angular CLI, un outil en ligne de commande qui vous aide à démarrer rapidement avec Angular.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Vous pouvez installer Angular CLI en utilisant npm (Node Package Manager) :
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
            Après avoir installé Angular CLI, vous pouvez créer un nouveau projet Angular en utilisant la commande suivante :
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            <code className="bg-gray-800 p-2 rounded-lg mt-4">ng new my-angular-app</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Cette commande vous guidera à travers les étapes de configuration de votre projet. Vous pouvez choisir les fonctionnalités dont vous avez besoin, telles que Angular Router, et bien plus encore.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Une fois la configuration terminée, naviguez dans le répertoire du projet et lancez le serveur de développement :
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            <code className="bg-gray-800 p-2 rounded-lg">cd my-angular-app</code><br />
            <code className="bg-gray-800 p-2 rounded-lg mt-2">ng serve</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Votre application Angular sera maintenant disponible à l&apos;adresse <code className="bg-gray-800 p-2 rounded-lg mt-4">http://localhost:4200</code>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Conclusion <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vous avez maintenant installé et configuré Angular avec succès. Vous pouvez commencer à développer votre application en utilisant les composants Angular et en explorant les différentes fonctionnalités offertes par le framework.
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
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 hover:underline">Article Suivant : Composants Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Etat-Reactif" className="text-blue-500 hover:underline">Gestion de l&apos;État Reactif avec Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 hover:underline">Composants en Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/NgRx" className="text-blue-500 hover:underline">Gestion d&apos;État avec NgRx</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Tests" className="text-blue-500 hover:underline">Tests et Debugging en Angular</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default InstallationAngular;
