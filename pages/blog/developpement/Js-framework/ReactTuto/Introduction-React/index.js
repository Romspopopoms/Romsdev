import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { FaCodeBranch, FaCog } from 'react-icons/fa';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
`;

const IntroductionToReact = () => {
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
        <title>Introduction à React | RomsDev</title>
        <meta name="description" content="Découvrez les bases de React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur." />
        <meta name="keywords" content="React, JavaScript, bibliothèque JavaScript, développement front-end, interfaces utilisateur" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/React-Tuto/Demarrage-React" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à React<span className="text-accent">.</span>
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
            React est une bibliothèque JavaScript populaire pour la construction d&apos;interfaces utilisateur. Dans cet article, nous allons explorer les concepts de base de React et comprendre pourquoi il est devenu un outil essentiel pour les développeurs front-end.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux de React, consultez nos articles sur 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 underline ml-1">les Composants et les Props</Link> et 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-des-Etats" className="text-blue-500 underline ml-1">la Gestion des États</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Qu&apos;est-ce que React ? <span className="text-accent"><FaReact className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            React, développé par Facebook, est une bibliothèque JavaScript open-source utilisée pour construire des interfaces utilisateur. Elle permet de créer des composants réutilisables et de gérer efficacement l&apos;état de l&apos;application.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour découvrir comment démarrer rapidement avec React, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Demarrage-React" className="text-blue-500 underline ml-1">le Démarrage Rapide avec React</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="col-span-1 md:col-span-2 text-2xl font-semibold mb-4 text-center">
            Concepts Clés <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
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
              <h3 className="text-xl font-medium mb-1 text-center">Composants</h3>
              <p className="text-center">
                Les composants sont les éléments de base de toute application React. Ils peuvent être des classes ou des fonctions.
              </p>
              <p className="text-center mt-2">
                Apprenez à créer vos propres composants en lisant notre article sur 
                <Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 underline ml-1">les Composants et les Props</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Props</h3>
              <p className="text-center">
                Les props (propriétés) sont des arguments passés aux composants pour les configurer.
              </p>
              <p className="text-center mt-2">
                Pour comprendre comment utiliser les props, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 underline ml-1">les Composants et les Props</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">État</h3>
              <p className="text-center">
                L&apos;état est une structure qui permet de gérer les données dynamiques dans un composant.
              </p>
              <p className="text-center mt-2">
                Pour en savoir plus sur la gestion de l&apos;état, lisez notre article sur 
                <Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-des-Etats" className="text-blue-500 underline ml-1">la Gestion des États</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Cycle de Vie</h3>
              <p className="text-center">
                Chaque composant React a un cycle de vie avec différentes phases, telles que le montage, la mise à jour, et le démontage.
              </p>
              <p className="text-center mt-2">
                Pour comprendre les cycles de vie des composants, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/ReactTuto/Les-Cycles-de-vie" className="text-blue-500 underline ml-1">les Cycles de Vie</Link>.
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
            React simplifie la création d&apos;interfaces utilisateur interactives en utilisant des composants réutilisables. Comprendre les bases de React est essentiel pour tout développeur front-end moderne.
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
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Demarrage-React" className="text-blue-500 hover:underline">Article Suivant : Démarrage Rapide avec React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-Des-Etats" className="text-blue-500 hover:underline">Gestion des États avec React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 hover:underline">Composants et Props</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 hover:underline">Hooks en React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">Hook useState</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">Hook useEffect</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default IntroductionToReact;
