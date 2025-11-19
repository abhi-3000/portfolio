import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

// --- Data for Contact Details ---
const contactDetails = [
  {
    icon: <IoCallOutline size={22} />,
    title: "Phone Number",
    value: "+91 95080 56814", // Replace with your number
    href: "tel:+919508056814",
  },
  {
    icon: <IoMailOutline size={22} />,
    title: "Email Address",
    value: "abhishekmandalmnps@gmail.com", // Replace with your email
    href: "mailto:abhishekmandalmnps@gmail.com",
  },
  {
    icon: <IoLocationOutline size={22} />,
    title: "Location",
    value: "Jamshedpur, Jharkhand",
    href: "#", // Optional: Link to Google Maps
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
const Contact = () => {
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
      id="contact"
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
        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side: Text Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
              style={gradientTextStyle}
            >
              Let's Build Something Great
            </h2>
            <p className="text-lg text-light-secondary max-w-md mx-auto lg:mx-0">
              I'm currently available discussing new opportunities. Whether you have a question or just
              want to connect, feel free to reach out.
            </p>
          </motion.div>

          {/* Right Side: Contact Details */}
          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <motion.a
                key={index}
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group block bg-gradient-to-br from-light-primary/10 to-light-primary/5 p-6 rounded-xl border border-light-primary/10 transition-all duration-300 hover:border-dark-primary/50 hover:-translate-y-1.5"
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
                  delay: index * 0.7,
                }}
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-primary/10 rounded-full flex items-center justify-center border border-dark-primary/30 text-dark-primary transition-all duration-300 group-hover:bg-dark-primary group-hover:text-dark-secondary">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light-primary">
                      {detail.title}
                    </h3>
                    <p className="text-light-secondary transition-colors duration-300 group-hover:text-dark-primary">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
