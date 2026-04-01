'use client';
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedComponentProps {
  children: React.ReactNode;
}

const animationVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.5,
};

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="whileInView"
      variants={animationVariants}
      transition={transition}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
