import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { FaCodeBranch, FaCog } from 'react-icons/fa';

const codeSnippet = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`;

const QuickStartReact = () => {
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
        <title>Démarrage Rapide avec React | RomsDev</title>
        <meta name="description" content="Apprenez comment démarrer rapidement avec React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur." />
        <meta name="keywords" content="React, démarrage rapide, tutoriels, guides, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/React-Tuto/Demarrage-React" />
      </Head>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Démarrage Rapide avec React<span className="text-accent">.</span>
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
            Dans cet article, nous allons découvrir comment démarrer rapidement avec React. Nous verrons comment installer les outils nécessaires, créer un projet React et comprendre les bases de cette bibliothèque.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Installation <span className="text-accent"><FaReact className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour commencer à utiliser React, nous devons d&apos;abord installer Node.js et npm (le gestionnaire de paquets de Node). Une fois cela fait, nous pouvons créer une nouvelle application React en utilisant le package Create React App.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="col-span-1 md:col-span-2 text-2xl font-semibold mb-4 text-center">
            Étapes de Création <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-3xl text-accent mr-4"
            >
              <FaCog />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Étape 1 : Installer Node.js et npm</h3>
              <p className="text-center">
              Téléchargez et installez 
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> Node.js</a> depuis le site officiel. npm est inclus avec Node.js, donc vous n&apos;avez rien de plus à installer.

              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-3xl text-accent mr-4"
            >
              <AiOutlineFunction />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Étape 2 : Créer une Application React</h3>
              <p className="text-center">
                Utilisez le package Create React App pour créer une nouvelle application React en exécutant la commande suivante :
                <code className="block bg-gray-700 p-2 mt-2 rounded">npx create-react-app my-app</code>
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-3xl text-accent mr-4"
            >
              <FaCodeBranch />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Étape 3 : Démarrer le Serveur de Développement</h3>
              <p className="text-center">
                Allez dans le répertoire de votre application et démarrez le serveur de développement avec la commande :
                <code className="block bg-gray-700 p-2 mt-2 rounded">npm start</code>
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-3xl text-accent mr-4"
            >
              <FaReact />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Étape 4 : Explorer le Projet</h3>
              <p className="text-center">
                Familiarisez-vous avec la structure des fichiers et commencez à modifier votre application React.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                      <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de Code <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg"
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
            Conclusion <span className="text-accent"><FaReact className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl">
            Maintenant que vous avez installé React et créé votre première application, vous êtes prêt à explorer les nombreuses fonctionnalités de cette bibliothèque puissante. Suivez nos prochains tutoriels pour approfondir vos connaissances et maîtriser React.
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
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 hover:underline">Article Suivant : Composants et Props</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-Des-Etats" className="text-blue-500 hover:underline">Gestion des États avec React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Les-Cycles-de-vie" className="text-blue-500 hover:underline">Les Cycles de Vie</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default QuickStartReact;
