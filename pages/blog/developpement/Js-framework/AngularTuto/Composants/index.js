import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, {{name}}</h1>',
  styles: ['h1 { font-family: Lato; }']
})
export class AppComponent  {
  name = 'Angular';
}
`;

const AngularComponents = () => {
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
        <title>Composants en Angular | RomsDev</title>
        <meta name="description" content="Apprenez à créer et utiliser des composants en Angular pour construire des applications web dynamiques." />
        <meta name="keywords" content="Angular, composants, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/Composants" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Composants en Angular<span className="text-accent">.</span>
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
            Les composants sont les blocs de construction de base d&apos;une application Angular. Ils permettent de créer des éléments réutilisables et modulaires qui peuvent être facilement intégrés et gérés au sein de votre application.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts de base d&apos;Angular, consultez notre article sur 
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
            Création d&apos;un Composant <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour créer un nouveau composant Angular, vous pouvez utiliser la commande Angular CLI suivante :
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            <code className="bg-gray-800 p-2 rounded-lg mt-4">ng generate component nom-du-composant</code>
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Cette commande génère un nouveau répertoire contenant les fichiers nécessaires pour votre composant : un fichier TypeScript, un fichier HTML, un fichier CSS et un fichier de test.
          </p>
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
          <p className="text-lg lg:text-xl text-center">
            Les composants Angular sont essentiels pour construire des applications web dynamiques et réutilisables. En comprenant comment créer et utiliser des composants, vous pouvez améliorer la structure et la maintenabilité de vos applications.
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
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Directives" className="text-blue-500 hover:underline">Article Suivant : Directives d&apos;Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Etat-Reactif" className="text-blue-500 hover:underline">Gestion de l&apos;État Reactif avec Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Installation-Angular" className="text-blue-500 hover:underline">Installation et Configuration d&apos;Angular</Link></li>
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

export default AngularComponents;
