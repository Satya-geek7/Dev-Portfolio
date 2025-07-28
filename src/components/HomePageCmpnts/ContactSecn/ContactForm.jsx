import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = ({ fadeup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formEndpoint = "https://formspree.io/f/mblkgvel";

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      toast.success("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send. Try again.");
    }
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
        className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg space-y-5"
      >
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full bg-zinc-900/50 p-4 rounded-md text-white placeholder-gray-400 focus:outline-none"
          variants={fadeup}
          custom={1.2}
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full bg-zinc-900/50 p-4 rounded-md text-white placeholder-gray-400 focus:outline-none"
          variants={fadeup}
          custom={1.4}
        />
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          rows="5"
          className="w-full bg-zinc-900/50 p-4 rounded-md text-white placeholder-gray-400 focus:outline-none"
          variants={fadeup}
          custom={1.6}
        />
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white py-3 px-6 rounded-md transition-all font-semibold disabled:opacity-60"
          variants={fadeup}
          custom={1.8}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
