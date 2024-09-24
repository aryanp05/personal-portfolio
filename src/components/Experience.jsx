import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4 mx-5 pt-2">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -75 }}
        transition={{ duration: 1 }}
        class="my-20 text-center text-5xl font-bold"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-400">
                  {experience.company}
                </span>
              </h6>

              <ul className="mb-4 text-neutral-400 list-disc pl-5">
                {experience.description.map((point, index) => (
                  <li key={index} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>

              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-800 font-medium"
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

export default Experience;
