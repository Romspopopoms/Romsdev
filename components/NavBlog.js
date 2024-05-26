import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import NavBlogData from "./NavBlogData";
import { FaArrowLeft, FaArrowRight, FaHome, FaCode, FaDatabase, FaShieldAlt, FaCloud, FaBrain, FaPalette, FaBriefcase, FaChartLine, FaJs } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBlog = () => {
  const [OpenMenu, SetOpenMenu] = useState(true);
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
      {/* Visible uniquement sur les écrans non-XL */}
      <div ref={menuRef} className={`xl:hidden grid mt-20 h-full w-full fixed left-0 top-0 p-2 bg-gray-900 transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : '-translate-x-[90%]'} z-20`}>
        <motion.button
          onClick={() => SetOpenMenu(!OpenMenu)}
          className="absolute top-4 right-4 text-white"
        >
          {OpenMenu ? <FaArrowLeft className="text-2xl" /> : <FaArrowRight className="text-2xl" />}
        </motion.button>
        <div className="flex flex-col items-center mt-12 space-y-8">
          {NavBlogData.map((item, index) => (
            <Link key={index} href={item.url}>
              <div className="flex items-center justify-between gap-8 text-white text-xl hover:text-accent transition-all duration-300 w-full">
              <span>{getIconForIndex(index)}
                </span>
                <span>{item.title}</span>
                <span className="text-accent">{getIconForIndex(index)}
                </span>
                
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Visible uniquement sur les écrans XL */}
      <div className={`hidden xl:flex flex-col h-full mt-20 w-64 fixed left-0 top-3 bg-gray-800 p-6 z-20 transition-all duration-1000 ease-in-out transform ${OpenMenu ? 'translate-x-0' : '-translate-x-[80%]'}`}>
        <motion.button
          onClick={() => SetOpenMenu(!OpenMenu)}
          className="absolute top-4 right-4 text-white hover:text-accent"
        >
          {OpenMenu ? <FaArrowLeft className="text-2xl" /> : <FaArrowRight className="text-2xl" />}
        </motion.button>
        <div className='mt-12 space-y-8 '>
          {NavBlogData.map((item, index) => (
            <Link key={index} href={item.url}>
              <div className="flex items-center justify-center text-white gap-x-8 space-y-6 text-xl hover:text-accent transition-all duration-300 w-full">
              <span className="mt-[11.5%] text-accent">{getIconForIndex(index)}</span>
                <span className={`${OpenMenu ? 'block' : 'hidden'}`}>
                    {item.title}</span>
                <span c>{getIconForIndex(index)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const getIconForIndex = (index) => {
  switch(index) {
    case 0:
      return <FaJs />;
    case 1:
      return <FaCode />;
    case 2:
      return <FaDatabase />;
    case 3:
      return <FaShieldAlt />;
    case 4:
      return <FaCloud />;
    case 5:
      return <FaBrain />;
    case 6:
      return <FaPalette />;
    case 7:
      return <FaBriefcase />;
    case 8:
      return <FaChartLine />;
    default:
      return <FaArrowRight />;
  }
}

export default NavBlog;
