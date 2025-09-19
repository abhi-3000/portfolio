import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IoSchoolOutline,
  IoTrophyOutline,
  IoRibbonOutline,
  IoStarOutline,
} from "react-icons/io5";

// --- Data Arrays ---
const educationData = [
  {
    icon: <IoSchoolOutline size={28} />,
    institution: "IIIT Ranchi",
    degree: "B.Tech, Electronics & Communication Engineering",
    duration: "2022 - 2026",
    score: "CGPA: 7.0 / 10",
  },
  {
    icon: <IoSchoolOutline size={28} />,
    institution: "DAV Public School, Jamshedpur", // Replace with your school
    degree: "Class XII (CBSE)",
    duration: "Completed: 2021",
    score: "Percentage: 79%", // Replace with your score
  },
  {
    icon: <IoSchoolOutline size={28} />,
    institution: "Motilal Nehru Public School, Jamshedpur", // Replace with your school
    degree: "Class X (ICSE)",
    duration: "Completed: 2019",
    score: "Percentage: 94%", // Replace with your score
  },
];

const achievementsData = [
  //   {
  //     icon: <IoTrophyOutline size={24} />,
  //     title: "Codeforces Specialist",
  //     description:
  //       "Achieved a peak rating of 1450+ on Codeforces, solving over 500 algorithmic problems.",
  //   },
  {
    icon: <IoRibbonOutline size={24} />,
    title: "Hackathon Runner-Up",
    description:
      "Finished with Rank 3 in the college’s internal round of Smart India Hackathon.",
  },
  {
    icon: <IoStarOutline size={24} />,
    title: "Top Performer in DSA",
    description:
      "Consistently ranked in the top 10% in Data Structures & Algorithms coursework and contests. Also, solved over 200 problems in DSA & CP domain",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// --- Main Component ---
const Education = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / document.body.scrollHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientTextStyle = {
    background: `linear-gradient(135deg, #d0ff71 0%, #aaff55 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section
      id="education"
      className="relative w-full bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.07) 0%, transparent 40%), #1a1a1a`,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={gradientTextStyle}
          >
            Academic Journey & Accolades
          </h2>
          <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
            A timeline of my educational background and key achievements that
            have shaped my skills.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-light-primary text-center lg:text-left">
              Education
            </h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-5"
              >
                <div className="mt-1 flex-shrink-0 w-12 h-12 bg-dark-primary/10 rounded-full flex items-center justify-center border border-dark-primary/30 text-dark-primary">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-light-primary">
                    {edu.institution}
                  </h4>
                  <p className="text-dark-primary font-medium mt-1">
                    {edu.degree}
                  </p>
                  <div className="text-sm text-light-secondary mt-2">
                    <span>{edu.duration}</span>
                    <span className="mx-2 text-dark-primary/50">•</span>
                    <span>{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-light-primary text-center lg:text-left">
              Achievements
            </h3>
            {achievementsData.map((ach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-light-primary/10 to-light-primary/5 p-6 rounded-xl border border-light-primary/10 transition-all duration-300 hover:border-dark-primary/50 hover:-translate-y-1.5"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(208, 255, 113, 0)",
                    "0 0 15px 0px rgba(208, 255, 113, 0.15)",
                    "0 0 0px 0px rgba(208, 255, 113, 0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-dark-primary flex-shrink-0 mt-1">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-light-primary text-lg">
                      {ach.title}
                    </h4>
                    <p className="text-light-secondary text-sm mt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
