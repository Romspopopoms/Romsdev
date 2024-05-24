
import Navblog from "../../../components/NavBlog"
import { motion } from "framer-motion";
import SliderDev1 from "../../../components/SliderDev";
import SliderDev2 from "../../../components/SliderDev2";
import SliderDev3 from "../../../components/SliderDev2";
import SliderDev4 from "../../../components/SliderDev2";
const Developpement = () => {
    
    return (
        <div className="mt-24 flex flex-col items-center justify-center ">
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
            <SliderDev1 />
            <div className="w-full mt-4">
            <SliderDev2 />
            </div>
            <div className="w-full mt-4">
            <SliderDev3 />
            </div>
            <div className="w-full mt-4">
            <SliderDev4 />
            </div>
        </div>
    );
}

export default Developpement;
