import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ca from "../assets/ca_ss.png";
import tapin from "../assets/tapin_ss.png";
import apex from "../assets/apex_ss.png";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaKey,
  FaCloud,
  FaMapMarkerAlt,
  FaServer,
  FaBrain,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiVercel,
  SiGooglegemini,
  SiCloudinary,
} from "react-icons/si"; // Added SiCloudinary

// --- Projects Data ---
const projectsData = [
  {
    title: "NK Consultancy",
    description:
      "I built this full-stack MERN CA Consultancy portal to digitalize my father's CA consultancy business. It offers secure client & admin dashboards to manage service requests, document uploads, and payments via Razorpay, replacing manual workflows with a seamless and transparent digital experience for his clients.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "Multer",
      "Framer Motion",
    ],
    imageUrl: ca,
    liveLink: "https://nk-zeta-fawn.vercel.app/",
    githubLink: "https://github.com/abhi-3000/ca-consultancy",
  },
  {
    title: "Tap In",
    description:
      "Built this micro-event ticketing a platform to easily host & manage college/residential society events. I developed this MERN stack (React, Node, Express, MongoDB) solution with secure QR tickets, Razorpay payments, and AI tools. It simplifies event setup, check-ins, and attendee management, moving beyond manual processes for local community gatherings.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS3",
      "Razorpay",
      "Gemini API",
      "JWT",
      "Cloudinary",
      "Multer",
    ],
    imageUrl: tapin,
    liveLink: "https://tap-in-kappa.vercel.app/",
    githubLink: "https://github.com/abhi-3000/TapIn",
  },
  // --- Updated Third Project ---
  {
    title: "Apex Hire | AI Interview Platform",
    description:
      "Architected an AI interview platform using React/TypeScript & Vercel Serverless Functions. Integrates Gemini API for resume parsing, answer evaluation, & candidate leaderboards with detailed reports. Features Redux Toolkit (Persist) for session management & a responsive UI via shadcn/ui.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vercel Serverless Functions",
      "Gemini API",
      "shadcn/ui",
      "Framer Motion",
      "Tailwind CSS",
    ],
    imageUrl: apex,
    liveLink:
      "https://apex-hire-8pej0evvr-abhishek-mandals-projects-e004a46c.vercel.app/",
    githubLink: "https://github.com/abhi-3000/apex-hire",
  },
];

// --- Tech Tag Component for mapping icons ---
// Updated to use Fa and Si consistently
const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />, // Use Si icon
  "Tailwind CSS": <SiTailwindcss />,
  Express: <SiExpress />,
  JWT: <FaKey />,
  CSS3: null,
  Razorpay: null,
  Cloudinary: <SiCloudinary />, // Use Si icon
  Multer: null,
  "Framer Motion": null,
  "Gemini API": <SiGooglegemini />,
  Mapbox: <FaMapMarkerAlt />, // Use Fa Map marker
  TypeScript: <SiTypescript />,
  "Redux Toolkit": <SiRedux />,
  "Vercel Functions": <SiVercel />, // Use Si Vercel icon
  "shadcn/ui": null,
};

// --- Main Component ---
const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const viewportX = e.clientX;
      const viewportY = e.clientY;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const relativeY = viewportY + scrollY;

      setMousePosition({
        x: (viewportX / window.innerWidth) * 100,
        y: (relativeY / document.body.scrollHeight) * 100,
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
      id="projects"
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
            Digital Creations
          </h2>
          <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in
            creating functional and user-friendly web applications.
          </p>
        </motion.div>

        {/* Projects Container */}
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Laptop Graphic */}
              <motion.div
                className={`relative w-full ${
                  index % 2 === 0 ? "lg:order-last" : ""
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video p-4 sm:p-6 bg-gradient-to-br from-light-primary/10 to-light-primary/5 rounded-2xl border border-light-primary/10 shadow-2xl shadow-black/30">
                  {/* Screen content */}
                  <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/1280x800/3a3a3a/d0ff71?text=Project+Error`;
                      }}
                    />
                  </div>
                  {/* Laptop base */}
                  <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[110%] h-4 bg-gray-800 rounded-b-lg border-x-4 border-b-4 border-gray-900 z-[-1]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <h3 className="text-3xl font-bold text-light-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-light-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 bg-dark-primary/10 text-dark-primary text-sm font-medium px-3 py-1.5 rounded-full border border-dark-primary/30"
                    >
                      {/* Render icon only if it exists in the map */}
                      {techIcons[tag]
                        ? React.cloneElement(techIcons[tag], {
                            className: "text-lg",
                          })
                        : null}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 overflow-hidden rounded-lg font-bold bg-dark-primary text-dark-secondary transition-all duration-300 hover:scale-105 active:scale-95 ${
                      project.liveLink === "#"
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : ""
                    }`}
                    aria-disabled={project.liveLink === "#"}
                    onClick={(e) =>
                      project.liveLink === "#" && e.preventDefault()
                    }
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 overflow-hidden rounded-lg font-bold bg-light-primary/10 text-light-primary border border-light-primary/20 transition-all duration-300 hover:bg-light-primary/20 hover:scale-105 active:scale-95 ${
                      project.githubLink === "#"
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : ""
                    }`}
                    aria-disabled={project.githubLink === "#"}
                    onClick={(e) =>
                      project.githubLink === "#" && e.preventDefault()
                    }
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
