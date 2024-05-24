import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import Image from "next/image";
import bg1 from "../public/bg-1.png"
const SliderDev4 = () => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <motion.div className="relative md:hidden min-w-[70%] h-20"
            whileHover={{ width: "80%" }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}>
                <Image src={bg1} alt="background" className="absolute object-cover w-full h-full rounded-xl" />
                
                <motion.div
                    className="z-10 w-full h-full flex flex-col gap-2 items-center justify-center"
                >
                    <motion.h2
                        className="text-xl relative "
                    >
                        F R A M E W O R K<span className="text-accent"> .</span> J S
                    </motion.h2>
                
                <div className="relative w-full h-12">
                        <motion.div
                            className="absolute top-[10%] left-[12%]"
                            animate={hovered ? { top: '10%', left: '80%', scale:1.2 } : { top: '10%', left: '12%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaVuejs className="size-8 text-green-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[34%]"
                            animate={hovered ? { top: '10%', left: '58%', scale:1.2 } : { top: '10%', left: '34%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaReact className="size-8 text-blue-400" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[58%]"
                            animate={hovered ? { top: '10%', left: '34%', scale:1.2 } : { top: '10%', left: '58%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaAngular className="size-8 text-red-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[80%]"
                            animate={hovered ? { top: '10%', left: '12%', scale:1.2 } : { top: '10%', left: '80%' }}
                            transition={{duration: 0.6}}
                            >
                            <SiNextdotjs className="size-8 text-black" />
                        </motion.div>
                    </div>
                </motion.div>
                </motion.div>
            {/* Ce div sera visible uniquement sur les écrans MD et XL */}
            <motion.div
                className="hidden relative md:flex justify-center items-center min-w-[60%] h-36 group px-8 "
                whileHover={{ width: "80%" }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <Image src={bg1} alt="background" className="absolute object-cover w-full h-full rounded-xl" />
                <motion.div
                    className="z-10 flex flex-col gap-2"
                >
                    
                    <motion.h2
                        className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        J A V A S C R I P T / F R A M E W O R K
                    </motion.h2>
                    
                    <div className="hidden md:block relative w-full h-12">
                        <motion.div
                            className="absolute top-[25%] left-[12%]"
                            animate={hovered ? { top: '25%', left: '80%', scale:1.2 } : { top: '25%', left: '12%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaVuejs className="size-12 text-green-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[34%]"
                            animate={hovered ? { top: '25%', left: '58%', scale:1.2 } : { top: '25%', left: '34%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaReact className="size-12 text-blue-400" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[58%]"
                            animate={hovered ? { top: '25%', left: '34%', scale:1.2 } : { top: '25%', left: '58%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaAngular className="size-12 text-red-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[80%]"
                            animate={hovered ? { top: '25%', left: '12%', scale:1.2 } : { top: '25%', left: '80%' }}
                            transition={{duration: 0.6}}
                            >
                            <SiNextdotjs className="size-12 text-black" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SliderDev4;
