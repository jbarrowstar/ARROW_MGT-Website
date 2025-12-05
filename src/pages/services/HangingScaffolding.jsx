// src/pages/services/HangingScaffolding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineEngineering } from "react-icons/md";
import { FaAnchor, FaGripLines, FaRegBuilding } from "react-icons/fa";

export default function HangingScaffolding() {
  // EXACT same animation variants as AboutUsPage
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

  return (
    <main className="w-full bg-gray-50 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Back + Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hanging
              <br />
              Scaffolding
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-purple-400 to-purple-700 rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="mt-6 text-gray-600 max-w-3xl leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A scaffolding system that's suspended from a secure structure to the working platform — ideal
              where ground support is limited. Hanging scaffolds provide efficient access for façade works,
              high-rise maintenance and overhead operations.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-lg text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
                  aria-label="Contact about Hanging Scaffolding"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right decorative card with icon (lg:w-72, same pattern as other service pages) */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            aria-hidden="true"
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#7c3aed 0%, #6d28d9 100%)",
                border: "1px solid rgba(255,255,255,0.04)",
                minHeight: 176
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-32 h-32 rounded-xl bg-white/6 flex items-center justify-center shadow-inner"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaAnchor className="text-white" size={56} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature tiles */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.article
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-4 shrink-0 border border-purple-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaAnchor size={28} className="text-purple-700" />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-700">Hoist Systems</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Controlled descent & ascent — reliable powered and manual hoists.</p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-4 shrink-0 border border-purple-200"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineEngineering size={28} className="text-purple-700" />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-700">Anchorage</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Engineered anchor points and structural assessments for safe suspension.</p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-4 shrink-0 border border-purple-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGripLines size={28} className="text-purple-700" />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-700">Minimal Ground Setup</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Fast install and removal with minimal impact on the ground footprint.</p>
          </motion.article>
        </motion.section>

        {/* Purple Key Benefits bar */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-purple-700 rounded-2xl p-8 text-center text-white shadow-md w-full"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            style={{ maxWidth: "100%" }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <motion.p
                className="mt-2 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hanging scaffolds provide rapid deployment, excellent flexibility and superior access for areas where
                ground-based scaffolding is not feasible. Ideal for façade work, exterior maintenance and overhead operations.
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition-all"
                    aria-label="Contact us for hanging scaffolding"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Perfect For card */}
        <motion.section
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h3 className="text-lg font-semibold text-purple-700">Perfect For</h3>
          <motion.ul
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Window cleaning & façade access",
              "High-rise maintenance and inspections",
              "Overhang, cantilevered work and narrow access areas",
              "Short-term façade repairs and specialized access tasks"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                variants={itemVariants}
              >
                <motion.span
                  className="mt-1 text-purple-600"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaRegBuilding />
                </motion.span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>
    </main>
  );
}