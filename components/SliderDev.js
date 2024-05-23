import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

const SliderDev = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-full h-full flex flex-col items-center mt-6">
            <motion.div
                className="relative md:flex justify-center items-center min-w-[80%] xl:min-w-[60%] h-40 group "
                whileHover={{ width: "80%" }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <img src="/bg-1.png" className="absolute object-cover w-full h-full rounded-xl" />
                <motion.div
                    className="z-10 flex flex-col gap-2"
                >
                    
                    <motion.h2
                        className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        J A V A S C R I P T / F R A M E W O R K
                    </motion.h2>
                    
                    <div className="relative w-full h-12">
                        <motion.div
                            className="absolute top-[40%] left-[12%]"
                            animate={hovered ? { top: '40%', left: '80%', scale:1.2 } : { top: '40%', left: '12%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaVuejs className="size-12 text-green-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[40%] left-[34%]"
                            animate={hovered ? { top: '40%', left: '58%', scale:1.2 } : { top: '40%', left: '34%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaReact className="size-12 text-blue-400" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[40%] left-[58%]"
                            animate={hovered ? { top: '40%', left: '34%', scale:1.2 } : { top: '40%', left: '58%' }}
                            transition={{duration: 0.6}}
                        >
                            <FaAngular className="size-12 text-red-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[40%] left-[80%]"
                            animate={hovered ? { top: '40%', left: '12%', scale:1.2 } : { top: '40%', left: '80%' }}
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

export default SliderDev;
