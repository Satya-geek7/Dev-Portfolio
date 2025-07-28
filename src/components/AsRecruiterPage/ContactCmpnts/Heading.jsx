import React from "react";
import { motion } from "framer-motion";

const Heading = () => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center items-center">
        <section className="space-y-5 gap-y-2 flex justify-center flex-col items-center">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent py-4">
            Let's Build Something Great Together!
          </h1>
          <p className="text-gray-300 lg:text-lg text-small md:text-xl sm:text-base px-5">
            Whether you have a question or opportunity in mind, feel free to
            reach out. I will appereciate every effort from you. My inbox is
            always open. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vel necessitatibus quibusdam assumenda nulla similique!
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Heading;
