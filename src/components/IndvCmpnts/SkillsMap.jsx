import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "React.Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Zustand",
    textOnly: true,
    color: "#8dd3bb",
  },
  {
    name: "Git & GitHub",
    iconClass: "devicon-github-original",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Framer Motion",
    iconClass: "devicon-framermotion-original",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Shadcn UI",
    custom: (
      <p className="text-xl font-semibold text-white">
        shad<span className="text-rose-500">cn</span>
        <span className="text-gray-400">/ui</span>
      </p>
    ),
  },
];

const SkillsMap = ({ trigger }) => {
  return (
    <div className="w-full">
      <AnimatePresence>
        {trigger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-20 sm:mt-24 lg:mt-28 px-4 sm:px-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-10">
              {skillsData.slice(0, 12).map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="flex flex-col items-center justify-start text-center"
                >
                  {skill.icon && (
                    <img
                      loading="lazy"
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      src={skill.icon}
                      alt={skill.name}
                    />
                  )}

                  {skill.iconClass && (
                    <i
                      className={`${skill.iconClass} text-[48px] sm:text-[64px]`}
                    />
                  )}

                  {skill.textOnly && (
                    <p
                      className="text-base sm:text-lg font-semibold mt-3"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </p>
                  )}

                  {!skill.textOnly && !skill.custom && (
                    <p className="mt-3 text-white font-medium text-base sm:text-lg">
                      {skill.name}
                    </p>
                  )}

                  {skill.custom && <div className="mt-3">{skill.custom}</div>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsMap;
