import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => (
  <motion.section
    id="contact"
    className="p-8 md:p-16 text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Me</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Let’s connect! I’d love to hear from you. Feel free to send a message below.
    </p>
    <form className="flex flex-col items-center space-y-6 w-full">
      <div className="relative w-full md:w-2/3">
        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <input
          type="email"
          placeholder="Your Email"
          className="pl-12 w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-shadow duration-300 shadow-sm dark:bg-gray-900 dark:text-gray-100"
        />
      </div>
      <div className="relative w-full md:w-2/3">
        <textarea
          placeholder="Your Message"
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-shadow duration-300 shadow-sm dark:bg-gray-900 dark:text-gray-100 h-32"
        />
      </div>
      <button
        type="submit"
        className="flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        <FaPaperPlane className="mr-2" /> Send Message
      </button>
    </form>
  </motion.section>
);

export default Contact;
