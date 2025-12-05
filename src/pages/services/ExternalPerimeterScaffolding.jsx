// src/pages/services/ExternalPerimeterScaffolding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import { TbBoxModel } from "react-icons/tb";

/**
 * ExternalPerimeterScaffolding page
 * - Sizes/structure kept consistent with other service pages (max-w-6xl, lg:w-72 right-card)
 * - Subtle framer-motion entrance animations
 * - Canonical Tailwind utility usage (shrink-0 etc.)
 */

export default function ExternalPerimeterScaffolding() {
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
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-700 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              External Perimeter
              <br />
              Scaffolding
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-indigo-400 to-indigo-600 rounded-full mt-4"
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
              Full perimeter scaffolding for façade works — providing continuous external access, protection and
              safe working platforms for building exteriors. Engineered to integrate debris control and comply
              with local structural and wind-loading regulations.
            </motion.p>
          </motion.div>

          {/* Right decorative card with large icon (sizes match other pages) */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            aria-hidden="true"
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#4f46e5 0%, #4338ca 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
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
                <TbBoxModel size={80} className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Overview + features */}
        <motion.section
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-700">Overview</h2>

              <motion.div
                className="mt-6 rounded-xl p-5 bg-indigo-50 border-l-4 border-indigo-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm text-gray-700">
                  Designed to wrap the building for comprehensive external access and safe working platforms.
                  Includes integrated debris control, hoarding and trade access where required.
                </p>
              </motion.div>
            </div>

            {/* quick stat / highlight on right for larger screens */}
            <motion.div
              className="hidden lg:flex lg:flex-col lg:items-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white border border-gray-100 rounded-xl py-4 px-5 shadow-sm text-right w-64">
                <div className="text-xs text-gray-500">Typical coverage</div>
                <div className="text-xl font-bold text-indigo-700 mt-1">Full-perimeter wrap</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Protection */}
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-full bg-indigo-50 flex items-center justify-center mb-4 border border-indigo-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaShieldAlt className="text-indigo-600" size={22} />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-indigo-700">Protection</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Debris nets, hoarding and façade protection options.</p>
            </motion.article>

            {/* Full Wrap */}
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-full bg-indigo-50 flex items-center justify-center mb-4 border border-indigo-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RiLayoutGridFill className="text-indigo-600" size={22} />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-indigo-700">Full Wrap</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Continuous platforms for trades and façade access.</p>
            </motion.article>

            {/* Wind Loading Analysis */}
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-full bg-indigo-50 flex items-center justify-center mb-4 border border-indigo-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WiStrongWind className="text-indigo-600" size={22} />
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-indigo-700">Wind Loading Analysis</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Engineered to local wind codes and safety requirements.</p>
            </motion.article>
          </motion.div>
        </motion.section>

        {/* Key advantage purple band */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-indigo-600 text-white rounded-2xl p-8 shadow-md max-w-3xl w-full text-center"
            style={{ background: "linear-gradient(90deg,#6d28d9 0%, #4f46e5 100%)" }}
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
              Full building wrap solutions provide continuous, safe platforms for trades, improved site protection,
              and integrated debris control — all engineered to meet local structural and wind-loading regulations.
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
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
              <h3 className="text-lg font-semibold text-indigo-700">Perfect For</h3>
              <motion.ul
                className="mt-6 space-y-3 text-sm sm:text-base text-gray-700"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {[
                  "Large façade renovations",
                  "Cladding & painting works",
                  "Temporary weather protection and debris control"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <span className="text-indigo-500 mt-1">•</span>
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
              <div className="text-base font-semibold text-indigo-700 mb-4">Schedule a briefing</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm sm:text-base"
                >
                  Schedule
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </main>
  );
}