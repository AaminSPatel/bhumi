import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="p-6 flex justify-between items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-semibold">Bhumika Shomani</h1>

      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 md:ml-4"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden ml-4 focus:outline-none"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 z-50 text-gray-900 dark:text-gray-100 flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden"
        >
          <a href="#about" className="hover:text-blue-500" onClick={toggleMenu}>About</a>
          <a href="#skills" className="hover:text-blue-500" onClick={toggleMenu}>Skills</a>
          <a href="#education" className="hover:text-blue-500" onClick={toggleMenu}>Education</a>
          <a href="#contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact</a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
