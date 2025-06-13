import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';

// Use direct image URLs instead of local file paths
const educationImages = [
  'https://media.licdn.com/dms/image/v2/C510BAQFj2OPzUKg7dQ/company-logo_200_200/company-logo_200_200/0/1630627269450?e=2147483647&v=beta&t=kLOfxXlR1ddLJO2lhYbCyc82tOPYLTr_EeS-597KdrM', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzOE9HklqsZYOKt2cA8BAkly_5Cn-2DIK5m2MuYEEqO3__9I4t_ah63qPT3j-K8YunQ0&usqp=CAU', 
];

const FlipCard: React.FC<{
  frontTitle: string;
  frontSubtitle: string;
  backDescription: string;
  image?: string;
}> = ({ frontTitle, frontSubtitle, backDescription, image }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-48 sm:h-52 cursor-pointer perspective"
      whileHover={{ scale: 1.04, rotateZ: 1 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f);
      }}
      aria-label={`Flip card for ${frontTitle}`}
      style={{ outline: 'none' }}
    >
      <div
        className={`transition-transform duration-700 ease-[cubic-bezier(.4,2.3,.3,1)] w-full h-full absolute top-0 left-0 [transform-style:preserve-3d] ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="glass-card-neo p-4 sm:p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center shadow-xl border border-primary-400/30 backface-hidden">
          {image && (
            <img
              src={image}
              alt={frontTitle}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-2 rounded-full shadow-lg border-2 border-primary-300"
              draggable={false}
            />
          )}
          <h4 className="text-lg sm:text-xl font-bold text-primary-600 drop-shadow text-center">{frontTitle}</h4>
          {frontSubtitle && <p className="text-primary-400 font-medium mt-2 text-sm sm:text-base text-center">{frontSubtitle}</p>}
        </div>
        {/* Back */}
        <div className="glass-card-neo p-4 sm:p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 rotate-y-180 shadow-xl border border-primary-400/30 backface-hidden">
          <p className="text-gray-800 dark:text-gray-200 text-center font-medium text-sm sm:text-base leading-relaxed">{backDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-gradient-to-br from-[#f3f8ff] via-[#e0e7ef] to-[#b6c7f7] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="text-center lg:text-left"
        >
          <p className="subheading text-primary-500 tracking-widest font-semibold">Introduction</p>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-300 drop-shadow-lg">About Me</h2>
        </motion.div>

        <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
            className="flex-1"
          >
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed bg-white/60 dark:bg-white/10 rounded-xl p-4 shadow mb-4">
              I'm a results-driven <span className="text-primary-500 font-semibold">backend developer and data analyst</span> with a passion for turning complex data into actionable insights. With a strong foundation in Python programming and data science methodologies, I specialize in building robust backend systems and creating powerful data visualizations.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed bg-white/60 dark:bg-white/10 rounded-xl p-4 shadow mb-4">
              My journey began with a degree in Information Technology, where I developed a strong foundation in programming principles and database management. Since then, I've continually expanded my skill set through hands-on projects and professional experiences, always striving to stay at the cutting edge of technology.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed bg-white/60 dark:bg-white/10 rounded-xl p-4 shadow">
              What sets me apart is my analytical mindset combined with a creative approach to problem-solving. I'm also well-versed in modern <span className="text-primary-500 font-semibold">AI tools</span> and stay up to date with the latest advancements in artificial intelligence, using them to enhance productivity, streamline workflows, and explore new frontiers in tech.
            </p>

            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary-600 dark:text-primary-300">Education (Click to flip)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <FlipCard
                  frontTitle="Higher Education"
                  frontSubtitle="TVS Higher Secondary School"
                  backDescription="Completed SSLC with 92% and HSC 2nd year with 78% at TVS Higher Secondary School, focusing on Science, Mathematics, and Computer Science (2017 - 2020)."
                  image={educationImages[0]}
                />
                <FlipCard
                  frontTitle="B.Tech in IT"
                  frontSubtitle="PSNA College of Engineering and Technology"
                  backDescription="Bachelor's degree in Information Technology from PSNA College of Engineering and Technology with a percentage of 87 (2020 - 2024)."
                  image={educationImages[1]}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary-600 dark:text-primary-300">What I Do (Flip it up)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {services.map((service, index) => (
                <FlipCard
                  key={index}
                  frontTitle={service.title}
                  frontSubtitle=""
                  backDescription={service.description}
                  image={service.icon} // Make sure each service has an icon property (URL or import)
                />
              ))}
            </div>
          </motion.div>
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
          background: rgba(255,255,255,0.75);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(80, 102, 144, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 24px;
          border: 1.5px solid rgba(120,120,255,0.18);
          transition: box-shadow 0.3s, background 0.3s;
        }
        .dark .glass-card-neo {
          background: rgba(36, 41, 61, 0.65);
          box-shadow: 0 8px 32px 0 rgba(80, 102, 144, 0.22), 0 2px 8px 0 rgba(31, 38, 135, 0.10);
          border: 1.5px solid rgba(80,102,144,0.22);
        }
      `}</style>
    </section>
  );
};

export default About;
