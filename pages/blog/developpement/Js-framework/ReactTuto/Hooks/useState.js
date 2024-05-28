import React from "react";
import Head from "next/head";
import { AiOutlineCode, AiOutlineHighlight } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import NavBlog from "../../../../../../components/NavBlog";
import Link from "next/link";
const UseStateHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");
  const [typedCode3, setTypedCode3] = React.useState("");

  const codeSnippetBasic = `
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

  const codeSnippetInitialValue = `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
`;

  const codeSnippetComplexState = `
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default Form;
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
        for (let i = 0; i <= codeSnippetInitialValue.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode2(codeSnippetInitialValue.slice(0, i));
        }
      };
      type();
    }
  }, [inView2, codeSnippetInitialValue]);

  React.useEffect(() => {
    if (inView3) {
      const type = async () => {
        for (let i = 0; i <= codeSnippetComplexState.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode3(codeSnippetComplexState.slice(0, i));
        }
      };
      type();
    }
  }, [inView3, codeSnippetComplexState]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>React Hook: useState | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useState de React pour gérer l'état dans vos composants fonctionnels." />
        <meta name="keywords" content="React, useState, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useState" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useState<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useState</code> permet d&apos;ajouter l&apos;état local à vos composants fonctionnels. Il renvoie une paire : la valeur de l&apos;état actuel et une fonction pour la mettre à jour. Voici comment l&apos;utiliser dans un composant simple.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base où nous utilisons <code>useState</code> pour gérer un compteur. Cliquez sur le bouton pour incrémenter la valeur du compteur.
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
            Valeur initiale <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Vous pouvez définir une valeur initiale pour l&apos;état en passant cette valeur à <code>useState</code>. Dans cet exemple, le compteur commence à 10.
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
            État complexe <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            L&apos;état peut également être un objet ou un tableau. Voici un exemple où nous gérons les données d&apos;un formulaire avec un objet comme état.
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
          <p className="text-lg lg:text-xl text-center">
            Dans cet exemple, nous utilisons un objet pour gérer les champs du formulaire. La fonction <code>handleChange</code> met à jour l&apos;état en fonction du champ modifié.
          </p>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Remarques importantes <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <ul className="text-lg lg:text-xl list-disc pl-5">
            <br></br>
            <li><code>useState</code> peut être appelé plusieurs fois dans le même composant pour gérer des états indépendants.</li><br></br>
            <li>La fonction de mise à jour fournie par <code>useState</code> remplace complètement l&apos;état actuel par la nouvelle valeur.</li><br></br>
            <li>Utilisez une fonction de mise à jour basée sur l&apos;état précédent pour les mises à jour dépendantes de l&apos;état actuel.</li>
          </ul>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
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
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseStateHook;
