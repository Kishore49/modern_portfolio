import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Tech stack icons
const tech = {
  excel: "https://img.icons8.com/?size=100&id=13654&format=png&color=000000",
  git: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  github: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
  html: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  css: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  javascript: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  python: "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000",
  mysql: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
  powerbi: "https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000",
  flask: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
  django: "https://img.icons8.com/color/48/000000/django.png",
  tensorflow: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000",
  numpy: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
  pandas: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
  matplotlib: "https://img.icons8.com/?size=100&id=fOuZeM45qH2X&format=png&color=000000",
  scikit: "https://thedatascientist.com/wp-content/uploads/2023/05/scikit-learn-1024x551.png",
  seaborn: "https://avatars.githubusercontent.com/u/22799945?s=280&v=4",
  opencv: "https://img.icons8.com/?size=100&id=apebs8fnmi4m&format=png&color=000000",
  colab: "https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000",
  tkinter: "https://img.icons8.com/?size=100&id=KcsCpd9rffIr&format=png&color=000000",
  streamlit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8PZg0ZHwmD_HsRg_nHimaEqMSS7o4nlB6Q&s",
  msoffice: "https://media.licdn.com/dms/image/sync/v2/D5627AQGztH4jo72ccQ/articleshare-shrink_800/articleshare-shrink_800/0/1722440267844?e=2147483647&v=beta&t=_Fg1E9gf2UjADndxXXGnsccl9cg75kzNeB8_vxYSySM",
  java: "https://img.icons8.com/fluent/512/java-coffee-cup-logo.png",
  aws: "https://icon2.cleanpng.com/20180817/vog/8968d0640f2c4053333ce7334314ef83.webp",
  docker: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  vscode: "https://e7.pngegg.com/pngimages/195/304/png-clipart-visual-studio-code-logo-thumbnail-tech-companies-thumbnail.png",
};

const technologies = [
  { name: "Excel", icon: tech.excel, category: "tools" },
  { name: "Git", icon: tech.git, category: "tools" },
  { name: "GitHub", icon: tech.github, category: "tools" },
  { name: "HTML", icon: tech.html, category: "languages" },
  { name: "CSS", icon: tech.css, category: "languages" },
  { name: "JavaScript", icon: tech.javascript, category: "languages" },
  { name: "Python", icon: tech.python, category: "languages" },
  { name: "Java", icon: tech.java, category: "languages" },
  { name: "MySQL", icon: tech.mysql, category: "languages" },
  { name: "Power BI", icon: tech.powerbi, category: "tools" },
  { name: "Flask", icon: tech.flask, category: "frameworks" },
  { name: "Django", icon: tech.django, category: "frameworks" },
  { name: "TensorFlow", icon: tech.tensorflow, category: "frameworks" },
  { name: "NumPy", icon: tech.numpy, category: "frameworks" },
  { name: "Pandas", icon: tech.pandas, category: "frameworks" },
  { name: "Matplotlib", icon: tech.matplotlib, category: "frameworks" },
  { name: "OpenCV", icon: tech.opencv, category: "frameworks" },
  { name: "Google Colab", icon: tech.colab, category: "tools" },
  { name: "Tkinter", icon: tech.tkinter, category: "frameworks" },
  { name: "Streamlit", icon: tech.streamlit, category: "frameworks" },
  { name: "MS Office", icon: tech.msoffice, category: "tools" },
  { name: "AWS", icon: tech.aws, category: "tools" },
  { name: "VS Code", icon: tech.vscode, category: "tools" },
  { name: "Docker", icon: tech.docker, category: "tools" },
  { name: "Scikit-learn", icon: tech.scikit, category: "frameworks" },
  { name: "Seaborn", icon: tech.seaborn, category: "frameworks" }
  
];

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
            ? 'bg-white text-primary-700 font-semibold shadow-lg scale-105 ring-4 ring-primary-400/40 dark:ring-primary-300/40'
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
