// src/pages/services/IndependentTowerScaffold.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { FaBalanceScale, FaLayerGroup, FaTools } from "react-icons/fa";

/**
 * IndependentTowerScaffold
 * - Responsive service page matching the style / sizes used across other service pages
 * - Uses TailwindCSS utilities (canonical classes: shrink-0, bg-linear-to-r where appropriate)
 * - Subtle entrance animations with Framer Motion (optional)
 *
 * Place file at: src/pages/services/IndependentTowerScaffold.jsx
 */

export default function IndependentTowerScaffold() {
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
        {/* Header (breadcrumb + title + decorative card) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-600 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Independent Tower
              <br />
              Scaffold
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 rounded-full mt-4"
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
              Self-supporting towers provide standalone, modular working platforms — ideal when tie-ins or building
              connections are not possible. They are quick to erect, configurable, and engineered for stability.
            </motion.p>
          </motion.div>

          {/* Right decorative hero card (lg:w-72 consistent with other pages) */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            aria-hidden="true"
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#ffedd5 0%, #ffe0b2 100%)",
                border: "1px solid rgba(0,0,0,0.03)",
                minHeight: 176
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-32 h-32 rounded-xl bg-white flex items-center justify-center shadow-inner"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaBalanceScale className="text-orange-600" size={52} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose (overview) */}
        <motion.section
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
          aria-labelledby="why-choose"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h2 id="why-choose" className="text-lg sm:text-xl font-semibold text-orange-600 text-center">
            Why Choose Independent Tower Scaffold
          </h2>

          <motion.div
            className="mt-6 mx-auto max-w-3xl rounded-xl p-6 bg-orange-50 border-l-4 border-orange-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-gray-700 text-center">
              Versatile, quick to assemble, and highly stable — independent tower scaffolds are excellent for indoor
              works, confined spaces, and temporary access where a freestanding solution is required.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50 transition hover:shadow-md"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-12 h-12 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-4 shrink-0 border border-orange-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaBalanceScale className="text-orange-600" size={20} aria-hidden="true" />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-orange-600">High Stability</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Engineered frames and bracing to safely support specified loads.</p>
            </motion.article>

            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50 transition hover:shadow-md"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-12 h-12 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-4 shrink-0 border border-orange-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLayerGroup className="text-orange-600" size={20} aria-hidden="true" />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-orange-600">Adjustable Platforms</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Flexible multi-level decking and configurable heights for varied tasks.</p>
            </motion.article>

            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50 transition hover:shadow-md"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-12 h-12 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-4 shrink-0 border border-orange-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTools className="text-orange-600" size={20} aria-hidden="true" />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-orange-600">Easy Assembly</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Modular components make erection and teardown fast and repeatable.</p>
            </motion.article>
          </motion.div>
        </motion.section>

        {/* Key Advantage banner */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-orange-600 text-white rounded-2xl p-8 shadow-md max-w-3xl w-full text-center"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-semibold mb-4">Key Advantage</h3>
            <motion.p
              className="mt-2 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Independent tower scaffolds offer rapid deployment and flexible configurations while maintaining
              superior stability and safety. Ideal for indoor maintenance, temporary installations, and confined-area access.
            </motion.p>
            
            {/* Decorative accent */}
            <motion.div
              className="mx-auto mt-6 w-16 h-1 bg-white/30 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Perfect For + CTA */}
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
              <h3 className="text-lg font-semibold text-orange-600">Perfect For</h3>
              <motion.ul
                className="mt-6 space-y-3 text-sm sm:text-base text-gray-700"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {[
                  "Indoor maintenance and repair",
                  "Temporary lighting, rigging and access for fit-out works",
                  "Small-to-medium assembly and inspection tasks"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <motion.aside
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 h-full flex flex-col justify-center">
              <div className="text-base font-semibold text-orange-600 mb-4">Request a quote</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all text-sm sm:text-base"
                  aria-label="Get a quote for Independent Tower Scaffold"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </main>
  );
}