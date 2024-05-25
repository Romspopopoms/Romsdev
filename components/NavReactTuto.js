import React from "react";
import Image from "next/image"
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Banniere from "../public/BanniereTuto.png"
import { FaReact } from "react-icons/fa"
import React_Banner from "../public/React_Banner.png";

const NavReactTuto = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex justify-center items-center h-auto w-full">
            <h1 className="h1 text-center">Tutos et Guides React<span className="text-accent">.</span></h1>
            </div>
            <div className="flex flex-col items-center w-full gap-4">
            <Link href="/blog/developpement/Js-framework"
            className="fixed top-20 xl:top-[20%] left-[90%] iph:left-[92%] md:left-[95%] lg:left-[96%] xl:left-[26%] h-auto w-full xl:w-auto bg-white/10 rounded-l-full xl:rounded-full p-2"
            >
            <FaArrowLeft className="size-6 hover:text-accent" />
            </Link>   
            <div className="relative flex items-center justify-center h-[100px] w-[80%] lg:w-[60%]  group">
            <Image src={Banniere} alt="banniereReact" className="bg-cover bg-no-repeat w-full h-full z-0 group-hover:scale-110 rounded-full" />
            <div className="absolute vt:flex justify-evenly w-full gap-20 iph:gap-48 vt:gap-60 hidden ">
            <FaReact className="size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            <FaReact className=" size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            </div>
            <h2 className="absolute text-center text-white text-xl lg:text-2xl xl:text-3xl">Introduction à React<span className="text-accent ">.</span></h2>
            </div>
            
            <div className="relative flex items-center justify-center h-[100px] w-[80%] lg:w-[60%]  group">
            <Image src={Banniere} alt="banniereReact" className="bg-cover bg-no-repeat w-full h-full z-0 group-hover:scale-110 rounded-full" />
            <div className="absolute vt:flex justify-evenly w-full gap-20 iph:gap-48 vt:gap-60 hidden">
            <FaReact className="size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            <FaReact className=" size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            </div>
            <h2 className="absolute text-center text-white text-xl lg:text-2xl xl:text-3xl">Démarrage avec React<span className="text-accent ">.</span></h2>
            </div>

            <div className="relative flex items-center justify-center h-[100px] w-[80%] lg:w-[60%]  group">
            <Image src={Banniere} alt="banniereReact" className="bg-cover bg-no-repeat w-full h-full z-0 group-hover:scale-110 rounded-full" />
            <div className="absolute vt:flex justify-evenly w-full gap-20 iph:gap-48 vt:gap-60 hidden">
            <FaReact className="size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            <FaReact className=" size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            </div>
            <h2 className="absolute text-center text-white text-xl lg:text-2xl xl:text-3xl">Composants et Props<span className="text-accent ">.</span></h2>
            </div>


            <div className="relative flex items-center justify-center h-[100px] w-[80%] lg:w-[60%]  group">
            <Image src={Banniere} alt="banniereReact" className="bg-cover bg-no-repeat w-full h-full z-0 group-hover:scale-110 rounded-full" />
            <div className="absolute vt:flex justify-evenly w-full gap-20 iph:gap-48 vt:gap-60 hidden">
            <FaReact className="size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            <FaReact className=" size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            </div>
            <h2 className="absolute text-center text-white text-xl lg:text-2xl xl:text-3xl">Gestion des États <span className="text-accent ">.</span></h2>
            </div>


            <div className="relative flex items-center justify-center h-[100px] w-[80%] lg:w-[60%] group ">
            <Image src={Banniere} alt="banniereReact" className="bg-cover bg-no-repeat w-full h-full z-0 group-hover:scale-110 rounded-full" />
            <div className="absolute vt:flex justify-evenly w-full gap-20 iph:gap-48 vt:gap-60 hidden">
            <FaReact className="size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            <FaReact className=" size-8 xxl:size-12 text-blue-500 group-hover:rotate-180 group-hover:duration-1000 group-hover:ease-linear" />
            </div>
            <h2 className="absolute text-center text-white text-xl lg:text-2xl xl:text-3xl">Les Cycles de Vie<span className="text-accent ">.</span></h2>
            </div>

            </div>
            <div className="h-60 xl:h-40 "></div>
        </div>
    )
}

export default NavReactTuto