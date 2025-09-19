import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import myImage1 from "../assets/abhi1.png";
import {
  FaDownload,
  FaHandSpock,
  FaCode,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IoLeafOutline, IoServerOutline } from "react-icons/io5";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Mouse tracking for gradient effect
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

  // Staggered animation for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Text reveal animation
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    visible: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  // Animation for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Floating animation for tech icons
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Gradient text style
  const gradientTextStyle = {
    background: `linear-gradient(135deg, #d0ff71 0%, #80ff00 50%, #d0ff71 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section
      id="home"
      className="pt-30 pb-10 relative w-full min-h-screen flex items-center justify-center font-poppins overflow-hidden"
    >
      {/* Animated Background with Dynamic Gradient */}
      <div
        className="absolute inset-0 w-full h-full bg-dark-secondary"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.08) 0%, transparent 50%), 
                      radial-gradient(circle at 80% 20%, rgba(208, 255, 113, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(208, 255, 113, 0.05) 0%, transparent 50%),
                      #1a1a1a`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 md:left-20 text-dark-primary opacity-20"
        >
          <FaReact size={40} />
        </motion.div>
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 },
          }}
          className="absolute top-40 right-10 md:right-32 text-dark-primary opacity-20"
        >
          <FaNodeJs size={35} />
        </motion.div>
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute bottom-32 left-10 md:left-40 text-dark-primary opacity-20"
        >
          <IoLeafOutline size={38} />
        </motion.div>
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1.5 },
          }}
          className="absolute bottom-20 right-10 md:right-20 text-dark-primary opacity-20"
        >
          <IoServerOutline size={42} />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name Badge - Fixed Position */}
        <motion.div
          variants={itemVariants}
          className="absolute top-0 left-4 sm:left-6 lg:left-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-primary/30 bg-dark-secondary/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-dark-primary rounded-full animate-pulse" />
            <p className="text-light-secondary text-sm font-medium tracking-wider">
              ABHISHEK MANDAL
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-16">
          {/* Top Title */}
          <motion.div
            variants={textRevealVariants}
            className="text-center mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-light-secondary/70 font-light tracking-[0.3em] mb-2">
              FULL STACK
            </h2>
          </motion.div>

          {/* Main Title with Image Integration */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 mb-12">
            {/* MERN Text */}
            <motion.div variants={textRevealVariants} className="relative z-20">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter">
                <span style={gradientTextStyle}>MERN</span>
              </h1>
            </motion.div>

            {/* Center Image with Decorations */}
            <motion.div
              className="relative mx-0 lg:mx-12 my-8 lg:my-0"
              variants={imageVariants}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-dark-primary/30 blur-3xl rounded-full scale-150" />

                {/* Image Container */}
                <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96">
                  <img
                    src={myImage1}
                    alt="Abhishek Mandal"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-dark-primary/20"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = { myImage1 };
                    }}
                  />

                  {/* Floating Badge
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-dark-primary to-dark-primary/60 rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <FaHandSpock size={32} className="text-dark-secondary" />
                  </motion.div> */}

                  {/* Tech Stack Indicators */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-dark-secondary rounded-xl flex items-center justify-center border border-dark-primary/30">
                    <FaCode size={20} className="text-dark-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STACK Text */}
            <motion.div variants={textRevealVariants} className="relative z-20">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-light-primary tracking-tighter">
                STACK
              </h1>
            </motion.div>
          </div>

          {/* Developer Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light-primary/90 tracking-wider">
              DEVELOPER
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-dark-primary to-transparent mx-auto mt-4" />
          </motion.div>

          {/* Description - Fixed Position */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl text-center mb-12 px-4"
          >
            <p className="text-light-secondary/80 text-base sm:text-lg leading-relaxed">
              A final-year student & developer focused on building scalable web
              apps.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/resume.pdf"
              download="Abhishek-Mandal-Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-2xl font-bold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
                boxShadow: "0 10px 30px rgba(208, 255, 113, 0.2)",
              }}
            >
              {/* Button Hover Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/80 to-dark-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button Content */}
              <span className="relative text-light-primary group-hover:text-dark-secondary transition-colors duration-300">
                Download Resume
              </span>
              <FaDownload
                className="relative text-dark-primary group-hover:text-dark-secondary transition-all duration-300 group-hover:translate-y-1"
                size={18}
              />

              {/* Shimmer Effect */}
              <span className="absolute inset-0 -top-1 h-px bg-gradient-to-r from-transparent via-dark-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </motion.div>

          {/* Bottom Tech Stack Display */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-6 text-dark-primary/60"
          >
            <FaReact
              size={24}
              className="hover:text-dark-primary transition-colors cursor-pointer"
            />
            <FaNodeJs
              size={24}
              className="hover:text-dark-primary transition-colors cursor-pointer"
            />
            <IoServerOutline
              size={24}
              className="hover:text-dark-primary transition-colors cursor-pointer"
            />
            <IoLeafOutline
              size={24}
              className="hover:text-dark-primary transition-colors cursor-pointer"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
