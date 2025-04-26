// components/AnimatedSection.tsx
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AnimatedSection: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }} // only animate once, when 30% in view
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
