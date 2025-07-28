import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import GlassResume from "./GlassResume"

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

const ResumeSection = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-white max-w-3xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
            My Resume
          </h2>
          <p className="text-gray-300 text-center mb-10 leading-relaxed">
            A detailed snapshot of my frontend journey, skills, experience, projects and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setisOpen(true)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-purple-600/30 transition-all duration-300"
            >
              <Eye size={18} />
              View Resume
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/React-code/src/assets/SatyaPrakashBeheraResume (1).docx"
              download
              className="flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <Download size={18} />
              Download PDF
            </motion.a>
          </div>
        </motion.div>
      </section>

      {isOpen && (
        <GlassResume isOpen={isOpen} onClose={() => setisOpen(false)} />
      )}
    </>
  );
};

export default ResumeSection;
