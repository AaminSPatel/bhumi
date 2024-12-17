import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaGraduationCap, FaCode, FaJs, FaHtml5 } from 'react-icons/fa';
import {  FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'skills', 'education', 'contact'];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
     {/*  <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3">
          <motion.ul 
            className="flex justify-center space-x-6"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section) => (
              <motion.li key={section} variants={itemVariants}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`text-lg font-medium ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors duration-300`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>
 */}
 <Header sections={sections} activeSection={activeSection} setActiveSection={setActiveSection}/>
      <main className="pt-12">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <HeroSection key="home" />}
          {activeSection === 'about' && <AboutSection key="about" />}
          {activeSection === 'skills' && <SkillsSection key="skills" />}
          {activeSection === 'education' && <EducationSection key="education" />}
          {activeSection === 'contact' && <ContactSection key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const Header = ({ sections, activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold poppin">Kuldeep Khelwar</div>

        {/* Desktop Menu */}
        <motion.ul 
          className="hidden md:flex justify-center space-x-6"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section) => (
            <motion.li key={section} variants={itemVariants}>
              <button
                onClick={() => setActiveSection(section)}
                className={`text-lg font-medium ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-12 h-64 bg-white z-40 flex flex-col items-center space-y-4 pt-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsOpen(false);
                }}
                className={`text-lg font-medium ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300`}
                variants={itemVariants}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};


const HeroSection = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaEnvelope />, url: '' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 150 +50,
              height: Math.random() * 150 +50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              rotate: [0, 90, 180, 270],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
         
        <motion.div
            className="md:w-1/2  mb-12 md:mb-0 flex items-center justify-center "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="./kul2.png" className='h-72 mt-8 w-72 rounded-full' alt="" />
            <svg
              className="w-full hidden h-auto"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M250,50 C150,50 50,150 50,250 C50,350 150,450 250,450 C350,450 450,350 450,250 C450,150 350,50 250,50 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="250"
                cy="250"
                r="100"
                fill="rgba(255,255,255,0.1)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M250,150 L250,350 M150,250 L350,250"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
            </svg>
          </motion.div>


          <motion.div
            className="md:w-1/2 text-white"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 font-serif"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kuldeep Khelwar
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              B.com + Computer Graduate | Aspiring Wordpress Developer
            </motion.p>
            <motion.div
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{link.url}</span>
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p
                onClick={()=>{ console.log('contact');
                }}
                className="bg-white cursor-pointer text-indigo-600 px-8 py-3 mb-6 rounded-full font-medium hover:bg-indigo-100 transition-colors duration-300 inline-block"
              >
                Get in Touch
              </p>
            </motion.div>
          </motion.div>

         
        </div>
      </div>
    </motion.section>
  );
};

const AboutSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center justify-center bg-white"
  >
    <div className="container mx-auto px-6 py-12">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center font-serif"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="./kul11.png"
          alt="Kuldeep Khelwar"
          className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-12"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-lg mb-6">
          As a WordPress developer with a Bachelor’s degree in Commerce, I combine technical expertise with a solid understanding of business needs. My skills include crafting custom themes, optimizing site performance, and ensuring secure, scalable web solutions. Currently, I am working in a professional role and seeking collaborative opportunities to contribute to innovative digital projects.
         
         </p> <p className="text-lg">
          I am passionate about staying updated with the latest trends in web development and applying creative solutions to complex challenges. My focus is on delivering high-quality, functional websites that resonate with users and achieve client goals. Whether it’s building a portfolio site, optimizing an e-commerce platform, or developing a corporate website, I bring dedication and a results-driven approach to every project.          
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const SkillsSection = () => {
  const skills = [
    { name: 'Responsive Web Design', icon: <FaCode />, color: 'bg-blue-500' },
    { name: 'Web Fundamentals', icon: <FaBriefcase />, color: 'bg-green-500' },
    { name: 'WordPress Theme Development', icon: <FaGraduationCap />, color: 'bg-yellow-500' },
    { name: 'WordPress Plugin Development', icon: <FaCode />, color: 'bg-red-500' },
    { name: 'WooCommerce Development', icon: <FaBriefcase />, color: 'bg-purple-500' },
    { name: 'Theme Customization', icon: <FaGraduationCap />, color: 'bg-indigo-500' },
    { name: 'HTML5 & CSS3', icon: <FaHtml5 />, color: 'bg-yellow-500' },
    { name: 'JavaScript (ES6+)', icon: <FaJs />, color: 'bg-teal-500' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="container mx-auto px-6 py-8">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center font-serif"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
            >
              <div className={`${skill.color} rounded-full p-3 mr-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const EducationSection = () => {
  const experiences = [
    {
      title: 'Bachelor of Commerce + Computer ',
      organization: 'DAVV University, Indore',
      date: '2021 - 2025',
      description: 'Focused on Wordpress Development',
    },
    {
      title: 'WordPress Developer ',
      organization: 'Indifuture technologies Pvt. Ltd.',
      date: '2023 - Present',
      description: 'Worked on WordPress Web Projects, Currantly working on Easyport Logistics Website.',
    },
    /* {
      title: 'Bachelor of Science in Economics',
      organization: 'University of Pennsylvania',
      date: '2016 - 2020',
      description: 'Minor in Computer Science',
    }, */
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-6 py-12">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center font-serif"
        >
          Education & Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.organization}</p>
                <p className="text-gray-500">{exp.date}</p>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                <p className="text-lg">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ContactSection = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, text: 'kuldeepkhelwar43@gmail.com' },
    { icon: <FaPhone />, text: '+91 97540 30206' },
    { icon: <FaMapMarkerAlt />, text: 'Indore, India' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white  text-black py-12"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center font-serif"
        >
          Let's Connect
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-lg mb-6 text-gray-700">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="text-2xl text-gray-700">{item.icon}</div>
                <span className=' text-gray-700'>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/2"
          >
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer w-full bg-gray-200 bg-opacity-20 rounded-lg border-2 border-transparent px-4 py-3 text-gray-600 placeholder-transparent focus:outline-none focus:border-gray-300 transition-colors"
                  placeholder="Your Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-6 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full bg-gray-200 bg-opacity-20 rounded-lg border-2 border-transparent px-4 py-3 text-gray-600 placeholder-transparent focus:outline-none focus:border-gray-300 transition-colors"
                  placeholder="Your Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-6 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Your Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="peer w-full bg-gray-200 bg-opacity-20 rounded-lg border-2 border-transparent px-4 py-3  text-gray-600 placeholder-transparent focus:outline-none focus:border-gray-300 transition-colors"
                  placeholder="Your Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-6 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Your Message
                </label>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-300 text-blue-400 font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Designed and Developed by  <a href='https://aaminspatel.github.io/portfolio1/' target='_blank'>Aamin Patel and </a> All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Portfolio;