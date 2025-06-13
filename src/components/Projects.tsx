import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { Github } from 'lucide-react';
import { Tilt } from 'react-tilt';

// Tilt options for cards
const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 450,
};

// Metric Flip Card for "15+ Projects"
const MetricFlipCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-40 h-40 sm:w-48 sm:h-48 cursor-pointer perspective mx-auto lg:mx-0"
      whileHover={{ scale: 1.07, rotateZ: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f);
      }}
      aria-label="Flip card for project metric"
      style={{ outline: 'none' }}
    >
      <div
        className={`transition-transform duration-700 ease-[cubic-bezier(.4,2.3,.3,1)] w-full h-full absolute top-0 left-0 [transform-style:preserve-3d] ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="glass-card-neo p-4 sm:p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center shadow-2xl border-2 border-primary-400/40 backface-hidden">
          <span className="text-4xl sm:text-5xl font-extrabold text-primary-600 drop-shadow-lg mb-2">15+</span>
          <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200">Projects</span>
          <span className="mt-2 text-xs sm:text-sm text-primary-400">Click to flip</span>
        </div>
        {/* Back */}
        <div className="glass-card-neo p-4 sm:p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 rotate-y-180 shadow-2xl border-2 border-primary-400/40 backface-hidden">
          <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">See all on GitHub</span>
          <a
            href="https://github.com/Kishore49"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 transition-colors rounded-full p-3 sm:p-4 shadow-lg"
            title="Go to GitHub"
          >
            <Github className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}> = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-sm mx-auto"
    >
      <Tilt options={defaultTiltOptions} className="tilt-card">
        <div className="relative w-full h-full glass-card p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-primary-400/30 hover:shadow-primary-400/30 transition-shadow duration-300">
          <div className="relative w-full h-[180px] sm:h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex justify-end m-2 sm:m-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-tr from-primary-500 to-primary-400 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4 sm:w-1/2 sm:h-1/2 text-white" />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5">
            <h3 className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-300 leading-tight">{name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-xs ${tag.color} px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 shadow`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <p className="subheading text-primary-500">My Work</p>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-300 drop-shadow-lg">Projects</h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 mt-6 sm:mt-8">
          <MetricFlipCard />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed text-center lg:text-left"
          >
            The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively. Here are few,
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
      {/* Custom styles for 3D morphism and glassmorphism */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
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

export default Projects;