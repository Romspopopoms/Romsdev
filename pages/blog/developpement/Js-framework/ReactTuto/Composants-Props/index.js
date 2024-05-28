import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight, AiOutlineFunction } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const ComponentsAndProps = () => {
  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");
  const [typedCode3, setTypedCode3] = React.useState("");

  const codeSnippet1 = `
import React from 'react';

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

export default Welcome;
`;

  const codeSnippet2 = `
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
`;

  const codeSnippet3 = `
import React from 'react';

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
};

const ContactList = () => {
  const contacts = [
    { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
    { name: "Bob", email: "bob@example.com", phone: "098-765-4321" },
    { name: "Charlie", email: "charlie@example.com", phone: "111-222-3333" }
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard key={index} name={contact.name} email={contact.email} phone={contact.phone} />
      ))}
    </div>
  );
};

export default ContactList;
`;

  React.useEffect(() => {
    if (inView1) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet1.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
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
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode2(codeSnippet2.slice(0, i));
        }
      };
      type();
    }
  }, [inView2, codeSnippet2]);

  React.useEffect(() => {
    if (inView3) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet3.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode3(codeSnippet3.slice(0, i));
        }
      };
      type();
    }
  }, [inView3, codeSnippet3]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Composants et Props | RomsDev</title>
        <meta name="description" content="Apprenez les bases des composants et des props en React." />
        <meta name="keywords" content="React, composants, props, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/React-Tuto/Composants-Props" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Composants et Props<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Dans cet article, nous allons explorer les concepts fondamentaux des composants et des props en React. Les composants sont les éléments de base de toute application React, tandis que les props permettent de passer des données et de configurer ces composants.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour en savoir plus sur les différents types de composants, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Les-Cycles-de-vie" className="text-blue-500 underline ml-1">les Cycles de Vie des Composants</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Création de Composants <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les composants en React peuvent être créés en utilisant des fonctions ou des classes. Voici des exemples pour chaque type de composant.
          </p>

          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <h3 className="text-xl font-medium mb-2">Composant Fonctionnel</h3>
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref1}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode1}</code>
            </motion.pre>
          </div>

          <div className="bg-gray-600 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-medium mb-2">Composant de Classe</h3>
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref2}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode2}</code>
            </motion.pre>
          </div>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Utilisation des Props <span className="text-accent"><AiOutlineFunction className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les props sont des paramètres passés aux composants pour les configurer et leur fournir des données. Voici comment utiliser les props dans un composant React.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <motion.pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              ref={ref3}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{typedCode3}</code>
            </motion.pre>
          </div>

          <p className="text-lg lg:text-xl text-center">
            Dans cet exemple, le composant <code>Welcome</code> reçoit une prop <code>name</code> et affiche un message de bienvenue avec cette prop.
          </p>
          <p className="text-lg lg:text-xl text-center mt-4">
            Pour plus d&apos;informations sur l&apos;utilisation des props, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 underline ml-1">les Hooks en React</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Demarrage-React" className="text-blue-500 hover:underline">Article Précédent : Démarrage Rapide avec React</Link></li>
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
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks" className="text-blue-500 hover:underline">Hooks en React</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useState" className="text-blue-500 hover:underline">Hook useState</Link></li>
              <li><Link href="/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect" className="text-blue-500 hover:underline">Hook useEffect</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default ComponentsAndProps;
