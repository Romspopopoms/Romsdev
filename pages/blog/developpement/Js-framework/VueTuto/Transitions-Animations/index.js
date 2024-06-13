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
  <div id="app">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">Hello Vue.js!</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
`;

const TransitionsAnimations = () => {
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
        <title>Transitions et Animations avec Vue.js | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser les transitions et les animations pour améliorer l'expérience utilisateur dans une application Vue.js." />
        <meta name="keywords" content="Vue.js, transitions, animations, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto/Transitions-Animations" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transitions et Animations avec Vue.js<span className="text-accent">.</span>
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
            Les transitions et les animations sont des outils puissants pour améliorer l`&apos;expérience utilisateur dans les applications web. Vue.js fournit une série d`&apos;outils pour gérer les transitions et les animations de manière déclarative et simple. Dans cet article, nous allons explorer comment utiliser ces outils pour ajouter des effets visuels à vos applications Vue.js.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur la gestion d`&apos;état avec Vuex, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Vuex" className="text-blue-500 underline ml-1">la Gestion d`&apos;État avec Vuex</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Transitions de Base <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vue.js utilise la composante <code>&lt;transition&gt;</code> pour appliquer des transitions aux éléments insérés ou supprimés du DOM. Voici un exemple de transition simple utilisant <code>&lt;transition&gt;</code> et une classe CSS pour une animation de fondu :
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
            Dans cet exemple, nous utilisons la directive <code>v-if</code> pour contrôler l`&apos;affichage du texte. La classe <code>fade</code> est utilisée pour les styles d`&apos;entrée et de sortie de l`&apos;élément, avec des transitions CSS définies pour l`&apos;opacité.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Animation d`&apos;Élément Individuel <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vous pouvez également animer des éléments individuels dans une liste en utilisant la composante <code>&lt;transition-group&gt;</code>. Voici un exemple :
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
    <button @click="addItem">Add Item</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem() {
      this.items.push(this.items.length + 1);
    }
  }
}
</script>

<style>
.list-item {
  transition: all 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous utilisons <code>&lt;transition-group&gt;</code> pour animer les éléments de la liste lorsqu`&apos;ils sont ajoutés ou supprimés. Les classes <code>list-enter-active</code>, <code>list-leave-active</code>, <code>list-enter</code> et <code>list-leave-to</code> sont utilisées pour définir les transitions CSS.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Animation JavaScript <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vue.js permet également d`&apos;utiliser JavaScript pour les animations en utilisant les hooks de cycle de vie des transitions. Voici un exemple d`&apos;animation JavaScript :
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
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <p v-if="show">Hello Vue.js!</p>
    </transition>
    <button @click="show = !show">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      setTimeout(() => {
        el.style.opacity = 1;
        done();
      }, 1000);
    },
    leave(el, done) {
      setTimeout(() => {
        el.style.opacity = 0;
        done();
      }, 1000);
    }
  }
}
</script>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous utilisons les hooks de transition <code>before-enter</code>, <code>enter</code> et <code>leave</code> pour appliquer des animations JavaScript à un élément lorsqu`&apos;il entre et sort du DOM.
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
            Les transitions et les animations sont des outils essentiels pour améliorer l`&apos;expérience utilisateur dans les applications web. En utilisant les composants de transition et les hooks de cycle de vie de Vue.js, vous pouvez facilement ajouter des effets visuels à vos applications Vue.js.
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
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Vuex" className="text-blue-500 hover:underline">Article Précédent : Gestion d`&apos;État avec Vuex</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 hover:underline">État Réactif dans Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Composants" className="text-blue-500 hover:underline">Composants en Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Routing" className="text-blue-500 hover:underline">Routing avec Vue.js</Link></li>
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Vuex" className="text-blue-500 hover:underline">Gestion d`&apos;État avec Vuex</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default TransitionsAnimations;
