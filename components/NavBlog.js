import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import NavBlogData from "./NavBlogData";
import { FaArrowLeft, FaArrowRight, FaHome, FaCode, FaDatabase, FaShieldAlt, FaCloud, FaBrain, FaPalette, FaBriefcase, FaChartLine, FaJs, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="relative">
      {/* Bouton de menu */}
      <motion.button
        onClick={() => SetOpenMenu(!OpenMenu)}
        className={`fixed top-24 text-white z-50 ${OpenMenu ? 'left-[75%] xl:left-[100%]' : 'left-6'}`}
      >
        {OpenMenu ? <FaArrowLeft className="text-2xl" /> : <FaArrowRight className="text-2xl" />}
      </motion.button>

      {/* Menu pour les écrans non-XL */}
      <div ref={menuRef} className={`xl:hidden grid mt-20 h-full w-full fixed left-0 top-0 p-2 bg-gray-900 transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : '-translate-x-[100%]'} z-40`}>
        <div className="flex flex-col items-center mt-16 space-y-8">
          {NavBlogData.map((item, index) => (
            <div key={index} className="flex items-center justify-center text-white gap-x-8 text-xl hover:text-accent transition-all duration-300 w-full space-y-6 relative">
              {index <= 1 ? (
                <Link href={item.url} passHref>
                  <div className="flex items-center justify-between w-full gap-x-4">
                    <span>{getIconForIndex(index)}</span>
                    <span>{item.title}</span>
                    <span className="text-accent">{getIconForIndex(index)}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <span>{getIconForIndex(index)}</span>
                  <span>🚧 A VENIR 🚧</span>
                  <span className="text-accent">{getIconForIndex(index)}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menu pour les écrans XL */}
      <div className={`hidden xl:flex flex-col h-full mt-20 w-64 fixed left-0 top-3 bg-gray-800 p-6 z-40 transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div className='mt-6 space-y-8'>
          {NavBlogData.map((item, index) => (
            <div key={index} className="flex items-center justify-center text-white gap-x-8 text-xl hover:text-accent transition-all duration-300 w-full space-y-6 relative">
              {index <= 1 ? (
                <Link href={item.url} passHref>
                  <div className="flex items-center justify-between w-full gap-x-4">
                    <span className=" text-accent">{getIconForIndex(index)}</span>
                    <span className={`${OpenMenu ? 'block' : 'hidden'}`}>{item.title}</span>
                    <span>{getIconForIndex(index)}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-between w-full ">
                  <span className="mt-[11.5%] text-accent">{getIconForIndex(index)}</span>
                  <span className={`${OpenMenu ? 'block' : 'hidden'}`}>🚧 A VENIR 🚧</span>
                  <span>{getIconForIndex(index)}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const getIconForIndex = (index) => {
  switch(index) {
    case 0:
      return <FaHome />;
    case 1:
      return <FaJs />;
    // case 2:
    //   return <FaCode />;
    // case 3:
    //   return <FaDatabase />;
    // case 4:
    //   return <FaShieldAlt />;
    // case 5:
    //   return <FaCloud />;
    // case 6:
    //   return <FaBrain />;
    // case 7:
    //   return <FaPalette />;
    // case 8:
    //   return <FaBriefcase />;
    // case 9:
    //   return <FaChartLine />;
    // default:
    //   return <FaArrowRight />;
  }
}

export default NavBlog;
