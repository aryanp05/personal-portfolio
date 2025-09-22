import testfor from "../assets/projects/p1testfor2.png"

import finlake from "../assets/projects/finlake.png"
import p0 from "../assets/projects/p0.jpg";
import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/portfolio.png";
import p5 from "../assets/projects/p5.png";
import p6 from "../assets/projects/p6.png";
import p7 from "../assets/projects/studysync.jpeg";
import c from "../assets/c.png"


import p1f from "../assets/projects/pf1.jpg";
import p2f from "../assets/projects/pf2.gif";
import p4f from "../assets/projects/pf4.png";
import p5f from "../assets/projects/p5f.jpeg";
import p6f from "../assets/projects/pf6.png";

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



export const HERO_CONTENT = "👋 Hello, I’m Aryan Patel, a Software Engineer with a passion for Finance and Trading. Currently, I'm studying Computer Science & Business Adminsitration at The University of Waterloo "
export const HERO_CONTENT5 = "I'm an incoming software engineer at LeapAP, and have previously interned at HypeDocs and Incraftables"

export const HERO_CONTENT2 = "💻 I’m proficient in full-stack development, leverage Next.js/React.js with TailwindCSS for front end, Python, C, and C++ for back-end applications, TensorFlow and Pytorch for machine learning, MongoDB and SQLite for database management, and Azure for cloud hosting!"
export const HERO_CONTENT205 = "☁️ I am certified in Azure Cloud Fundamentals (AZ900) and Azure AI Fundamentals (AI900), and love to work with cloud based technologies."
export const HERO_CONTENT3 = "I am looking for Winter 2025 internships."

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "May 2025 - Aug. 2025",
    role: "Software Engineer Intern",
    company: "Shopify",
    description: ["Developed a distributed compliance orchestration platform with event-driven pipelines that centralized policy rules and automated enforcement across merchant sites, ensuring consistent regulatory compliance and reliable execution at scale",
      "Directed multi-stage database schema migrations from legacy non-deterministic encryption to deterministic encryption, refactoring distributed services to guarantee seamless integration in high-throughput payment systems with zero downtime",
      "Architected new fraud detection workflows by connecting services through the new deterministic encrypted data and included additional vendor data across GraphQL endpoints, increasing fraud detection by 25% & lowering false positives by 18%",
      "Built intelligent merchant segmentation pipelines in Ruby, SQL, and GraphQL using risk-aware classification algorithms, automating high-trust onboarding flows that cut enterprise integration friction by 30% and reduced escalation volume by 20%"
    ],
    technologies: ["Ruby", "SQL", "GraphQL", "Event-driven Pipelines", "Deterministic Encryption", "Fraud Detection", "Merchant Segmentation", "Risk-aware Classification", "Enterprise Integration", "Zero Downtime"],
  },
  {
    year: "Jan. 2025 - Apr. 2025",
    role: "Software Engineer Intern",
    company: "Leap AP",
    description: ["Developed secure software to facilities large-scale, vendor financial transactions and accounts payable automation within an Agile based team using Node.js and Express for 30+ property management companies in Canada and the United States",
                  "Monitored and maintained system infrastructure along with production software integrity using GitLab, Grafana, and Gray Logs, troubleshooting, debugging and resolving integration failure to ensure minimal downtime and maximum user efficiencies",
                  "Individually designed, implemented, tested, and monitored new software across local, development, and production environments"],
    technologies: ["Node.JS", "Express", "GitLab", "Grafana", "Gray Logs"],
  },
  {
    year: "May 2024 - Aug. 2024",
    role: "Software Engineer Intern",
    company: "Hype Docs",
    description: ["Refactored backend code to optimize runtime efficiency and implemented asynchronous programming with bulk data requests on Firebase for fast API calls, improving code runtime by 25% and reducing query times by 48%", 
                  "Individually designed and implemented new product features based on client requests leveraging Node.js & Slack API",
                  "Seamlessly developed code and thoroughly tested new product functionality with serverless functions using Netlify, easily integrating new features to main branches and deploying code, greatly decreasing ship to production times"],
    technologies: ["Node.JS", "FireBase", "Slack API", "Bubble"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Software & AI Engineer Intern",
    company: "Incraftables",
    description: ["Researched and implemented a DNN with TensorFlow to analyze user browsing behavior and transaction history to adjust products shown on the homepage and suggest add-ons at checkout, increasing average order value by 18%",
                  "Created JavaScript elements to collect user interaction data and vectorized products to encode elements such as price, popularity, and ratings to train the AI model, increasing the number of products browsed per session by 54%",
                  "Preprocessed data using Python and efficiently stored it in SQL databases to create a robust training dataset"],
    technologies: ["Python", "JavaScript", "TensorFlow", "HTML", "SQL"],
  },
  {
    year: "Sep. 2020 - Nov. 2021",
    role: "Founder",
    company: "Neonic Wraps",
    description: ["Designed a full-stack website with HTML and managed online MongoDB inventory while perfoming database queries using SQL",
                  "Launched and operated a Shopify e-commerce business selling a diverse range of tech products, achieving $10k+ in sales.",
                  "Managed advertising campaigns through digital marketing channels, including influencer partnership promotion, to drive sales"],
    technologies: ["Entrepreneurship", "HTML", "CSS", "JavaScript", "Sqlite", "MongoDB"],
  },
];


////
export const PROJECTS = [
  {
    id: 1,
    title: "FinLake - Large Scale Data Processing & Agent Trading",
    des: "FinLake processes 1,000+ financial new sources per minute through an ELT pipeline and medalion architecture to refine and clean data on an ADLS datalake using Delta Lake through DataBricks & Apache Spark. Here, LangGraph agents query using FastAPI and trade based on sentiment and specific workflows",
    img: finlake,
    link: "https://devpost.com/software/finlake",
    linkName: "View Devpost",
    links: [["Devpost Link", "https://devpost.com/software/finlake"]],
    technologies: ["Python", "FastAPI", "LangGraph", "Apache Spark", "Delta Lake", "DataBricks"],
  },
  {
    id: 2,
    title: "Dime Defender - Hack The North 2024 Winner🏅",
    des: "A chrome extension for Shopify/Amazon stores to control user spending by locking the PayNow button and simulating a courtroom between two AI lawyers debating whether you should purchase the product",
    img: p0,
    link: "https://youtu.be/I5dP9mbnx4M?t=5962",
    linkName: "View Demo Video",
    links: [["Devpost Link", "https://devpost.com/software/budget-defender?ref_content=my-projects-tab&ref_feature=my_projects"],["Demo Vid Link", "https://youtu.be/I5dP9mbnx4M?t=5962"],["Github Link", "https://github.com/aryanp05/hackthenorth24"]],
    technologies: ["Node.js", "AWS", "Svelte", "Plasma", "VoiceFlow", "Manifest"],
  },{
    id: 3,
    title: "Meerkat ASL Sign Language Reader",
    des: "A cutting-edge ASL recognition system featuring user data capture, AI training, fine-tuning adjustments, and an intuitive GUI.",
    img: c,
    link: "https://www.youtube.com/watch?v=yPALn5ZH8LA",
    linkName: "View Demo Video",
    links: [["Demo Vid Link", "https://www.youtube.com/watch?v=yPALn5ZH8LA"],["Github Link", "https://github.com/aryanp05/Meerkat-ASL/tree/main"]],
    technologies: ["Python", "ML/AI", "TensorFlow", "Open-CV", "Mediapipe", "Scikit Learn"],
  },
  {
    id: 4,
    title: "Mock Investor - Paper Portfolio Website",
    des:       "A full stack all-in-one platform where you can simulate stock market investing with $10,000 virtual USD, track a live portfolio, and learn the ropes without risking real money.",
    img: p2,
    link: "",
    linkName: "Website No Longer Live",
    links: [["Github Link", "https://github.com/aryanp05/Mock-Investing---Harvard"]],
    technologies: ["Flask","SQL", "Azure", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 5,
    title: "AI Wildfire Path Predictor",
    des:       "An AI model using satellite photography, wind, fire weather, drought, and other data to accrately predict the spread of wildfires across the globe to aid in fighting aganist growing numbers of fires. Finalist at WatAI Hackathon",
    img: p3,
    link: "https://github.com/aryanp05/Wildfire-AI-Hackathon",
    linkName: "View Github Repo",
    links: [["Github Link", "https://github.com/aryanp05/Wildfire-AI-Hackathon"]],
    technologies: ["Python", "PyTorch", "TorchVision", "Geopandas"],
  },
  {
    id: 6,
    title: "Aryan Patel's Portfolio - Personal Website",
    des:       "My personal portfolio website, built from scratch with React & Tailwind, showcasing my projects, skills, and experiences.",
    img: p4,
    link: "https://github.com/aryanp05/personal-portfolio",
    linkName: "View Github Repo",
    links: [["Github Link", "https://github.com/aryanp05/personal-portfolio"]],
      technologies: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 7,
    title: "Get Trash AI - 3rd @ Google SDC Hack With Ai",
    des:      "AI-powered full stack web application for live photo scanning trash, using powerful machine learning paired with a 6.5k+ item dataset to indentify recycable materials vs trash. Placed top 3 at Hack with AI by Google SDC ",
    img: p5,
    link: "https://devpost.com/software/gettrash",
    linkName: "View Devpost",
    links: [["Devpost Link", "https://devpost.com/software/gettrash"], ["Github Link", "https://github.com/aryanp05/GetTrash-Hack-With-AI-"]],
      technologies: ["Python", "TensorFlow", "Flask", "Open-CV"],
  },
];

export const PROJECTF = [
  {
    id: 1,
    title: "1st Place @ BDO Future Leaders Case Competition",
    des: "Placed first out of 1,500+ competitors on our presentation to help the Canadian Agriculture industry take advantage of new 2024 technology approvals and government financial aid programs to reach ESG goals in a financially feasible and profitable way",
    img: p1f,
    link: "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2024/april/first-year-future-leaders-challenge-showcases-innovation.html",
    linkName: "View University Article",
    links: [["Article Link", "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2024/april/first-year-future-leaders-challenge-showcases-innovation.html"],["LinkedIn Link", "https://www.linkedin.com/feed/update/urn:li:activity:7191194573660909569/"]],
      technologies: [],
  },
  {
    id: 2,
    title: "1st Place @ UW Management Consulting Case Competition",
    des:       "Placed first out of 400+ competitors on our presentation for DBS Financial Bank to grow by creating a new financial investing platform intergrated with a thematic stock portfolio generatng AI technology, StashAway.",
    img: p2f,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7172986641563676675/",
    linkName: "View LinkedIn Post",
    links: [["LinkedIn", "https://www.linkedin.com/feed/update/urn:li:activity:7172986641563676675/"]],
      technologies: [],
  },
  {
    id: 3,
    title: "Mock Investor - Paper Portfolio Website",
    des:       "A full stack all-in-one platform where you can simulate stock market investing with $10,000 virtual USD, track a live portfolio, and learn the ropes without risking real money.",
    img: p2,
    link: "",
    linkName: "Website No Longer Live",
    links: [["Github Link", "https://github.com/aryanp05/Mock-Investing---Harvard"]],
    technologies: ["Flask","SQL", "Azure", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 4,
    title: "Wealth Harbour - Portfolio Optimization Tool",
    des:      "An advanced portfolio management with features including user authentication, stock selection, mean-variance optimization, HRP, and interactive visualizations using Plotly and Streamlit.",
    img: p4f,
    link: "https://github.com/aryanp05/Wealth-Harbour",
    linkName: "View Github Repo",
    links: [["Github", "https://github.com/aryanp05/Wealth-Harbour"]],
    technologies: ["Python", "Numpy"],
  },
  {
    id: 5,
    title: "3rd in the World for Accounting at DECA ICDC",
    des:       "Ranked 3rd in the world for Accounting in the DECA International Competition from 80,000+ global competitors, demonstrating highly proficient analytical thinking, numeracy skills, and decision-making.",
    img: p5f,
    link: "",
    links: [],
      technologies: ["Python", "VBA", "Excel"],
  },
  {
    id: 6,
    title: "1st in Canada for Financial Consulting at DECA",
    des:       "Placed 1st in Canada for Financial Consulting, receiving a record-breaking 100% on my presentation for financial bank service transitions to online platforms, exhibiting exceptional financial literacy.",
    img: p6f,
    link: "",
    links: [],
    technologies: ["Excel", "R", "PowerPoint"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


export const projects = [
  {
    id: 1,
    title: "FinLake - Large Scale Data Processing & Agent Trading",
    des: "FinLake processes 1,000+ financial new sources per minute through an ELT pipeline and medalion architecture to refine and clean data on an ADLS datalake using Delta Lake through DataBricks & Apache Spark. Here, LangGraph agents query using FastAPI and trade based on sentiment and specific workflows",
    img: finlake,
    link: "https://devpost.com/software/finlake",
    linkName: "View Devpost",
    links: [["Devpost Link", "https://devpost.com/software/finlake"]],
    technologies: ["Python", "FastAPI", "LangGraph", "Apache Spark", "Delta Lake", "DataBricks"],
  },
  {
    id: 2,
    title: "Dime Defender - Hack The North 2024 Winner🏅",
    des: "A chrome extension for Shopify/Amazon stores to control user spending by locking the PayNow button and simulating a courtroom between two AI lawyers debating whether you should purchase the product",
    img: p0,
    link: "https://youtu.be/I5dP9mbnx4M?t=5962",
    linkName: "View Demo Video",
    links: [["Devpost Link", "https://devpost.com/software/budget-defender?ref_content=my-projects-tab&ref_feature=my_projects"],["Demo Vid Link", "https://youtu.be/I5dP9mbnx4M?t=5962"],["Github Link", "https://github.com/aryanp05/hackthenorth24"]],
    technologies: ["Node.js", "AWS", "Svelte", "Plasma", "VoiceFlow", "Manifest"],
  },
  {
    id: 3,
    title: "CATAN: C++ OOP Board Game",
    des: "The original Settlers of Catan board game made into a virtual experience, coded in C++ with a focus on abstraction, encapsulation, inheritence, and polymorphism, with low coupling and high cohesion",
    img: c,
    link: "https://replit.com/@a236pate/WATAN",
    linkName: "Play Game!",
    links: [["Game Link", "https://replit.com/@a236pate/WATAN"],["Game Link(Waterloo Edition)", "https://github.com/aryanp05/Meerkat-ASL/tree/main"]],
    technologies: ["C++", "Object Orientated Programming"],
  },
  {
    id: 4,
    title: "Meerkat ASL Sign Language Reader",
    des: "A cutting-edge ASL recognition system featuring user data capture, AI training, fine-tuning adjustments, and an intuitive GUI.",
    img: p1,
    link: "https://www.youtube.com/watch?v=yPALn5ZH8LA",
    linkName: "View Demo Video",
    links: [["Demo Vid Link", "https://www.youtube.com/watch?v=yPALn5ZH8LA"],["Github Link", "https://github.com/aryanp05/Meerkat-ASL/tree/main"]],
    technologies: ["Python", "ML/AI", "TensorFlow", "Open-CV", "Mediapipe", "Scikit Learn"],
  },
  {
    id: 5,
    title: "StudySync - AI Collaborative Study Platform",
    des: "StudySync turns group studying into collaborative competition. Earn points for staying focused & get docked for distractions like phone use with quizzes & personalized plans for locking in.",
    img: p7,
    link: "https://devpost.com/software/studysync-7awz28",
    linkName: "View Devpost",
    links: [["Devpost Link", "https://devpost.com/software/studysync-7awz28"]],
    technologies: ["WebSockets", "Node.JS", "Open-CV", "Hugging Face", "FastAPI"],
  },
  {
    id: 6,
    title: "Mock Investor - Paper Portfolio Website",
    des:       "A full stack all-in-one platform where you can simulate stock market investing with $10,000 virtual USD, track a live portfolio, and learn the ropes without risking real money.",
    img: p2,
    link: "",
    linkName: "Website No Longer Live",
    links: [["Github Link", "https://github.com/aryanp05/Mock-Investing---Harvard"]],
    technologies: ["Flask","SQL", "Azure", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 7,
    title: "AI Wildfire Path Predictor",
    des:       "An AI model using satellite photography, wind, fire weather, drought, and other data to accrately predict the spread of wildfires across the globe to aid in fighting aganist growing numbers of fires. Finalist at WatAI Hackathon",
    img: p3,
    link: "https://github.com/aryanp05/Wildfire-AI-Hackathon",
    linkName: "View Github Repo",
    links: [["Github Link", "https://github.com/aryanp05/Wildfire-AI-Hackathon"]],
    technologies: ["Python", "PyTorch", "TorchVision", "Geopandas"],
  },
  {
    id: 8,
    title: "Get Trash AI - 3rd @ Google Hack With Ai 🥉",
    des:      "AI-powered full stack web application for live photo scanning trash, using powerful machine learning paired with a 6.5k+ item dataset to indentify recycable materials vs trash. Placed top 3 at Hack with AI by Google SDC ",
    img: p5,
    link: "https://devpost.com/software/gettrash",
    linkName: "View Devpost",
    links: [["Devpost Link", "https://devpost.com/software/gettrash"], ["Github Link", "https://github.com/aryanp05/GetTrash-Hack-With-AI-"]],
      technologies: ["Python", "TensorFlow", "Flask", "Open-CV"],
  },
  {
    id: 9,
    title: "Aryan Patel's Portfolio - Personal Website",
    des:       "My personal portfolio website, built from scratch with React & Tailwind, showcasing my projects, skills, and experiences.",
    img: p4,
    link: "https://github.com/aryanp05/personal-portfolio",
    linkName: "View Github Repo",
    links: [["Github Link", "https://github.com/aryanp05/personal-portfolio"]],
      technologies: ["React", "Next.js", "Tailwind"],
  },
];

export const projectsF = [
  {
    id: 1,
    title: "1st Place @ BDO Future Leaders Case Competition",
    des: "Placed first out of 1,500+ competitors on our presentation to help the Canadian Agriculture industry take advantage of new 2024 technology approvals and government financial aid programs to reach ESG goals in a financially feasible and profitable way",
    img: p1f,
    link: "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2024/april/first-year-future-leaders-challenge-showcases-innovation.html",
    linkName: "View University Article",
    links: [["Article Link", "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2024/april/first-year-future-leaders-challenge-showcases-innovation.html"],["LinkedIn Link", "https://www.linkedin.com/feed/update/urn:li:activity:7191194573660909569/"]],
      technologies: [],
  },
  {
    id: 2,
    title: "1st Place @ UW Management Consulting Case Competition",
    des:       "Placed first out of 400+ competitors on our presentation for DBS Financial Bank to grow by creating a new financial investing platform intergrated with a thematic stock portfolio generatng AI technology, StashAway.",
    img: p2f,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7172986641563676675/",
    linkName: "View LinkedIn Post",
    links: [["LinkedIn", "https://www.linkedin.com/feed/update/urn:li:activity:7172986641563676675/"]],
      technologies: [],
  },
  {
    id: 3,
    title: "Mock Investor - Paper Portfolio Website",
    des:       "A full stack all-in-one platform where you can simulate stock market investing with $10,000 virtual USD, track a live portfolio, and learn the ropes without risking real money.",
    img: p2,
    link: "",
    linkName: "Website No Longer Live",
    links: [["Github Link", "https://github.com/aryanp05/Mock-Investing---Harvard"]],
    technologies: ["Flask","SQL", "Azure", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 4,
    title: "Wealth Harbour - Portfolio Optimization Tool",
    des:      "An advanced portfolio management with features including user authentication, stock selection, mean-variance optimization, HRP, and interactive visualizations using Plotly and Streamlit.",
    img: p4f,
    link: "https://github.com/aryanp05/Wealth-Harbour",
    linkName: "View Github Repo",
    links: [["Github", "https://github.com/aryanp05/Wealth-Harbour"]],
    technologies: ["Python", "Numpy"],
  },
  {
    id: 5,
    title: "3rd in the World for Accounting at DECA ICDC",
    des:       "Ranked 3rd in the world for Accounting in the DECA International Competition from 80,000+ global competitors, demonstrating highly proficient analytical thinking, numeracy skills, and decision-making.",
    img: p5f,
    link: "",
    links: [],
      technologies: ["Python", "VBA", "Excel"],
  },
  {
    id: 6,
    title: "1st in Canada for Financial Consulting at DECA",
    des:       "Placed 1st in Canada for Financial Consulting, receiving a record-breaking 100% on my presentation for financial bank service transitions to online platforms, exhibiting exceptional financial literacy.",
    img: p6f,
    link: "",
    links: [],
    technologies: ["Excel", "R", "PowerPoint"],
  },
];