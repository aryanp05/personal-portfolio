import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});


const Hero2 = () => {
  return (
    <div id="home" className="border-b border-neutral-900">
      <div className="flex flex-col items-center ">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mt-12"
        >
          Hello, World.
        </motion.h2>
        <motion.h1
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="pb-12 text-center text-8xl font-thin tracking-tught lg:mt-2 lg:text-14xl"
        >
          I'm Aryan Patel
        </motion.h1>
        <motion.span
          variants={container(3)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Developer | Entrepreneur | Innovator
        </motion.span>
        <AnchorLink
        className="anchor-link" offset={50} href="#hero">
        <motion.div 
        variants={container(4.5)}
        initial="hidden"
        animate="visible"
        onClick={() => setMenu("hero")}
        className="relative text-2xl px-1 py-5 my-8 mb-96 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 ">
          <span className="absolute inset-0 z-0 hover:bg-black"></span>
          <span className="hover:bg-black px-20 py-4 relative z-10 font-sans">Learn About Me</span>
        </motion.div>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero2;
