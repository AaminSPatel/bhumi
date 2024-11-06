import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    id="about"
    className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {/* Image Section */}
    <motion.div
      className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <img
        src="images.jpg" // Replace with actual image URL
        alt="Profile"
        className="object-cover w-full h-full"
      />
    </motion.div>

    {/* Text Section */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-6">
        I am <strong>Bhumika Somani</strong> driven by a passion for strategic management, marketing, and finance.
        With hands-on experience in project management and leadership, I aim to blend theory with practical application.
        My journey so far has equipped me with skills in business analytics and a deep understanding of financial models.
        I’m excited to bring innovative thinking and a strategic approach to the professional world.
      </p>
      <motion.a
        href="#contact"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </div>
  </motion.section>
);

export default About;
