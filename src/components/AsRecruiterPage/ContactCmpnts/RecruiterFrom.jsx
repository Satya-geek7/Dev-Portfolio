import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../HomePageCmpnts/ContactSecn/ContactForm";
import Credits from "./Credits";

const RecruiterFrom = () => {
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
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24 relative z-10">
          <section>
            <Credits />
          </section>
          <section>
            <ContactForm />
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default RecruiterFrom;
