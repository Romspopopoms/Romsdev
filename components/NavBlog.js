import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import NavBlogData from "./NavBlogData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const NavBlog = () => {
    const [OpenMenu, SetOpenMenu] = useState(false);
    const menuRef = useRef();

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            SetOpenMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Ce div sera visible uniquement sur les écrans non-XL */}
            <div ref={menuRef} className={`xl:hidden grid grid-cols-2 h-full w-full fixed left-0 top-16 lg:top-9 p-2 rounded-xl text-center mt-4 pt-12 transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : 'translate-x-[-100%]'} z-20`}>
                <div className="absolute inset-0 z-0">
                    <img src="/BG2.png" alt="background" className=" h-full w-full object-cover" />
                </div>
                <motion.button
                    onClick={() => SetOpenMenu(!OpenMenu)}
                    className="absolute top-0 z-10 bg-[#3de0f2]/20 w-full h-8 rotate-180"
                    initial={{ translateX: 0 }}
                    animate={{ translateX: OpenMenu ? 0 : 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.h2
                        initial={{ translateX: 0 }}
                        animate={{ translateX: OpenMenu ? 0 : -180 }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-semibold text-center"
                    >
                        Menu<span className="text-accent">.</span>
                    </motion.h2>
                    {OpenMenu ? (
                        <FaArrowLeft className="size-6 hover:text-accent absolute right-1 top-1 transition-all duration-1000 z-10" />
                    ) : (
                        <motion.div>
                            <motion.div className="absolute right-[-30px] top-0 bg-[#3de0f2]/10 h-8 w-full rounded-full z-10">
                            </motion.div>
                            <FaArrowRight className="size-6 hover:text-accent absolute right-[-26px] top-1 transition-all duration-1000 z-10" />
                        </motion.div>
                    )}
                </motion.button>
                {OpenMenu && (                
            <div className="relative w-full h-full flex flex-col z-10 mt-14 font-bold hover:text-accent text-xl">
                    <motion.div 
                    className="absolute top-[-16%] sm:left-[98%] left-[95%] translate-x-[50%] text-accent"
                    initial={{ y:50}}
                    animate={{y:[50,60, 60, 50]}}
                    transition={{duration:1.5, repeat:Infinity, ease:"easeInOut", delay:1}}
                    >
                <FaArrowDown />
                </motion.div>

        <div className="relative w-full translate-x-[50%]">Accueil<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">Développement<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">Backend<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">Sécurité<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">Cloud<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">IA<span className="text-accent">.</span></div>
        <div className="relative w-full mt-4 translate-x-[50%]">Design<span className="text-accent">.</span></div>
        <div className="relative w-full translate-x-[50%] mt-4">Carrière<span className="text-accent">.</span></div>
        <div className="relative w-full translate-x-[50%] mt-4">Tendances<span className="text-accent">.</span></div>
    </div>   
)}
            </div>

            {/* Ce div sera visible uniquement sur les écrans XL */}
            <div ref={menuRef} className={`hidden xl:flex flex-col h-full w-64 fixed left-0 bg-white/5 p-6 z-20 rounded-xl xl:gap-y-8 text-center transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : '-translate-x-[80%]'}`}>
                <motion.button
                    onClick={() => SetOpenMenu(!OpenMenu)}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: OpenMenu ? 180 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-2 right-3"
                >
                    {OpenMenu ? (
                        <FaArrowLeft className="size-8 hover:text-accent" />
                    ) : (
                        <FaArrowRight className="size-8 hover:text-accent" />
                    )}
                </motion.button>
                {OpenMenu && NavBlogData.map((item, index) => (
                    <div key={index}>
                        <Link href={item.url}
                             className="text-white hover:text-accent transition-all duration-300">
                                {item.title}
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavBlog;
