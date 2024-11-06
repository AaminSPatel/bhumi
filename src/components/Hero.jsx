import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-cover bg-center"
    style={{ backgroundImage:` url("/public/bg1.jpg")`}} // Replace with actual image URL
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

    {/* Hero Content */}
    <div className="relative z-10 space-y-5 text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide">Hello, I'm Bhumika</h1>
      <p className="text-xl md:text-2xl">MBA Student | Aspiring Business Leader</p>

      {/* Animated CTA Button */}
      <motion.a
        href="#contact"
        className="inline-block px-8 py-3 mt-6 text-lg font-semibold bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </div>

    {/* Background Animation Effect */}
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
    />
  </motion.section>
);

export default Hero;
