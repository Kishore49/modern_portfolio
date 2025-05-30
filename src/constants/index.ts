import { tech, company, projects as projectImages } from "../assets";

// Navigation links
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services/offerings
export const services = [
  {
    title: "Python Development",
    icon: tech.python,
    description: "Building robust backend systems and data pipelines using Python and related frameworks."
  },
  {
    title: "Data Analysis",
    icon: tech.analysis  ,
    description: "Transforming raw data into actionable insights through statistical analysis and visualization."
  },
  {
    title: "Data Visualization",
    icon: tech.visualization,
    description: "Skilled in creating diverse data visualizations ranging from basic plots to advanced charts like Sankey diagrams, choropleth maps, ridge plots, and 3D visualizations."
  },
  {
    title: "Machine Learning",
    icon: tech.ml,
    description: "Developing ML models to solve complex problems and make data-driven predictions."
  },
];

// Technologies/skills
export const technologies = [
  {
    name: "Excel",
    icon: tech.excel,
    category: "tools",
  },
  {
    name: "Git",
    icon: tech.git,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: tech.github,
    category: "tools",
  },
  {
    name: "HTML",
    icon: tech.html,
    category: "languages",
  },
  {
    name: "CSS",
    icon: tech.css,
    category: "languages",
  },
  {
    name: "JavaScript",
    icon: tech.javascript,
    category: "languages",
  },
  {
    name: "Python",
    icon: tech.python,
    category: "languages",
  },

   {
    name: "Java",
    icon: tech.java,
    category: "languages",
  },

  {
    name: "MySQL",
    icon: tech.mysql,
    category: "languages",
  },
  {
    name: "Power BI",
    icon: tech.powerbi,
    category: "tools",
  },
  {
    name: "Flask",
    icon: tech.flask,
    category: "frameworks",
  },
  {
    name: "TensorFlow",
    icon: tech.tensorflow,
    category: "frameworks",
  },
  {
    name: "NumPy",
    icon: tech.numpy,
    category: "frameworks",
  },
  {
    name: "Pandas",
    icon: tech.pandas,
    category: "frameworks",
  },
  {
    name: "Matplotlib",
    icon: tech.matplotlib,
    category: "frameworks",
  },
  {
    name: "OpenCV",
    icon: tech.opencv,
    category: "frameworks",
  },
  {
    name: "Google Colab",
    icon: tech.colab,
    category: "tools",
  },
  {
    name: "Tkinter",
    icon: tech.tkinter,
    category: "frameworks",
  },

  {
    name: "Streamlit",
    icon: tech.streamlit,
    category: "frameworks",
  },

  {
    name: "MS Office",
    icon: tech.msoffice,
    category: "tools",
  },

  {
    name: "AWS",
    icon: tech.aws,
    category: "tools",
  },

  {
    name: "VS Code",
    icon: tech.vscode,
    category: "tools",
  },

  {
    name: "Docker",
    icon: tech.docker,
    category: "tools",
  },

  
];

// Projects
export const projects = [
  {
    name: "Heart Risk Assessment",
    description:
      "A machine learning application that predicts heart disease risk based on patient data and vital statistics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "orange-text-gradient",
      },
      {
        name: "ml-model",
        color: "green-text-gradient",
      },
    ],
    image: projectImages.heartRisk,
    source_code_link: "https://github.com/Kishore49/heartrisk_assessment_codeclause",
  },
  {
    name: "Environment Impact Analyzer",
    description:
      "AI-powered Environment Impact Analyzer that delivers smart insights on air, water, soil, and climate data through interactive visualizations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "purple-text-gradient",
      },
    ],
    image: projectImages.urlShortener,
    source_code_link: "https://environmental-analyzer-49.streamlit.app/",
  },
  {
    name: "GameVorteX - FreeFire eSports",
    description:
      "Platform for organizing and managing FreeFire esports tournaments with team registration and leaderboards.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: projectImages.gameVortex,
    source_code_link: "https://github.com/Kishore49/Gaming_Template",
  },
  {
    name: "Resume Analyzer",
    description:
      "Resume Analyzer is a Streamlit tool built with NLTK, spaCy, and Scikit-learn that compares resumes with job descriptions, highlights key areas, and provides an overall score.",
    tags: [
      {
        name: "spacy",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "purple-text-gradient",
      },
    ],
    image: projectImages.portfolio,
    source_code_link: "https://ats-resume-checker-49.streamlit.app/",
  },
  {
    name: "Alarm Clock",
    description:
      "A simple custom alarm clock application with multiple alarm settings, snooze functionality, and custom sound options.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "orange-text-gradient",
      },
    ],
    image: projectImages.alarmClock,
    source_code_link: "https://github.com/Kishore49/Alarm_Clock",
  },
  {
    name: "IPL Analysis",
    description:
      "Data analysis project that analyzes the data from the Indian Premier League (IPL) 2022 season.",
    tags: [
      {
        name: "colab",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "data visualization",
        color: "purple-text-gradient",
      },
    ],
    image: projectImages.iplAnalysis,
    source_code_link: "https://github.com/Kishore49/IPL_22_Analysis",
  },
  {
    name: "Virtual Mouse using Hand Gestures",
    description:
      "Virtual Mouse using OpenCV, MediaPipe, and PyAutoGUI to control cursor and clicks with hand gestures via webcam",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "mediapipe",
        color: "orange-text-gradient",
      },
    ],
    image: projectImages.mouse,
    source_code_link: "https://github.com/Kishore49/Advanced_Virtual_Mouse",
  },
  {
    name: "Stock Analysis Web App",
    description:
      "A Flask-based Stock Analysis Web App that provides real-time insights, financial metrics, and detailed analysis using yFinance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "orange-text-gradient",
      },
      {
        name: "stack",
        color: "green-text-gradient",
      },
    ],
    image: projectImages.stockPredictor,
    source_code_link: "https://stockprediction-k2eu.onrender.com/",
  },
  {
    name: "Weather Dashboard",
    description:
      "The dashboard is designed to help users analyze historical weather patterns and gain meaningful insights through visualizations.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "data",
        color: "purple-text-gradient",
      },
      {
        name: "dashboard",
        color: "orange-text-gradient",
      },
    ],
    image: projectImages.movieGenre,
    source_code_link: "https://github.com/Kishore49/Weather_dashboard",
  },
];

// Experiences
export const experiences = [
  {
    title: "Delivery Data Analyst",
    company_name: "Turing",
    icon: company.turing,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Analyzing delivery data to optimize routes and improve efficiency",
      "Created charts and visualizations, including swarm plots, strip plots, contour plots, Sankeydiagrams, chord diagrams, ridge plot, hexbin plot, 3D charts, lollipop chart to support LLM training.",
      "Collaborating with cross-functional teams to improve overall delivery processes"
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "Code Alpha",
    icon: company.codealpha,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Developed machine learning models for predictive analytics",
      "Performed data cleaning and preprocessing on large datasets",
      "Created visualizations to communicate findings to stakeholders",
      "Implemented data preprocessing, feature extraction, hyperparameter tuning, and model evaluation, utilizing Pandas, NLTK, Scikit-learn, and GridSearchCV for optimization."
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "Code Clause",
    icon: company.codeclause,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Gained hands-on experience in data training, data modeling, data visualization, and other data science-related tasks",
      "Built a movie genre prediction model using Python, NLP, and machine learning, applying TF-IDF vectorization and a Multinomial Naive Bayes classifier to classify movie synopses.",
      "Developed a heart disease risk prediction web app using Python, Streamlit, Pandas, and Scikit-learn, enabling users to input health parameters and receive personalized risk assessments with lifestyle recommendations."
    ],
  },
  {
    title: "Campus Leader",
    company_name: "Tech Learn",
    icon: company.techlearn,
    iconBg: "#383E56",
    date: "Apr 2021 - Jul 2021",
    points: [
      "Organized technical workshops and events on campus",
      "Mentored junior students in programming and data science",
      "Facilitated communication between students and the Tech Learn team",
      "Promoted technology learning and skill development among peers"
    ],
  },
];

// Contact information
export const contactInfo = {
  email: "kishore.kumar4907@gmail.com",
  phone: "+91 8428509927",
  location: "Madurai, Tamil Nadu, India - 625010",
};

export const socialLinks = [
  { url: "https://github.com/Kishore49", label: "Github" },
  { url: "https://www.linkedin.com/in/kishore-kumar-61708a208/", label: "Linkedin" },
  { url: "https://www.hackerrank.com/profile/kingkishore4907", label: "HackerRank" }, // <-- Here
  { url: "https://www.instagram.com/kishore__49_?igsh=dnY2cWE5dWtlaGN0", label: "Instagram" },
  { url: "https://linktr.ee/kishore49", label: "Linktree" },
];