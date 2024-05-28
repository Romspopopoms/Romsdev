import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseLayoutEffectHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");

  const codeSnippet1 = `
import React, { useLayoutEffect, useRef } from 'react';

const UseLayoutEffectExample = () => {
  const inputRef = useRef();

  useLayoutEffect(() => {
    inputRef.current.value = "Updated in useLayoutEffect";
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default UseLayoutEffectExample;
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
        <title>React Hook: useLayoutEffect | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useLayoutEffect de React pour exécuter des effets après toutes les mutations DOM." />
        <meta name="keywords" content="React, useLayoutEffect, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useLayoutEffect" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useLayoutEffect<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useLayoutEffect</code> est similaire à <code>useEffect</code> mais s&apos;exécute de manière synchrone après toutes les mutations DOM. Cela permet d&apos;effectuer des mises à jour du DOM avant que le navigateur n&apos;ait la chance de peindre.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useLayoutEffect</code> pour mettre à jour la valeur d&apos;un champ de saisie avant que le navigateur ne peigne.
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
            Utilisation de useLayoutEffect <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useLayoutEffect</code> peut être utilisé dans plusieurs cas :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 text-center">
            <br></br>
            <li>Mesurer la taille ou la position des éléments DOM après les mutations.</li>
            <br></br>
            <li>Appliquer des styles ou des classes en fonction de la taille ou de la position des éléments.</li>
            <br></br>
            <li>Exécuter des animations en fonction des modifications DOM.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Différences entre useEffect et useLayoutEffect <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Bien que <code>useEffect</code> et <code>useLayoutEffect</code> soient similaires, il existe des différences importantes :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 text-center">
          <br></br>
            <li><code>useEffect</code> s&apos;exécute de manière asynchrone après que le navigateur a peint l&apos;écran. Il est principalement utilisé pour les opérations non-bloquantes.</li>
            <br></br>
            <li><code>useLayoutEffect</code> s&apos;exécute de manière synchrone après toutes les mutations DOM mais avant que le navigateur ne peigne. Il est utilisé pour les opérations nécessitant des mises à jour immédiates du DOM.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Bonnes pratiques <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            L&apos;utilisation de <code>useLayoutEffect</code> présente plusieurs bonnes pratiques :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 text-center">
          <br></br>
            <li>Utiliser <code>useLayoutEffect</code> uniquement lorsque <code>useEffect</code> ne répond pas aux besoins de votre application.</li>
            <br></br>
            <li>Éviter d&apos;exécuter des opérations lourdes dans <code>useLayoutEffect</code> car cela peut ralentir le rendu.</li>
            <br></br>
            <li>S&apos;assurer que les effets dans <code>useLayoutEffect</code> sont bien nettoyés pour éviter les fuites de mémoire.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactProjets" className="text-blue-500 hover:underline">Section Suivante : ReactProjets </Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useDebugValue" className="text-blue-500 hover:underline">Article Suivant : useDebugValue</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">useState</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
