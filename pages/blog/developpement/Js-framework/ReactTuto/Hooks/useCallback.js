import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseCallbackHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");

  const codeSnippet1 = `
import React, { useState, useCallback } from 'react';

// Composant enfant qui reçoit une fonction en prop
const ExpensiveCalculation = React.memo(({ calculate }) => {
  console.log('Rendering ExpensiveCalculation');
  return (
    <div>
      <p>Result: {calculate(5)}</p>
    </div>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Utilisation de useCallback pour mémoriser la fonction
  const calculate = useCallback(
    (num) => {
      return num + count;
    },
    [count]
  );

  return (
    <div>
      <h1>useCallback Example</h1>
      <ExpensiveCalculation calculate={calculate} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something..." 
      />
    </div>
  );
};

export default UseCallbackExample;
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
        <title>React Hook: useCallback | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useCallback de React pour optimiser la performance de vos composants." />
        <meta name="keywords" content="React, useCallback, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useCallback" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useCallback<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useCallback</code> est utilisé pour mémoriser une fonction afin qu&apos;elle ne soit recréée que lorsque l&apos;une de ses dépendances change. Cela peut améliorer la performance de votre application en évitant les rendus inutiles de composants enfants.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useCallback</code> pour optimiser un composant qui effectue des calculs coûteux.
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
            Fonctionnement du hook useCallback <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useCallback</code> prend deux arguments : une fonction et un tableau de dépendances. Il retourne une version mémorisée de la fonction qui ne change que si une des dépendances change.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Dans l&apos;exemple ci-dessus, nous utilisons <code>useCallback</code> pour mémoriser la fonction <code>calculate</code>. Cette fonction est passée en tant que prop à un composant enfant. Sans <code>useCallback</code>, la fonction serait recréée à chaque rendu du composant parent, provoquant ainsi un nouveau rendu du composant enfant inutilement.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Optimisation des performances <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useCallback</code> est particulièrement utile dans les cas suivants :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
          <br></br>
            <li>
              Lorsque vous passez des fonctions en tant que props à des composants enfants optimisés avec <code>React.memo</code>.
            </li>
            <br></br>
            <li>
              Lorsque vous avez des fonctions qui sont définies à l&apos;intérieur de composants fonctionnels et qui dépendent de valeurs de l&apos;état ou de props.
            </li>
            <br></br>
          </ul>
          <p className="text-lg lg:text-xl text-center mt-4">
            L&apos;utilisation de <code>useCallback</code> permet de prévenir les rendus inutiles et d&apos;améliorer les performances de l&apos;application, surtout lorsque les composants enfants sont volumineux ou complexes.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation avec React.memo <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour illustrer l&apos;optimisation des performances, combinons <code>useCallback</code> avec <code>React.memo</code>. 
          </p>
          <p className="text-lg lg:text-xl text-center">
            <code>React.memo</code> est une fonction d&apos;ordre supérieur qui mémorise le rendu d&apos;un composant fonctionnel. Si les props n&apos;ont pas changé entre les rendus, React réutilisera le résultat du rendu précédent, économisant ainsi des cycles de rendu.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Dans notre exemple précédent, nous avons utilisé <code>React.memo</code> pour mémoriser le composant <code>ExpensiveCalculation</code> :
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre className="bg-gray-500 p-4 rounded overflow-x-auto">
              <code>
                {`
const ExpensiveCalculation = React.memo(({ calculate }) => {
  console.log('Rendering ExpensiveCalculation');
  return (
    <div>
      <p>Result: {calculate(5)}</p>
    </div>
  );
});
                `}
              </code>
            </pre>
          </div>
          <p className="text-lg lg:text-xl text-center">
            Cette optimisation garantit que le composant <code>ExpensiveCalculation</code> ne se rendra que lorsque la fonction <code>calculate</code> change, ce qui est contrôlé par <code>useCallback</code>.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useMemo" className="text-blue-500 hover:underline">Article Suivant : useMemo</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useMemo" className="text-blue-500 hover:underline">useMemo</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">useEffect</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseCallbackHook;
