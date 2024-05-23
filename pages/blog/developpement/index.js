import NavBlogData from "../../../components/NavBlogData"
import Navblog from "../../../components/NavBlog"
import { motion } from "framer-motion";
import SliderDev from "../../../components/SliderDev";

const Developpement = () => {
    // Trouvez la section "Développement" qui contient les sous-parties
    const developpementSection = NavBlogData.find(section => section.title === "Développement");

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
            <motion.div
            className=" flex flex-col items-center justify-center bg-white/15 min-w-[30%]
            px-6 py-2 rounded-lg"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.7, delay:0.8, ease:"easeIn"}}
            >
            <ul className="md:flex grid grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 text-center">
                {developpementSection && developpementSection.subNav.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} className="text-white hover:text-accent transition-all duration-300 ">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
            </motion.div>
            <SliderDev />
            
        </div>
    );
}

export default Developpement;
