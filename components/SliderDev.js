import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs, FaReact, FaAngular } from "react-icons/fa";

const SliderDev1 = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <motion.div
                className="relative lg:hidden min-w-[70%] h-20 bg-gray-800 rounded-xl border-2 hover:border-accent"
                whileHover={{ width: "80%" }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <motion.div
                    className="z-10 w-full h-full flex flex-col gap-2 items-center justify-center "
                >
                    <motion.h2 className="text-xl relative text-white">
                        F R A M E W O R K<span className="text-accent"> .</span> J S
                    </motion.h2>

                    <div className="relative w-full h-12">
                        <motion.div
                            className="absolute top-[10%] left-[12%]"
                            animate={hovered ? { top: '10%', left: '80%', scale: 1.2 } : { top: '10%', left: '12%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaVuejs className="text-green-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[34%]"
                            animate={hovered ? { top: '10%', left: '58%', scale: 1.2 } : { top: '10%', left: '34%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaReact className="size-8 text-blue-400" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[58%]"
                            animate={hovered ? { top: '10%', left: '34%', scale: 1.2 } : { top: '10%', left: '58%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaAngular className="size-8 text-red-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[10%] left-[80%]"
                            animate={hovered ? { top: '10%', left: '12%', scale: 1.2 } : { top: '10%', left: '80%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <SiNextdotjs className="size-8 text-black" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            {/* Ce div sera visible uniquement sur les écrans LG et XL */}
            <motion.div
                className="hidden relative lg:flex justify-center items-center min-w-[60%] h-28 group px-8 bg-gray-800 rounded-xl border-2 hover:border-accent"
                whileHover={{ width: "70%" }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <motion.div className="z-10 flex flex-col gap-2">
                    <motion.h2 className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 ease-in-out">
                        F R A M E W O R K / J S<span className="text-accent">.</span>
                    </motion.h2>

                    <div className="relative w-full h-12">
                        <motion.div
                            className="absolute top-[25%] left-[12%]"
                            animate={hovered ? { top: '25%', left: '80%', scale: 1.2 } : { top: '25%', left: '12%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaVuejs className="size-10 text-green-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[34%]"
                            animate={hovered ? { top: '25%', left: '58%', scale: 1.2 } : { top: '25%', left: '34%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaReact className="size-10 text-blue-400" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[58%]"
                            animate={hovered ? { top: '25%', left: '34%', scale: 1.2 } : { top: '25%', left: '58%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaAngular className="size-10 text-red-600" />
                        </motion.div>
                        <motion.div
                            className="absolute top-[25%] left-[80%]"
                            animate={hovered ? { top: '25%', left: '12%', scale: 1.2 } : { top: '25%', left: '80%' }}
                            transition={{ duration: 0.6 }}
                        >
                            <SiNextdotjs className="size-10 text-black" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}


export default SliderDev1;
