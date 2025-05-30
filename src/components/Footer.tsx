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
  "hover:bg-[#ea4335] hover:text-white dark:hover:bg-[#b31412] dark:hover:text-white", // Email: red
  "hover:bg-[#39e09b] hover:text-white dark:hover:bg-[#1a4731] dark:hover:text-[#39e09b]", // Linktree: green
  ];

  const icons = [
  <Github size={20} key="github" className="text-primary-500 dark:text-primary-300 transition-colors" />,
  <Linkedin size={20} key="linkedin" className="text-primary-500 dark:text-primary-300 transition-colors" />,
  <SiHackerrank size={22} key="hackerrank" className="text-green-600 dark:text-green-400 transition-colors" />, // HackerRank
  <Instagram size={20} key="instagram" className="text-primary-500 dark:text-primary-300 transition-colors" />,
  <Link size={20} key="linktree" className="text-primary-500 dark:text-primary-300 transition-colors" />,
  ];

  return (
    <footer className="relative py-10 bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                Kishore Kumar <span className="text-primary-500">| Portfolio</span>
              </p>
            </a>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xs">
              Thank you for visiting my portfolio 😊. I'm always open to discussing new projects and opportunities 💼✨.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex gap-4 mb-4">
              {socialLinks.slice(0, 6).map((link, idx) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-colors duration-300 ${iconBgColors[idx]}`}
                  aria-label={link.label}
                >
                  {icons[idx]}
                </a>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © {getCurrentYear()} Kishore Kumar 💜
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;