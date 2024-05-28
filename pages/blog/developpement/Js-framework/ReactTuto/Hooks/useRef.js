import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseRefHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");

  const codeSnippet1 = `
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
`;

  const codeSnippet2 = `
import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(timerId.current)}>Stop Timer</button>
    </div>
  );
};

export default Timer;
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

  React.useEffect(() => {
    if (inView2) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet2.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode2(codeSnippet2.slice(0, i));
        }
      };
      type();
    }
  }, [inView2, codeSnippet2]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>React Hook: useRef | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useRef de React pour accéder aux éléments DOM et gérer des valeurs persistantes." />
        <meta name="keywords" content="React, useRef, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useRef" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useRef<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useRef</code> est utilisé pour créer une référence mutable qui persiste pendant toute la durée de vie du composant. Il est souvent utilisé pour accéder directement aux éléments DOM ou pour stocker des valeurs persistantes entre les rendus sans déclencher de ré-rendu.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useRef</code> pour accéder directement à un élément DOM et le manipuler.
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
            Exemple avancé <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple plus avancé de l&apos;utilisation de <code>useRef</code> pour gérer un timer.
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
            Utilisation de useRef <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useRef</code> peut être utilisé dans plusieurs cas :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
            <br></br>
            <li>Accéder aux éléments DOM directement pour manipuler leur état ou leur contenu.</li>
            <br></br>
            <li>Stocker des valeurs persistantes entre les rendus sans déclencher de ré-rendu.</li>
            <br></br>
            <li>Gérer des timers ou des intervalles pour démarrer et arrêter des actions à des moments spécifiques.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Optimisation des performances <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Utiliser <code>useRef</code> pour éviter les calculs inutiles et améliorer les performances de votre application. Par exemple, en stockant une valeur calculée qui ne change pas entre les rendus, vous pouvez éviter des calculs répétés.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useImperativehandle" className="text-blue-500 hover:underline">Article Suivant : useImperativehandle</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">useState</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">useEffect</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseRefHook;
