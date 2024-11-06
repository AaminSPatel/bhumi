import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLightbulb, FaChartLine, FaCoins, FaProjectDiagram } from 'react-icons/fa';

const skills = [
  { name: 'Leadership', icon: FaLightbulb, color: 'bg-blue-100 text-blue-700' },
  { name: 'Strategy', icon: FaChartLine, color: 'bg-green-100 text-green-700' },
  { name: 'Marketing', icon: FaLightbulb, color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Finance', icon: FaCoins, color: 'bg-purple-100 text-purple-700' },
  { name: 'Project Management', icon: FaProjectDiagram, color: 'bg-pink-100 text-pink-700' },
];

const certificates = [
  { title: 'Certified Business Analyst', institution: 'Harvard Business School', year: '2022' },
  { title: 'Marketing Strategy Expert', institution: 'Google', year: '2021' },
  { title: 'Financial Management Pro', institution: 'Coursera', year: '2023' },
];

const Skills = () => (
  <motion.section
    id="skills"
    className="p-8 md:p-16"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Certificates Section */}
    <motion.div
      className="mb-12"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{cert.institution} • {cert.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Skills Section */}
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map(skill => (
        <motion.div
          key={skill.name}
          className={`p-6 rounded-lg flex flex-col items-center ${skill.color} transition duration-300`}
          whileHover={{ scale: 1.05 }}
        >
          <skill.icon className="text-3xl mb-2" />
          <span className="text-lg font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
