import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const StateManagement = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");
  const [typedCode3, setTypedCode3] = React.useState("");

  const codeSnippet1 = `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
`;

  const codeSnippet2 = `
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default CounterWithReducer;
`;

  const codeSnippet3 = `
import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
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

  React.useEffect(() => {
    if (inView3) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet3.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode3(codeSnippet3.slice(0, i));
        }
      };
      type();
    }
  }, [inView3, codeSnippet3]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Gestion des États | RomsDev</title>
        <meta name="description" content="Apprenez les différentes façons de gérer les états en React." />
        <meta name="keywords" content="React, états, useState, useReducer, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/React-Tuto/Gestion-Des-Etats" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gestion des États<span className="text-accent">.</span>
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
            Dans cet article, nous allons découvrir les différentes façons de gérer les états en React. Nous allons examiner les hooks <code>useState</code> et <code>useReducer</code>, ainsi que les composants de classe.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour plus de détails sur les hooks et leur utilisation, consultez notre 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 underline ml-1">page dédiée aux Hooks React</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de useState <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useState</code> est utilisé pour ajouter l&apos;état local à un composant fonctionnel.
          </p>

          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <h3 className="text-xl font-medium mb-2">Exemple de useState</h3>
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
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour une explication plus détaillée sur le hook useState, visitez notre 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 underline ml-1">page dédiée au hook useState</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de useReducer <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useReducer</code> est utile pour des états plus complexes et une logique de mise à jour.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <h3 className="text-xl font-medium mb-2">Exemple de useReducer</h3>
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
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour plus d&apos;informations sur l&apos;utilisation de useReducer, consultez notre 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useReducer" className="text-blue-500 underline ml-1">page dédiée au hook useReducer</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Gestion des États avec les Composants de Classe <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les composants de classe utilisent <code>this.state</code> pour gérer l&apos;état local.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <h3 className="text-xl font-medium mb-2">Exemple avec des Composants de Classe</h3>
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref3}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode3}</code>
            </motion.pre>
          </div>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour une explication plus détaillée sur la gestion des états avec les composants de classe, visitez notre 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 underline ml-1">page dédiée aux Hooks React</Link>.
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
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Composants-Props" className="text-blue-500 hover:underline">Article Précédent : Composants et Props</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Gestion-Des-Etats" className="text-blue-500 hover:underline">Gestion des États avec React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Les-Cycles-de-vie" className="text-blue-500 hover:underline">Les Cycles de Vie</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 hover:underline">Hooks en React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">Hook useState</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">Hook useEffect</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useReducer" className="text-blue-500 hover:underline">Hook useReducer</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default StateManagement;
