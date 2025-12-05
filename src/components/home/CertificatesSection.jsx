// src/components/CertificatesSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaUserGraduate,
  FaCheckCircle
} from "react-icons/fa";

/* Highlights Data */
const HIGHLIGHTS = [
  {
    key: "mom",
    Icon: FaShieldAlt,
    title: "MOM Approved Scaffold Contractor",
    desc: "Officially recognized by Singapore Ministry of Manpower"
  },
  {
    key: "safety",
    Icon: FaClipboardCheck,
    title: "Safety Compliance",
    desc: "Full adherence to workplace safety excellence standards."
  },
  {
    key: "professional",
    Icon: FaUserGraduate,
    title: "Professional Development",
    desc: "Continuous training and skill enhancement programs"
  },
  {
    key: "quality",
    Icon: FaCheckCircle,
    title: "Quality Management",
    desc: "Certified quality management system implementation"
  }
];

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, duration: 0.8 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 16 }
  }
};

export default function CertificatesSection() {
  return (
    <section className="relative bg-white overflow-hidden py-8 sm:py-12 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* Background Hex Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex-pattern" width="160" height="160" patternUnits="userSpaceOnUse">
            <path
              d="M80 0 L160 40 L160 120 L80 160 L0 120 L0 40 Z"
              stroke="#cfe8f5"
              strokeWidth="8"
              fill="none"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14363f]"
          >
            Certificates &amp; <span className="text-[#238fb9]">Accreditations</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Certified excellence in safety, quality, and professional standards.
          </motion.p>
        </motion.div>

        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-12 px-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div
            className="mx-auto rounded-full py-6 px-6 sm:py-8 sm:px-10 text-white shadow-2xl flex items-center gap-6"
            style={{ background: "linear-gradient(90deg,#56b2d6 0%,#0f5f88 100%)" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30"
              variants={iconVariants}
            >
              <FaShieldAlt className="text-white w-5 h-5" />
            </motion.div>

            <div className="text-left">
              <div className="font-semibold text-base sm:text-lg md:text-xl">
                Ministry of Manpower Approved Scaffold Contractor
              </div>
              <div className="text-[13px] sm:text-sm md:text-base text-white/90 mt-1 max-w-xl">
                Official Recognition from Singapore MOM — our company meets required safety and compliance standards.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, idx) => {
              const Icon = h.Icon;
              return (
                <motion.div
                  key={h.key}
                  className="relative flex justify-center"
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.article
                    className="relative bg-white border border-gray-200 shadow-md w-full max-w-[300px] pt-8 pb-8 px-6 text-center rounded-4xl"
                  >
                    <motion.div
                      className="w-14 h-14 mb-4 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white bg-linear-to-br from-blue-500 to-cyan-600"
                      variants={iconVariants}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    <h3 className="text-[#0f5f88] font-bold text-lg">{h.title}</h3>
                    <p className="text-gray-600 text-sm mt-3 px-2">{h.desc}</p>

                    <div className="mt-6 w-20 h-1 mx-auto rounded-full bg-linear-to-r from-blue-400 to-cyan-400" />
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Commitment Box */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="bg-white border border-gray-100 rounded-2xl px-6 py-8 shadow-lg text-center"
          >
            <p className="text-gray-700 text-base leading-relaxed">
              We are committed to maintaining the highest standards of safety, quality,
              and professional development. Our accreditations reflect our robust
              systems and continuous improvement culture.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Link to="/certificates">
            <motion.button
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
