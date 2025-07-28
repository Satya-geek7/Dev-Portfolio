import React from "react";
import { motion } from "framer-motion";
import Skillsmap from "./Skillsmap";

const Skills = () => {
  
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <div>
      <Skillsmap Variant1={containerVariant} Variant2={itemVariant} />
    </div>
  );
};

export default Skills;
