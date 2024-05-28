import React from "react";
import Link from "next/link";
import { FaReact, FaClipboardList, FaSync, FaTasks, FaCogs, FaVectorSquare, FaClipboardCheck, FaLayerGroup, FaBug } from "react-icons/fa";
import Head from "next/head";
import NavBlog from "../../../../../../components/NavBlog";

const Hooks = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-auto text-white bg-gray-900 hide-scrollbar">
      <Head>
        <title>Les Hooks React | RomsDev</title>
        <meta name="description" content="Découvrez les différents hooks de React et comment les utiliser dans vos projets." />
        <meta name="keywords" content="React, hooks, useState, useEffect, développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework/ReactTuto/Hooks" />
      </Head>

      <NavBlog />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">Les Hooks React<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl lg:text-2xl mb-12">Découvrez les différents hooks de React et comment les utiliser dans vos projets.</p>

        <div className="flex flex-col items-center w-full gap-8 lg:gap-12 p-4">
          {[
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useState", title: "useState", gradient: "from-blue-400 to-blue-600", icon: <FaTasks className="text-blue-300 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useEffect", title: "useEffect", gradient: "from-blue-500 to-blue-700", icon: <FaSync className="text-blue-200 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useContext", title: "useContext", gradient: "from-blue-600 to-blue-800", icon: <FaClipboardList className="text-blue-100 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useReducer", title: "useReducer", gradient: "from-blue-700 to-blue-900", icon: <FaClipboardCheck className="text-blue-100 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useCallback", title: "useCallback", gradient: "from-blue-800 to-blue-900", icon: <FaCogs className="text-blue-100 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useMemo", title: "useMemo", gradient: "from-blue-500 to-blue-700", icon: <FaVectorSquare className="text-blue-200 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useRef", title: "useRef", gradient: "from-blue-400 to-blue-600", icon: <FaLayerGroup className="text-blue-300 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useImperativeHandle", title: "useImperativeHandle", gradient: "from-blue-500 to-blue-700", icon: <FaCogs className="text-blue-200 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useLayoutEffect", title: "useLayoutEffect", gradient: "from-blue-600 to-blue-800", icon: <FaLayerGroup className="text-blue-100 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
            { href: "/blog/developpement/Js-framework/ReactTuto/Hooks/useDebugValue", title: "useDebugValue", gradient: "from-blue-700 to-blue-900", icon: <FaBug className="text-blue-100 size-8 group-hover:rotate-180 transition-transform duration-1000 ease-linear" /> },
          ].map((hook, index) => (
            <Link key={index} href={hook.href} className="relative flex items-center justify-center h-32 lg:h-40 w-4/5 lg:w-3/5 group">
              <div className={`absolute inset-0 bg-gradient-to-r ${hook.gradient} rounded-lg z-0 group-hover:scale-105 transition-transform duration-500 border-2 hover:border-accent`}></div>
              <div className="absolute flex justify-evenly w-full gap-64">
                {hook.icon}
                {hook.icon}
              </div>
              <h2 className="relative z-10 text-center text-white text-xl lg:text-2xl xl:text-3xl">{hook.title}<span className="text-accent">.</span></h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-60 xl:h-40"></div>
    </div>
  );
};

export default Hooks;
