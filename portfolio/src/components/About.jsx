import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import myImage2 from "../assets/abhi3.png";
import {
  FaDumbbell,
  FaPalette,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

const About = () => {
  const [hoveredInterest, setHoveredInterest] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = document.getElementById("about-section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -10,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const interestVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const interests = [
    { name: "MERN Stack", icon: <FaCode />, color: "#61DAFB" },
    { name: "Fitness", icon: <FaDumbbell />, color: "#FF6B6B" },
    { name: "Sketching", icon: <FaPalette />, color: "#4ECDC4" },
    { name: "Clean Code", icon: <FaLightbulb />, color: "#FFD93D" },
    { name: "UI/UX", icon: <FaHeart />, color: "#FF6B9D" },
    { name: "Problem Solving", icon: <FaRocket />, color: "#A8E6CF" },
  ];

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div
        id="about-section"
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.08) 0%, transparent 40%), 
                      linear-gradient(180deg, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 1) 100%)`,
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(208, 255, 113, 0.1) 49%, rgba(208, 255, 113, 0.1) 51%, transparent 52%)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-dark-primary/10 to-transparent rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-dark-primary/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={textRevealVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-primary mb-4">
            <span className="inline-block bg-gradient-to-r from-light-primary via-dark-primary to-light-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-light-secondary/70 text-lg">
            Turning ideas into digital reality
          </p>
          <motion.div
            className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-dark-primary to-transparent"
            animate={{ scaleX: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Enhanced Text Content */}
          <motion.div variants={textRevealVariants} className="relative">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-8 -left-4 text-8xl text-dark-primary/10 font-serif">
              "
            </div>

            <div className="relative z-10 space-y-6">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-light-primary mb-6">
                  Crafting Digital Experiences
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-dark-primary to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </h3>
              </div>

              <div className="space-y-4 text-light-secondary/90 text-base sm:text-lg leading-relaxed">
                <p className="relative pl-4 border-l-2 border-dark-primary/30 hover:border-dark-primary transition-colors duration-300">
                  As a{" "}
                  <span className="text-dark-primary font-semibold">
                    MERN Stack Developer
                  </span>
                  , my passion lies in translating complex problems into
                  elegant, user-centric digital experiences. I thrive on
                  building scalable web applications from the ground up.
                </p>

                <p className="relative pl-4 border-l-2 border-dark-primary/30 hover:border-dark-primary transition-colors duration-300">
                  Beyond the screen, my discipline is forged in the{" "}
                  <span className="text-dark-primary font-semibold">gym</span>.
                  Being a fitness enthusiast has taught me persistence and
                  resilience—qualities I channel into debugging complex issues.
                </p>

                <p className="relative pl-4 border-l-2 border-dark-primary/30 hover:border-dark-primary transition-colors duration-300">
                  My creativity flows from pencil to canvas; as a{" "}
                  <span className="text-dark-primary font-semibold">
                    sketch artist
                  </span>
                  , I have an ingrained eye for detail and aesthetics. This
                  unique blend creates pixel-perfect interfaces.
                </p>
              </div>

              {/* Enhanced Interests Grid */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-light-primary mb-6">
                  Interests & Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={interestVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(208, 255, 113, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredInterest(index)}
                      onHoverEnd={() => setHoveredInterest(null)}
                      className="relative group cursor-pointer"
                    >
                      <div className="relative bg-gradient-to-br from-dark-secondary to-dark-secondary/50 p-3 rounded-xl border border-dark-primary/20 overflow-hidden">
                        {/* Hover Gradient */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${interest.color}20, transparent)`,
                          }}
                        />

                        <div className="relative flex items-center gap-2">
                          <span
                            className="text-lg transition-colors duration-300"
                            style={{
                              color:
                                hoveredInterest === index
                                  ? interest.color
                                  : "#d0ff71",
                            }}
                          >
                            {interest.icon}
                          </span>
                          <span className="text-sm font-medium text-light-secondary group-hover:text-light-primary transition-colors">
                            {interest.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Enhanced Image with Effects */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center items-center"
          >
            <div className="relative group">
              {/* Morphing Background Shapes */}
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  borderRadius: [
                    "20% 80% 70% 30%",
                    "60% 40% 30% 70%",
                    "20% 80% 70% 30%",
                  ],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-dark-primary/30 to-dark-primary/10 blur-2xl scale-110"
              />

              {/* Multiple Rotating Frames */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dark-primary/20 rounded-3xl"
                style={{ transform: "scale(1.1)" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dark-primary/10 rounded-3xl"
                style={{ transform: "scale(1.05)" }}
              />

              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-transparent to-dark-primary opacity-20 rounded-3xl" />
                <img
                  src={myImage2}
                  alt="Abhishek Mandal"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-dark-primary/20 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x400/303030/d0ff71?text=Your\nImage";
                  }}
                />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-dark-primary rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-dark-primary rounded-br-3xl" />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-br from-dark-primary to-dark-primary/70 px-4 py-2 rounded-full shadow-xl"
                >
                  <span className="text-dark-secondary font-bold text-sm">
                    Developer
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   // Animation for the container to stagger children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   // Animation for the text content (slide in from left)
//   const textVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Animation for the image (slide in from right)
//   const imageVariants = {
//     hidden: { opacity: 0, x: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const interests = [
//     "MERN Stack",
//     "Fitness",
//     "Sketching",
//     "Clean Code",
//     "UI/UX",
//     "Problem Solving",
//   ];

//   return (
//     <section
//       id="about"
//       className="w-full bg-dark-secondary font-inter py-24 sm:py-32 overflow-hidden"
//     >
//       <motion.div
//         className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Left Side: Text Content */}
//         <motion.div variants={textVariants}>
//           <h2 className="text-3xl sm:text-4xl font-bold text-light-primary tracking-tight mb-4">
//             A Little Bit About Me
//             <span className="block h-1 w-20 bg-dark-primary mt-2"></span>
//           </h2>
//           <p className="text-light-secondary text-base sm:text-lg leading-relaxed">
//             As a MERN Stack Developer, my passion lies in translating complex
//             problems into elegant, user-centric digital experiences. I thrive on
//             building scalable web applications from the ground up, bringing
//             ideas to life with clean and efficient code.
//             <br />
//             <br />
//             Beyond the screen, my discipline is forged in the gym. Being a
//             fitness freak has taught me persistence and resilience—qualities I
//             channel into debugging complex issues. My creativity flows from
//             pencil to canvas; as a sketch artist, I have an ingrained eye for
//             detail and aesthetics. This unique blend of analytical thinking and
//             artistic vision is my secret sauce for crafting not just functional,
//             but pixel-perfect interfaces.
//           </p>
//           <div className="mt-8">
//             <h3 className="text-light-primary font-semibold mb-3">
//               Interests & Expertise:
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {interests.map((interest, index) => (
//                 <span
//                   key={index}
//                   className="bg-dark-primary/10 text-dark-primary text-sm font-medium px-4 py-2 rounded-full border border-dark-primary/30"
//                 >
//                   {interest}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side: Image */}
//         <motion.div
//           variants={imageVariants}
//           className="flex justify-center items-center"
//         >
//           <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
//             <div className="absolute inset-0 bg-dark-primary rounded-2xl transform -rotate-6 transition-transform duration-500 group-hover:rotate-0"></div>
//             <div className="absolute inset-0 bg-light-primary/10 backdrop-blur-sm rounded-2xl transform rotate-6 transition-transform duration-500 group-hover:rotate-0"></div>
//             <img
//               src="https://placehold.co/400x400/303030/d0ff71?text=Your\nImage" // Replace with your image URL
//               alt="Abhishek Mandal"
//               className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src =
//                   "https://placehold.co/400x400/303030/d0ff71?text=Your\nImage";
//               }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;
