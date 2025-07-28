import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactWay = () => {
  const [expandedKey, setExpandedKey] = useState(null);

  const Links = [
    {
      key: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/satya-prakash-behera007",
    },
    {
      key: 2,
      name: "GitHub",
      link: "https://github.com/Satya-geek7",
    },
    {
      key: 3,
      name: "Email",
      link: "the.satyabehera@gmail.com",
    },
    {
      key: 4,
      name: "Twitter / X",
      link: "To be Added",
    },
  ];

  const handleToggle = (key) => {
    setExpandedKey(expandedKey === key ? null : key);
  };

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
      <div className="w-full flex justify-center py-12 px-4 text-white">
        <section className="w-full max-w-md flex flex-col gap-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-4">
            Get in Touch
          </h1>

          {Links.map((link) => (
            <div
              key={link.key}
              onClick={() => handleToggle(link.key)}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-xl font-semibold">{link.name}</div>
              {expandedKey === link.key && (
                <div className="mt-2 text-sm text-blue-400 break-all">
                  {link.name === "Email" ? (
                    <a href={`mailto:${link.link}`}>{link.link}</a>
                  ) : link.link.startsWith("http") ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.link}
                    </a>
                  ) : (
                    link.link
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default ContactWay;
