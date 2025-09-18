import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import ThreeCanvas from './ThreeCanvas';
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
        cursorChar: '\u{2726}',
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex items-center overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <ThreeCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 relative flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="w-full">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-100 mb-2 sm:mb-4">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 dark:text-primary-200 mb-2 sm:mb-4 leading-tight">
              Kishore Kumar
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary-500 dark:text-primary-300 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[4rem]">
              <span ref={typedRef}></span>
            </h2>
            <div className="text-gray-700 dark:text-gray-100 text-sm sm:text-base lg:text-lg max-w-full lg:max-w-md mb-6 sm:mb-8 leading-relaxed">
              <p className="mb-3">👋 Hey there! I'm someone who wears many digital hats:</p>
              <div className="space-y-1 sm:space-y-2">
                <p><span role="img" aria-label="Data Analyst">📊</span> <b className="text-primary-700 dark:text-primary-200">Data Analyst</b> by curiosity,</p>
                <p><span role="img" aria-label="Python">🖥️</span> <b className="text-primary-700 dark:text-primary-200">Python Developer</b> by choice,</p>
                <p><span role="img" aria-label="Data Scientist">🔬</span> <b className="text-primary-700 dark:text-primary-200">Data Scientist</b> when patterns whisper,</p>
                <p><span role="img" aria-label="Prompt Engineer">💡</span> <b className="text-primary-700 dark:text-primary-200">Prompt Engineer</b> when words spark magic,</p>
                <p><span role="img" aria-label="Vibe Coder">🎧</span> <b className="text-primary-700 dark:text-primary-200">Vibe Coder...</b></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <motion.a
                href="https://drive.google.com/file/d/1wErk3zwbHBI09UBraPDzUc9qXk4n5Dxn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-icon w-full sm:w-auto px-6 py-3 text-center"
              >
                Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-icon w-full sm:w-auto px-6 py-3 text-center"
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Profile Image on the right with tilt effect */}

<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex-1 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
>
  <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
    <img
      draggable="false"
      className="rounded-xl shadow-lg border-2 border-primary-500 
                 w-48 sm:w-56 lg:w-64 object-contain"
      src="/dp.jpg"  
      alt="Kishore Kumar"
    />
  </Tilt>
</motion.div>


      </div>

      <div className="absolute bottom-8 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-primary-400 dark:border-primary-600 flex justify-center items-start p-2 hover:border-primary-500 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
