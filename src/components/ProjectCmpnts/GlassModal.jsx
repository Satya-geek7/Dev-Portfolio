import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlassModal = ({ isOpen, onClose, title, description }) => {
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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 rounded-2xl max-w-lg w-full text-white shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-rose-400">{title}</h2>
            <p className="text-sm">{description}</p>
            <button
              onClick={onClose}
              className="mt-6 px-[17px] py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassModal;
