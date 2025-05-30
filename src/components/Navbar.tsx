import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // For scroll spy
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Scroll background effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Scroll spy logic
      let currentSection = '';
      for (const nav of navLinks) {
        const section = document.getElementById(nav.id);
        if (section) {
          sectionRefs.current[nav.id] = section;
          const { top } = section.getBoundingClientRect();
          if (top <= 120) {
            currentSection = nav.title;
          }
        }
      }
      setActive(currentSection || navLinks[0].title);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`fixed w-full px-6 sm:px-16 py-5 flex items-center top-0 z-20 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-md bg-opacity-80 dark:bg-opacity-80'
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href='#home'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <div className='w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl'>
              K
            </div>
            <p className='text-[18px] font-medium cursor-pointer hidden sm:block text-gray-800 dark:text-gray-100'>
              Kishore Kumar <span className='text-primary-500 dark:text-primary-300'>| Portfolio</span>
            </p>
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='list-none hidden md:flex flex-row gap-10 relative'
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative font-semibold transition-all duration-300 ${
                active === nav.title
                  ? 'text-primary-500 scale-110'
                  : 'text-gray-700 dark:text-gray-200'
              } hover:text-primary-500 dark:hover:text-primary-400 nav-link cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative px-2 py-1">
                {nav.title}
                {/* Animated underline */}
                <motion.span
                  layoutId="nav-underline"
                  className={`absolute left-0 -bottom-1 h-[3px] rounded-full w-full ${
                    active === nav.title
                      ? 'bg-primary-500 dark:bg-primary-300'
                      : 'bg-transparent'
                  }`}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                />
              </a>
            </li>
          ))}
        </motion.ul>

        <div className='flex items-center gap-4'>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleDarkMode}
            className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 dark:hover:bg-primary-400 text-gray-800 dark:text-gray-100 transition-colors duration-300'
            aria-label='Toggle dark mode'
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <div className='md:hidden flex flex-1 justify-end items-center'>
            <div
              className='w-[28px] h-[28px] cursor-pointer'
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <X size={28} /> : <Menu size={28} />}
            </div>

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glass-card`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === nav.title
                        ? 'text-primary-500'
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;