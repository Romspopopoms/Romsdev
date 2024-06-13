import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaAngular } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineFileText, AiOutlineHighlight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import NavBlog from '../../../../../../components/NavBlog';

const codeSnippet = `
import { createAction, createReducer, on, props } from '@ngrx/store';

// Actions
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset', props<{ count: number }>());

// Initial State
export const initialState = 0;

// Reducer
const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, (state, { count }) => count)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
`;

const StateManagementWithNgRx = () => {
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
        <title>Gestion d&apos;État avec NgRx | RomsDev</title>
        <meta name="description" content="Découvrez comment utiliser NgRx pour gérer l'état dans votre application Angular." />
        <meta name="keywords" content="Angular, NgRx, gestion d'état, développement web, JavaScript" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularTuto/NgRx" />
      </Head>

      <NavBlog />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gestion d&apos;État avec NgRx<span className="text-accent">.</span>
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
            NgRx est une bibliothèque pour Angular qui fournit des outils pour gérer l&apos;état de manière réactive en utilisant le pattern Redux. Dans cet article, nous allons explorer comment configurer NgRx et l&apos;utiliser pour gérer l&apos;état de votre application.
          </p>
        </motion.section>

        <motion.section
          className="mb-24 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Configuration de NgRx <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Pour commencer à utiliser NgRx, vous devez l&apos;installer dans votre projet Angular. Utilisez la commande suivante pour installer les packages nécessaires :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`ng add @ngrx/store@latest
ng add @ngrx/effects@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/entity@latest`}
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
            Actions <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les actions sont des objets simples qui décrivent une intention de changement d&apos;état. Elles contiennent généralement un type et des données supplémentaires nécessaires pour effectuer l&apos;action.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de définition d&apos;actions avec NgRx :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset', props<{ count: number }>());
`}
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
            Réducteurs <span className="text-accent"><AiOutlineCode className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les réducteurs (reducers) spécifient comment l&apos;état de l&apos;application change en réponse aux actions. Un réducteur est une fonction pure qui prend l&apos;état actuel et une action, et retourne un nouvel état.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de définition d&apos;un réducteur avec NgRx :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, (state, { count }) => count)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
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
            Sélecteurs <span className="text-accent"><AiOutlineFileText className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les sélecteurs sont des fonctions qui permettent de lire une partie de l&apos;état global de l&apos;application. Ils sont utilisés pour obtenir des données du store de manière performante.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de définition d&apos;un sélecteur avec NgRx :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.count
);`}
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
            Effets <span className="text-accent"><FaAngular className="inline-block ml-2" /></span>
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Les effets permettent de gérer des opérations asynchrones telles que les requêtes HTTP en dehors des réducteurs, en utilisant les actions pour interagir avec le store.
          </p>
          <p className="text-lg lg:text-xl text-center mt-8">
            Exemple de définition d&apos;un effet avec NgRx :
          </p>
          <motion.pre
            className="bg-gray-800 p-4 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <code>
              {`import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as fromActions from './actions';

@Injectable()
export class AppEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadItems),
    mergeMap(() => this.http.get('/api/items')
      .pipe(
        map(items => fromActions.loadItemsSuccess({ items })),
        catchError(() => of(fromActions.loadItemsFailure()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
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
            NgRx fournit un ensemble puissant d&apos;outils pour gérer l&apos;état de votre application Angular de manière réactive et maintenable. En utilisant des actions, des réducteurs, des sélecteurs et des effets, vous pouvez créer des applications Angular robustes et évolutives.
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
              <li><Link href="/blog/developpement/Js-framework/AngularTuto/Tests" className="text-blue-500 hover:underline">Article Suivant : Tests et Debugging</Link></li>
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

export default StateManagementWithNgRx;
