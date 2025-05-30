import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import ThreeCanvas from './ThreeCanvas';
// Add this import for tilt effect
import { Tilt } from 'react-tilt';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Data Analyst',
          'Python Developer',
          'Data Scientist', 
          'Prompt Engineer',
          'Vibe Coder',
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '\u{2726}', // Unicode character for a solid block cursor
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <ThreeCanvas />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full flex flex-col md:flex-row items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 relative flex-1"
        >
          <div className="w-full md:w-3/4">
            <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-100 mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-700 dark:text-primary-200 mb-4">
              Kishore Kumar
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-primary-500 dark:text-primary-300">
              <span ref={typedRef}></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-100 text-base sm:text-lg max-w-md mb-8">
              👋 Hey there! I’m someone who wears many digital hats:
              <br />
              <span className="inline-block mt-2">
                <span role="img" aria-label="Data Analyst">📊</span> <b className="text-primary-700 dark:text-primary-200">Data Analyst</b> by curiosity,
                <br />
                <span role="img" aria-label="Python">🖥️</span> <b className="text-primary-700 dark:text-primary-200">Python Developer</b> by choice,
                <br />
                <span role="img" aria-label="Data Scientist">🔬</span> <b className="text-primary-700 dark:text-primary-200">Data Scientist</b> when patterns whisper,
                <br />
                <span role="img" aria-label="Prompt Engineer">💡</span> <b className="text-primary-700 dark:text-primary-200">Prompt Engineer</b> when words spark magic,
                <br />
                <span role="img" aria-label="Vibe Coder">🎧</span> <b className="text-primary-700 dark:text-primary-200">Vibe Coder...</b>
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://drive.google.com/file/d/14w1rRZOLDy0rpTiOqsN8EARNB1Yux5lq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-icon"
              >
                Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-icon"
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* Profile Image on the right with tilt effect */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
            <div className="image">
              <img
                draggable="false"
                className="tilt rounded-full shadow-2xl border-4 border-primary-500 w-80 h-80 object-cover"
                src="./images/profile.jpeg"
                alt="Kishore Kumar"
              />
            </div>
          </Tilt>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary-400 dark:border-primary-600 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-primary-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;