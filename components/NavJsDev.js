import React, { useState } from "react";
import { FaAngular, FaArrowLeft, FaArrowUp, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";
import React_Banner from "../public/React_Banner.png";
import Link from "next/link";
import { motion } from "framer-motion";

const width = '50%';
const height = '50%';

const NavJsDev = () => {
  const [isReactVisible, setIsReactVisible] = useState(true);
  const [isVueVisible, setIsVueVisible] = useState(false);
  const [isAngularVisible, setIsAngularVisible] = useState(false);
  const [isNextjsVisible, setIsNextjsVisible] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);

  const handleButtonClick = (framework) => {
    setIsReactVisible(framework === 'React');
    setIsVueVisible(framework === 'Vue');
    setIsAngularVisible(framework === 'Angular');
    setIsNextjsVisible(framework === 'Nextjs');
  };

  const slideIn = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 0, opacity: 0 },
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-8 p-4">
      <Link href="/blog/developpement"
        className="absolute top-20 xl:top-[20%] left-[90%] iph:left-[92%] md:left-[95%] lg:left-[96%] xl:left-[26%] h-auto w-full xl:w-auto bg-white/10 rounded-l-full xl:rounded-full p-2"
        onClick={() => setIsRedirected(!isRedirected)}>
        <FaArrowLeft className="size-6 hover:text-accent" />
      </Link>

      <div className="flex flex-col items-center h-auto ">
        <button 
          className=" h-14 w-12 lg:h-28 lg:w-24 flex flex-col items-center justify-center place-self-center rounded-full shadow-lg bg-[#61DBFB] saturate-200 hover:scale-110 border-[#fffffd] border-4 z-10"
          onClick={() => handleButtonClick('React')}>
          <FaReact className="lg:size-12 size-6 text-[#fffffd]" />
          <div className="text-[#fffffd] lg:text-xl">React</div>
        </button>
        {isReactVisible ? (
          <div className="flex justify-center items-center mt-2">
            <FaArrowUp className="text-accent" />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center">
        <button 
          className="h-28 w-24 flex flex-col items-center justify-center place-self-center rounded-full shadow-lg bg-emerald-800 hover:scale-110 border-[#fffffd] border-4 z-10"
          onClick={() => handleButtonClick('Vue')}>
          <FaVuejs className="size-12 text-[#fffffd]" />
          <div className="text-[#fffffd] text-xl">VueJs</div>
        </button>
        {isVueVisible ? (
          <div className="flex justify-center items-center mt-2">
            <FaArrowUp className="text-accent" />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center">
        <button 
          className="h-28 w-24 flex flex-col items-center justify-center place-self-center rounded-full shadow-lg bg-red-500 hover:scale-110 border-[#fffffd] border-4 z-10"
          onClick={() => handleButtonClick('Angular')}>
          <FaAngular className="size-12 text-[#fffffd]" />
          <div className="text-[#fffffd] text-xl">Angular</div>
        </button>
        {isAngularVisible ? (
          <div className="flex justify-center items-center mt-2">
            <FaArrowUp className="text-accent" />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center">
        <button 
          className="h-28 w-24 flex flex-col items-center justify-center place-self-center rounded-full shadow-lg bg-black hover:scale-110 border-[#fffffd] border-4 z-10"
          onClick={() => handleButtonClick('Nextjs')}>
          <SiNextdotjs className="size-12 text-[#fffffd]" />
          <div className="text-[#fffffd] text-xl">NextJs</div>
        </button>
        {isNextjsVisible ? (
          <div className="flex justify-center items-center mt-2">
            <FaArrowUp className="text-accent" />
          </div>
        ) : null}
      </div>

      {isReactVisible && (
        <motion.div 
          className="flex flex-col items-center justify-center w-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideIn}
          transition={{ duration: 0.7, ease: "easeInOut" }}>
          <div className="relative w-full xl:mt-0 lg:mt-12 mt-12 xl:max-w-[50%] max-w-[100%] ">
            <Link href="/blog/developpement/Js-framework/ReactTuto" 
            className="group block">
              <Image src={React_Banner} alt="Bannière React" width={width} height={height} className="object-cover bg-no-repeat z-0 group-hover:scale-110 rounded-md" />
              <h2 className="left-8 xl:left-16 absolute top-[22%] -translate-y-[50%] xl:text-3xl group-hover:scale-110 group-hover:text-accent">Tutoriels et Guides Pratiques<span className="text-accent group-hover:text-white">.</span></h2>
            </Link>
            <div className="h-2 w-auto bg-slate-500"></div>
            <Link href="/blog/developpement/Js-framework/ReactTuto" className="group block relative">
              <Image src={React_Banner} alt="Bannière React" width={width} height={height} className="object-cover bg-no-repeat z-0 rotate-180 group-hover:scale-110 rounded-md" />
              <h1 className="right-8 xl:right-28 absolute top-[50%] -translate-y-[50%] xl:text-3xl group-hover:scale-110 group-hover:text-accent">Projets et Etudes de cas<span className="text-accent group-hover:text-white">.</span></h1>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavJsDev;
