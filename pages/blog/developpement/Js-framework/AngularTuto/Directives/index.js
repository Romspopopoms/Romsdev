import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
@Component({
  selector: 'app-example',
  template: \`
    <div *ngIf="isVisible">Now you see me</div>
    <button (click)="toggleVisibility()">Toggle</button>
  \`,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
`;

const DirectivesAngular = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [typedCode, setTypedCode] = React.useState("");

  React.useEffect(() => {
    if (inView) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setTypedCode(codeSnippet.slice(0, i));
        }
      };
      type();
    }
  }, [inView]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto hide-scrollbar text-white bg-gray-900">
      <Head>
        <title>Directives Angular | RomsDev</title>
        <meta name="description" content="Apprenez à utiliser les directives intégrées d'Angular pour manipuler le DOM de manière déclarative." />
        <meta name="keywords" content="Angular, directives, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/Directives" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Directives Angular<span className="text-accent">.</span>
        </motion.h1>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Introduction <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les directives sont des éléments spéciaux dans Angular qui permettent de manipuler le DOM de manière déclarative. Dans cet article, nous allons explorer certaines des directives les plus couramment utilisées dans Angular.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour en savoir plus sur les composants Angular, consultez notre article sur 
            <Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 underline ml-1">les Composants Angular</Link>.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            *ngIf et *ngFor <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La directive <code>*ngIf</code> est utilisée pour conditionnellement rendre un élément ou une composante. Elle est souvent accompagnée de <code>*ngFor</code> pour itérer sur une collection d&apos;éléments.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation de <code>*ngIf</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            ref={ref}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {typedCode}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            *ngFor <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La directive <code>*ngFor</code> est utilisée pour rendre une liste d&apos;éléments en itérant sur une source de données.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation de <code>*ngFor</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            [ngClass] et [ngStyle] <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les directives <code>[ngClass]</code> et <code>[ngStyle]</code> permettent de lier dynamiquement des classes CSS et des styles à vos éléments en fonction de conditions.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation de <code>[ngClass]</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<div [ngClass]="{'active': isActive, 'disabled': !isActive}">
  This div's classes depend on isActive
</div>`}
            </code>
          </motion.pre>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation de <code>[ngStyle]</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<div [ngStyle]="{'font-size.px': fontSize, 'color': color}">
  This div's styles depend on fontSize and color
</div>`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            (click) <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            La directive <code>(click)</code> est utilisée pour écouter des événements de clic et exécuter des méthodes lorsqu&apos;ils se produisent.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple d&apos;utilisation de <code>(click)</code> :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`<button (click)="sayHello()">Click me</button>

...

sayHello() {
  alert('Hello!');
}`}
            </code>
          </motion.pre>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Conclusion <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les directives Angular sont des outils puissants pour manipuler le DOM de manière déclarative. En comprenant comment utiliser ces directives, vous pouvez créer des applications Angular plus dynamiques et interactives.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Navigation <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Etat-Reactif" className="text-blue-500 hover:underline">Article Suivant : État Reactif</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Etat-Reactif" className="text-blue-500 hover:underline">Gestion de l&apos;État Reactif avec Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 hover:underline">Composants en Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/NgRx" className="text-blue-500 hover:underline">Gestion d&apos;État avec NgRx</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Tests" className="text-blue-500 hover:underline">Tests et Debugging en Angular</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default DirectivesAngular;
