import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="p-8 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      
      {/* Logo and Developer Details */}
      <div className="flex items-center space-x-4">
        <img
          src="path_to_logo.png"
          alt="Logo"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">Bhumika's Portfolio</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Developed by Aamin
          </p>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
        </a>
      </div>

      {/* Image and Additional Info */}
      <div className="text-center">
        <img src="images.jpg" alt="Your Image" className="w-24 h-24 rounded-full mx-auto" />
        <p className="text-sm mt-4">
          Passionate about business and technology.
        </p>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Design and Developed by <a href="https://aaminspatel.github.io/portfolio1" target="_blank" rel="noopener noreferrer" className=' font-semibold '> Aamin Patel</a>. All rights reserved.
    </div>
  </footer>
);

export default Footer;
