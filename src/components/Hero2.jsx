import React from "react";
import { HERO_CONTENT, HERO_CONTENT2, HERO_CONTENT3, HERO_CONTENT5 } from "../constants";
import profilePic2 from "../assets/Aryan.jpg";
import waterlooLogo from "../assets/waterloo.png";
import laurierLogo from "../assets/laurier.png";
import company1Logo from "../assets/leapAP.jpeg";
import company2Logo from "../assets/hypedocs.jpeg";
import company3Logo from "../assets/incraftables.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pt-0 pb-8 mt-12 ">
      <div className="flex flex-wrap">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-3 lg:mx-0 items-center lg:items-center">
            <motion.h1
              variants={container(0.25)}
              initial="hidden"
              whileInView="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aryan Patel
            </motion.h1>
            <motion.span
              variants={container(0.75)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
                variants={container(0.85)}
                initial="hidden"
                whileInView="visible"
                className="my-2 py-6 pb-0 font-light tracking-tight text-center lg:text-left"
              >
               👋 Hello, I’m Aryan Patel, a Software Engineer with a passion for Finance and Trading.
              </motion.p>
              <motion.p
                variants={container(0.85)}
                initial="hidden"
                whileInView="visible"
                className="mt-0 w-4/5 my-2 py-6 pb-0 font-light tracking-tight text-center lg:text-left"
              >
               💻 I’m proficient in full-stack development, leverage React/Next with TailwindCSS for front end, Python, C, & C++ for back-end applications, TensorFlow and Pytorch for ML/AI, MongoDB & SQLite for data management, and Azure/AWS for cloud hosting!
              </motion.p>

            {/* Profile Picture */}
            <div className="mt-0 pt-0 w-full lg:w-3/5 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.35 }}
                  src={profilePic2}
                  alt="Profile Picture"
                  className="lg:mt-5 rounded-full"
                />
              </div>
            </div>
           
          </div>
        </div>

        {/* Right Side: Education and Internship */}
        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-40">
          <motion.h2
            variants={container(1)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold mb-6 text-center lg:text-left"
          >
            Education
          </motion.h2>

          {/* Education Section */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 ">
            {/* University of Waterloo */}
            <motion.div
              variants={container(1.25)}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 mb-4 hover:scale-110">
                <img src={waterlooLogo} alt="University of Waterloo" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg lg:text-xl font-bold">Bachelor of Computer Science</p>
              <p className="text-sm font-light mt-1">Minor in Computational Mathematics</p>
            </motion.div>

            {/* Wilfrid Laurier University */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 mb-4 hover:scale-110">
                <img src={laurierLogo} alt="Wilfrid Laurier University" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg lg:text-xl font-bold">Bachelor of Business Administration</p>
              <p className="text-sm font-light mt-1">Concentraion in Finance</p>
              <p className="text-sm font-light mt-1">Minor in Financial Math</p>
            </motion.div>
          </div>

          <motion.h2
            variants={container(1.75)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold mt-12 mb-6 text-center lg:text-left"
          >
            Internships
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Internship 1 */}
            <motion.div
              variants={container(2)}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 mb-4 hover:scale-110">
                <img src={company1Logo} alt="LeapAP" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg lg:text-xl font-bold">LeapAP</p>
              <p className="text-sm font-light">Software Engineer Intern</p>
              <p className="text-sm font-light">Jan 2024 - Apr 2024</p>
            </motion.div>

            {/* Internship 2 */}
            <motion.div
              variants={container(2.25)}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 mb-4 hover:scale-110">
                <img src={company2Logo} alt="HypeDocs" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg lg:text-xl font-bold">HypeDocs</p>
              <p className="text-sm font-light">Software Engineer Intern</p>
              <p className="text-sm font-light">May 2024 - Aug 2024</p>
            </motion.div>

            {/* Internship 3 */}
            <motion.div
              variants={container(2.5)}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center"
            >
              <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 mb-4 hover:scale-110">
                <img src={company3Logo} alt="InCraftables" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg lg:text-xl font-bold">InCraftables</p>
              <p className="text-sm font-light">Software Engineer Intern</p>
              <p className="text-sm font-light">May 2023 - Aug 2023</p>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex w-full items-center justify-center ">
          <AnchorLink className="anchor-link" offset={50} href="#recentProjects">
            <motion.div
              variants={container(8)}
              initial="hidden"
              whileInView="visible"
              className="text-2xl px-1 pt-0 py-5 mb-12 lg:mb-20 cursor-pointer"
            >
              <h2 className="inline-block border border-2 border-white rounded uppercase text-white py-2 px-4 lg:px-12 font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 bg-clip-text text-lg lg:text-2xl tracking-tight hover:text-transparent hover:border-gray-400 transition duration-500 ease-in-out">
                🛠 Projects 🛠
              </h2>
            </motion.div>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
