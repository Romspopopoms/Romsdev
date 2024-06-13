import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaVuejs } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
`;

const VuexPage = () => {
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
        <title>Gestion d&apos;État avec Vuex | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser Vuex pour gérer l'état dans une application Vue.js." />
        <meta name="keywords" content="Vue.js, Vuex, gestion d'état, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto/Vuex" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gestion d&apos;État avec Vuex<span className="text-accent">.</span>
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
            Vuex est une bibliothèque de gestion d&apos;état pour Vue.js. Il suit le modèle de gestion d&apos;état global inspiré par Flux de Facebook. Vuex permet de centraliser l&apos;état de votre application dans un seul magasin, ce qui facilite la gestion de l&apos;état à grande échelle. Dans cet article, nous allons explorer comment configurer et utiliser Vuex dans une application Vue.js.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur le routing avec Vue.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Routing" className="text-blue-500 underline ml-1">le Routing avec Vue.js</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Installation de Vuex <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour commencer à utiliser Vuex, vous devez l&apos;installer via npm ou yarn :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              npm install vuex --save
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Une fois installé, vous pouvez configurer Vuex dans votre application Vue.js.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Configuration de Vuex <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici comment configurer Vuex dans une application Vue.js :
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
            Dans cet exemple, nous avons configuré un store Vuex avec un état initial, une mutation pour incrémenter le compteur, et une action pour appeler cette mutation.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Utilisation de Vuex dans les Composants <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Une fois Vuex configuré, vous pouvez l&apos;utiliser dans vos composants Vue.js pour accéder à l&apos;état et déclencher des actions. Voici un exemple :
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
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous utilisons les helpers <code>mapState</code> et <code>mapActions</code> pour mapper l&apos;état et les actions Vuex aux propriétés calculées et aux méthodes du composant.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Modules Vuex <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Lorsque votre application devient plus grande, il peut être utile de diviser votre store Vuex en modules. Voici un exemple de configuration de modules Vuex :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`const moduleA = {
  state: () => ({ count: 0 }),
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
};

const moduleB = {
  state: () => ({ name: 'Vuex' }),
  mutations: { /* ... */ },
  actions: { /* ... */ }
};

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous avons défini deux modules, <code>moduleA</code> et <code>moduleB</code>, que nous avons ensuite inclus dans le store Vuex principal.
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
            Vuex est un outil puissant pour la gestion de l&apos;état dans les applications Vue.js. En utilisant Vuex, vous pouvez centraliser l&apos;état de votre application et simplifier la gestion de l&apos;état à grande échelle. En comprenant comment configurer et utiliser Vuex, vous pouvez construire des applications Vue.js plus robustes et maintenables.
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
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Routing" className="text-blue-500 hover:underline">Routing avec Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 hover:underline">Composants en Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 hover:underline">État Réactif dans Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Transitions-Animations" className="text-blue-500 hover:underline">Transitions et Animations en Vue.js</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default VuexPage;
