import { motion } from "framer-motion";
import Waterloo from '../assets/waterloo.png'
import Laurier from '../assets/laurier.png'

const Education = () => {
  // Dummy data for demonstration
  const EDUCATIONS = [
    {
      schoolName: "The University of Waterloo",
      logoUrl: Waterloo,
      degreeType: "Bachelors of ", 
      degreeName: "Computer Science",
      gpa: "4.0", 
      additionalInfo: "Hackathons: \n3rd at Hack with AI Google Development \n5th at Wildfire AI Hackathon \n\nExtracurricular: \nProjections Hackathon Organizer at Google Development Student Club",
      courses: ["Algorithm Design & Data Abstraction", "Tools for Software Development", "Combinatrics & Optimization"], 
    },
    {
      schoolName: "Wilfrid Laurier University",
      logoUrl: Laurier,
      degreeType: "Bachelors of ", 
      degreeName: "Business Administration",
      gpa: "4.0", 
      additionalInfo: "Case Competitions Wins: \n1st at BDO Future Leaders \n1st at UW Management Consulting Case Competition \nAdditional Case Competitions: \nSnapchat Xlerate Lazaridis \nTech Consulting with IBM \nParachute Growth Strategy consulting",
      courses: ["Mangerial Microeconomics", "Macroeconomics", "Functional Areas of Organization"], 
    },
  ];

  return (
    <div id="education" className="border-b border-neutral-900 pb-4 mx-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold" // Increased font size
      >
        Education
      </motion.h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-x-40 w-full lg:w-3/4 mx-auto">
        {EDUCATIONS.map((education, index) => (
          <div key={index} className="flex flex-col lg:flex-row mb-8">
            {/* Left column for logo */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <img src={education.logoUrl} alt="School Logo" className="h-20 mx-auto" /> {/* Increased logo size */}
            </div>
            {/* Right column for details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 text-xl font-semibold">{education.schoolName}</h6> {/* Increased heading size */}
              <p className="mb-2 text-lg text-neutral-300">{education.degreeType}<span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text  tracking-tight text-transparent">{education.degreeName}</span></p> {/* Increased text size */}
              <p className="mb-2 text-lg text-neutral-300">GPA: <span className="text-yellow-400">{education.gpa}</span></p> {/* Increased text size */}
              {/* Additional paragraph with split lines */}
              <div className="mb-4">
                {education.additionalInfo.split("\n").map((line, idx) => (
                  <p
                    key={idx}
                    className="mb-2 text-sm text-neutral-400"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="mb-4">
                {education.courses.map((course, idx) => (
                  <p
                    key={idx}
                    className="mt-2 rounded bg-neutral-900 px-3 py-2 text-lg text-purple-600 font-medium inline-block" // Increased padding and text size
                  >
                    {course}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
