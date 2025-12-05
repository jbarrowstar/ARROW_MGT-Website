// src/components/home/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaHeart,
  FaCertificate
} from "react-icons/fa";
import heroImage from "../../assets/home/thumbnail.png";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [headingIndex, setHeadingIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  const headings = [
    "ARROW Engineering",
    "Design, Deploy, Deliver",
    "Safe, Smart, Scalable"
  ];

  useEffect(() => {
    const t = setInterval(() => setHeadingIndex((i) => (i + 1) % headings.length), 3800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => closeButtonRef.current?.focus?.(), 40);
    } else {
      document.removeEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !modalRef.current) return;
    const node = modalRef.current;
    const focusable = node.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleTab(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    node.addEventListener("keydown", handleTab);
    return () => node.removeEventListener("keydown", handleTab);
  }, [open]);

  const pulse = { animate: { scale: [1, 1.03, 1], opacity: [0.22, 0.46, 0.22], transition: { duration: 4, repeat: Infinity } } };
  const floatY = { animate: { y: [0, -8, 0], transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } } };
  const frostyCard = "rounded-3xl backdrop-blur-sm bg-white/6 border border-white/10 shadow-2xl";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full min-h-[52vh] md:min-h-[72vh] lg:min-h-screen overflow-visible pb-8 md:pb-12 lg:pb-16"
      style={{
        background:
          "radial-gradient(ellipse at 10% 10%, rgba(255,255,255,0.02), transparent 8%), linear-gradient(180deg,#0b2447 0%, #0f3a7a 100%)"
      }}
      aria-labelledby="hero-title"
    >
      {/* Decorative shapes (non-layout) */}
      <motion.div {...pulse} className="absolute left-6 top-12 w-24 h-24 md:w-40 md:h-40 rounded-full border border-white/6 bg-white/6 opacity-18 pointer-events-none" aria-hidden="true" />
      <motion.div {...floatY} className="absolute right-6 top-28 w-14 h-14 md:w-28 md:h-28 rounded-full bg-white/6 opacity-10 pointer-events-none" aria-hidden="true" />
      <motion.div {...pulse} className="absolute right-12 bottom-20 w-20 h-20 md:w-36 md:h-36 rounded-full bg-[#083a66]/50 opacity-36 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* MOM badge */}
        <div className="flex items-start md:items-start">
          <span className="inline-flex items-center gap-2 bg-[#09213a]/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-sm">
            <FaCertificate className="w-3 h-3" aria-hidden="true" />
            <span className="sr-only">Status:</span>
            <span>MOM Approved Contractor</span>
          </span>
        </div>

        {/* Heading: static "Welcome to" + rotating phrase */}
        <div id="hero-title" className="mt-4 md:mt-6 text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight flex flex-col md:flex-row md:items-baseline md:gap-6 items-center justify-center md:justify-start">
            <span className="opacity-90 block">Welcome to</span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={headingIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-baseline gap-2 whitespace-nowrap mt-2 md:mt-0"
                aria-live="polite"
              >
                {headingIndex === 0 ? (
                  <>
                    <span className="text-[#8cc7ff] font-extrabold">ARROW</span>
                    <span className="text-white/90 font-semibold">Engineering</span>
                  </>
                ) : (
                  <span className="text-white/90 font-semibold">{headings[headingIndex]}</span>
                )}
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* Narrow underline */}
          <div className="h-1 mt-4 md:mt-3 rounded mx-auto md:mx-0 bg-linear-to-r from-[#cfe8ff] to-transparent w-16" aria-hidden="true" />
        </div>

        {/* Main showcase card */}
        <div className="mt-4 md:mt-6 relative">
          <div className={`${frostyCard} rounded-3xl p-4 sm:p-6 md:p-8 border-4 border-[#1b6ba6]/20 mx-auto max-w-2xl lg:max-w-4xl`}>
            <div className="rounded-xl overflow-hidden bg-white/5 border-8 border-white/40 shadow-inner relative">
              <img src={heroImage} alt="Project showcase" className="w-full h-56 sm:h-64 md:h-80 lg:h-[360px] object-cover block" loading="lazy" />
              <button aria-label="Open showcase" onClick={() => setOpen(true)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b3a66]/40">
                <FaPlay className="text-[#0b3a66] text-lg md:text-2xl" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center justify-center">
              <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-white text-[#0b3a66] px-5 py-3 rounded-full font-semibold shadow-md text-sm sm:text-base hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b3a66]/30">
                Experience the Full Showcase
                <span className="text-xl" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Decorative pulse circle on md+ */}
          <motion.div {...pulse} className="absolute right-6 bottom-6 hidden sm:block" aria-hidden="true">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#0b3a66]/30" />
          </motion.div>
        </div>

        {/* Zero Accident Policy badge
            - mobile: in-flow with a small top margin (creates minimal padding)
            - md+: absolutely positioned inside hero with bottom offset so it does not change hero height
        */}
        <div className="mt-4 md:mt-0">
          {/* mobile: block in flow (small margin only) */}
          <div className="block md:hidden">
            <div className="flex items-center gap-3 bg-white rounded-xl shadow-2xl p-3 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#e8f3ff] shrink-0 border-2 border-white/40">
                <FaShieldAlt className="text-[#0b3a66] text-lg" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#0b3a66]">Zero Accident Policy</div>
                <div className="text-xs text-gray-300">Safety is our priority.</div>
              </div>
            </div>
          </div>

          {/* md+: absolutely positioned inside hero so it doesn't increase hero height */}
          <div className="hidden md:block relative">
            <div className="absolute left-4 bottom-6"> 
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-2xl p-3 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#e8f3ff] shrink-0 border-2 border-white/40">
                  <FaShieldAlt className="text-[#0b3a66] text-lg" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#0b3a66]">Zero Accident Policy</div>
                  <div className="text-xs text-gray-300">Safety is our priority.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-modal="true" role="dialog" aria-label="Showcase">
            <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div ref={modalRef} initial={{ y: 30, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.98 }} transition={{ duration: 0.32 }} className="relative z-10 w-full max-w-3xl rounded-2xl bg-linear-to-b from-[#06375b] to-[#014a6f] text-white p-4 sm:p-6 md:p-8 shadow-2xl border border-white/10 overflow-y-auto max-h-[92vh] scrollbar-hide">
              <div className="flex items-center justify-between mb-4">
                <button onClick={() => setOpen(false)} className="bg-white text-[#044a76] font-medium rounded-md px-3 py-1.5 shadow-sm border border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30">
                  ← Back To Home
                </button>

                <button ref={closeButtonRef} onClick={() => setOpen(false)} className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-[#044a76] shadow-sm border border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30" aria-label="Close showcase">
                  <FaTimes aria-hidden="true" />
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Experience Excellence</h2>
              <p className="text-center text-sm sm:text-base text-white/80 mb-6">Discover how Arrow Engineering delivers world-class scaffolding solutions</p>

              <div className="rounded-xl overflow-hidden border-4 border-white/20 mb-6 bg-white/5">
                <div className="relative">
                  <img src={heroImage} alt="showcase" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <FaPlay className="text-white text-2xl" aria-hidden="true" />
                  </div>

                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaPlay />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold truncate">Arrow Engineering &amp; Management Pte Ltd</div>
                        <div className="text-white/60 text-sm">Construction • 3:42</div>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">See How Arrow Delivers Precision and Safety</h3>
              <p className="text-center text-white/80 mb-6">Discover how Arrow Engineering ensures quality, efficiency, and safety in every project.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Safety Standards", desc: "Rigorous processes" },
                  { title: "Quick Setup", desc: "Efficient deployment" },
                  { title: "Expert Team", desc: "Skilled professionals" }
                ].map((f) => (
                  <div key={f.title} className="bg-white text-[#044a76] p-4 rounded-xl border-2 border-white shadow-lg text-center">
                    <div className="text-lg font-bold mb-1">{f.title}</div>
                    <div className="text-sm">{f.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mx-auto max-w-2xl bg-white border-2 border-white rounded-3xl p-6 text-center">
                <div className="text-xl sm:text-2xl font-bold mb-3 text-[#044a76]">Why Choose Arrow Engineering?</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#044a76] font-medium">
                  <div>• Safety-first culture</div>
                  <div>• Proven track record</div>
                  <div>• Certified teams</div>
                  <div>• Flexible solutions</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
