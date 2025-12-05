// src/pages/services/AccessTowerScaffolding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbArrowsMove } from "react-icons/tb";
import { GiStairs } from "react-icons/gi";

/**
 * AccessTowerScaffolding page
 * Matches the provided UI:
 * - Left: breadcrumb + title + description + CTA
 * - Right: large rounded green card with centered icon
 * - Middle: three feature cards (responsive)
 * - Bottom: full-width Key Advantage banner (centered, fixed width on large screens)
 *
 * Notes:
 * - Uses TailwindCSS utility classes.
 * - Uses framer-motion for subtle entrance animations (optional; remove if not desired).
 * - Place this file at: src/pages/services/AccessTowerScaffolding.jsx
 */

export default function AccessTowerScaffolding() {
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
        {/* HEADER (left text + right icon card) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* LEFT: text */}
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f6d3f] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access Tower
              <br />
              Scaffolding
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-[#4ade80] to-[#16a34a] rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="mt-6 text-gray-600 max-w-xl leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Access tower scaffolds are similar to tower scaffolds. Access towers can be both mobile and static,
              depending on project requirements. They provide safe working platforms for mechanical, electrical,
              finishing and inspection tasks.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f6d3f] hover:bg-[#105b38] text-white px-5 py-3 rounded-lg text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
                  aria-label="Request information about Access Tower Scaffolding"
                >
                  Request Information
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: large green icon card */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-10 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#12a05c 0%, #0f8a45 100%)",
                border: "1px solid rgba(255,255,255,0.06)"
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              aria-hidden="true"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MdOutlineDesignServices size={92} className="text-white drop-shadow-sm" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <motion.article
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-4"
                style={{ background: "linear-gradient(180deg,#ecfdf3 0%, #dff8ea 100%)" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdOutlineDesignServices className="text-[#0f6d3f]" size={34} />
              </motion.div>
              <h4 className="text-base font-semibold text-[#0f6d3f]">Tower Design</h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">Optimized layout for safe work access and load distribution.</p>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-4"
                style={{ background: "linear-gradient(180deg,#ecfdf3 0%, #dff8ea 100%)" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TbArrowsMove className="text-[#0f6d3f]" size={34} />
              </motion.div>
              <h4 className="text-base font-semibold text-[#0f6d3f]">Mobile or Static</h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">Choose mobility for frequent moves or static for prolonged works.</p>
            </motion.article>

            {/* Card 3 */}
            <motion.article
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-4"
                style={{ background: "linear-gradient(180deg,#ecfdf3 0%, #dff8ea 100%)" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GiStairs className="text-[#0f6d3f]" size={34} />
              </motion.div>
              <h4 className="text-base font-semibold text-[#0f6d3f]">Step Ladder Access</h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">Safe internal stair access and secure handrail options.</p>
            </motion.article>
          </div>
        </motion.div>

        {/* KEY ADVANTAGE BANNER */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-[#0f6d3f] text-white rounded-2xl p-8 shadow-md max-w-3xl w-full text-center"
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
              Access towers feature single-width or double-width loading platforms,
              providing safe and convenient access for mechanical, electrical and civil work.
              They increase productivity while ensuring worker safety and flexible deployment.
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
      </div>
    </main>
  );
}