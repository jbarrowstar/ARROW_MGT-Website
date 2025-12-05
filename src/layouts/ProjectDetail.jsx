import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function FeatureCard({ f, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#024369]/20 via-[#024369] to-[#024369]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="w-12 h-12 mx-auto rounded-full bg-[#024369]/10 flex items-center justify-center mb-3 text-[#024369] font-bold border border-[#024369]/10"
      >
        {f.title?.charAt(0)}
      </motion.div>

      <h4 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-[#024369]">
        {f.title}
      </h4>
      <p className="text-xs text-gray-600">{f.description}</p>
    </motion.div>
  );
}

export default function ProjectDetail({ project }) {
  if (!project) return null;

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isTitleInView = useInView(titleRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const capsuleShapes = [
    "rounded-tl-[40px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[40px]",
    "rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[120px]",
    "rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[120px]",
    "rounded-tl-[40px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[40px]"
  ];

  return (
    <main className="w-full bg-linear-to-b from-white to-gray-50/30 py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ---------------- HERO ---------------- */}
        <div ref={heroRef} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#024369]/10 text-[#024369] font-semibold text-sm border border-[#024369]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#024369] animate-pulse" />
              {project.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-[#024369]">
                {project.title}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mt-6 p-6 bg-white/70 rounded-xl border border-gray-100 shadow-sm"
            >
              <p className="text-sm md:text-lg text-gray-700">
                {project.summary}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-72 xl:w-80"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={isHeroInView ? { scale: 1 } : {}}
                transition={{ duration: 0.9 }}
                src={project.hero}
                alt=""
                className="w-full h-72 object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ---------------- FEATURES ---------------- */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Key <span className="text-[#024369]">Features</span>
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Discover what makes this project stand out
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((f, i) => (
              <FeatureCard key={i} f={f} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ---------------- GALLERY (UPDATED CLEAN VERSION) ---------------- */}
        <motion.div
          ref={galleryRef}
          initial={{ opacity: 0 }}
          animate={isGalleryInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              className="text-2xl font-bold text-gray-900"
            >
              Project <span className="text-[#024369]">Gallery</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isGalleryInView ? { opacity: 1 } : {}}
              className="mt-3 text-sm text-gray-600"
            >
              Visual journey through our work
            </motion.p>
          </div>

          {/* CLEAN, COMPACT 2x2 GRID */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center">

              {project.gallery.slice(0, 4).map((g, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex justify-center items-center"
                >
                  <img
                    src={g}
                    alt=""
                    draggable={false}
                    className={`
                      w-52 h-40 object-cover
                      ${capsuleShapes[idx]}
                    `}
                  />
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* ---------------- CTA ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="p-10 text-center rounded-2xl border border-gray-100 shadow-lg bg-white/60">
            <h3 className="text-xl font-bold text-gray-900">
              Ready to Start Your <span className="text-[#024369]">Project</span>?
            </h3>

            <p className="mt-4 text-sm text-gray-600">
              Get a free consultation within 24 hours
            </p>

            <motion.div whileHover={{ scale: 1.03 }} className="mt-6 inline-block">
              <Link
                to="/contact"
                className="bg-[#024369] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
              >
                Start Your Journey With Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
