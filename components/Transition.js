import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const transitionDirections = [
  { x: "100%", y: 0 },
  { x: "-100%", y: 0 },
  { x: 0, y: "100%" },
  { x: 0, y: "-100%" },
];

const getRandomDirection = () => {
  const randomIndex = Math.floor(Math.random() * transitionDirections.length);
  return transitionDirections[randomIndex];
};

const Transition = ({ children }) => {
  const [direction, setDirection] = useState(getRandomDirection());

  useEffect(() => {
    setDirection(getRandomDirection());
  }, []);

  const inverseDirection = {
    x: direction.x === "100%" ? "-100%" : direction.x === "-100%" ? "100%" : 0,
    y: direction.y === "100%" ? "-100%" : direction.y === "-100%" ? "100%" : 0,
  };

  const transitionVariants = {
    initial: {
      ...direction,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 25,
      },
    },
    exit: {
      ...inverseDirection,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
