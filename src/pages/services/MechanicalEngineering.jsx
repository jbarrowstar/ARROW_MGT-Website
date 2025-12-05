// src/pages/services/MechanicalEngineering.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";

import {
  FaSearch,
  FaPuzzlePiece,
  FaTools,
} from "react-icons/fa";
import { MdEngineering, MdIntegrationInstructions } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

/**
 * Mechanical Engineering — icon-only version (no images)
 * Sized and structured to match other service pages (Access Tower, Cantilever, etc.).
 */

export default function MechanicalEngineering() {
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
        {/* Header row: breadcrumb + title + hero icon card */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left: text block */}
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-700 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mechanical
              <br />
              Engineering
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-teal-400 to-teal-600 rounded-full mt-4"
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
              Engineering support for scaffold integration with MEP and structural works — including
              design reviews, integration studies, and bespoke mounting solutions for complex projects.
            </motion.p>
          </motion.div>

          {/* Right: decorative icon hero card (same sizing as other service pages) */}
          <motion.div
            className="w-full lg:w-72"
            aria-hidden="true"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#e0f7f6 0%, #c5f0eb 100%)",
                border: "1px solid rgba(0,0,0,0.03)",
                minHeight: 176,
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
                <MdEngineering className="text-teal-600" size={52} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Engineering Services band */}
        <motion.section
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
          aria-labelledby="mech-eng-services"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h2
            id="mech-eng-services"
            className="text-lg sm:text-xl font-semibold text-teal-700 text-center"
          >
            Engineering Services
          </h2>

          <motion.div
            className="mt-6 mx-auto max-w-3xl rounded-xl p-6 bg-teal-50 border-l-4 border-teal-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-gray-700 text-center">
              We perform structural checks, MEP coordination, and custom mounting design so that scaffolding
              integrates safely with building systems, equipment, and existing structures.
            </p>
          </motion.div>

          {/* Primary feature row (3 highlight cards) */}
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
                className="w-14 h-14 mx-auto rounded-full bg-teal-50 flex items-center justify-center mb-4 border border-teal-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdEngineering size={24} className="text-teal-600" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-teal-700">Design Review</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Structural compatibility, loading checks, and constructability feedback.
              </p>
            </motion.article>

            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50 transition hover:shadow-md"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-full bg-teal-50 flex items-center justify-center mb-4 border border-teal-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RiTeamLine size={24} className="text-teal-600" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-teal-700">MEP Coordination</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Coordinate scaffold layouts with mechanical, electrical, and plumbing services.
              </p>
            </motion.article>

            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-50 transition hover:shadow-md"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-full bg-teal-50 flex items-center justify-center mb-4 border border-teal-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTools size={24} className="text-teal-600" />
              </motion.div>
              <h3 className="text-sm sm:text-base font-semibold text-teal-700">Custom Mounts</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Designed attachments for irregular, constrained, or service-dense areas.
              </p>
            </motion.article>
          </motion.div>
        </motion.section>

        {/* Capability grid — 3 columns on desktop, stacked on mobile */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Column 1 */}
          <div className="space-y-4">
            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaSearch className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Site Surveys &amp; Analysis
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    On-site verification of loads, fixings, and obstructions to inform design.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MdIntegrationInstructions className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Integration Drawings
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    CAD-ready details and mark-ups for construction and installation teams.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPuzzlePiece className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Mounting Configurations
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Multiple fastening options to suit concrete, steel, or composite structures.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TbAdjustmentsHorizontal className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Tolerance &amp; Adjustment
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Allowances for movement, thermal effects, and construction tolerances.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaTools className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Prototyping &amp; Mockups
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Physical or digital mockups to de-risk installation before site works.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RiTeamLine className="text-teal-600" size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-teal-700">
                    Installation Oversight
                  </div>
                  <div className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Engineering supervision to ensure designs are followed on site.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Perfect For + CTA */}
        <motion.section
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
              <h3 className="text-lg font-semibold text-teal-700">Perfect For</h3>
              <motion.ul
                className="mt-6 space-y-3 text-sm sm:text-base text-gray-700"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {[
                  "Complex scaffold integration with process equipment or MEP services",
                  "Instrumentation, access platforms, and maintenance walkways",
                  "High-precision installation and retrofit projects"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <span className="text-teal-500 mt-1">•</span>
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
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-full">
              <div className="text-base font-semibold text-teal-700 mb-4">Engage our engineers</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all text-sm sm:text-base"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </motion.section>
      </div>
    </main>
  );
}