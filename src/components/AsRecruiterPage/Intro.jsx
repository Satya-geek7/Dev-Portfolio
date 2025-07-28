import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Hey, I'm Open to Opportunities
        </span>{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="lg:text-lg text-small md:text-xl sm:text-base text-gray-300 max-w-2xl"
      >
        I’m a frontend developer who loves building fast, beautiful web apps. I
        craft responsive, modern UIs using React, Tailwind, Framer Motion, and
        more.
      </motion.p>
    </section>
  );
};

export default Intro;
