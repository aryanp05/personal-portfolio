import { motion } from "framer-motion";
import MicrosoftAzure from "../assets/microsoftazure.png";
import AZ900 from "../assets/az900.png";
import AI900 from "../assets/ai900.png";
import { useState } from "react";

const Credentials = () => {
  const [hoverAZ, setHoverAZ] = useState(MicrosoftAzure);
  const scaleAZ = hoverAZ === AZ900 ? 1.5 : 1.0;
  const [hoverAI, setHoverAI] = useState(MicrosoftAzure);
  const scaleAI = hoverAI === AI900 ? 1.5 : 1.0;

  return (
    <div id="credentials" className="border-b border-neutral-900 pb-4 pt-2 my-48 mx-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Credentials
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 justify-items-center">
        {/* Certificate Section 1 */}
        <div
          className="flex flex-col lg:flex-row items-center mb-8 w-full max-w-xl transform transition-transform hover:scale-105"
          onMouseEnter={() => setHoverAZ(AZ900)}
          onMouseLeave={() => setHoverAZ(MicrosoftAzure)}
        >
          <div className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0">
            <img
              src={hoverAZ}
              alt="Credential Logo"
              className="h-20 w-auto lg:h-32 lg:mr-32 transform transition duration-300 ease-in-out"            />
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex-grow text-center lg:text-left"
          >
            <h6 className="mb-2 text-xl font-semibold">Azure Fundamentals: AZ-900</h6>
            <ul className="list-disc pl-6">
              <li className="text-base">
                Cloud Concepts, Azure Resource Management, Cloud Adoption Framework, Resource Deployment and Scaling, Virtual Machines, Storage Solutions, Networking Fundamentals, Databases Management
              </li>
            </ul>
            <a href="https://www.credly.com/badges/03b1f43b-47a2-4641-8ad9-a0f63d5728fd/public_url">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 ml-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800 hover:text-white py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                View Credential
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Certificate Section 2 */}
        <div
          className="flex flex-col lg:flex-row items-center mb-8 w-full max-w-xl transform transition-transform hover:scale-105"
          onMouseEnter={() => setHoverAI(AI900)}
          onMouseLeave={() => setHoverAI(MicrosoftAzure)}
        >
          <div className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0">
            <img
              src={hoverAI}
              alt="Credential Logo"
              className="h-20 w-auto lg:h-32 lg:mr-32 transform transition duration-300 ease-in-out"            />
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex-grow text-center lg:text-left"
          >
            <h6 className="mb-2 text-xl font-semibold">Azure AI Fundamentals: AI-900</h6>
            <ul className="list-disc pl-6">
              <li className="text-base">
                AI and Machine Learning Concepts, Azure AI Services, Cognitive Services, Azure Bot Services, Natural Language Processing, Machine Learning Models, Data Analysis, AI Solutions Implementation
              </li>
            </ul>
            <a href="https://www.credly.com/badges/444d77f7-30f8-4b4b-895f-2ff8f9eb8456/public_url">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 ml-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800 hover:text-white py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                View Credential
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
