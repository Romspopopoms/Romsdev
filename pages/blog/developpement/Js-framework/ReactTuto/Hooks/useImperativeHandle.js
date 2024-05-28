import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const UseImperativeHandleHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");

  const codeSnippet1 = `
import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} type="text" />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
};

export default ParentComponent;
`;

  const codeSnippet2 = `
import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => {
      setCount(count + 1);
    },
    reset: () => {
      setCount(0);
    }
  }));

  return <div>Count: {count}</div>;
});

const ParentComponent = () => {
  const counterRef = useRef();

  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current.increment()}>Increment</button>
      <button onClick={() => counterRef.current.reset()}>Reset</button>
    </div>
  );
};

export default ParentComponent;
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
        <title>React Hook: useImperativeHandle | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useImperativeHandle de React pour personnaliser la manipulation d'une ref." />
        <meta name="keywords" content="React, useImperativeHandle, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useImperativeHandle" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useImperativeHandle<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useImperativeHandle</code> permet de personnaliser la valeur de la ref exposée lorsqu&apos;un composant est utilisé avec <code>forwardRef</code>. Cela peut être utile lorsque vous souhaitez que votre composant enfant expose uniquement certaines méthodes à son parent.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useImperativeHandle</code> pour exposer des méthodes personnalisées à un composant parent.
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
            Voici un exemple plus avancé de l&apos;utilisation de <code>useImperativeHandle</code> pour gérer un compteur avec des méthodes personnalisées.
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
            Utilisation de useImperativeHandle <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useImperativeHandle</code> peut être utilisé dans plusieurs cas :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
            <br></br>
            <li>Personnaliser la valeur de la ref exposée par un composant enfant.</li>
            <br></br>
            <li>Restreindre l&apos;accès à certaines méthodes d&apos;un composant enfant.</li>
            <br></br>
            <li>Fournir une interface plus intuitive pour manipuler un composant complexe.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Avantages et bonnes pratiques <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            L&apos;utilisation de <code>useImperativeHandle</code> présente plusieurs avantages :
          </p>
          <ul className="text-lg lg:text-xl list-disc pl-5">
          <br></br>
            <li>Améliore l&apos;encapsulation en restreignant l&apos;accès direct à des méthodes spécifiques.</li>
            <br></br>
            <li>Facilite la gestion de composants complexes en fournissant une interface claire et définie.</li>
            <br></br>
            <li>Permet de mieux contrôler l&apos;interaction entre les composants parents et enfants.</li>
          </ul>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useRef" className="text-blue-500 hover:underline">Article Précédent : useRef</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useLayoutEffect" className="text-blue-500 hover:underline">Article Suivant : useLayoutEffect</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useDebugValue" className="text-blue-500 hover:underline">useDebugValue</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseImperativeHandleHook;
