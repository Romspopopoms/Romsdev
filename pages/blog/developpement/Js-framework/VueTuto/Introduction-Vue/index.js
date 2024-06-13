import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaVuejs } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { FaCodeBranch, FaCog } from 'react-icons/fa';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
<template>
  <div>
    <h1>Hello, {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    name: String
  }
}
</script>
`;

const IntroductionToVue = () => {
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
        <title>Introduction à Vue.js | RomsDev</title>
        <meta name="description" content="Découvrez les bases de Vue.js, un framework JavaScript populaire pour la construction d'interfaces utilisateur." />
        <meta name="keywords" content="Vue.js, JavaScript, framework JavaScript, développement front-end, interfaces utilisateur" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/Vue-Tuto/Introduction-Vue" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introduction à Vue.js<span className="text-accent">.</span>
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
            Vue.js est un framework JavaScript progressif pour la construction d&apos;interfaces utilisateur. Dans cet article, nous allons explorer les concepts de base de Vue.js et comprendre pourquoi il est devenu un outil essentiel pour les développeurs front-end.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les concepts fondamentaux de Vue.js, consultez nos articles sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 underline ml-1">les Composants</Link> et 
            <Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 underline ml-1">l&apos;État Reactif</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Qu&apos;est-ce que Vue.js ? <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vue.js, développé par Evan You, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur. Il permet de créer des composants réutilisables et de gérer efficacement l&apos;état de l&apos;application.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour découvrir comment démarrer rapidement avec Vue.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Installation-Vue" className="text-blue-500 underline ml-1">l&apos;Installation et la Configuration de Vue.js</Link>.
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
                Les composants sont les éléments de base de toute application Vue.js. Ils peuvent être définis dans des fichiers .vue.
              </p>
              <p className="text-center mt-2">
                Apprenez à créer vos propres composants en lisant notre article sur 
                <Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 underline ml-1">les Composants</Link>.
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
                <Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 underline ml-1">les Composants</Link>.
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
                <Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 underline ml-1">l&apos;État Reactif</Link>.
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
              <FaVuejs />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center">Cycle de Vie</h3>
              <p className="text-center">
                Chaque composant Vue.js a un cycle de vie avec différentes phases, telles que le montage, la mise à jour, et le démontage.
              </p>
              <p className="text-center mt-2">
                Pour comprendre les cycles de vie des composants, consultez notre article sur 
                <Link href="/blog/developpement/Js-framework/VueTuto/Les-Cycles-de-vie" className="text-blue-500 underline ml-1">les Cycles de Vie</Link>.
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
            Conclusion <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl">
            Vue.js simplifie la création d&apos;interfaces utilisateur interactives en utilisant des composants réutilisables. Comprendre les bases de Vue.js est essentiel pour tout développeur front-end moderne.
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
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Installation-Vue" className="text-blue-500 hover:underline">Article Suivant : Installation et Configuration de Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
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

export default IntroductionToVue;
