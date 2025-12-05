// src/components/home/AboutArrow.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Replace with your actual images
import img1 from "../../assets/home/img1.png";
import img2 from "../../assets/home/img2.png";
import img3 from "../../assets/home/img3.png";
import img4 from "../../assets/home/img4.png";

export default function AboutArrow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  const imgs = [img1, img2, img3, img4];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-16 lg:py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <defs>
          <pattern id="hex" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M80 0 L160 40 L160 120 L80 160 L0 120 L0 40 Z" stroke="#024369" strokeWidth="8" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </motion.svg>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#024369] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
            >
              ARROW Engineering
            </motion.span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Image Grid */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start w-full"
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 w-full max-w-2xl"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {imgs.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      transition: { type: "spring", stiffness: 400 } 
                    }}
                    className="overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Arrow Engineering project ${idx + 1}`}
                      loading="lazy"
                      className={`w-full object-cover ${
                        idx < 2 ? "h-48 sm:h-56 lg:h-64" : "h-40 sm:h-48 lg:h-56"
                      }`}
                    />
                    
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-blue-500/20 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Floating indicators */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8 text-gray-700 text-base lg:text-lg leading-relaxed lg:pl-4"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 lg:p-8"
            >
              <motion.p 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="font-bold text-[#024369]">Arrow Engineering & Management Pte Ltd</span> is an Approved 1 Contractor (ASC) with the Singapore Ministry of Manpower. We consider ourselves experts in all types of scaffolding systems. We wish to assist our growing number of customers in Singapore in building more efficiently, quickly, and safely.
              </motion.p>

              <motion.p 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Over the years, we have established and maintained our position as the market leader in the local Scaffold business. We offer scaffolding solutions that are innovative, productive, and safe, in addition to providing comprehensive on-site support, customized engineering, and on-time material delivery.
              </motion.p>

              <motion.p 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                In addition to the construction and industrial sectors, <span className="font-bold text-[#024369]">ARROW</span> has also extended its expertise to the rapidly growing <span className="font-bold text-[#024369]">semiconductor industry</span>. We provide specialized scaffolding and engineering solutions that meet the stringent safety and cleanliness standards required in semiconductor facilities.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Because consumers believe in our work, ARROW has been a part of several major projects in Singapore.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 bg-[#024369] text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-base font-semibold"
          >
            <span>Learn More</span>
            <motion.svg
              className="w-5 h-5 text-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}