import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaLaptopCode, FaTasks, FaShoppingCart, FaCalendarAlt, FaBook } from 'react-icons/fa';
import NavBlog from '../../../../../components/NavBlog';

const projects = [
  {
    title: 'Projet 1: Site Portfolio',
    description: 'Créez votre propre site portfolio en utilisant Angular.',
    link: '/blog/developpement/Js-framework/AngularProjects/portfolio',
    icon: <FaLaptopCode size={30} className="text-accent" />,
  },
  {
    title: 'Projet 2: Todo List',
    description: 'Développez une application de gestion de tâches avec Angular.',
    link: '/blog/developpement/Js-framework/AngularProjects/todo-list',
    icon: <FaTasks size={30} className="text-accent" />,
  },
  {
    title: 'Projet 3: Calendrier d\'Événements',
    description: 'Développez un calendrier pour gérer des événements.',
    link: '/blog/developpement/Js-framework/AngularProjects/calendar',
    icon: <FaCalendarAlt size={30} className="text-accent" />,
  },
  {
    title: 'Projet 4: Application de Notes',
    description: 'Créez une application pour prendre et gérer des notes.',
    link: '/blog/developpement/Js-framework/AngularProjects/notes-app',
    icon: <FaBook size={30} className="text-accent" />,
  },
  // Ajoutez plus de projets ici
];

const Projects = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Projets Pas à Pas | RomsDev</title>
        <meta name="description" content="Suivez nos guides pas à pas pour réaliser des projets simples avec Angular." />
        <meta name="keywords" content="Angular, projets, tutoriels, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/AngularProjects" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">Projets Pas à Pas<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Suivez nos guides détaillés pour réaliser des projets simples avec Angular.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              {project.icon}
              <h2 className="text-2xl font-semibold mt-4 mb-4">{project.title}</h2>
              <p className="text-lg mb-4 text-center">{project.description}</p>
              <Link href={project.link} className="text-blue-500 hover:underline">Commencer</Link>
            </div>
          ))}
        </div>
        <div className='h-40'></div>
      </div>
    </div>
  );
};

export default Projects;
