import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = ({ fadeup }) => {
  return (
    <div>
      <motion.div
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Let’s connect and create something remarkable ✨
        </h2>

        <p className="text-gray-400 text-lg max-w-md">
          Whether it’s an opportunity, project, or just a hello — feel free to
          reach out. I'm always open to new conversations.
        </p>

        <div className="flex gap-6 pt-4">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            aria-label="Github Profile"
            whileHover={{ scale: 1.15 }}
            className="text-slate-300 hover:text-white transition-all"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.15 }}
            className="text-slate-300 hover:text-[#0e76a8] transition-all"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            aria-label="Twitter Profile"
            whileHover={{ scale: 1.15 }}
            className="text-slate-300 hover:text-sky-400 transition-all"
          >
            <FaTwitter size={28} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
