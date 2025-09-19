import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// --- Data for Social Links ---
const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/abhi-3000",
  }, // Replace with your URL
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "http://www.linkedin.com/in/abhishek-mandal-274475271/",
  }, // Replace with your URL
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    url: "https://www.instagram.com/abhishek92030/",
  }, // Replace with your URL
];

// --- Animation Variants ---
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- Main Component ---
const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-dark-primary text-dark-secondary font-inter py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Contact & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Email */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold uppercase tracking-wider">
              Email :
            </p>
            <a
              href="mailto:abhishekmandalmnps@gmail.com"
              className="text-lg font-bold hover:underline"
            >
              abhishekmandalmnps@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold uppercase tracking-wider">
              Call :
            </p>
            <a
              href="tel:+919508056814"
              className="text-lg font-bold hover:underline"
            >
              +91-9508056814
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2">
              Social :
            </p>
            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="transition-transform duration-300 hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          className="border-t-2 border-dark-secondary/20 my-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Bottom Section: Credits */}
        <div className="text-center text-sm text-dark-secondary/80">
          <motion.p variants={itemVariants}>
            Made with React.js and Tailwind by Abhishek Mandal
          </motion.p>
          <motion.p variants={itemVariants} className="mt-1">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
