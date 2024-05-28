import React, { createContext, useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme} className="mt-2 p-2 border rounded">
        Toggle Theme
      </button>
    </div>
  );
};

const UseContextHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const codeSnippet = `
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={\`p-4 \${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}\`}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme} className="mt-2 p-2 border rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};
`;

  React.useEffect(() => {
    if (inView1) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode1(codeSnippet.slice(0, i));
        }
      };
      type();
    }
  }, [inView1, codeSnippet]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>React Hook: useContext | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useContext de React pour partager des valeurs entre les composants." />
        <meta name="keywords" content="React, useContext, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useContext" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useContext<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useContext</code> permet de consommer facilement un contexte React. Un contexte est une façon de partager des valeurs (comme des thèmes, des préférences utilisateur, etc.) entre les composants, sans avoir à passer explicitement les props à travers chaque niveau de l&apos;arborescence des composants.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Création et utilisation d&apos;un Contexte <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici comment créer un contexte, un fournisseur de contexte, et utiliser le contexte dans un composant.
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
            Exemple de Thème <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Dans cet exemple, nous créons un contexte de thème qui permet de basculer entre les thèmes clair et sombre. Le fournisseur de contexte gère l&apos;état du thème et une fonction pour le changer, que les composants enfants peuvent consommer via le hook <code>useContext</code>.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre className="bg-gray-500 p-4 rounded overflow-x-auto">
              <code>{`
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={\`p-4 \${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}\`}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme} className="mt-2 p-2 border rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};
              `}</code>
            </pre>
          </div>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Remarques importantes <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <ul className="text-lg lg:text-xl list-disc pl-5">
            <br></br>
            <li><code>useContext</code> permet d&apos;accéder directement aux valeurs du contexte sans passer par les props.</li>
            <br></br>
            <li>Les valeurs du contexte sont réactives, ce qui signifie que les composants utilisant <code>useContext</code> se mettent à jour lorsque les valeurs du contexte changent.</li>
            <br></br>
            <li>Le contexte est idéal pour les données globales comme les thèmes, les paramètres utilisateur, et les informations d&apos;authentification.</li>
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
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useReducer" className="text-blue-500 hover:underline">useReducer</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">useEffect</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default UseContextHook;
