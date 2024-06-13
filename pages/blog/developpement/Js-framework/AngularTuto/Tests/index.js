import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "my-app"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });
});
`;

const TestingAndDebuggingWithAngular = () => {
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
        <title>Tests et Débogage avec Angular | RomsDev</title>
        <meta name="description" content="Apprenez à tester et déboguer vos applications Angular efficacement." />
        <meta name="keywords" content="Angular, tests, débogage, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/Tests" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tests et Débogage avec Angular<span className="text-accent">.</span>
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
            Tester et déboguer vos applications Angular est essentiel pour garantir leur bon fonctionnement et leur fiabilité. Dans cet article, nous allons explorer les outils et techniques pour effectuer des tests unitaires et déboguer vos applications Angular.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Tests Unitaires avec Angular <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Angular utilise Jasmine et Karma pour les tests unitaires. Jasmine est un framework de tests pour JavaScript, et Karma est un lanceur de tests.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de tests unitaires pour un composant Angular :
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
            Tests de Composants <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Tester des composants Angular implique de s&apos;assurer qu&apos;ils se comportent correctement et affichent les données comme prévu. Nous pouvons utiliser des spies pour vérifier les interactions avec les services.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de tests de composants avec des spies :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { MyService } from './my-service.service';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let myService: MyService;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent],
      providers: [MyService]
    });

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    myService = TestBed.inject(MyService);
    spy = spyOn(myService, 'getValue').and.returnValue('test value');
  });

  it('should call getValue from MyService', () => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'getValue called');
  });

  it('should display the value', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.value').textContent).toContain('test value');
  });
});`}
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
            Débogage avec les Outils de Développement <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les outils de développement de navigateur, tels que ceux disponibles dans Chrome et Firefox, sont essentiels pour déboguer les applications Angular. Vous pouvez inspecter les éléments, examiner le DOM, surveiller les événements et exécuter du code en temps réel.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Pour déboguer votre application Angular, suivez ces étapes :
          </p>
          <ol className="text-lg lg:text-xl list-decimal pl-8">
            <li>Ouvrez les outils de développement de votre navigateur (F12 ou Ctrl+Shift+I).</li>
            <li>Utilisez l&apos;onglet &apos;Elements&apos; pour inspecter le DOM et voir les styles appliqués.</li>
            <li>Utilisez l&apos;onglet &apos;Console&apos; pour voir les messages de log et les erreurs.</li>
            <li>Utilisez l&apos;onglet &apos;Sources&apos; pour définir des points d&apos;arrêt et exécuter du code pas à pas.</li>
            <li>Utilisez l&apos;onglet &apos;Network&apos; pour surveiller les requêtes réseau et voir les réponses.</li>
          </ol>
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
            Les tests et le débogage sont des aspects cruciaux du développement de logiciels de haute qualité. En utilisant les outils et les techniques décrits dans cet article, vous pouvez vous assurer que vos applications Angular sont robustes et fiables.
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
              <li><Link href="/blog/developpement/Js-framework/AngularTuto" className="text-blue-500 hover:underline">Retour à la Section : Tutoriels de Base</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Articles Connexes <span className="text-accent"><AiOutlineHighlight className="inline-block ml-2" /></span>
            </h2>
            <ul className="list-disc pl-5 lg:mx-8">
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Introduction-Angular" className="text-blue-500 hover:underline">Introduction à Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Composants" className="text-blue-500 hover:underline">Composants en Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Directives" className="text-blue-500 hover:underline">Directives en Angular</Link></li>
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Etat-Reactif" className="text-blue-500 hover:underline">État Reactif en Angular</Link></li>
            </ul>
          </div>
        </motion.section>

        <div className="h-40"></div>
      </div>
    </div>
  );
};

export default TestingAndDebuggingWithAngular;
