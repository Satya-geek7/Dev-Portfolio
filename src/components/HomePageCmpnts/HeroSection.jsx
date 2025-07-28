import React from "react";
import { motion } from "framer-motion";
import TypingText from "../IndvCmpnts/TypingText";
import Para from "../IndvCmpnts/SlidingParas";

const heroSeccontent1 =
  "Crafting performant and scalable frontends with modern frameworks like React, TailwindCSS, and Node.js.";
const heroSeccontent2 =
  "Passionate about clean UI/UX, animations, and transforming ideas into smooth digital experiences.";

const HeroSection = ({ onScroll }) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 text-white relative overflow-hidden ">
      <div className="w-full max-w-6xl">
        <div className="relative z-10 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Satya Prakash Behera
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300"
          >
            <TypingText />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-5 text-gray-400 max-w-3xl"
          >
            <Para mt="0" content={heroSeccontent1} />
            <Para mt="0" content={heroSeccontent2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 flex gap-4"
          >
            <a
            href="#skills"
              onClick={() => onScroll("skills")}
              className="px-5 py-3 border border-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 cursor-pointer"
            >
              Skills Section
            </a>
            <a
            href="#about"
              onClick={() => onScroll("about")}
              className="px-5 py-3 border border-cyan-500 text-white rounded-md hover:bg-cyan-600 transition duration-300 cursor-pointer"
            >
              About Me
            </a>
            <a
            href="#contact"
              onClick={() => onScroll("contact")}
              className="px-5 py-3 border border-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
