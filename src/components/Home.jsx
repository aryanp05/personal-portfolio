import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typerwriter-effect";
import { TypewriterEffect } from "./ui/typerwriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });
  
  

const Home = () => {

  const words = [
    {
      text: "Hello, World.",
    },
  ];
  const intro = [
    {
      text: "I'm Aryan Patel"
    }
  ];
  return (
    <div id="home" className="border-b border-neutral-900 pt-32 ">
      <div className="flex flex-col items-center ">
        <h2
          // variants={container(0)}
          // initial="hidden"
          // animate="visible"
          className="text-3xl font-bold mt-12"
        >
          <TypewriterEffect words={words} />
        </h2>
        <motion.h1
          variants={container(2)}
          initial="hidden"
          animate="visible"
          className="pb-8 lg:pb-12 text-center text-7xl lg:text-8xl font-thin tracking-tught mt-4 lg:mt-2 lg:text-14xl"
        >
          I'm Aryan Patel
        </motion.h1>
        <motion.span
          variants={container(3)}
          initial="hidden"
          animate="visible"
          className="text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
        >
Developer | Entrepreneur | Innovator
        </motion.span>
        <AnchorLink
        className="anchor-link" offset={0} href="#hero">
        <motion.div 
        variants={container(4)}
        initial="hidden"
        animate="visible"
        className=" text-2xl px-1 py-5 pb-0 my-8 mb-96 cursor-pointer ">
          <h2 className="inline-block border border-2 border-white rounded upercase text-white py-2 px-4 lg:px-12 font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 bg-clip-text text-lg lg:text-2xl tracking-tight hover:text-transparent hover:border-gray-400 transition duration-500 ease-in-out">
            Learn About Me 
          </h2>
          {/* <span className="absolute inset-0 z-0 hover:bg-black"></span>
          <span className="hover:bg-black px-20 py-4 relative z-10 font-sans">Learn About Me</span> */}
        </motion.div>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Home