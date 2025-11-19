import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Switching ALL icons to 'fa' for maximum stability
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaJs,
  FaReact,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import cvnt from "../assets/cvnt.webp";

// --- Experience Data ---
const experienceData = [
  {
    company: "CVNT",
    logoUrl: cvnt,
    role: "Full Stack Developer Intern",
    duration: "Oct 2025 - Present",
    location: "Remote",
    description: [
      "Architected and engineered the entire backend from scratch for a high-traffic e-commerce platform using Next.js (API Routes) and Node.js.",
      "Designed and implemented a comprehensive authentication system with Supabase Auth, integrating OTP, Google (Social) Login, and JWT-based session management.",
      "Engineered a secure e-commerce workflow by integrating the Razorpay payment gateway, handling payment intents and verifying transactions via server-side webhooks.",
      "Developed a complete suite of RESTful APIs for core features, including product catalogs, cart management, user profiles (addresses), and a multi-step checkout process.",
      "Built and managed all admin-facing endpoints for product (CRUD), order, shipping, and discount (coupon) management.",
      "Implemented Google Analytics and Google Tag Manager (GTM) to track user behavior and provide key metrics for performance marketing.",
      "Engineered advanced features including a multi-channel 'Notify Me' (Stock Alert) system (Email/WhatsApp) and APIs for wishlists and customer reviews.",
    ],
    // Updated with stable icons
    techStack: [
      { name: "Next.js", icon: <FaReact />, color: "#FFFFFF", bg: "#000000" }, // Using React icon as Next.js is React-based
      {
        name: "Supabase",
        icon: <FaDatabase />,
        color: "#3ECF8E",
        bg: "rgba(62, 207, 142, 0.1)",
      }, // Database icon
      {
        name: "JavaScript",
        icon: <FaJs />,
        color: "#F7DF1E",
        bg: "rgba(247, 223, 30, 0.1)",
      },
      {
        name: "Hostinger",
        icon: <FaServer />,
        color: "#673DE6",
        bg: "rgba(103, 61, 230, 0.1)",
      }, // Server icon
    ],
  },
];

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.02, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const gradientTextStyle = {
    background: `linear-gradient(135deg, #d0ff71 0%, #aaff55 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section
      id="experience"
      className="relative w-full bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.05) 0%, transparent 40%), #1a1a1a`,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
            My journey in the tech industry, delivering impact and building
            scalable solutions.
          </p>
        </motion.div>

        {/* Experience Cards Container */}
        <div className="flex flex-col gap-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group"
            >
              {/* "Lightning" Border Effect */}
              <motion.div
                className="absolute -inset-[2px] rounded-[22px] bg-gradient-to-r from-transparent via-dark-primary to-transparent opacity-70 blur-sm"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />

              {/* Main Glass Container */}
              <div className="relative bg-dark-secondary/60 backdrop-blur-2xl rounded-[20px] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Shiny Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                <div className="p-8 md:p-10 relative z-10">
                  {/* Header: Role & Company with Logo */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
                    <div className="flex items-center gap-5">
                      {/* Company Logo */}
                      <div className="w-16 h-16 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 shadow-inner overflow-hidden shrink-0">
                        <img
                          src={exp.logoUrl}
                          alt={exp.company}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>

                      <div>
                        <motion.h3
                          variants={itemVariants}
                          className="text-2xl md:text-3xl font-bold text-light-primary tracking-wide"
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.div
                          variants={itemVariants}
                          className="flex items-center gap-2 text-lg text-dark-primary font-medium mt-1"
                        >
                         
                          <span>{exp.company}</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Meta Data (Date & Loc) */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col gap-2 text-light-secondary/70 text-medium font-medium bg-black/20 p-4 rounded-lg border border-white/5 self-start md:self-center min-w-[200px]"
                    >
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-dark-primary" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-dark-primary" />
                        {exp.location}
                      </div>
                    </motion.div>
                  </div>

                  {/* Layout: Description stacked vertically, Tech below */}
                  <div className="flex flex-col gap-8">
                    {/* Description Points */}
                    <div>
                      <motion.h4
                        variants={itemVariants}
                        className="text-lg font-semibold text-light-primary mb-4 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-6 bg-dark-primary rounded-full shadow-[0_0_10px_#d0ff71]"></span>
                        Key Contributions
                      </motion.h4>
                      <ul className="flex flex-col gap-4">
                        {exp.description.map((point, i) => (
                          <motion.li
                            key={i}
                            variants={itemVariants}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                          >
                            <span className="mt-2 min-w-[8px] h-[8px] bg-gradient-to-br from-dark-primary to-transparent rounded-full" />
                            <span className="text-light-secondary/90 text-xl leading-relaxed">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tiles - Now Below Description */}
                    <div>
                      <motion.h4
                        variants={itemVariants}
                        className="text-lg font-semibold text-light-primary mb-5 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-6 bg-dark-primary rounded-full shadow-[0_0_10px_#d0ff71]"></span>
                        Technologies
                      </motion.h4>

                      <motion.div
                        className="flex flex-wrap gap-4"
                        variants={containerVariants}
                      >
                        {exp.techStack.map((tech, i) => (
                          <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 shadow-lg cursor-default"
                            style={{
                              backgroundColor:
                                tech.bg || "rgba(255,255,255,0.03)",
                              borderColor: `${tech.color}30`, // 30% opacity of the brand color
                              boxShadow: `0 4px 20px -5px ${tech.color}20`, // Colored shadow
                            }}
                          >
                            <span
                              className="text-2xl"
                              style={{ color: tech.color }}
                            >
                              {tech.icon}
                            </span>
                            <span className="text-sm font-bold text-light-primary/90">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // Switching to stable Io5 icons for UI elements
// import {
//   IoBriefcase,
//   IoLocation,
//   IoCalendar,
//   IoConstruct,
//   IoRocket,
//   IoShieldCheckmark,
//   IoBulb,
//   IoPeople,
//   IoTrendingUp,
// } from "react-icons/io5";

// // Switching to Fa6 for brands to avoid 'si' resolution errors
// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaPython,
//   FaAws,
//   FaGoogle,
//   FaAngular,
//   FaVuejs,
//   FaSketch,
//   FaBrain,
//   FaWind,
//   FaPenNib,
// } from "react-icons/fa6";

// // --- Experience Data ---
// const experienceData = [
//   {
//     company: "AURORA INNOVATIONS",
//     role: "Lead UI/UX Architect",
//     duration: "Jan 2021 - Present",
//     location: "San Francisco, CA",
//     description: [
//       {
//         icon: <IoConstruct />,
//         text: "Spearheaded design of enterprise-level AI AI platforms.",
//       },
//       {
//         icon: <IoTrendingUp />,
//         text: "Improved UX by 40% through iterative testing.",
//       },
//       { icon: <IoRocket />, text: "Launched 5+ successful product redesigns." },
//       {
//         icon: <IoPeople />,
//         text: "Developed user-centric interfaces for global markets.",
//       },
//       {
//         icon: <IoBulb />,
//         text: "Mentored junior designers on best practices.",
//       },
//       {
//         icon: <IoShieldCheckmark />,
//         text: "Collaborated with cross-functional teams.",
//       },
//     ],
//     techStack: [
//       { name: "React", icon: <FaReact /> },
//       { name: "Angular", icon: <FaAngular /> },
//       { name: "Vue.js", icon: <FaVuejs /> },
//       { name: "Node.js", icon: <FaNodeJs /> },
//       { name: "Python", icon: <FaPython /> },
//       { name: "TypeScript", icon: <FaJs /> }, // Using JS icon as fallback
//       { name: "AWS", icon: <FaAws /> },
//       { name: "GCP", icon: <FaGoogle /> },
//       { name: "Sketch", icon: <FaSketch /> },
//       { name: "Adobe XD", icon: <FaPenNib /> }, // Generic design icon
//       { name: "TensorFlow", icon: <FaBrain /> }, // Generic AI icon
//       { name: "Tailwind", icon: <FaWind /> }, // Wind icon for Tailwind
//       { name: "HTML5", icon: <FaHtml5 /> },
//       { name: "CSS3", icon: <FaCss3 /> },
//       { name: "JavaScript", icon: <FaJs /> },
//     ],
//   },
// ];

// const Experience = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // --- Animation Variants ---
//   const headerVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
//     },
//   };

//   const detailItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const techStackHeaderVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
//     },
//   };

//   const techTileVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const gradientTextStyle = {
//     background: `linear-gradient(135deg, #d0ff71 0%, #aaff55 100%)`,
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   };

//   return (
//     <section
//       id="experience"
//       className="relative w-full bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div
//         className="absolute inset-0 z-0 transition-all duration-300"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.05) 0%, transparent 40%), #1a1a1a`,
//         }}
//       />
//       <div
//         className="absolute inset-0 z-0 opacity-20"
//         style={{
//           backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={headerVariants}
//         >
//           <h2
//             className="text-4xl sm:text-5xl font-bold tracking-tight"
//             style={gradientTextStyle}
//           >
//             Professional Experience
//           </h2>
//           <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
//             My journey in the tech industry, delivering impact and building
//             scalable solutions.
//           </p>
//         </motion.div>

//         {/* Experience Cards Container */}
//         <div className="flex flex-col gap-12">
//           {experienceData.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               className="relative p-1 rounded-3xl bg-gradient-to-br from-light-primary/10 to-light-primary/5 border border-light-primary/10 shadow-2xl overflow-hidden"
//             >
//               {/* Inner Content */}
//               <div className="bg-dark-secondary/80 backdrop-blur-xl rounded-[20px] p-8 md:p-12">
//                 {/* Header: Role & Company */}
//                 <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-light-primary/10 pb-8">
//                   <div className="flex items-center gap-4">
//                     {/* Company Logo/Icon placeholder */}
//                     <div className="w-16 h-16 bg-dark-primary/20 rounded-xl flex items-center justify-center text-dark-primary text-4xl font-bold p-2">
//                       <span style={gradientTextStyle}>AI</span>
//                     </div>
//                     <div>
//                       <motion.h3
//                         variants={detailItemVariants}
//                         className="text-2xl sm:text-3xl font-bold text-light-primary mb-1"
//                       >
//                         {exp.role}
//                       </motion.h3>
//                       <motion.p
//                         variants={detailItemVariants}
//                         className="text-lg text-dark-primary font-semibold"
//                       >
//                         {exp.company}
//                       </motion.p>
//                     </div>
//                   </div>

//                   <motion.div
//                     variants={detailItemVariants}
//                     className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-light-secondary/80 font-medium"
//                   >
//                     <div className="flex items-center gap-2 bg-light-primary/5 px-4 py-2 rounded-full border border-light-primary/10">
//                       <IoCalendar className="text-dark-primary" />
//                       {exp.duration}
//                     </div>
//                     <div className="flex items-center gap-2 bg-light-primary/5 px-4 py-2 rounded-full border border-light-primary/10">
//                       <IoLocation className="text-dark-primary" />
//                       {exp.location}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Main Layout: Description & Tech Stack */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                   {/* Description Points */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//                     {exp.description.map((point, i) => (
//                       <motion.div
//                         key={i}
//                         variants={detailItemVariants}
//                         custom={i} // Use custom prop for staggered delay
//                         className="flex items-start gap-3 text-light-secondary text-base leading-relaxed"
//                       >
//                         <div className="mt-1 text-dark-primary text-lg flex-shrink-0">
//                           {point.icon}
//                         </div>
//                         {point.text}
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Tech Stack Tiles */}
//                   <div className="lg:pl-8 lg:border-l border-light-primary/10">
//                     <motion.h4
//                       variants={techStackHeaderVariants}
//                       className="text-xl font-semibold text-light-primary mb-6 flex items-center gap-2"
//                     >
//                       <span className="w-8 h-1 bg-dark-primary rounded-full inline-block"></span>
//                       Tech Stacks
//                     </motion.h4>

//                     <motion.div
//                       className="grid grid-cols-2 sm:grid-cols-3 gap-3"
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true, amount: 0.2 }}
//                       variants={{
//                         visible: { transition: { staggerChildren: 0.08 } },
//                       }} // Stagger tech tiles
//                     >
//                       {exp.techStack.map((tech, i) => (
//                         <motion.div
//                           key={i}
//                           variants={techTileVariants}
//                           whileHover={{
//                             scale: 1.05,
//                             backgroundColor: "rgba(208, 255, 113, 0.1)", // Green tint on hover
//                             borderColor: "rgba(208, 255, 113, 0.4)",
//                             boxShadow: "0 0 15px rgba(208, 255, 113, 0.2)",
//                           }}
//                           className="flex items-center justify-center gap-2 p-3 bg-light-primary/5 border border-light-primary/10 rounded-lg cursor-default transition-all duration-300"
//                         >
//                           <span className="text-xl text-dark-primary">
//                             {tech.icon}
//                           </span>
//                           <span className="text-sm font-medium text-light-primary">
//                             {tech.name}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // Switched to Io5 for interface icons - cleaner and often more stable
// import { IoBriefcaseOutline, IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
// // Keeping Si for brand icons
// import {
//     SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript
// } from "react-icons/si";

// // --- Experience Data ---
// // Customize this with your actual company details
// const experienceData = [
//   {
//     company: "Tech Innovators Inc.", // Replace with your company name
//     role: "Full Stack Developer Intern", // Replace with your role
//     duration: "Jan 2025 - Present", // Replace with your duration
//     location: "Bangalore, India", // Replace with location
//     description: [
//       "Spearheaded the migration of a legacy monolithic architecture to a scalable microservices-based system using Node.js and Express, improving system reliability by 40%.",
//       "Developed and optimized high-performance RESTful APIs, reducing server response time by 30% and ensuring seamless data flow for the frontend.",
//       "Implemented robust authentication and authorization protocols using JWT and OAuth2.0 to secure sensitive user data across the platform.",
//       "Collaborated closely with the UI/UX team to translate Figma designs into responsive, pixel-perfect React components using Tailwind CSS.",
//       "Integrated third-party APIs like Stripe for payments and SendGrid for email services, enhancing the platform's core functionality.",
//       "Actively participated in daily stand-ups and code reviews, consistently delivering clean, maintainable code and mentoring junior interns.",
//     ],
//     techStack: [
//       { name: "React", icon: <SiReact /> },
//       { name: "Node.js", icon: <SiNodedotjs /> },
//       { name: "Express", icon: <SiExpress /> },
//       { name: "MongoDB", icon: <SiMongodb /> },
//       { name: "TypeScript", icon: <SiTypescript /> },
//       { name: "Tailwind", icon: <SiTailwindcss /> },
//     ],
//   },
// ];

// const Experience = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Mouse tracking for subtle background effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // --- Animation Variants ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const techTileVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.4 }
//     },
//   };

//   const gradientTextStyle = {
//     background: `linear-gradient(135deg, #d0ff71 0%, #aaff55 100%)`,
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   };

//   return (
//     <section
//       id="experience"
//       className="relative w-full bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div
//         className="absolute inset-0 z-0 transition-all duration-300"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.05) 0%, transparent 40%), #1a1a1a`,
//         }}
//       />
//       <div
//         className="absolute inset-0 z-0 opacity-20"
//         style={{
//           backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2
//             className="text-4xl sm:text-5xl font-bold tracking-tight"
//             style={gradientTextStyle}
//           >
//             Professional Experience
//           </h2>
//           <p className="mt-4 text-lg text-light-secondary max-w-3xl mx-auto">
//             My journey in the tech industry, delivering impact and building scalable solutions.
//           </p>
//         </motion.div>

//         {/* Experience Cards Container */}
//         <div className="flex flex-col gap-12">
//           {experienceData.map((exp, index) => (
//             <motion.div
//               key={index}
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               className="relative"
//             >
//               {/* Glassmorphic Card */}
//               <div className="relative p-1 rounded-3xl bg-gradient-to-br from-light-primary/10 to-light-primary/5 border border-light-primary/10 shadow-2xl overflow-hidden">
//                 {/* Inner Content */}
//                 <div className="bg-dark-secondary/80 backdrop-blur-xl rounded-[20px] p-8 md:p-12">

//                   {/* Header: Role & Company */}
//                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-light-primary/10 pb-8">
//                     <div>
//                       <motion.h3
//                         variants={itemVariants}
//                         className="text-3xl font-bold text-light-primary mb-2"
//                       >
//                         {exp.role}
//                       </motion.h3>
//                       <motion.div variants={itemVariants} className="flex items-center gap-3 text-xl text-dark-primary font-semibold">
//                         <IoBriefcaseOutline className="text-lg" />
//                         <span>{exp.company}</span>
//                       </motion.div>
//                     </div>

//                     <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-light-secondary/80 font-medium">
//                       <div className="flex items-center gap-2 bg-light-primary/5 px-4 py-2 rounded-full border border-light-primary/10">
//                         <IoCalendarOutline className="text-dark-primary" />
//                         {exp.duration}
//                       </div>
//                       <div className="flex items-center gap-2 bg-light-primary/5 px-4 py-2 rounded-full border border-light-primary/10">
//                         <IoLocationOutline className="text-dark-primary" />
//                         {exp.location}
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Main Layout: Description & Tech Stack */}
//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//                     {/* Description Points */}
//                     <div className="lg:col-span-2 space-y-4">
//                       <motion.h4 variants={itemVariants} className="text-xl font-semibold text-light-primary mb-4 flex items-center gap-2">
//                         <span className="w-8 h-1 bg-dark-primary rounded-full inline-block"></span>
//                         Key Responsibilities
//                       </motion.h4>
//                       <ul className="space-y-3">
//                         {exp.description.map((point, i) => (
//                           <motion.li
//                             key={i}
//                             variants={itemVariants}
//                             className="flex items-start gap-3 text-light-secondary text-lg leading-relaxed"
//                           >
//                             <span className="mt-2 min-w-[6px] h-[6px] bg-dark-primary rounded-full shadow-[0_0_8px_rgba(208,255,113,0.8)]" />
//                             {point}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Tech Stack Tiles */}
//                     <div className="lg:col-span-1">
//                        <motion.h4 variants={itemVariants} className="text-xl font-semibold text-light-primary mb-6 flex items-center gap-2">
//                         <span className="w-8 h-1 bg-dark-primary rounded-full inline-block"></span>
//                         Technologies Used
//                       </motion.h4>

//                       <motion.div
//                         className="grid grid-cols-2 gap-3"
//                         variants={containerVariants}
//                       >
//                         {exp.techStack.map((tech, i) => (
//                           <motion.div
//                             key={i}
//                             variants={techTileVariants}
//                             whileHover={{
//                               scale: 1.05,
//                               backgroundColor: "rgba(208, 255, 113, 0.1)",
//                               borderColor: "rgba(208, 255, 113, 0.4)"
//                             }}
//                             className="flex flex-col items-center justify-center gap-2 p-4 bg-light-primary/5 border border-light-primary/10 rounded-xl cursor-default transition-colors duration-300"
//                           >
//                             <span className="text-2xl text-dark-primary">{tech.icon}</span>
//                             <span className="text-sm font-medium text-light-primary">{tech.name}</span>
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
