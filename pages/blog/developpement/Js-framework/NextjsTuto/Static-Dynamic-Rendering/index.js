import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
export async function getStaticProps() {
  // Fetch data at build time
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}

const Page = ({ data }) => {
  return (
    <div>
      <h1>Static Page</h1>
      <p>Data: {data}</p>
    </div>
  );
}

export default Page;
`;

const StaticDynamicRenderingNextjs = () => {
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
        <title>Rendu Statique et Dynamique dans Next.js | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le rendu statique et dynamique dans Next.js pour améliorer les performances de vos applications web." />
        <meta name="keywords" content="Next.js, rendu statique, rendu dynamique, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rendu Statique et Dynamique dans Next.js<span className="text-accent">.</span>
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
            Dans cet article, nous allons explorer le rendu statique et dynamique dans Next.js. Vous apprendrez comment utiliser ces deux méthodes pour optimiser les performances et l&apos;expérience utilisateur de vos applications web.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur la création de pages et la gestion du routing, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 underline ml-1">les Pages et le Routing dans Next.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Rendu Statique <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le rendu statique permet de générer des pages HTML à la construction du site. Next.js utilise la méthode <code className="bg-gray-800 p-2 rounded-lg mt-4">getStaticProps</code> pour récupérer les données à la construction du site.
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
            Rendu Dynamique <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Le rendu dynamique permet de générer des pages à chaque requête. Next.js utilise la méthode <code className="bg-gray-800 p-2 rounded-lg mt-4">getServerSideProps</code> pour récupérer les données à chaque requête.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Voici un exemple de rendu dynamique :
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
export async function getServerSideProps() {
  // Fetch data at request time
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}

const Page = ({ data }) => {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Data: {data}</p>
    </div>
  );
}

export default Page;
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
            En utilisant le rendu statique et dynamique, vous pouvez optimiser les performances de votre application Next.js tout en offrant une expérience utilisateur optimale. Explorez davantage de fonctionnalités de Next.js dans nos articles suivants.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/API-Routes" className="text-blue-500 hover:underline">Article Suivant : Routes API</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 hover:underline">Rendu Statique et Dynamique</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 hover:underline">Installation et Configuration</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" className="text-blue-500 hover:underline">Pages et Routing</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default StaticDynamicRenderingNextjs;
