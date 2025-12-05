// src/components/Certificates.jsx
import React, { useState } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Certificates (image-mode)
 *
 * Place the following images under: src/assets/certificates/
 *
 * Filenames (as provided):
 * - "ISO 9001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg"
 * - "ISO 45001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg"
 * - "LIC0024LO1Competent Organisation Certificate.jpg"
 * - "bizSAFE_31 Jan 2028_ARROW ENGINEERING AND MANAGEMENT PTE LTD_page-0001.jpg"
 * - "ISO 14001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg"
 * - "UAF NEW-CB-IMS-W.jpg"
 *
 * Optional title artwork file: src/assets/certificates/title-art.png
 *
 * Update import paths if your filenames differ.
 */

/* Image imports — ensure these files exist at the paths below */
import iso9001 from "../assets/certificates/ISO 9001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg";
import iso45001 from "../assets/certificates/ISO 45001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg";
import lic00024 from "../assets/certificates/LIC0024LO1Competent Organisation Certificate.jpg";
import bizsafe from "../assets/certificates/bizSAFE_31 Jan 2028_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg";
import iso14001 from "../assets/certificates/ISO 14001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg";
import uaf from "../assets/certificates/UAF NEW-CB-IMS-W.jpg";

/* Optional title artwork (replace filename if needed) */
import titleArt from "../assets/certificates/title-art.png";

/* Helper to create a friendly title from filename */
function titleFromFilename(filename) {
  if (!filename) return "Certificate";
  const name = filename.replace(/\.[^.]+$/, "");
  const cleaned = name.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return cleaned
    .split(" ")
    .map((w) => (w === w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join(" ");
}

/* Certificate list */
const CERTS = [
  { id: "cert-iso9001", file: iso9001, filename: "ISO 9001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg" },
  { id: "cert-iso45001", file: iso45001, filename: "ISO 45001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg" },
  { id: "cert-lic0024", file: lic00024, filename: "LIC0024LO1Competent Organisation Certificate.jpg" },
  { id: "cert-bizsafe", file: bizsafe, filename: "bizSAFE_31 Jan 2028_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg" },
  { id: "cert-iso14001", file: iso14001, filename: "ISO 14001_ARROW ENGINEERING AND MANAGEMENT PTE LTD.jpg" },
  { id: "cert-uaf", file: uaf, filename: "UAF NEW-CB-IMS-W.jpg" }
].map((c) => ({ ...c, title: titleFromFilename(c.filename) }));

/* Animations */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};
const cardHover = { y: -6, scale: 1.02, boxShadow: "0 12px 30px rgba(2,6,23,0.08)" };
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28 } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } }
};
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

export default function Certificates() {
  const [preview, setPreview] = useState(null); // { file, title }

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16 font-sans text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto space-y-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-white rounded-lg p-6 sm:p-8 shadow-md border border-gray-100 h-full">
          <div className="lg:col-span-7 ">
            <motion.div
              className=""
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Commitment to Excellence:{" "}
                <motion.span
                  className="text-[#0f6d93]"
                  animate={{ opacity: [1, 0.85, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Certified Quality
                </motion.span>
              </motion.h2>

              <motion.p
                className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                Explore our company certifications showcasing our commitment to quality, safety,
                and adherence to international standards. Click any certificate to view a larger image
                or download a copy.
              </motion.p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <motion.div
              className="w-full max-w-sm rounded-lg overflow-hidden border border-gray-100 shadow-md bg-white"
              variants={itemVariants}
            >
              {/* image covers the right panel fully */}
              <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
                {titleArt ? (
                  <img src={titleArt} alt="Certificates artwork" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-400">Certificates</div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-gray-900">Certified Standards</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certificates grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {CERTS.map((c, idx) => (
            <motion.button
              key={c.id}
              onClick={() => setPreview({ file: c.file, title: c.title, filename: c.filename })}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition p-2 text-left focus:outline-none"
              whileHover={cardHover}
              variants={itemVariants}
              aria-label={`Open ${c.title}`}
            >
              <div className="w-full h-40 overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={c.file}
                  alt={c.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</h4>
                <div className="text-xs text-gray-500">{/* optional small metadata */}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer band */}
        <motion.div
          className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md text-center"
          variants={itemVariants}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Maintaining Global Standards</h3>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            We continuously refine processes, retain certified practices and ensure safety, quality and reliability across projects.
          </p>
        </motion.div>
      </motion.div>

      {/* Modal preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              variants={backdropVariants}
              onClick={() => setPreview(null)}
            />

            {/* Modal container */}
            <motion.div
              className="relative bg-white rounded-lg shadow-2xl max-w-5xl w-full overflow-hidden"
              variants={modalVariants}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900">{preview.title}</div>

                <div className="flex items-center gap-2">
                  <a
                    href={preview.file}
                    download={preview.filename || preview.title}
                    className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Download ${preview.title}`}
                  >
                    <FiDownload /> Download
                  </a>

                  <button
                    onClick={() => setPreview(null)}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg"
                    aria-label="Close preview"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-white">
                <motion.img
                  src={preview.file}
                  alt={preview.title}
                  className="w-full max-h-[75vh] object-contain rounded"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.28 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
