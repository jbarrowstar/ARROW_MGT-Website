// src/components/home/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import semiconductorImg from "../../assets/home/semiconductor.png";
import dataCenterImg from "../../assets/home/datacenter.png";
import constructionImg from "../../assets/home/construction.png";
import pharmaImg from "../../assets/home/pharma.png";

/**
 * ProjectsSection
 * - Uses canonical Tailwind gradient class names (bg-linear-to-*)
 * - "Learn More" navigates to /projects/<slug>
 */

const projects = [
  {
    title: "Semiconductor Projects",
    image: semiconductorImg,
    description:
      "Engineering for electronics, semiconductors, and manufacturing facilities with cleanroom and process utility systems.",
    color: "from-blue-500 to-cyan-500",
    slug: "semiconductor"
  },
  {
    title: "Data Centers",
    image: dataCenterImg,
    description:
      "Engineering for mission-critical facilities including data centers, network operation centers, and call centers.",
    color: "from-purple-500 to-indigo-500",
    slug: "data-center"
  },
  {
    title: "Construction Projects",
    image: constructionImg,
    description:
      "Engineering for commercial, residential, and industrial buildings including structural, mechanical, and electrical systems.",
    color: "from-orange-500 to-amber-500",
    slug: "construction"
  },
  {
    title: "Pharmaceuticals Facilities",
    image: pharmaImg,
    description:
      "Engineering for pharmaceutical manufacturing facilities including cleanrooms, laboratories, and process utilities.",
    color: "from-green-500 to-emerald-500",
    slug: "pharmaceutical"
  }
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    },
    hover: { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 320, damping: 18 } }
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.06, transition: { duration: 0.35 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-16 lg:py-20 bg-linear-to-br from-gray-50 to-white">
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
          Our{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            Projects
          </motion.span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by leading companies across diverse industries.
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={project.slug}
            variants={cardVariants}
            whileHover="hover"
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
            aria-labelledby={`project-${idx}`}
          >
            {/* Image Container */}
            <motion.div
              className="relative h-48 sm:h-56 lg:h-64 overflow-hidden"
              variants={imageVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Gradient overlay (uses canonical class + project color tailwind tokens) */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                aria-hidden="true"
              />

              {/* Small floating indicator */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Content */}
            <motion.div className="p-6 lg:p-8" variants={contentVariants}>
              <motion.h3
                id={`project-${idx}`}
                className="text-xl lg:text-2xl font-bold text-[#024369] mb-3 lg:mb-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 + 0.25 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-sm lg:text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.08 + 0.45 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {/* Read More / Learn More */}
              <div className="mt-4 lg:mt-6 flex items-center gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#024369] hover:text-[#0b6aa6] transition-transform transform group-hover:translate-x-1"
                  aria-label={`Learn more about ${project.title}`}
                >
                  <span>Learn More</span>
                  <motion.svg
                    className="w-4 h-4 ml-2 text-current"
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
              </div>
            </motion.div>

            {/* Accent Bar */}
            <motion.div
              className={`h-1 ${project.color ? `bg-linear-to-r ${project.color}` : "bg-linear-to-r from-blue-500 to-cyan-500"}`}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: idx * 0.1 + 0.9, duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Subtle background glow on hover */}
            <motion.div
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl -z-10 ${project.color ? `bg-linear-to-r ${project.color}` : ""}`}
              aria-hidden="true"
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
