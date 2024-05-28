import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseEffectHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");
  const [typedCode3, setTypedCode3] = React.useState("");

  const codeSnippetBasic = `
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
`;

  const codeSnippetFetch = `
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default DataFetcher;
`;

  const codeSnippetCleanup = `
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default Timer;
`;

  React.useEffect(() => {
    if (inView1) {
      const type = async () => {
        for (let i = 0; i <= codeSnippetBasic.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode1(codeSnippetBasic.slice(0, i));
        }
      };
      type();
    }
  }, [inView1, codeSnippetBasic]);

  React.useEffect(() => {
    if (inView2) {
      const type = async () => {
        for (let i = 0; i <= codeSnippetFetch.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode2(codeSnippetFetch.slice(0, i));
        }
      };
      type();
    }
  }, [inView2, codeSnippetFetch]);

  React.useEffect(() => {
    if (inView3) {
      const type = async () => {
        for (let i = 0; i <= codeSnippetCleanup.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode3(codeSnippetCleanup.slice(0, i));
        }
      };
      type();
    }
  }, [inView3, codeSnippetCleanup]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>React Hook: useEffect | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useEffect de React pour gérer les effets de bord dans vos composants fonctionnels." />
        <meta name="keywords" content="React, useEffect, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useEffect<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useEffect</code> vous permet de gérer les effets de bord dans vos composants fonctionnels. Que ce soit pour effectuer des opérations après le rendu, nettoyer des abonnements, ou effectuer des mises à jour basées sur des changements d&apos;état, <code>useEffect</code> est l&apos;outil idéal. 
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base où nous utilisons <code>useEffect</code> pour mettre à jour le titre de la page à chaque fois que le compteur change.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref1}
            >
              <code>{typedCode1}</code>
            </pre>
          </div>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Fetching des données <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Utilisez <code>useEffect</code> pour effectuer des requêtes réseau et mettre à jour l&apos;état avec les données récupérées. Cet exemple montre comment effectuer une requête réseau pour récupérer des données et les afficher.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref2}
            >
              <code>{typedCode2}</code>
            </pre>
          </div>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Nettoyage des effets <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useEffect</code> peut retourner une fonction de nettoyage qui s&apos;exécute lors du démontage du composant. Cet exemple montre comment utiliser <code>useEffect</code> pour démarrer un intervalle et le nettoyer lorsque le composant est démonté.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref3}
            >
              <code>{typedCode3}</code>
            </pre>
          </div>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Remarques importantes <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <ul className="text-lg lg:text-xl list-disc pl-5">
            <br></br>
            <li><code>useEffect</code> s&apos;exécute après chaque rendu par défaut. Vous pouvez contrôler cette exécution en passant un tableau de dépendances.</li>
            <br></br>
            <li>Utilisez un tableau de dépendances vide pour exécuter <code>useEffect</code> une seule fois après le premier rendu (similaire à <code>componentDidMount</code>).</li>
            <br></br>
            <li>Assurez-vous de nettoyer les abonnements et les ressources pour éviter les fuites de mémoire en retournant une fonction de nettoyage dans <code>useEffect</code>.</li>
          </ul>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">Article Précédent : useState</Link></li>
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
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseEffectHook;
