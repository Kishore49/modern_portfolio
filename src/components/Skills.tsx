import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';

type CategoryType = 'all' | 'languages' | 'frameworks' | 'tools';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'languages', label: 'Languages' },
    { value: 'frameworks', label: 'Frameworks' },
    { value: 'tools', label: 'Tools' },
  ];

  return (
    <section
      id="skills"
      className="section-padding relative bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <p className="subheading text-primary-500">My Technical Expertise</p>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-300 drop-shadow-lg">Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`glass-card-neo px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 relative
                ${
                  activeCategory === category.value
                    ? 'bg-primary-500 text-white shadow-lg scale-105 ring-4 ring-primary-400/40 dark:ring-primary-300/40'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-primary-100/80 dark:hover:bg-primary-900/80'
                }`}
              style={{
                boxShadow:
                  activeCategory === category.value
                    ? '0 0 16px 4px rgba(124,58,237,0.4), 0 8px 32px 0 rgba(31,38,135,0.18)'
                    : undefined,
              }}
            >
              {category.label}
              {activeCategory === category.value && (
                <span
                  className="absolute inset-0 rounded-full pointer-events-none animate-pulse"
                  style={{
                    boxShadow: '0 0 16px 6px rgba(124,58,237,0.4)',
                  }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {filteredTechnologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="glass-card-neo w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-xl border-2 border-primary-400/30 hover:shadow-primary-400/30 transition-all duration-300 hover:scale-110 group">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-medium mt-1 sm:mt-2 text-primary-700 dark:text-primary-300 text-xs sm:text-sm lg:text-base">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .glass-card-neo {
          background: rgba(255,255,255,0.85);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(80, 102, 144, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 24px;
          border: 1.5px solid rgba(120,120,255,0.18);
          transition: box-shadow 0.3s, background 0.3s;
        }
        .dark .glass-card-neo {
          background: rgba(36, 41, 61, 0.75);
          box-shadow: 0 8px 32px 0 rgba(80, 102, 144, 0.22), 0 2px 8px 0 rgba(31, 38, 135, 0.10);
          border: 1.5px solid rgba(80,102,144,0.22);
        }
      `}</style>
    </section>
  );
};

export default Skills;