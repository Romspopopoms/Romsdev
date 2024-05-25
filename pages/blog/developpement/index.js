import React, {useEffect, useRef} from "react";
import Navblog from "../../../components/NavBlog"
import { motion } from "framer-motion";
import SliderDev1 from "../../../components/SliderDev";
import SliderDev2 from "../../../components/SliderDev2";
import SliderDev3 from "../../../components/SliderDev2";
import SliderDev4 from "../../../components/SliderDev2";
import Link from "next/link";
const Developpement = () => {
    
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
          if (contentRef.current) {
            contentRef.current.style.height = `${window.innerHeight}px`;
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className="lg:mt-12 xl:mt-24 mt-24 flex flex-col items-center justify-center ">
            <Navblog />
            <motion.h1 className="h1"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.7, delay:0.8, ease:"easeIn"}}>Développement
            <motion.span className="text-accent"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.7, delay:0.8, ease:"easeIn"}}
            >.
            </motion.span>
            </motion.h1>
            <div className="group w-full">
            <Link href="/blog/developpement/Js-framework">
                <div className="w-full group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
            <SliderDev1 />
                 </div>
                 </Link>
            <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
            <SliderDev2 />
            </div>
            <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
            <SliderDev3 />
            </div>
            <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
            <SliderDev4 />
            </div>
            </div>
        </div>
    );
}

export default Developpement;
