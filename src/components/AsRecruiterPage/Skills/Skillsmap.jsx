import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React.Js" },
  { name: "Redux" },
  { name: "Zustand" },
  { name: "Git & GitHub" },
  { name: "Tailwind CSS" },
  { name: "Framer Motion" },
  { name: "Figma" },
  { name: "Shadcn UI" },
];

const Skillsmap = ({ Variant1, Variant2 }) => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={Variant1}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-14 px-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={Variant2}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative group rounded-xl bg-zinc-900 p-5 text-center border border-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_#6366f1] transition-all duration-300"
          >
            <div className="text-white font-medium text-base tracking-wide">
              {skill.name}
            </div>

            <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skillsmap;
