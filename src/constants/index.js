import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import projectf1 from "../assets/projects/project1f.png"
import projectf2 from "../assets/projects/project2f.png"
import projectf3 from "../assets/projects/projectf3p2.png"
import projectf4 from "../assets/projects/project4f.png"
import projectf5 from "../assets/projects/project5f.png"

export const HERO_CONTENT = "👋 Hello, I’m Aryan Patel, a Computer Science student @ The University of Waterloo & Business Administration Student @ Wilfrid Laurier University pursuing a career in software development, ML/AI, and finance."

export const HERO_CONTENT2 = "💻 I’m proficient in full-stack development, leverage Next.js/React.js with TailwindCSS for front end, Python, C, and C++ for back-end applications, TensorFlow and Pytorch for machine learning, MongoDB and SQLite for database management, and Azure for cloud hosting!"
export const HERO_CONTENT205 = "☁️ I am certified in Azure Cloud Fundamentals (AZ900) and Azure AI Fundamentals (AI900), and love to work with cloud based technologies."
export const HERO_CONTENT3 = "I am looking for Winter 2025 internships."
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Engineer",
    company: "Hype Docs",
    description: `Designed and developed user interfaces, ensuring responsive design for various devices. Optimized for cross browser display and maintained/updated existing features and applications.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "May 2024 - Present",
    role: "Software Engineer",
    company: "Accelerate with Azure",
    description: `Engineered a full-stack financial investment AI advisor under the management of Microsoft and Microsoft Employees in an Azure development team. Used python and Azure AI Services to create a functional investment advisor AI model & chat bot backend, and react.js with tailwindcss for an attractive front end.`,
    technologies: ["Python", "Azure", "Azure AI Services", "React.js", "Tailwind"],
  },
  {
    year: "Sept 2019 - June 2023",
    role: "Finance/Accounting Champion & President",
    company: "Ontario DECA",
    description: `Placed 3rd in the world for Accounting, utilising python scripts to assist in accounting issue detection. Placed 1st in Canada for Finance Consulting on presentation about service transition to an online platform using technology to make financial models. President of prestigious 200+ member chapter, organising events with 1,800+ attendees.`,
    technologies: ["Python", "Excel", "VBA", "R"],
  },
  {
    year: "Sep 2020 - Nov 2021",
    role: "Software Engineer & Founder",
    company: "Neonic Wraps",
    description: `Designed and developed a fully functional e-commerce website with HTML, CSS, and Javascript. Managed inventory and performed queries using SQL and mongoDB. Achieved $10k+ in sales through utilising digital marketing channels.`,
    technologies: ["HTML", "CSS", "JavaScript", "Sqlite", "MongoDB"],
  },
];

export const PROJECTF = [
  {
    title: "BDO Future Leaders Challenge Case Competition Winner (1st Place)",
    image: projectf1,
    description:
      "Placed first out of 1,500+ competitors on our presentation to help the Canadian Agriculture industry take advantage of new 2024 technology approvals and government financial aid programs to reach ESG goals in a financially feasible and profitable way",
      links: [["Article", "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2024/april/first-year-future-leaders-challenge-showcases-innovation.html"],["LinkedIn", "https://www.linkedin.com/feed/update/urn:li:activity:7191194573660909569/"]],
      technologies: [],
  },
  {
    title: "UW Management Consulting Case Competition Winner (1st Place)",
    image: projectf2,
    description:
      "Placed first out of 400+ competitors on our presentation for DBS Financial Bank to grow by creating a new financial investing platform intergrated with a thematic stock portfolio generatng AI technology, StashAway.",
      links: [["LinkedIn", "https://www.linkedin.com/feed/update/urn:li:activity:7172986641563676675/"]],
      technologies: [],
  },
  {
    title: "Wealth Harbour",
    image: projectf3,
    description:
      "An advanced portfolio management with features including user authentication, stock selection, mean-variance optimization, HRP, and interactive visualizations using Plotly and Streamlit.",
      links: [["Github", "https://github.com/aryanp05/Wealth-Harbour"]],
      technologies: ["Python", "Numpy"],
  },
  {
    title: "3rd in the World for Accounting at DECA ICDC",
    image: projectf4,
    description:
      "Ranked 3rd in the world for Accounting in the DECA International Competition from 80,000+ global competitors, demonstrating highly proficient analytical thinking, numeracy skills, and decision-making.",
      links: [],
      technologies: ["Python", "VBA", "Excel"],
  },
  {
    title: "1st in Canada for Financial Consulting at DECA",
    image: projectf5,
    description:
      "Placed 1st in Canada for Financial Consulting, receiving a record-breaking 100% on my presentation for financial bank service transitions to online platforms, exhibiting exceptional financial literacy.",
      links: [],
      technologies: ["Excel", "R", "PowerPoint"],
  },
];

export const PROJECTS = [
  {
    title: "Meerkat ASL Sign Language Reader",
    image: project1,
    description:
      "A cutting-edge ASL recognition system featuring user data capture, AI training, fine-tuning adjustments, and an intuitive GUI.",
      links: [["Demo Vid", "https://www.youtube.com/watch?v=yPALn5ZH8LA"],["Github", "https://github.com/aryanp05/Meerkat-ASL/tree/main"]],
      technologies: ["Python", "ML/AI", "TensorFlow", "Open-CV", "Mediapipe", "Scikit Learn"],
  },
  {
    title: "Mock Investor",
    image: project2,
    description:
      "A full stack all-in-one platform where you can simulate stock market investing with $10,000 virtual USD, track a live portfolio, and learn the ropes without risking real money.",
      links: [["Website", "https://mockinvest.azurewebsites.net"],["Github", "https://github.com/aryanp05/Mock-Investing---Harvard"]],
      technologies: ["Flask","SQL", "Azure", "HTML", "CSS", "JavaScript", "Python", "Bootstrap"],
  },
  {
    title: "Wildfire Path Predictor",
    image: project3,
    description:
      "An AI model using satellite photography, wind, fire weather, drought, and other data to accrately predict the spread of wildfires across the globe to aid in fighting aganist growing numbers of fires. Finalist at WatAI Hackathon",
      links: [["Github", "https://github.com/aryanp05/Wildfire-AI-Hackathon"]],
      technologies: ["Python", "PyTorch", "TorchVision", "Geopandas"],
  },
  {
    title: "Aryan Patel's Portfolio",
    image: project4,
    description:
      "My personal portfolio website, built from scratch with React & Tailwind, showcasing my projects, skills, and experiences.",
      links: [["Github", "https://github.com/aryanp05/personal-portfolio"]],
      technologies: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Resume Master (WIP)",
    image: project5,
    description:
      "A full stack application with a user-friendly interface for creating, styling, merging, and editing resumes with ease.",
      links: [["Website", "https://resumemaster.azurewebsites.net/"], ["Github", "https://github.com/aryanp05/resumemaster"]],
      technologies: ["Flask", "Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Get Trash AI",
    image: project6,
    description:
      "AI-powered full stack web application for live photo scanning trash, using powerful machine learning paired with a 6.5k+ item dataset to indentify recycable materials vs trash. Placed top 3 at Hack with AI by Google SDC ",
      links: [["Devpost", "https://devpost.com/software/gettrash"], ["Github", "https://github.com/aryanp05/GetTrash-Hack-With-AI-"]],
      technologies: ["Python", "TensorFlow", "Flask", "Open-CV"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
