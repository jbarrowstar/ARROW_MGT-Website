// src/pages/services/MobileScaffolding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { FaWheelchair, FaLevelUpAlt, FaLock } from "react-icons/fa";

export default function MobileScaffolding() {
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
          {/* LEFT BLOCK */}
          <motion.div
            className="flex-1"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mobile Scaffolding
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-full mt-4"
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
              The most adaptable type of scaffolding. It can be relocated around the
              site to provide continued support exactly where you need it, improving
              work efficiency and productivity.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
                >
                  Enquire
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT ICON CARD */}
          <motion.div
            className="w-full lg:w-72"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden p-10 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(180deg,#3b82f6 0%, #2563eb 100%)",
                border: "1px solid rgba(255,255,255,0.06)"
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaWheelchair size={92} className="text-white drop-shadow-sm" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
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
              className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaWheelchair className="text-blue-600" size={34} />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-blue-700">Mobile Design</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Easy to move across different work zones.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLevelUpAlt className="text-blue-600" size={34} />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-blue-700">Variable Height</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Adjustable working levels with modular frames.
            </p>
          </motion.article>

          <motion.article
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLock className="text-blue-600" size={34} />
            </motion.div>
            <h4 className="text-sm sm:text-base font-semibold text-blue-700">Safety Locks</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Multi-directional castor brakes for stability.
            </p>
          </motion.article>
        </motion.div>

        {/* ADVANTAGE BANNER */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-blue-600 text-white rounded-2xl p-8 shadow-md max-w-3xl w-full text-center"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-semibold mb-4">Advantages</h3>
            <motion.p
              className="mt-2 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Mobile scaffolds allow fast repositioning, easy assembly, and excellent
              flexibility, making them ideal for painters, electricians, and maintenance
              teams while ensuring safe and stable operation through castor lock systems.
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