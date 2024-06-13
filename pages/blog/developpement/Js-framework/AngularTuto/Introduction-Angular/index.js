import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { FaCodeBranch, FaCog } from 'react-icons/fa';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, {{name}}</h1>',
})
export class AppComponent {
  name = 'Angular';
}
`;

const IntroductionToAngular = () => {
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
        <title>Introduction à Angular | RomsDev</title>
        <meta name="description" content="Découvrez les bases d'Angular, un framework JavaScript populaire pour la construction d'applications web." />
        <meta name="keywords" content="Angular, JavaScript, framework JavaScript, développement front-end, applications web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/Introduction-Angular" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à Angular<span className="text-accent">.</span>
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
            Angular est un framework JavaScript populaire pour la construction d&apos;applications web dynamiques. Dans cet article, nous allons explorer les concepts de base d&apos;Angular et comprendre pourquoi il est devenu un outil essentiel pour les développeurs front-end.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux d&apos;Angular, consultez nos articles sur 
            <Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 underline ml-1">les Composants</Link> et 
            <Link href="/blog/developpement/Js-framework/AngularTuto/Services" className="text-blue-500 underline ml-1">les Services</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Qu&apos;est-ce qu&apos;Angular ? <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Angular, développé par Google, est un framework JavaScript open-source utilisé pour construire des applications web robustes. Il permet de créer des applications maintenables et évolutives en utilisant des composants modulaires.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour découvrir comment démarrer rapidement avec Angular, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/AngularTuto/Installation-Angular" className="text-blue-500 underline ml-1">l&apos;installation et la configuration d&apos;Angular</Link>.
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
                Les composants sont les éléments de base de toute application Angular. Ils peuvent être des classes ou des fonctions.
              </p>
              <p className="text-center mt-2">
                Apprenez à créer vos propres composants en lisant notre article sur 
                <Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 underline ml-1">les Composants et les Props</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Services</h3>
              <p className="text-center">
                Les services sont des classes qui permettent de partager des données et des fonctionnalités entre les composants.
              </p>
              <p className="text-center mt-2">
                Pour comprendre comment utiliser les services, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/AngularTuto/Services" className="text-blue-500 underline ml-1">les Services</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Modules</h3>
              <p className="text-center">
                Les modules permettent d&apos;organiser une application Angular en regroupant les composants, les services et les autres fonctionnalités.
              </p>
              <p className="text-center mt-2">
                Pour en savoir plus sur les modules, lisez notre article sur 
                <Link href="/blog/developpement/Js-framework/AngularTuto/Modules" className="text-blue-500 underline ml-1">les Modules</Link>.
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
              <FaAngular />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Routing</h3>
              <p className="text-center">
                Le Routing dans Angular permet de naviguer entre les différentes vues de l&apos;application en utilisant une URL.
              </p>
              <p className="text-center mt-2">
                Pour comprendre le routing avec Angular, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/AngularTuto/Routing" className="text-blue-500 underline ml-1">le Routing avec Angular Router</Link>.
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
            Conclusion <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl">
            Angular simplifie la création d&apos;applications web robustes en utilisant des composants réutilisables et modulaires. Comprendre les bases d&apos;Angular est essentiel pour tout développeur front-end moderne.
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
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Installation-Angular" className="text-blue-500 hover:underline">Article Suivant : Installation et Configuration</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 hover:underline">Composants Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Directives" className="text-blue-500 hover:underline">Directives Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Services" className="text-blue-500 hover:underline">Services et Dépendances</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Routing" className="text-blue-500 hover:underline">Routing avec Angular Router</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/NgRx" className="text-blue-500 hover:underline">Gestion d&apos;État avec NgRx</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default IntroductionToAngular;

