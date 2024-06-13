import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaVuejs } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
# Installation globale de Vue CLI
npm install -g @vue/cli

# Créez un nouveau projet Vue
vue create my-project

# Naviguez dans le répertoire du projet
cd my-project

# Lancez le serveur de développement
npm run serve
`;

const InstallationVue = () => {
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
        <title>Installation et Configuration de Vue.js | RomsDev</title>
        <meta name="description" content="Apprenez à installer et configurer Vue.js pour démarrer vos projets de développement web." />
        <meta name="keywords" content="Vue.js, installation, configuration, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto/Installation-Vue" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Installation et Configuration de Vue.js<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Dans cet article, nous allons voir comment installer et configurer Vue.js pour créer des applications web dynamiques. Nous allons utiliser Vue CLI pour simplifier le processus de configuration.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur les concepts fondamentaux de Vue.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Introduction-Vue" className="text-blue-500 underline ml-1">l&apos;Introduction à Vue.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Installation <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La première étape consiste à installer Vue CLI, un outil en ligne de commande qui vous aide à démarrer rapidement avec Vue.js.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Vous pouvez installer Vue CLI en utilisant npm (Node Package Manager) :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
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
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Configuration du Projet <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Après avoir installé Vue CLI, vous pouvez créer un nouveau projet Vue en utilisant la commande suivante :
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            <code className="bg-gray-800 p-2 rounded-lg">vue create my-project</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Cette commande vous guidera à travers les étapes de configuration de votre projet. Vous pouvez choisir les fonctionnalités dont vous avez besoin, telles que Vue Router, Vuex, et bien plus encore.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Une fois la configuration terminée, naviguez dans le répertoire du projet et lancez le serveur de développement :
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            <code className="bg-gray-800 p-2 rounded-lg">cd my-project</code><br />
            <code className="bg-gray-800 p-2 rounded-lg mt-2">npm run serve</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Votre application Vue.js sera maintenant disponible à l&apos;adresse <code className="bg-gray-800 p-2 rounded-lg">http://localhost:8080</code>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Conclusion <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vous avez maintenant installé et configuré Vue.js avec succès. Vous pouvez commencer à développer votre application en utilisant les composants Vue et en explorant les différentes fonctionnalités offertes par le framework.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 hover:underline">Article Suivant : Composants Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 hover:underline">Gestion de l&apos;État Reactif avec Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 hover:underline">Composants en Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Vuex" className="text-blue-500 hover:underline">Gestion d&apos;État avec Vuex</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Transitions-Animations" className="text-blue-500 hover:underline">Transitions et Animations en Vue.js</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default InstallationVue;
