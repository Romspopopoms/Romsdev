import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API' });
}
`;

const ApiRoutesNextjs = () => {
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
        <title>Routes API dans Next.js | RomsDev</title>
        <meta name="description" content="Découvrez comment créer des routes API dans Next.js pour gérer les requêtes côté serveur." />
        <meta name="keywords" content="Next.js, API routes, développement web, JavaScript, serveur" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/API-Routes" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Routes API dans Next.js<span className="text-accent">.</span>
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
            Next.js simplifie la création de routes API pour gérer les requêtes HTTP côté serveur. Dans cet article, vous apprendrez à créer et utiliser des routes API dans Next.js pour enrichir vos applications web.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur le rendu statique et dynamique, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 underline ml-1">le Rendu Statique et Dynamique dans Next.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Créer une Route API <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour créer une route API dans Next.js, ajoutez un fichier JavaScript dans le dossier <code className="bg-gray-800 p-2 rounded-lg">pages/api</code>. Chaque fichier de ce répertoire devient une route API.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Voici un exemple de route API simple qui renvoie un message JSON :
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
            Utilisation des Routes API <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Une fois votre route API créée, vous pouvez y accéder en envoyant des requêtes HTTP depuis n&apos;importe quel client, tel que fetch ou Axios. Voici un exemple d&apos;utilisation de fetch pour appeler notre route API :
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
import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <p>{data}</p>
    </div>
  );
}

export default FetchData;
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
            Les routes API de Next.js offrent une solution simple et puissante pour gérer les requêtes HTTP côté serveur. En combinant des routes API avec le rendu statique et dynamique, vous pouvez créer des applications web robustes et performantes.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Styling" className="text-blue-500 hover:underline">Article Suivant : Styling et CSS</Link></li>
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

export default ApiRoutesNextjs;
