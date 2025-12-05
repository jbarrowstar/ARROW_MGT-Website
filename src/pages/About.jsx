// src/components/AboutUsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCheckCircle,
  FaBullseye,
  FaFlag,
  FaHandsHelping
} from "react-icons/fa";

/**
 * AboutUsPage
 * - TailwindCSS required in project
 * - Uses react-icons for small icons
 * - Added animations with Framer Motion
 * - Fully responsive across all devices
 */

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-10 lg:py-12">
        {/* Top gradient rounded header */}
        <motion.header
          className="mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: "100%" }}>
            <motion.div
              className="w-full rounded-lg text-center py-6 sm:py-8 lg:py-10 px-4"
              style={{
                background: "linear-gradient(90deg, #024369 0%, #0891b2 100%)"
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                About <span className="text-white/95">Us</span>
              </motion.h1>
              <motion.p
                className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Building trust through excellence since 10+ years.
              </motion.p>
            </motion.div>
          </div>
        </motion.header>

        {/* Main content grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left column (Who We Are + Strengths) */}
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <motion.div
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 h-full"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  className="shrink-0 mt-1"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0f5164]">Who We Are</h2>
                  <motion.div
                    className="w-16 h-1 bg-linear-to-r from-[#7fc7ea] to-[#0b6aa6] rounded-full mt-2 sm:mt-3 mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>

              <div className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Arrow Engineering &amp; Management Pte Ltd is an established scaffolding and access solutions provider based in Singapore, with more than 10 years of experience in the construction and industrial sectors.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  We take pride in delivering high-quality scaffolding systems through our team of experienced professionals, accredited by the Singapore Ministry of Manpower (MOM). Our scaffolding services are tailored to meet our customers' needs, ensuring every client receives efficient and dependable services.
                </motion.p>
              </div>

              {/* Our Strengths */}
              <motion.div
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#0f5164] mb-3 sm:mb-4">Our Strengths</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Qualified and experienced scaffold experts",
                    "Proven safety records and quality assurance",
                    "Tailored solutions for complex project environments",
                    "Commitment to sustainable and safe work practices"
                  ].map((strength, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3"
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <motion.span
                        className="mt-0.5 sm:mt-1 text-green-500 shrink-0"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.span>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column (Vision / Mission / Our Promise stacked) */}
          <motion.aside className="lg:col-span-5 space-y-4 sm:space-y-5 lg:space-y-6" variants={itemVariants}>
            {/* Vision card */}
            <motion.div className="relative" variants={cardVariants} whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}>
              <div className="bg-[#e9f8ff] border border-[#d0eef8] rounded-xl p-4 sm:p-5 lg:p-6 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div className="shrink-0" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border border-[#cbf0fb]">
                      <FaBullseye className="text-[#0b6aa6] w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0b6aa6]">Vision</h4>
                    <motion.p className="mt-2 text-sm text-gray-700 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                      To be the most reliable and innovative scaffolding partner in Singapore and across Southeast Asia.
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* small decorative accent at top-right */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#e9f8ff] border border-[#d0eef8]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Mission card */}
            <motion.div variants={cardVariants} whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}>
              <div className="bg-[#e8fff3] border border-[#d8f3e6] rounded-xl p-4 sm:p-5 lg:p-6 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div className="shrink-0" whileHover={{ scale: 1.1, rotate: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border border-[#dff3e9]">
                      <FaFlag className="text-[#1f8a5a] w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#137a4f]">Mission</h4>
                    <motion.p className="mt-2 text-sm text-gray-700 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                      To deliver world-class scaffolding solutions that ensure the highest standards of safety, quality, and client satisfaction.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Promise card (orange) */}
            <motion.div variants={cardVariants} whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}>
              <div className="bg-[#fff3e6] border border-[#f7e0c7] rounded-xl p-4 sm:p-5 lg:p-6 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div className="shrink-0" whileHover={{ scale: 1.1, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border border-[#fae6cd]">
                      <FaHandsHelping className="text-[#c85a09] w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#c85a09]">Our Promise</h4>
                    <ul className="mt-2 sm:mt-3 text-sm text-gray-700 space-y-1 sm:space-y-2">
                      {[
                        "Safe and compliant scaffolding systems",
                        "Timely project completion",
                        "Customized engineering solutions",
                        "Reliable on-site support"
                      ].map((promise, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                          <span className="text-[#c85a09] mr-2">•</span>
                          <span>{promise}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
