import React, { useEffect, useState } from "react";
import { HERO_CONTENT, HERO_CONTENT2, HERO_CONTENT3, HERO_CONTENT5 } from "../constants";
import profilePic2 from "../assets/Aryan.jpg";
import waterlooLogo from "../assets/waterloo.png";
import laurierLogo from "../assets/laurier.png";
import company5Logo from "../assets/bitgo.webp";
import company4Logo from "../assets/shopify.png";
import company3Logo from "../assets/leapAP.jpeg";
import company2Logo from "../assets/hypedocs.jpeg";
import company1Logo from "../assets/incraftables.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const initialDelay = 3.25
const viewportOnce = { once: true, amount: 0.2 };

const internships = [
  {
    logo: company5Logo,
    company: "BitGo",
    role: "Trade Software Engineer Intern",
    duration: "Jan. 2026 - Apr. 2026",
  },
  {
    logo: company4Logo,
    company: "Shopify",
    role: "Software Engineer Intern",
    duration: "May 2025 - Aug 2025",
  },
  {
    logo: company3Logo,
    company: "LeapAP",
    role: "Software Engineer Intern",
    duration: "Jan 2025 - Apr 2025",
  },
  {
    logo: company2Logo,
    company: "HypeDocs",
    role: "Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
  },
  {
    logo: company1Logo,
    company: "InCraftables",
    role: "ML Engineer Intern",
    duration: "May 2023 - Aug 2023",
  },
];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const delayFor = (delay) => (isMobile ? 0.5 : delay);

  return (
    <div id="hero" className="border-b border-neutral-900 pt-0 pb-8 mt-12 ">
      <div className="flex flex-wrap">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-3 lg:mx-0 items-center lg:items-center">
            {/* <motion.h1
              variants={container(0.25)}
              initial="hidden"
              whileInView="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aryan Patel
            </motion.h1> */}
            <motion.span
              variants={container(delayFor(0.25))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="pb-6 text-6xl tracking-tight lg:mt-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
            >
              A Software Engineer
            </motion.span>
            <motion.span
              variants={container(delayFor(1))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center"
            >
              With a Passion for Coding, Building, Optimizing
            </motion.span>
            <motion.span
              variants={container(delayFor(2.25))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent text-center"
            >
              & Some Trading Algorithms
            </motion.span>
            <motion.p
                variants={container(delayFor(initialDelay + 0.5))}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-0 w-4/5 my-2 py-6 pb-0 font-light tracking-tight text-center lg:text-left"
              >
               👋 Hello, I'm <b>Aryan Patel</b>, and there is <b>nothing</b> I love more than being a <b>Software Engineer</b>
              </motion.p>
              <motion.p
                variants={container(delayFor(initialDelay + 0.5))}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-0 w-4/5 my-2 py-6 pb-0 font-light tracking-tight text-center lg:text-left"
              >
               💻  You’ll often see in the office way past 8PM; Not because my manager has strict deadline, but because coding is genuinely like a gaming session -- I get hooked on building out a new feature, optimizing a code path, designing a beautiful solution, and learning new techniques from engineers that me feel like “Wow, that is so interesting” (and no, that’s not a GPT em dash)
              </motion.p>
              <motion.p
                variants={container(delayFor(initialDelay + 0.5))}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-0 w-4/5 my-2 py-6 pb-0 mb-0 font-light tracking-tight text-center lg:text-left"
              >
                📀 With this passion, I love and am always looking to work, as you can see by my list of different internships. If you're a recruiter, reach out because theres nothing I'd like work at your new firm, learn about your companies systems & architecture, and be mentored by your genius senior engineers 
              </motion.p>
              {/* In my free time, theres nothing I love doing more than building trading algorithms */}
              {/* I absolutely love reading over research papers, scanning the market for different types of potenital trading strategy, and trying them live with actual trading */}
              {/* My personal favourites are trading ETFs of VIX Futures like SVIX & UVIX, but recently I've been exploring commodities futures & ETF arbitrage */}
              {/* My screen time on the Interactive Brokers App is actually more than my screen time on Instagram or Tiktok (but not both combined) */}

            {/* Profile Picture */}
            <div className="mt-0 pt-0 w-full pb-4 sm:pb-0 lg:w-1/3 lg:p-6">
              <div className="flex justify-center">
                <motion.img
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: delayFor(initialDelay + 0.75) }}
                  src={profilePic2}
                  alt="Profile Picture"
                  className="lg:mt-4 rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
                />
              </div>
            </div>
           
          </div>
        </div>

        {/* Right Side: Internships and Education */}
        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-19">
          <motion.h2
            variants={container(delayFor(initialDelay + 0.5))}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl font-bold mb-6 text-center lg:text-left"
          >
            Internships
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                variants={container(delayFor(initialDelay + 1.5 + index * 0.25))}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full overflow-hidden w-28 h-28 lg:w-32 lg:h-32 mb-4 hover:scale-110 transition-transform">
                  <img
                    src={internship.logo}
                    alt={internship.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg lg:text-xl font-bold">{internship.company}</p>
                <p className="text-sm font-light whitespace-nowrap max-w-[180px]">
                  {internship.role}
                </p>
                <p className="text-xs font-light">{internship.duration}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2
            variants={container(delayFor(initialDelay + 0.75))}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl font-bold mt-8 mb-5 text-center lg:text-left"
          >
            Education
          </motion.h2>

          <div className="w-full flex flex-nowrap justify-evenly">
            <motion.div
              variants={container(delayFor(initialDelay + 1))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col items-center flex-1 max-w-[280px] px-2"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-28 lg:h-28 mb-3 hover:scale-110">
                <img
                  src={waterlooLogo}
                  alt="University of Waterloo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base lg:text-xl font-bold leading-tight text-center max-w-[220px]">
                Bachelor of Computer Science
              </p>
              <p className="text-sm font-light mt-1">
                Minor in Computational Mathematics
              </p>
            </motion.div>

            <motion.div
              variants={container(delayFor(initialDelay + 1.25))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col items-center flex-1 max-w-[280px] px-2"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-28 lg:h-28 mb-3 hover:scale-110">
                <img
                  src={laurierLogo}
                  alt="Wilfrid Laurier University"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base lg:text-xl font-bold leading-tight text-center max-w-[220px]">
                Bachelor of Business Administration
              </p>
              <p className="text-sm font-light mt-1">Concentraion in Finance</p>
              <p className="text-sm font-light mt-1">Minor in Financial Math</p>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex w-full items-center justify-center ">
            <AnchorLink className="anchor-link" offset={50} href="#experience">
            <motion.div
              variants={container(delayFor(8))}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-2xl px-1 pt-0 py-5 mb-12 lg:mb-20 cursor-pointer"
            >
              <h2 className="inline-block border border-2 border-white rounded uppercase text-white py-2 px-4 lg:px-12 font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 bg-clip-text text-lg lg:text-2xl tracking-tight hover:text-transparent hover:border-gray-400 transition duration-500 ease-in-out">
              🖥️ Experiences 🖥️
              </h2>
            </motion.div>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
