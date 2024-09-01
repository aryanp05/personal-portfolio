import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { projectsF } from "../constants";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  const [category, setCategory] = useState("Software");
  const [animationKey, setAnimationKey] = useState(0);

  const filteredProjects = category === "Software" ? projects : projectsF;

  const handleCategoryChange = () => {
    setCategory(category === "Software" ? "Finance" : "Software");
    setAnimationKey(prevKey => prevKey + 1); // Update the key to force re-render
  };

  // Function to determine animation direction
  const getAnimationDirection = (index) => {
    return index % 2 === 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
  };

  return (
    <div id="recentProjects" className="py-20">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -75 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-12">
        A Small Selection Of <br />
        <span
          className={`${
            category === "Software"
              ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
              : "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
          }`}
        >
          Recent {category} Projects
        </span>
      </motion.h1>
      <div className="flex justify-center mt-8 mb-16">
        <div className="flex items-center">
          <span
            className={`mr-4 ${
              category === "Software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Software Projects
          </span>
          <div
            className={`relative inline-block w-24 h-8 transition duration-200 ease-linear ${
              category === "Software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                : "bg-gradient-to-r from-pink-500 to-purple-500"
            } rounded-full cursor-pointer`}
            onClick={handleCategoryChange}
          >
            <span
              className={`absolute left-0 top-0 h-8 w-8 bg-white border-2 border-gray-300 rounded-full transition transform ${
                category === "Software"
                  ? "translate-x-16 border-yellow-400"
                  : "translate-x-0 border-purple-500"
              }`}
            ></span>
          </div>
          <span
            className={`ml-4 ${
              category === "Finance"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Finance Projects
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
        {filteredProjects.map((item, index) => (
          <motion.div
            key={`${item.id}-${animationKey}`} // Use a combination of item ID and animationKey for key
            initial={getAnimationDirection(index)}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer
              title={item.link}
              href={"https://twitter.com/mannupaaji"}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h[40vh] lg:h-[35vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="mt-1"></div>
              <div className="flex flex-wrap">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-purple-500 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
              </div>
              

              <br />

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="justify-start">
                  {item.links.map((link, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text font-bold tracking-tight text-transparent mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                    >
                      <a href={link[1]}>{link[0]}</a>
                    </span>
                  ))}
                </div>
                <a href={item.link}>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.linkName}
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </a>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-24 mb-16">
        <div className="flex items-center">
          <span
            className={`mr-4 ${
              category === "Software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Software Projects
          </span>
          <div
            className={`relative inline-block w-24 h-8 transition duration-200 ease-linear ${
              category === "Software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                : "bg-gradient-to-r from-pink-500 to-purple-500"
            } rounded-full cursor-pointer`}
            onClick={handleCategoryChange}
          >
            <span
              className={`absolute left-0 top-0 h-8 w-8 bg-white border-2 border-gray-300 rounded-full transition transform ${
                category === "Software"
                  ? "translate-x-16 border-yellow-400"
                  : "translate-x-0 border-purple-500"
              }`}
            ></span>
          </div>
          <span
            className={`ml-4 ${
              category === "Finance"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Finance Projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
