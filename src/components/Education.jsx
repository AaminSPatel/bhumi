import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Masters of Business Administration",
    institution: "Harvard University",
    year: "2023 - Present",
    description: "Specialization in Finance and Strategy. Gained in-depth knowledge in corporate finance, strategic management, and marketing analytics.",
  },
  {
    title: "Bachelor of Commerce",
    institution: "University of California",
    year: "2019 - 2023",
    description: "Focused on economics, accounting, and business law. Graduated with honors and active member of the Student Business Association.",
  },
  {
    title: "Intern - Financial Analyst",
    institution: "JP Morgan",
    year: "2022 (Summer)",
    description: "Assisted in financial analysis and prepared quarterly reports. Contributed to investment strategies and learned valuable analytical skills.",
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="p-8 md:p-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <h2 className="text-3xl font-bold mb-8 text-center">Education & Experience</h2>
    
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.institution} • {item.year}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Education;
