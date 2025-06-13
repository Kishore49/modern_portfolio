import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const ExperienceCard: React.FC<{
  experience: typeof experiences[0];
}> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(109, 154, 231, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(70, 70, 189, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 8px 0 rgba(80, 102, 144, 0.12)',
        color: 'inherit',
        borderRadius: '18px',
        transition: 'box-shadow 0.3s, background 0.3s',
      }}
      contentArrowStyle={{ borderRight: '7px solid #c7d2fe' }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: '0 0 0 4px #a5b4fc, 0 2px 8px 0 rgba(80, 102, 144, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent drop-shadow dark:from-primary-300 dark:to-primary-400'>
          {experience.title}
        </h3>
        <p className='font-semibold text-primary-500 dark:text-primary-300 text-sm sm:text-base' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2'>
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-gray-700 dark:text-gray-200 text-xs sm:text-sm pl-1 tracking-wider leading-relaxed'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section
      id='experience'
      className='section-padding relative bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="text-center lg:text-left"
        >
          <p className='subheading text-primary-500 dark:text-primary-300 tracking-widest font-semibold'>What I've Done So Far</p>
          <h2 className='heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-200 drop-shadow-lg'>Work Experience</h2>
        </motion.div>

        <div className='mt-12 sm:mt-20 flex flex-col'>
          <VerticalTimeline lineColor="#a5b4fc">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* Custom styles for glassmorphism and dark mode */}
      <style>{`
        .vertical-timeline-element-content {
          transition: box-shadow 0.3s, background 0.3s, color 0.3s;
          color: #232946;
        }
        .vertical-timeline-element-content:hover {
          box-shadow: 0 12px 36px 0 #a5b4fc55, 0 4px 16px 0 #6366f155;
          background: rgba(199,210,254,0.95) !important;
        }
        .dark .vertical-timeline-element-content {
          background: rgba(36, 41, 61, 0.85) !important;
          color: #e0e7ef !important;
        }
        .dark .vertical-timeline-element-content:hover {
          background: rgba(80,102,144,0.95) !important;
          color: #fff !important;
        }
        .vertical-timeline-element-icon {
          transition: transform 0.3s;
        }
        .vertical-timeline-element-icon:hover {
          transform: scale(1.12) rotate(8deg);
        }
        
        /* Mobile responsiveness for timeline */
        @media (max-width: 1169px) {
          .vertical-timeline-element-content {
            margin-left: 0 !important;
          }
          .vertical-timeline-element-date {
            display: block !important;
            float: none !important;
            color: #a5b4fc !important;
            margin-top: 1rem !important;
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;