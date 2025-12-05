// src/pages/services/CantileverScaffolding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCubes, FaLeaf } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { FiChevronLeft } from "react-icons/fi";

/**
 * CantileverScaffolding page
 * - Sizes/layout consistent with AccessTowerScaffolding:
 *   max-w-6xl container, right decorative card uses lg:w-72 and minHeight ~176,
 *   icon box w-32 h-32 with icon size 52.
 * - TailwindCSS utilities required in project.
 * - Uses Framer Motion for subtle entrance animations.
 */

export default function CantileverScaffolding() {
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
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header: breadcrumb + title + hero icon (right) */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
          {/* Left block: breadcrumb + title + description + CTA */}
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pink-600 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cantilever Scaffolding
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-pink-400 to-pink-600 rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="mt-6 text-gray-600 max-w-2xl leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Also known as jib or trussed scaffold. Frequently utilised where ground access is impractical —
              cantilever systems are engineered to provide secure working platforms at height with minimal
              ground obstruction.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
                  aria-label="Request information about Cantilever Scaffolding"
                >
                  Request Information
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right decorative card with large icon (sizes matched to AccessTower design) */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            aria-hidden="true"
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#ffe6ef 0%, #ffd9ee 100%)",
                border: "1px solid rgba(0,0,0,0.03)",
                minHeight: 176
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-32 h-32 rounded-xl flex items-center justify-center "
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCubes className="text-pink-600" size={52} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* How it works / description card */}
        <motion.section
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
          aria-labelledby="how-it-works"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h2 id="how-it-works" className="text-lg sm:text-xl font-semibold text-pink-600 text-center">
            How It Works
          </h2>

          <motion.div
            className="mt-6 mx-auto max-w-3xl rounded-xl p-6 bg-pink-50 border-l-4 border-pink-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-gray-700 text-center">
              Cantilever scaffold uses engineered brackets, beams and anchors fixed to the structure to support
              the platform where traditional ground support cannot be used. Designed and installed to meet
              load, safety and access requirements.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <motion.article
                className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 transition hover:shadow-md"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-4 border border-pink-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCubes className="text-pink-600" size={22} />
                </motion.div>
                <h4 className="text-sm sm:text-base font-semibold text-pink-600">Custom Bracket Design</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Engineered anchors and brackets matched to façade conditions.</p>
              </motion.article>

              <motion.article
                className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 transition hover:shadow-md"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-4 border border-pink-100"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GiWeight className="text-pink-600" size={22} />
                </motion.div>
                <h4 className="text-sm sm:text-base font-semibold text-pink-600">Load Rating & Safety</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Calculated load capacities and safe working limits per project.</p>
              </motion.article>

              <motion.article
                className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 transition hover:shadow-md"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-4 border border-pink-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaLeaf className="text-pink-600" size={22} />
                </motion.div>
                <h4 className="text-sm sm:text-base font-semibold text-pink-600">Minimal Ground Impact</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Ideal for work above sensitive or occupied areas.</p>
              </motion.article>
            </div>
          </motion.div>
        </motion.section>

        {/* Perfect For + CTA panel */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg font-semibold text-pink-600">Perfect For</h3>

              <motion.div
                className="mt-6 bg-pink-50 rounded-xl p-5 max-w-lg border border-pink-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ul className="space-y-3">
                  {[
                    "Façade repair at high elevations",
                    "Work where ground-based support is impossible",
                    "Temporary access for installations and inspections"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-sm text-gray-700 flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="text-pink-500 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          <motion.aside
            className="lg:col-span-1"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 text-center h-full flex flex-col justify-center">
              <div className="text-base font-semibold text-pink-600 mb-4">Need Expert Advice?</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 bg-pink-600 text-white rounded-lg shadow-sm hover:bg-pink-700 transition-all text-sm sm:text-base"
                  aria-label="Get expert advice about Cantilever Scaffolding"
                >
                  Get Expert Advice
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </main>
  );
}