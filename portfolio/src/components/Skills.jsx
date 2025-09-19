import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
  FaCloud,
  FaServer,
  FaKey,
  FaBrain,
  FaRobot,
  FaUpload,
} from "react-icons/fa6";
import {
  IoServerOutline,
  IoLeafOutline,
  IoColorPaletteOutline,
  IoRocketOutline,
  IoLogoVercel,
} from "react-icons/io5";

// --- Updated Data Structure with Descriptions ---
const skillsData = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact size={32} />,
      color: "#61DAFB",
      description: "Building dynamic, component-based user interfaces.",
    },
    {
      name: "JavaScript",
      icon: <FaJs size={32} />,
      color: "#F7DF1E",
      description: "Powering interactive and dynamic web experiences.",
    },
    {
      name: "Tailwind CSS",
      icon: <IoColorPaletteOutline size={32} />,
      color: "#38B2AC",
      description: "Crafting bespoke designs with utility-first CSS.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={32} />,
      color: "#E34F26",
      description: "The structural foundation of all web content.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={32} />,
      color: "#1572B6",
      description:
        "Styling and beautifying the visual presentation of the web.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={32} />,
      color: "#7952B3",
      description: "A robust toolkit for responsive, mobile-first projects.",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs size={32} />,
      color: "#339933",
      description: "Runtime for fast, scalable server-side applications.",
    },
    {
      name: "Express.js",
      icon: <IoServerOutline size={32} />,
      color: "#FFFFFF",
      description: "Minimalist framework for creating robust APIs.",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: <IoLeafOutline size={32} />,
      color: "#47A248",
      description: "Flexible NoSQL database for scalable applications.",
    },
    {
      name: "MySQL",
      icon: <FaDatabase size={32} />,
      color: "#4479A1",
      description: "Reliable relational database for structured data.",
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git",
      icon: <FaGitAlt size={32} />,
      color: "#F05032",
      description: "Essential version control for code collaboration.",
    },
    {
      name: "Render",
      icon: <FaServer size={32} />,
      color: "#46E3B7",
      description: "Cloud platform for deploying and scaling applications.",
    },
    {
      name: "Vercel",
      icon: <IoLogoVercel size={32} />,
      color: "#FFFFFF",
      description: "Seamless platform for deploying modern web apps.",
    },
    {
      name: "Cloudinary",
      icon: <FaCloud size={32} />,
      color: "#3448C5",
      description: "Cloud service for managing images and videos.",
    },
    {
      name: "Multer",
      icon: <FaUpload size={32} />,
      color: "#CCCCCC",
      description: "Node.js middleware for handling file uploads.",
    },
    {
      name: "JWT Auth",
      icon: <FaKey size={32} />,
      color: "#FB015B",
      description: "Implementing secure, token-based authentication.",
    },
    {
      name: "Gemini AI",
      icon: <FaBrain size={32} />,
      color: "#8E44AD",
      description: "Integrating Google's powerful generative AI models.",
    },
    {
      name: "OpenAI API",
      icon: <FaRobot size={32} />,
      color: "#412991",
      description: "Leveraging advanced AI for various applications.",
    },
  ],
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Main Component ---
const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / document.body.scrollHeight) * 100, // Adjust y based on scroll height
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
      id="skills"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={gradientTextStyle}
          >
            Tech Arsenal
          </h2>
          <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
            A curated collection of the technologies I wield to build modern,
            efficient, and scalable web applications.
          </p>
        </motion.div>

        {/* Skills Container */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, technologies]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold text-light-primary mb-8 text-center sm:text-left relative pl-4 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:bg-dark-primary after:rounded-full"
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="group bg-gradient-to-br from-light-primary/10 to-light-primary/5 p-6 rounded-xl border border-light-primary/10 transition-all duration-300 hover:border-dark-primary/50 hover:-translate-y-2"
                    animate={{
                      boxShadow: [
                        "0 0 0px 0px rgba(208, 255, 113, 0)",
                        "0 0 20px 0px rgba(208, 255, 113, 0.2)",
                        "0 0 0px 0px rgba(208, 255, 113, 0)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div style={{ color: tech.color }}>{tech.icon}</div>
                      <h4 className="text-lg font-bold text-light-primary">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-light-secondary text-sm">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
