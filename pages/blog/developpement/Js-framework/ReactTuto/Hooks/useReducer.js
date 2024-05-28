import React, { useReducer } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

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

const UseReducerHook = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const codeSnippet = `
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
        <title>React Hook: useReducer | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser le hook useReducer de React pour gérer des états complexes." />
        <meta name="keywords" content="React, useReducer, hooks, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks/useReducer" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">React Hook: useReducer<span className="text-accent">.</span></h1>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useReducer</code> est utilisé pour gérer des états plus complexes dans des composants fonctionnels de React. Il est particulièrement utile lorsque les états de votre application suivent une logique complexe ou dépendent de la précédente valeur de l&apos;état.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Exemple de base <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple de base de l&apos;utilisation de <code>useReducer</code> pour créer un compteur.
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
            Fonctionnement du hook useReducer <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useReducer</code> accepte deux arguments : une fonction réductrice (reducer) et un état initial. La fonction réductrice prend en charge deux paramètres : l&apos;état actuel et une action. Elle retourne un nouvel état basé sur l&apos;action fournie.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Dans l&apos;exemple ci-dessus, la fonction réductrice gère deux types d&apos;actions : <code>increment</code> et <code>decrement</code>. L&apos;état initial est un objet avec une seule propriété <code>count</code> initialisée à 0.
          </p>
        </section>

        <section className="mb-16 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation de useReducer avec des actions complexes <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Le hook <code>useReducer</code> est également utile lorsque vous devez gérer des états qui dépendent de plusieurs actions. Par exemple, imaginons que nous voulons gérer une liste de tâches avec des actions pour ajouter, supprimer et marquer les tâches comme complétées.
          </p>
          <p className="text-lg lg:text-xl text-center">
            Voici un exemple plus complexe :
          </p>

          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre className="bg-gray-500 p-4 rounded overflow-x-auto">
              <code>{`
import React, { useReducer } from 'react';

const initialState = {
  tasks: [],
  taskCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        tasks: [...state.tasks, { text: action.text, completed: false }],
        taskCount: state.taskCount + 1,
      };
    case 'remove':
      return {
        tasks: state.tasks.filter((_, index) => index !== action.index),
        taskCount: state.taskCount - 1,
      };
    case 'toggle':
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, completed: !task.completed } : task
        ),
        taskCount: state.taskCount,
      };
    default:
      throw new Error();
  }
}

const TaskManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => dispatch({ type: 'toggle', index })}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const text = prompt('Enter task:');
          if (text) {
            dispatch({ type: 'add', text });
          }
        }}
      >
        Add Task
      </button>
      <p>Total tasks: {state.taskCount}</p>
    </div>
  );
};

export default TaskManager;
              `}</code>
            </pre>
          </div>
        </section>

        <section className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useCallback" className="text-blue-500 hover:underline">Article Suivant : useCallback</Link></li>
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

export default UseReducerHook;
