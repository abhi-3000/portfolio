import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#education", text: "Education" },
];

const socialLinks = [
  {
    href: "https://github.com/abhi-3000",
    icon: <FaGithub size={22} />,
    label: "GitHub",
  },
  {
    href: "http://www.linkedin.com/in/abhishek-mandal-274475271/",
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
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

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const menuVariants = {
    hidden: { opacity: 0, clipPath: "circle(0% at 90% 10%)" },
    visible: {
      opacity: 1,
      clipPath: "circle(150% at 90% 10%)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const menuExitVariants = {
    hidden: {
      opacity: 0,
      clipPath: "circle(0% at 90% 10%)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const mobileLinkContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const gradientTextStyle = {
    background: `linear-gradient(135deg, #d0ff71 0%, #aaff55 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl h-16 flex justify-between items-center px-6 z-50 bg-dark-secondary/70 backdrop-blur-md border border-light-primary/10 rounded-full shadow-lg"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#home"
          variants={itemVariants}
          className="text-2xl font-bold font-poppins"
          style={gradientTextStyle}
        >
          AM
        </motion.a>

        <ul className="hidden md:flex items-center gap-2 font-medium text-light-secondary font-poppins">
          {navLinks.map((link) => (
            <motion.li key={link.text} variants={itemVariants}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-full transition-all-fast hover:bg-dark-primary/10 hover:text-dark-primary"
              >
                {link.text}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="#contact"
            variants={itemVariants}
            className="bg-light-primary text-dark-secondary font-poppins font-semibold rounded-full px-6 py-2.5 transition-all-fast hover:scale-105 active:scale-95"
          >
            Contact
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Abhishek-Mandal-Resume.pdf"
            aria-label="Download Resume"
            variants={itemVariants}
            className="text-light-secondary hover:text-dark-primary transition-colors duration-300 p-1"
          >
            <FaDownload size={20} />
          </motion.a>
          <div className="border-l border-light-primary/20 h-6"></div>
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              variants={itemVariants}
              className="text-light-secondary hover:text-dark-primary transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div
          onClick={handleNav}
          className="block md:hidden text-light-primary z-[60] cursor-pointer p-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={nav ? "times" : "bars"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.nav>

      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-dark-secondary flex flex-col items-center justify-center z-50 overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit={menuExitVariants.hidden}
          >
            <div
              className="absolute inset-0 z-0 transition-all duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(208, 255, 113, 0.07) 0%, transparent 40%), #1a1a1a`,
              }}
            />
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(208, 255, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 255, 113, 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div
              onClick={handleNav}
              className="absolute top-6 right-6 text-light-primary z-[60] cursor-pointer p-2"
            >
              <FaTimes size={30} />
            </div>

            <motion.ul
              className="relative z-10 text-center flex flex-col items-center gap-3"
              variants={mobileLinkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.text} variants={mobileLinkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setNav(false)}
                    className="text-2xl font-normal text-light-secondary hover:text-dark-primary transition-colors duration-300 py-3 block"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants} className="mt-6">
                <a
                  href="#contact"
                  onClick={() => setNav(false)}
                  className="bg-light-primary text-dark-secondary font-poppins font-medium rounded-full px-7 py-2.5 text-lg transition-all-fast hover:scale-105 active:scale-95"
                >
                  Contact
                </a>
              </motion.li>
              <motion.li variants={mobileLinkVariants} className="mt-3">
                <a
                  href="/resume.pdf"
                  download="Abhishek-Mandal-Resume.pdf"
                  onClick={() => setNav(false)}
                  className="bg-dark-primary text-dark-secondary font-medium py-2.5 px-7 rounded-lg text-base transition-all-fast hover:scale-105 active:scale-95"
                >
                  Resume
                </a>
              </motion.li>
              <motion.li variants={mobileLinkVariants} className="mt-6">
                <div className="flex items-center justify-center gap-5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-light-secondary hover:text-dark-primary transition-colors duration-300"
                    >
                      {React.cloneElement(link.icon, { size: 28 })}
                    </a>
                  ))}
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
