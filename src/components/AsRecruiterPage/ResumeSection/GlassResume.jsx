import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GlassResume = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl w-[90%] max-w-4xl h-[90vh] p-4 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white"
            >
              <X size={20} />
            </button>

            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassResume;
