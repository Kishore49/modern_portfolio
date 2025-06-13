import React from 'react';
import { Github, Linkedin, Instagram, Link } from 'lucide-react';
import { SiHackerrank } from "react-icons/si";
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  // Add 6 social links: Github, Linkedin, Twitter, Instagram, Mail, Linktree
  // Make sure your socialLinks array in constants/index.ts has at least 6 items in this order:
  // [Github, Linkedin, Twitter, Instagram, Email, Linktree]
  const iconBgColors = [
  "hover:bg-[#24292f] hover:text-white dark:hover:bg-[#23272e] dark:hover:text-white", // Github: black
  "hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:text-white", // Linkedin: blue
  "hover:bg-[#2EC866] hover:text-white dark:hover:bg-[#1A4731] dark:hover:text-[#2EC866]", // HackerRank: green
  "hover:bg-[#e1306c] hover:text-white dark:hover:bg-[#c13584] dark:hover:text-white", // Instagram: pink
  "hover:bg-[#39e09b] hover:text-white dark:hover:bg-[#1a4731] dark:hover:text-[#39e09b]", // Linktree: green
  ];

  const icons = [
  <Github size={18} key="github" className="text-primary-500 dark:text-primary-300 transition-colors sm:w-5 sm:h-5" />,
  <Linkedin size={18} key="linkedin" className="text-primary-500 dark:text-primary-300 transition-colors sm:w-5 sm:h-5" />,
  <SiHackerrank size={20} key="hackerrank" className="text-green-600 dark:text-green-400 transition-colors sm:w-6 sm:h-6" />, // HackerRank
  <Instagram size={18} key="instagram" className="text-primary-500 dark:text-primary-300 transition-colors sm:w-5 sm:h-5" />,
  <Link size={18} key="linktree" className="text-primary-500 dark:text-primary-300 transition-colors sm:w-5 sm:h-5" />,
  ];

  return (
    <footer className="relative py-8 sm:py-10 bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <a href="#home" className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                K
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100">
                Kishore Kumar <span className="text-primary-500">| Portfolio</span>
              </p>
            </a>
            <p className="mt-3 sm:mt-4 text-gray-700 dark:text-gray-300 max-w-xs text-sm sm:text-base leading-relaxed">
              Thank you for visiting my portfolio 😊. I'm always open to discussing new projects and opportunities 💼✨.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              {socialLinks.slice(0, 5).map((link, idx) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-colors duration-300 ${iconBgColors[idx]} hover:scale-110 transform`}
                  aria-label={link.label}
                >
                  {icons[idx]}
                </a>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm text-center">
              © {getCurrentYear()} Kishore Kumar 💜
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;