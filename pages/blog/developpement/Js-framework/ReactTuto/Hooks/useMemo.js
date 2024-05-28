import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseMemoHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");

  const codeSnippet1 = `
import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Utilisation de useMemo pour mémoriser une valeur calculée
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default UseMemoExample;
`;

  React.useEffect(() => {
    if (inView1) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet1.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode1(codeSnippet1.slice(0, i));
        }
      };
      type();
    }
  }, [inView1, codeSnippet1]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>React Hook: useMemo | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useMemo de React pour optimiser la performance de vos composants." />
        <meta name="keywords" content="React, useMemo, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useMemo" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useMemo<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useMemo</code> est utilisé pour mémoriser une valeur calculée afin qu&apos;elle ne soit recalculée que lorsque l&apos;une de ses dépendances change. Cela peut améliorer les performances de votre application en évitant des calculs coûteux à chaque rendu.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useMemo</code> pour mémoriser une valeur calculée coûteuse.
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
            Fonctionnement du hook useMemo <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
          <br></br>
            Le hook <code>useMemo</code> prend deux arguments : une fonction qui retourne une valeur et un tableau de dépendances. Il retourne la valeur mémorisée, qui ne sera recalculée que si l&apos;une des dépendances change.
          </p>
          <p className="text-lg lg:text-xl text-center">
          <br></br>
            Dans l&apos;exemple ci-dessus, nous utilisons <code>useMemo</code> pour mémoriser le résultat d&apos;un calcul coûteux. Ce calcul est effectué uniquement lorsque la valeur de <code>count</code> change.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Optimisation des performances <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useMemo</code> est particulièrement utile dans les cas suivants :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
          <br></br>
            <li>
              Lorsque vous avez des calculs coûteux qui ne doivent pas être recalculés à chaque rendu.
            </li>
            <br></br>
            <li>
              Lorsque vous avez des objets ou des tableaux dépendant de variables d&apos;état ou de props qui doivent être mémorisés.
            </li>
            <br></br>
          </ul>
          <p className="text-lg lg:text-xl text-center mt-4">
            L&apos;utilisation de <code>useMemo</code> permet de prévenir les calculs inutiles et d&apos;améliorer les performances de l&apos;application.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Cas d&apos;utilisation courants <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Quelques cas d&apos;utilisation courants de <code>useMemo</code> incluent :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
          <br></br>
            <li>
              Mémoriser des listes filtrées ou triées pour éviter des calculs répétés à chaque rendu.
            </li>
            <br></br>
            <li>
              Mémoriser des objets de style ou des classes CSS générés dynamiquement.
            </li>
            <br></br>
            <li>
              Mémoriser des valeurs de contexte calculées pour éviter des rerenders inutiles de composants enfants.
            </li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useCallback" className="text-blue-500 hover:underline">Article Précédent : useCallback</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">useEffect</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">useState</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseMemoHook;
