import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaVuejs } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Edit me">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
`;

const EtatReactif = () => {
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
        <title>État Réactif dans Vue.js | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser l'état réactif dans Vue.js pour créer des interfaces utilisateur dynamiques." />
        <meta name="keywords" content="Vue.js, état réactif, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto/Etat-Reactif" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          État Réactif dans Vue.js<span className="text-accent">.</span>
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
            L&apos;état réactif est un concept fondamental dans Vue.js. Il permet de lier automatiquement les données aux éléments du DOM, de sorte que lorsque les données changent, le DOM est mis à jour en conséquence. Dans cet article, nous allons explorer comment utiliser l&apos;état réactif dans Vue.js.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur les directives de Vue.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Directives" className="text-blue-500 underline ml-1">les Directives Vue.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Utilisation de l&apos;état réactif <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Dans Vue.js, l&apos;état réactif est défini dans la section <code>data</code> d&apos;un composant. Voici un exemple simple de composant utilisant l&apos;état réactif :
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
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, le message est lié à l&apos;élément d&apos;entrée via la directive <code>v-model</code>. Lorsque l&apos;utilisateur tape dans l&apos;entrée, le message est mis à jour et affiché en temps réel.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Réactivité et méthodes <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            En plus de l&apos;état, Vue.js permet également de définir des méthodes qui peuvent interagir avec cet état. Voici un exemple d&apos;utilisation de méthodes pour mettre à jour l&apos;état :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="incrementCounter">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
}
</script>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous avons défini une méthode <code>incrementCounter</code> qui incrémente le compteur chaque fois que le bouton est cliqué.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Computed Properties <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les propriétés calculées (computed properties) sont des propriétés qui sont recalculées automatiquement lorsqu&apos;une dépendance change. Elles sont souvent utilisées pour des opérations complexes basées sur l&apos;état réactif.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation des computed properties :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<template>
  <div>
    <p>Message inversé : {{ reversedMessage }}</p>
    <input v-model="message" placeholder="Tapez un message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
}
</script>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, la propriété calculée <code>reversedMessage</code> retourne le message inversé. Elle est automatiquement mise à jour lorsque le message change.
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
            L&apos;état réactif est au cœur de Vue.js et permet de créer des applications dynamiques et interactives. En comprenant comment utiliser l&apos;état réactif, les méthodes, et les computed properties, vous pouvez construire des interfaces utilisateur sophistiquées et réactives.
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
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Transitions-Animations" className="text-blue-500 hover:underline">Article Suivant : Transitions et Animations</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Directives" className="text-blue-500 hover:underline">Directives Vue.js</Link></li>
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

export default EtatReactif;
