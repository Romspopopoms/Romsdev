import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaHome, FaFolderOpen, FaCode, FaPalette, FaCloudUploadAlt, FaStickyNote } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../components/NavBlog';
import { AiOutlineHighlight, AiOutlineCode } from 'react-icons/ai';

const sections = [
  { title: "Introduction", icon: <FaHome />, link: "#introduction" },
  { title: "Configuration du Projet", icon: <FaFolderOpen />, link: "#setup" },
  { title: "Structure des Dossiers et Fichiers", icon: <FaCode />, link: "#structure" },
  { title: "Création des Composants", icon: <FaCode />, link: "#components" },
  { title: "Ajout de Style", icon: <FaPalette />, link: "#styling" },
  { title: "Déploiement de l'Application", icon: <FaCloudUploadAlt />, link: "#deployment" },
];

const NotesAppGuide = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.5 });

  const [typedCode1, setTypedCode1] = React.useState("");
  const [typedCode2, setTypedCode2] = React.useState("");
  const [typedCode3, setTypedCode3] = React.useState("");
  const [typedCode4, setTypedCode4] = React.useState("");
  const [typedCode5, setTypedCode5] = React.useState("");
  const [typedCode6, setTypedCode6] = React.useState("");

  const codeSnippet1 = `
ng new my-notes-app
  `;
  
  const codeSnippet2 = `
cd my-notes-app
ng serve
  `;
  
  const codeSnippet3 = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: \`
    <div>
      <h1>Notes App</h1>
      <input [(ngModel)]="input" placeholder="Add a note" />
      <button (click)="addNote()">Add</button>
      <ul>
        <li *ngFor="let note of notes">{{ note }}</li>
      </ul>
    </div>
  \`
})
export class NotesComponent {
  notes: string[] = [];
  input: string = '';

  addNote() {
    if (this.input) {
      this.notes.push(this.input);
      this.input = '';
    }
  }
}
  `;
  
  const codeSnippet4 = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: \`
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-3xl">Notes App</h1>
    </header>
  \`,
  styles: [\`
    header {
      text-align: center;
    }
  \`]
})
export class HeaderComponent {}
  `;
  
  const codeSnippet5 = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `;
  
  const codeSnippet6 = `
/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
}
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

  React.useEffect(() => {
    if (inView3) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet3.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode3(codeSnippet3.slice(0, i));
        }
      };
      type();
    }
  }, [inView3, codeSnippet3]);

  React.useEffect(() => {
    if (inView4) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet4.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode4(codeSnippet4.slice(0, i));
        }
      };
      type();
    }
  }, [inView4, codeSnippet4]);

  React.useEffect(() => {
    if (inView5) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet5.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode5(codeSnippet5.slice(0, i));
        }
      };
      type();
    }
  }, [inView5, codeSnippet5]);

  React.useEffect(() => {
    if (inView6) {
      const type = async () => {
        for (let i = 0; i <= codeSnippet6.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setTypedCode6(codeSnippet6.slice(0, i));
        }
      };
      type();
    }
  }, [inView6, codeSnippet6]);

  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Créer une Application de Notes avec Angular | RomsDev</title>
        <meta name="description" content="Suivez ce guide pas à pas pour créer votre propre application de Notes en utilisant Angular." />
        <meta name="keywords" content="Angular, notes, tutoriel, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularProjects/notes-app" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">Créer une Application de Notes avec Angular<span className="text-accent">.</span></h1>

        <nav className="w-full md:w-3/4 lg:w-2/3 mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <li key={index} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <Link href={section.link} className="flex items-center space-x-2 text-white hover:underline hover:text-accent">
                  {section.icon}
                  <span>{section.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section id="introduction" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Introduction <span className="text-accent"><FaHome className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Dans ce tutoriel, nous allons créer une application de Notes en utilisant Angular. Ce guide détaillé vous accompagnera étape par étape pour configurer votre projet, structurer vos dossiers, créer vos composants, ajouter du style et déployer votre application de Notes en ligne.
          </p>
        </section>

        <section id="setup" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Configuration du Projet <span className="text-accent"><FaFolderOpen className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Commençons par la configuration de notre projet. Suivez ces étapes pour installer Node.js, créer une application Angular avec Angular CLI, et préparer votre environnement de développement.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Étape 1 : Installer Node.js et npm</h3>
          <p className="text-lg mb-4">
            Téléchargez et installez Node.js depuis le site officiel <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nodejs.org</a>. npm, le gestionnaire de paquets de Node, sera installé automatiquement avec Node.js.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Étape 2 : Créer une Application Angular</h3>
          <p className="text-lg mb-4">
            Utilisez Angular CLI pour créer une nouvelle application Angular en exécutant la commande suivante dans votre terminal :
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref1}
            >
              <code className="text-white">{typedCode1}</code>
            </pre>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Étape 3 : Démarrer le Serveur de Développement</h3>
          <p className="text-lg mb-4">
            Naviguez dans le répertoire de votre application et démarrez le serveur de développement avec les commandes suivantes :
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref2}
            >
              <code className="text-white">{typedCode2}</code>
            </pre>
          </div>
        </section>

        <section id="structure" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Structure des Dossiers et Fichiers <span className="text-accent"><FaCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Voici la structure de base des dossiers et fichiers dans un projet Angular. Organisez votre projet de manière à ce que vos composants, styles et autres ressources soient bien structurés et faciles à trouver.
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref3}
            >
              <code className="text-white">
{`
my-notes-app/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.css
│   │   │   ├── notes/
│   │   │   │   ├── notes.component.ts
│   │   │   │   ├── notes.component.html
│   │   │   │   ├── notes.component.css
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│   ├── styles.css
│   ├── index.html
├── .gitignore
├── angular.json
├── package.json
├── README.md
`}
              </code>
            </pre>
          </div>
        </section>

        <section id="components" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Création des Composants <span className="text-accent"><FaCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Nous allons maintenant créer les composants de base de notre application de Notes, y compris le Header, NotesApp et App.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Composant NotesApp</h3>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref4}
            >
              <code className="text-white">{typedCode3}</code>
            </pre>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Composant Header</h3>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref5}
            >
              <code className="text-white">{typedCode4}</code>
            </pre>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Composant App</h3>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref6}
            >
              <code className="text-white">{typedCode5}</code>
            </pre>
          </div>
        </section>

        <section id="styling" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Ajout de Style <span className="text-accent"><FaPalette className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Nous allons maintenant ajouter du style à notre application de Notes pour la rendre visuellement attrayante. Utilisez des frameworks CSS comme Tailwind CSS ou créez vos propres styles CSS.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Styles CSS Personnalisés</h3>
          <p className="text-lg mb-4">
            Ajoutez les styles suivants à votre fichier <code>styles.css</code> pour styliser votre application de Notes :
          </p>
          <div className="bg-gray-600 p-4 rounded-lg mb-4 mt-4">
            <pre
              className="bg-gray-500 p-4 rounded overflow-x-auto"
              style={{ whiteSpace: 'pre-wrap' }}
              ref={ref6}
            >
              <code className="text-white">{typedCode6}</code>
            </pre>
          </div>
        </section>

        <section id="deployment" className="mb-24 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Déploiement de l&apos;Application <span className="text-accent"><FaCloudUploadAlt className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center mb-8">
            Enfin, nous allons déployer notre application de Notes en ligne en utilisant un service de déploiement comme Vercel ou Netlify.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Déploiement avec Vercel</h3>
          <p className="text-lg mb-4">
            Inscrivez-vous sur <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Vercel</a> et suivez les étapes pour déployer votre application Angular.
          </p>
        </section>

        <section
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
              <li><Link href="/blog/developpement/Js-framework/AngularProjects/calendar" className="text-blue-500 hover:underline">Projet Précédent : Application Calendrier avec Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Gestion-des-Etats" className="text-blue-500 hover:underline">Gestion des États avec Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Les-Cycles-de-vie" className="text-blue-500 hover:underline">Les Cycles de Vie</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Services" className="text-blue-500 hover:underline">Services en Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Directives" className="text-blue-500 hover:underline">Directives en Angular</Link></li>
            </ul>
          </div>
        </section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default NotesAppGuide;
