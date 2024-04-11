import ServiceSlider from "../../components/ServiceSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"

// Supposons que FadeIn est un objet contenant vos variantes d'animation
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const Services = () => {
  return (
    <motion.div className="h-full bg-primary/30 pt-12 flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}>
      <Circles />
      <div className="container mx-auto flex flex-col xl:flex-row justify-center items-center gap-x-8 gap-y-4">
        <motion.div className="text-center xl:text-left xl:w-[30vw] mb-4 xl:mb-0"
          variants={fadeInVariant}>
          <h2 className="text-2xl md:text-4xl font-bold mt-10">Mes Services <span className="text-accent">.</span></h2>
          <p className="mt-4 max-w-[400px] mx-auto xl:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed efficitur velit vel.
          </p>
        </motion.div>
        <motion.div className="w-full xl:max-w-[65%]" variants={fadeInVariant}>
          <ServiceSlider />
        </motion.div>
      </div>
      <motion.div variants={fadeInVariant}>
        <Bulb />
      </motion.div>
    </motion.div>
  )
};

export default Services;
