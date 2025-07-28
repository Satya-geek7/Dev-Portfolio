import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>NotFound❗</title>
        <meta name="description" content="NotFound" />
        <meta name="keywords" content="React, Portfolio, Developer" />
        <meta property="og:title" content="NotFound | SatyaDev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://satyadev/NotFound.com" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col justify-center items-center px-6">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[8rem] md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8 text-center max-w-md"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="transition"
        >
          <Link
            to="/"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium transition-all duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </>
  );
}
