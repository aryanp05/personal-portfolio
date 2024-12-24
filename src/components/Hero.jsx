import React from "react";
import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT2 } from "../constants";
import { HERO_CONTENT3 } from "../constants";
import { HERO_CONTENT5 } from "../constants";
import { HERO_CONTENT205 } from "../constants";
import profilePic from "../assets/aryanProfile.jpg";
import profilePic2 from "../assets/Aryan.jpg";
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
    <div id="hero" className="border-b border-neutral-900 pb-4 mt-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-3 lg:mx-0 items-center lg:items-start">
            <motion.h1
              variants={container(0.25)}
              initial="hidden"
              whileInView="visible"
              className="pb-16 text-6xl font-thin tracking-tught lg:mt-16 lg:text-8xl"
            >
              Aryan Patel
            </motion.h1>
            <motion.span
              variants={container(0.75)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <div className="text-xl max-w-2xl">
            <motion.p
              variants={container(0.85)}
              initial="hidden"
              whileInView="visible"
              className="my-2 py-6 pb-2 font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(0.85)}
              initial="hidden"
              whileInView="visible"
              className="my-2 py-6 pb-2 font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT5}
            </motion.p>
            <motion.p
              variants={container(0.85)}
              initial="hidden"
              whileInView="visible"
              className="my-2 py-6 pb-2 font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT2}
            </motion.p>
            {/* <motion.p
              variants={container(0.85)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6  pb-2font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT205}
            </motion.p> */}
            <motion.p
              variants={container(0.85)}
              initial="hidden"
              whileInView="visible"
              className="my-2 pb-2 py-6 font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT3}{" "}
              <a href="https://www.linkedin.com/in/aryanpatel05/">
                Message me on LinkedIn for my {" "}
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text font-bold tracking-tight text-transparent">
                  Resume
                </span>
              </a>
            </motion.p>
            </div>
            
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.35 }}
              src={profilePic2}
              alt="Profile Picture"
              className="lg:mt-20"
            />
          </div>
        </div>
        <div className=" flex w-full items-center justify-center lg:mt-16">
          <AnchorLink className="anchor-link" offset={-150} href="#recentProjects">
            <motion.div
              variants={container(3)}
              initial="hidden"
              whileInView="visible"
              className="text-2xl px-1 py-5  mb-12 lg:mb-20 cursor-pointer"
            >
              <h2 className="inline-block border border-2 border-white rounded upercase text-white py-2 px-4 lg:px-12 font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 bg-clip-text text-lg lg:text-2xl tracking-tight hover:text-transparent hover:border-gray-400 transition duration-500 ease-in-out">
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
