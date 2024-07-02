import { PROJECTS, PROJECTF } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [category, setCategory] = useState("software");
  const [animationKey, setAnimationKey] = useState(0);
  const [animationDelay, setAnimationDelay] = useState(0);

  const filteredProjects = category === "software" ? PROJECTS : PROJECTF;

  const handleCategoryChange = () => {
    setCategory(category === "software" ? "finance" : "software");
    setAnimationKey(prevKey => prevKey + 1); // Update the key to force re-render
    setAnimationDelay(1);
  };


  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="flex justify-center mb-16">
        <div className="flex items-center">
          <span
            className={`mr-2 ${
              category === "software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Software Projects
          </span>
          <div
            className={`relative inline-block w-24 h-8 transition duration-200 ease-linear ${
              category === "software"
                ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                : "bg-gradient-to-r from-pink-500 to-purple-500"
            } rounded-full cursor-pointer`}
            onClick={handleCategoryChange}
          >
            <span
              className={`absolute left-0 top-0 h-8 w-8 bg-white border-2 border-gray-300 rounded-full transition transform ${
                category === "software"
                  ? "translate-x-16 border-yellow-400"
                  : "translate-x-0 border-purple-500"
              }`}
            ></span>
          </div>
          <span
            className={`ml-2 ${
              category === "finance"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
                : "bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text tracking-tight text-transparent"
            }`}
          >
            Finance Projects
          </span>
        </div>
      </div>
      <div>
        {filteredProjects.map((project, index) => (        
          <div key={`${index}-${animationKey}`} className="mb-8 flex flex-wrap lg:justify-center">          
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: animationDelay * 0.05 * index }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.links.map((link, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text font-bold tracking-tight text-transparent mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                >
                  <a href={link[1]}>{link[0]}</a>
                </span>
              ))}
              <br />
              <div className="mt-2"></div>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-purple-500 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
