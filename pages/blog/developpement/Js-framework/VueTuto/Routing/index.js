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
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
`;

const RoutingVue = () => {
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
        <title>Routing avec Vue.js | RomsDev</title>
        <meta name="description" content="Apprenez à configurer et utiliser le routing dans une application Vue.js pour créer des applications à page unique." />
        <meta name="keywords" content="Vue.js, routing, vue-router, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/VueTuto/Routing" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Routing avec Vue.js<span className="text-accent">.</span>
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
            Vue Router est le module de routing officiel pour Vue.js. Il permet de créer des applications à page unique (SPA) avec une navigation entre les différentes vues sans recharger la page. Dans cet article, nous allons explorer comment configurer et utiliser Vue Router.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur l&apos;état réactif de Vue.js, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 underline ml-1">l&apos;État Réactif</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Installation de Vue Router <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour commencer à utiliser Vue Router, vous devez l&apos;installer via npm ou yarn :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              npm install vue-router
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Une fois installé, vous pouvez configurer Vue Router dans votre application Vue.js.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Configuration de Vue Router <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici comment configurer Vue Router dans une application Vue.js :
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
            Dans cet exemple, nous avons configuré deux routes : une pour le composant Home et une autre pour le composant About. Ces routes sont définies dans l&apos;objet <code>routes</code> et passées à l&apos;instance de Vue Router.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Utilisation de Vue Router <span className="text-accent"><FaVuejs className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Une fois Vue Router configuré, vous pouvez l&apos;utiliser dans votre application pour naviguer entre les différentes vues. Voici un exemple de code pour inclure Vue Router dans votre composant principal :
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
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
</script>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, nous avons utilisé les composants <code>router-link</code> pour créer des liens de navigation et le composant <code>router-view</code> pour afficher les composants correspondants à chaque route.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Routes Dynamiques <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vue Router permet également de définir des routes dynamiques avec des paramètres de route. Voici un exemple de configuration de route dynamique :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`export default new Router({
  routes: [
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Dans cet exemple, la route <code>/user/:id</code> est dynamique et peut correspondre à différentes valeurs de <code>:id</code>. Vous pouvez accéder à ce paramètre dans le composant User via <code>this.$route.params.id</code>.
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
            Vue Router est un outil puissant pour créer des applications Vue.js à page unique. En comprenant comment configurer et utiliser Vue Router, vous pouvez ajouter facilement des fonctionnalités de navigation à vos applications Vue.js.
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
              <li><Link href="/blog/developpement/Js-framework/VueTuto/Etat-Reactif" className="text-blue-500 hover:underline">État Réactif dans Vue.js</Link></li>
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

export default RoutingVue;
