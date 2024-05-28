import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseDebugValueHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");

  const codeSnippet1 = `
import React, { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // A custom hook that shows a label in React DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  // Simulate a status check
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOnline(Math.random() > 0.5);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [friendID]);

  return isOnline;
}

const FriendStatus = ({ friendID }) => {
  const isOnline = useFriendStatus(friendID);

  return (
    <div>
      {isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'}
    </div>
  );
};

export default FriendStatus;
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
        <title>React Hook: useDebugValue | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useDebugValue de React pour ajouter des labels de débogage personnalisés." />
        <meta name="keywords" content="React, useDebugValue, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useDebugValue" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useDebugValue<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useDebugValue</code> est utilisé pour afficher des informations de débogage dans React DevTools. Ce hook est particulièrement utile lors de la création de hooks personnalisés afin de fournir des labels de débogage clairs et informatifs.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useDebugValue</code> dans un hook personnalisé pour afficher l&apos;état d&apos;un ami en ligne ou hors ligne dans React DevTools.
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
            Utilisation de useDebugValue <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useDebugValue</code> peut être utilisé pour :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 text-center">
            <br></br>
            <li>Afficher des informations de débogage personnalisées pour vos hooks.</li>
            <br></br>
            <li>Aider à identifier l&apos;état actuel des valeurs dans vos hooks lors de l&apos;utilisation de React DevTools.</li>
            <br></br>
            <li>Fournir des informations contextuelles supplémentaires qui peuvent être utiles pour le débogage et le développement.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Bonnes pratiques <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            L&apos;utilisation de <code>useDebugValue</code> présente plusieurs bonnes pratiques :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5 text-center">
          <br></br>
            <li>Utiliser <code>useDebugValue</code> uniquement dans les hooks personnalisés.</li>
            <br></br>
            <li>Fournir des informations concises et claires pour faciliter le débogage.</li>
            <br></br>
            <li>Éviter d&apos;exécuter des opérations coûteuses ou complexes dans <code>useDebugValue</code> car elles peuvent affecter les performances.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useLayoutEffect" className="text-blue-500 hover:underline">Article Précédent : useLayoutEffect</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
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

export default UseDebugValueHook;
