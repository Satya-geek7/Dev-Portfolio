import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyHireMe = () => {
  const [isOpen, setisOpen] = useState(null);
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

  const Reasons = [
    {
      key: 1,
      ques: "I am deeply passionate about coding and solving real-world problems.",
      Ans: "With a strong foundation in React and full-stack projects, I can quickly understand challenges and deliver modern, clean UI experiences with optimized performance.",
    },
    {
      key: 2,
      ques: "I am a quick learner and can adapt fast to new technologies.",
      Ans: "In the ever-changing tech world, adaptability is a must. I’ve self-taught various modern stacks and implemented them in industry-style projects.",
    },
    {
      key: 3,
      ques: "I have real project experience and clean code practices.",
      Ans: "I build real-world applications with strong UI/UX, reusable components, animations, and API integrations — ensuring readable and maintainable code.",
    },
    {
      key: 4,
      ques: "I am consistent, reliable, and team-friendly.",
      Ans: "Whether it’s remote or collaborative, I communicate effectively, meet deadlines, and contribute actively with responsibility.",
    },
  ];

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="flex flex-col justify-center items-center gap-6 py-14 px-6">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Why You Should Hire Me?
          </h1>
          {Reasons.map((reason) => (
            <div
              key={reason.key}
              className="border border-white/10 rounded-3xl w-[900px] py-5 text-xl text-gray-300 px-5 transition-all duration-300"
            >
              <div className="flex justify-between font-semibold items-center">
                <span>
                  {reason.key}. {reason.ques}
                </span>
                <span
                  onClick={() =>
                    setisOpen(isOpen === reason.key ? null : reason.key)
                  }
                  className="hover:scale-105 hover:rotate-180 hover:cursor-pointer transition-transform text-2xl"
                >
                  😉
                </span>
              </div>
              {isOpen === reason.key && (
                <div className="font-thin py-6 pl-3 text-xl text-gray-300 transition-all duration-300">
                  {reason.Ans}
                </div>
              )}
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default WhyHireMe;
