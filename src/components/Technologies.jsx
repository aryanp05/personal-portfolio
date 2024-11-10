import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiPython,
  SiMicrosoftazure,
  SiFlask,
  SiC,
  SiHtml5,
  SiCss3,
  SiGit,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiCplusplus,
  SiNodedotjs,
  SiAmazonaws, 
} from "react-icons/si";
import { TbBrandNextjs, TbSql } from "react-icons/tb";

import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SkillItem = ({ skillName, hrWidth, LR }) => {
  let toolTipDistance = 100 - parseFloat(hrWidth) - 4;
  let distanceString = `${toolTipDistance}%`;

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: LR }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full mb-8 lg:mb-8"
    >
      <div className="flex flex-row items-center">
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-2 "
        >
          {/* Python */}
          {skillName === "Python" && (
            <SiPython className="text-4xl text-blue-500 hover:scale-110 " />
          )}

          {/* C */}
          {skillName === "C" && (
            <SiC className="text-4xl text-gray-600 hover:scale-110" />
          )}

          {/* C++ */}
          {skillName === "C++" && (
            <SiCplusplus className="text-4xl text-gray-700 hover:scale-110" />
          )}

          {/* SQL */}
          {skillName === "SQL" && (
            <TbSql className="text-4xl text-green-500 hover:scale-110" />
          )}

          {/* HTML */}
          {skillName === "HTML" && (
            <SiHtml5 className="text-4xl text-red-600 hover:scale-110" />
          )}

          {/* CSS */}
          {skillName === "CSS" && (
            <SiCss3 className="text-4xl text-blue-600 hover:scale-110" />
          )}

          {/* JavaScript */}
          {skillName === "JavaScript" && (
            <SiJavascript className="text-4xl text-yellow-400 hover:scale-110" />
          )}

          {/* React */}
          {skillName === "React" && (
            <RiReactjsLine className="text-4xl text-cyan-400 hover:scale-110" />
          )}

          {/* Next.js */}
          {skillName === "Next.js" && (
            <TbBrandNextjs className="text-4xl text-neutral-300 hover:scale-110" />
          )}

          {/* Tailwind */}
          {skillName === "Tailwind" && (
            <RiTailwindCssFill className="text-4xl text-blue-400 hover:scale-110" />
          )}

          {/* Flask */}
          {skillName === "Flask" && (
            <SiFlask className="text-4xl text-gray-500 hover:scale-110" />
          )}

          {/* TensorFlow */}
          {skillName === "TensorFlow" && (
            <SiTensorflow className="text-4xl text-orange-600 hover:scale-110" />
          )}

          {/* PyTorch */}
          {skillName === "PyTorch" && (
            <SiPytorch className="text-4xl text-blue-800 hover:scale-110" />
          )}

          {/* AWS */}
          {skillName === "AWS" && (
            <SiAmazonaws className="text-4xl text-orange-400 hover:scale-110" />
          )}

          {/* Node JS */}
          {skillName === "NodeJS" && (
            <SiNodedotjs className="text-4xl text-green-600 hover:scale-110" />
          )}

          {/* Git */}
          {skillName === "Git" && (
            <SiGit className="text-4xl text-red-400 hover:scale-110" />
          )}

          {/* Azure */}
          {skillName === "Azure" && (
            <SiMicrosoftazure className="text-4xl text-blue-600 hover:scale-110" />
          )}
        </motion.div>
        <div className="flex items-center">
          <p className="ml-4 text-base lg:text-xl text-neutral-300 font-bold hover:scale-110">
            {skillName}
          </p>
        </div>
      </div>
      <div className=" w-full mt-8">
        <hr
          className="w-full border-t-8 lg:border-t-16 rounded border-neutral-300 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          style={{ width: hrWidth }}
        />
      </div>{" "}
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <div id="tech" className=" border-b border-neutral-800 pb-24 pt-2 mt-48 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -75 }}
        transition={{ duration: 1 }}
        className="my-20 mb-10 text-center text-5xl font-bold"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <SiPython className="text-4xl text-blue-500 hover:scale-110 " />
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <SiNodedotjs className="text-4xl text-blue-500 hover:scale-110 " />
        </motion.div>
        <motion.div
          initial={{ y: 2 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiC className="text-4xl text-gray-600 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -3 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiCplusplus className="text-4xl text-gray-700 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 4 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <TbSql className="text-4xl text-green-500 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -1 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiHtml5 className="text-4xl text-red-600 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiCss3 className="text-4xl text-blue-600 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 4 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiJavascript className="text-4xl text-yellow-400 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <RiReactjsLine className="text-4xl text-cyan-400 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 5 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <TbBrandNextjs className="text-4xl text-neutral-300 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 2 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <RiTailwindCssFill className="text-4xl text-blue-400 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -4 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiFlask className="text-4xl text-gray-500 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -2 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiTensorflow className="text-4xl text-orange-600 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 1 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiPytorch className="text-4xl text-blue-800 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: -4 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiGit className="text-4xl text-red-400 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 3 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiMicrosoftazure className="text-4xl text-blue-600 hover:scale-110" />
        </motion.div>
        <motion.div
          initial={{ y: 3 }}
          animate={{ y: [-5, 5] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          {" "}
          <SiAmazonaws className="text-4xl text-blue-600 hover:scale-110" />
        </motion.div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 gap-x-20 lg:gap-x-40 w-4/5 lg:w-3/4 mx-auto mt-24">
        <SkillItem skillName="Python" hrWidth="95%" LR={-150} />
        <SkillItem skillName="NodeJS" hrWidth="90%" LR={-150} />
        <SkillItem skillName="C" hrWidth="85%" LR={150} />
        <SkillItem skillName="C++" hrWidth="80%" LR={-150} />
        <SkillItem skillName="SQL" hrWidth="90%" LR={150} />
        <SkillItem skillName="React" hrWidth="80%" LR={-150} />
        <SkillItem skillName="Next.js" hrWidth="70%" LR={150} />
        <SkillItem skillName="HTML" hrWidth="85%" LR={-150} />
        <SkillItem skillName="CSS" hrWidth="80%" LR={150} />
        <SkillItem skillName="JavaScript" hrWidth="80%" LR={-150} />
        <SkillItem skillName="Flask" hrWidth="85%" LR={150} />
        <SkillItem skillName="TensorFlow" hrWidth="85%" LR={-150} />
        <SkillItem skillName="PyTorch" hrWidth="75%" LR={150} />
        <SkillItem skillName="Git" hrWidth="90%" LR={-150} />
        <SkillItem skillName="Azure" hrWidth="85%" LR={150} />
        <SkillItem skillName="AWS" hrWidth="85%" LR={150} />
      </div>
    </div>
  );
};

export default Technologies;
