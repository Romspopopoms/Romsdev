import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineCode, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const ComponentLifecycle = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });

  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");

  const codeSnippet1 = `
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component did mount');
    // Simulate data fetching
    setTimeout(() => {
      this.setState({ data: 'Fetched data' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Lifecycle Demo</h1>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
`;

  const codeSnippet2 = `
import React, { useState, useEffect } from 'react';

const FunctionalLifecycle = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Component did mount');
    setTimeout(() => {
      setData('Fetched data');
    }, 2000);

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
  });

  return (
    <div>
      <h1>Functional Lifecycle</h1>
      <p>Data: {data}</p>
    </div>
  );
};

export default FunctionalLifecycle;
`;

  React.useEffect(() => {
    if (inView1) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet1.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode1(codeSnippet1.slice(0, i));
        }
      };
      type();
    }
  }, [inView1, codeSnippet1]);

  React.useEffect(() => {
    if (inView2) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet2.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode2(codeSnippet2.slice(0, i));
        }
      };
      type();
    }
  }, [inView2, codeSnippet2]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Les Cycles de Vie des Composants | RomsDev</title>
        <meta name="description" content="Comprenez les cycles de vie des composants en React." />
        <meta name="keywords" content="React, cycles de vie, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/React-Tuto/Les-Cycles-de-vie" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Les Cycles de Vie des Composants<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Les cycles de vie des composants en React se réfèrent aux différentes phases par lesquelles un composant passe de sa création à sa destruction. Ces cycles permettent de gérer des effets secondaires, des mises à jour de données, et des nettoyages nécessaires. Nous allons explorer les cycles de vie dans les composants de classe et les composants fonctionnels.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Cycles de Vie des Composants de Classe <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Les composants de classe en React ont des méthodes de cycle de vie intégrées que vous pouvez utiliser pour exécuter du code à des moments spécifiques du cycle de vie d&apos;un composant.
          </p>
          <div className="bg-gray-600 p-6 rounded-lg mb-8">
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref1}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode1}</code>
            </motion.pre>
          </div>

          <p className="text-lg lg:text-xl text-center mb-8">
            Dans cet exemple, nous avons un composant de classe nommé <code>LifecycleDemo</code> qui utilise plusieurs méthodes de cycle de vie :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 mb-8 text-center ">
            <li><code>constructor</code> : Initialisation de l&apos;état local et liaison des méthodes.</li><br></br>
            <li><code>componentDidMount</code> : Exécution du code après que le composant est monté, souvent utilisé pour les requêtes réseau.</li><br></br>
            <li><code>componentDidUpdate</code> : Réagir aux changements de props ou d&apos;état.</li><br></br>
            <li><code>componentWillUnmount</code> : Nettoyage avant que le composant soit détruit.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Cycles de Vie avec les Hooks <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Les hooks, introduits dans React 16.8, permettent de gérer les cycles de vie dans les composants fonctionnels. Le hook <code>useEffect</code> remplace les méthodes de cycle de vie des composants de classe.
          </p>
          <div className="bg-gray-600 p-6 rounded-lg mb-8">
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref2}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode2}</code>
            </motion.pre>
          </div>

          <p className="text-lg lg:text-xl text-center mb-8">
            Dans cet exemple, nous utilisons le hook <code>useEffect</code> pour gérer les cycles de vie dans un composant fonctionnel nommé <code>FunctionalLifecycle</code> :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 mb-8 text-center ">
            <li>Le premier argument de <code>useEffect</code> est une fonction qui s&apos;exécute après le rendu du composant (similaire à <code>componentDidMount</code>).</li> <br></br>
            <li>Le second argument est un tableau de dépendances. Si ce tableau est vide, l&apos;effet s&apos;exécute une seule fois après le premier rendu.</li><br></br>
            <li>La fonction de retour de <code>useEffect</code> s&apos;exécute lors du démontage du composant (similaire à <code>componentWillUnmount</code>).</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-Des-Etats" className="text-blue-500 hover:underline">Article Précédent : Gestion des États</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 hover:underline">Composants et Props</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Demarrage-React" className="text-blue-500 hover:underline">Démarrage Rapide avec React</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default ComponentLifecycle;
