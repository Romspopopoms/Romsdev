import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
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

const IntroductionToNextjs = () => {
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
        <title>Introduction à Next.js | RomsDev</title>
        <meta name="description" content="Découvrez les bases de Next.js, un framework React populaire pour la construction d'applications web." />
        <meta name="keywords" content="Next.js, React, JavaScript, développement front-end, framework" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Introduction-Nextjs" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à Next.js<span className="text-accent">.</span>
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
            Next.js est un framework React populaire pour la construction d&apos;applications web. Dans cet article, nous allons explorer les concepts de base de Next.js et comprendre pourquoi il est devenu un outil essentiel pour les développeurs front-end.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux de Next.js, consultez nos articles sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 underline ml-1">l&apos;Installation et la Configuration</Link> et 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 underline ml-1">les Pages et le Routing</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Qu&apos;est-ce que Next.js ? <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Next.js, développé par Vercel, est un framework React open-source utilisé pour construire des applications web modernes avec des fonctionnalités telles que le rendu côté serveur, le rendu statique, et le routage intégré.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour découvrir comment démarrer rapidement avec Next.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 underline ml-1">l&apos;Installation et la Configuration</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Pages</h3>
              <p className="text-center">
                Les pages dans Next.js sont des composants React rendus par le serveur et associées à une route basée sur le nom du fichier.
              </p>
              <p className="text-center mt-2">
                Apprenez à créer des pages dans notre article sur 
                <Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 underline ml-1">les Pages et le Routing</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">Rendu côté serveur</h3>
              <p className="text-center">
                Next.js permet de rendre des pages côté serveur pour améliorer les performances et le SEO.
              </p>
              <p className="text-center mt-2">
                Pour comprendre comment utiliser le rendu côté serveur, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 underline ml-1">le Rendu Statique et Dynamique</Link>.
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
              <h3 className="text-xl font-medium mb-1 text-center">API Routes</h3>
              <p className="text-center">
                Les routes API dans Next.js permettent de créer des endpoints d&apos;API sans avoir besoin d&apos;un serveur séparé.
              </p>
              <p className="text-center mt-2">
                Pour en savoir plus sur les routes API, lisez notre article sur 
                <Link href="/blog/developpement/Js-framework/NextjsTuto/API-Routes" className="text-blue-500 underline ml-1">les Routes API</Link>.
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
              <SiNextdotjs />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Styling</h3>
              <p className="text-center">
                Next.js supporte divers outils de stylisation, y compris le CSS-in-JS, le CSS Modules, et Tailwind CSS.
              </p>
              <p className="text-center mt-2">
                Pour comprendre comment ajouter des styles à votre projet Next.js, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/NextjsTuto/Styling" className="text-blue-500 underline ml-1">le Styling et le CSS</Link>.
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
            Conclusion <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl">
            Next.js simplifie la création d&apos;applications web performantes en utilisant des fonctionnalités avancées telles que le rendu côté serveur et le routage intégré. Comprendre les bases de Next.js est essentiel pour tout développeur web moderne.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 hover:underline">Article Suivant : Installation et Configuration de Next.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 hover:underline">Installation et Configuration de Next.js</Link></li>
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

export default IntroductionToNextjs;
