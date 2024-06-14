import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}

export default Post;
`;

const PagesRoutingNextjs = () => {
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
        <title>Pages et Routing dans Next.js | RomsDev</title>
        <meta name="description" content="Apprenez à créer des pages et gérer le routing dans Next.js pour structurer vos applications web." />
        <meta name="keywords" content="Next.js, pages, routing, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/NextjsTuto/Pages-Routing" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pages et Routing dans Next.js<span className="text-accent">.</span>
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
            Dans cet article, nous allons explorer comment créer des pages et gérer le routing dans Next.js. Le framework Next.js facilite le routage en utilisant un système basé sur le fichier. Nous verrons comment créer des routes dynamiques et statiques.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur l&apos;installation et la configuration de Next.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/NextjsTuto/Installation-Nextjs" className="text-blue-500 underline ml-1">l&apos;Installation et Configuration de Next.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Création de Pages <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Dans Next.js, chaque fichier placé dans le répertoire <code className="bg-gray-800 p-2 rounded-lg mt-4">pages</code> devient une route. Par exemple, un fichier <code className="bg-gray-800 p-2 rounded-lg mt-4">pages/about.js</code> sera accessible via <code className="bg-gray-800 p-2 rounded-lg mt-4">/about</code>.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Vous pouvez créer une page d&apos;accueil en ajoutant un fichier <code className="bg-gray-800 p-2 rounded-lg mt-4">index.js</code> dans le répertoire <code className="bg-gray-800 p-2 rounded-lg mt-4">pages</code>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Routing Dynamique <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mt-8">
            Next.js permet également de créer des routes dynamiques. Pour créer une route dynamique, utilisez des crochets pour le nom du fichier. Par exemple, pour une route de blog dynamique, vous pouvez créer un fichier <code className="bg-gray-800 p-2 rounded-lg mt-4">[id].js</code> dans le répertoire <code className="bg-gray-800 p-2 rounded-lg mt-4">pages/blog</code>.
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
            Conclusion <span className="text-accent"><SiNextdotjs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vous avez maintenant appris comment créer des pages et gérer le routing dans Next.js. En utilisant les routes dynamiques et statiques, vous pouvez structurer efficacement votre application web. Explorez davantage de fonctionnalités de Next.js dans nos articles suivants.
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
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 hover:underline">Article Suivant : Rendu Statique et Dynamique</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Static-Dynamic-Rendering" className="text-blue-500 hover:underline">Rendu Statique et Dynamique</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/API-Routes" className="text-blue-500 hover:underline">Routes API</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Styling" className="text-blue-500 hover:underline">Styling et CSS</Link></li>
              <li><Link href="/blog/developpement/Js-framework/NextjsTuto/Deployement" className="text-blue-500 hover:underline">Déploiement</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default PagesRoutingNextjs;
