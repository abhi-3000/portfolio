import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

// --- Navigation Links ---
const navLinks = [
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#education", text: "Education" },
];

const socialLinks = [
  { href: "https://github.com/abhi-3000", icon: <FaGithub size={22} /> },
  {
    href: "http://www.linkedin.com/in/abhishek-mandal-274475271/",
    icon: <FaLinkedin size={22} />,
  },
];

// --- Main Component ---
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // --- Animation Variants ---
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
    hidden: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
    visible: {
      opacity: 1,
      clipPath: "circle(100% at 50% 50%)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const mobileLinkContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
          <div className="border-l border-light-primary/20 h-6"></div>
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="text-light-secondary hover:text-dark-primary transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div
          onClick={handleNav}
          className="block md:hidden text-light-primary z-50 cursor-pointer p-2"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </motion.nav>

      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-dark-secondary flex flex-col items-center justify-center z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul
              className="text-center flex flex-col items-center gap-4"
              variants={mobileLinkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.text} variants={mobileLinkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setNav(false)}
                    className="text-3xl font-semibold text-light-secondary hover:text-dark-primary transition-colors duration-300 py-2 block"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants} className="mt-8">
                <a
                  href="#contact"
                  onClick={() => setNav(false)}
                  className="bg-light-primary text-dark-secondary font-poppins font-semibold rounded-full px-8 py-3 text-xl transition-all-fast hover:scale-105 active:scale-95"
                >
                  Contact
                </a>
              </motion.li>
              <motion.li variants={mobileLinkVariants} className="mt-4">
                <a
                  href="/resume.pdf"
                  download="Abhishek-Mandal-Resume.pdf"
                  onClick={() => setNav(false)}
                  className="bg-dark-primary text-dark-secondary font-bold py-3 px-8 rounded-lg text-lg transition-all-fast hover:scale-105 active:scale-95"
                >
                  Resume
                </a>
              </motion.li>
              <motion.li variants={mobileLinkVariants} className="mt-8">
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-secondary hover:text-dark-primary transition-colors duration-300"
                    >
                      {React.cloneElement(link.icon, { size: 30 })}
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
