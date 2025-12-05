// src/components/home/HomeServices.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaAnchor,
  FaBuilding,
  FaBroadcastTower,
  FaMobileAlt,
  FaTruckMoving,
  FaThLarge
} from "react-icons/fa";

/* ====== Data ====== */
const SERVICES = [
  {
    key: "mechanical-engineering",
    title: "Mechanical Engineering",
    icon: FaCogs,
    color: "from-pink-500 to-rose-600",
    frontDescription:
      "Innovative and reliable mechanical engineering solutions for cleanrooms and industrial facilities.",
    backDescription:
      "Focus on air quality, environmental control, and process efficiency with top-tier safety and compliance."
  },
  {
    key: "cantilever-scaffold",
    title: "Cantilever Scaffold",
    icon: FaAnchor,
    color: "from-orange-500 to-red-500",
    frontDescription:
      "Used in hard-to-reach places and building summits where ground access is blocked.",
    backDescription:
      "Cantilevered tubes from building apertures form the scaffold. One edge exposed, other fixed."
  },
  {
    key: "external-perimeter",
    title: "External Perimeter Scaffold",
    icon: FaBuilding,
    color: "from-indigo-500 to-purple-600",
    frontDescription:
      "Built ~300mm from building edge for safe exterior access.",
    backDescription:
      "Includes platforms, toe boards, handrails, ladder access, netting, and tie-ins for stability."
  },
  {
    key: "independent-tower",
    title: "Independent Tower Scaffold",
    icon: FaBroadcastTower,
    color: "from-red-500 to-rose-700",
    frontDescription:
      "Freestanding scaffold not connected to buildings; ideal for single-level work.",
    backDescription:
      "Quick to erect/dismantle. Suitable for land-based or low-rise building tasks."
  },
  {
    key: "mobile-scaffold",
    title: "Mobile Scaffold",
    icon: FaMobileAlt,
    color: "from-purple-500 to-indigo-600",
    frontDescription:
      "Wheeled scaffold for rapid repositioning and access.",
    backDescription:
      "Light to heavy duty. Stabilized with bars and secure wheels. Use sleeves for joints."
  },
  {
    key: "hanging-scaffold",
    title: "Hanging Scaffold",
    icon: FaTruckMoving,
    color: "from-cyan-500 to-blue-500",
    frontDescription:
      "Suspended from roofs or bridges when ground access is unavailable.",
    backDescription:
      "Hung from wire ropes or tubes. Ideal for hard-to-reach vertical areas."
  },
  {
    key: "access-tower",
    title: "Access Tower Scaffold",
    icon: FaThLarge,
    color: "from-green-500 to-emerald-600",
    frontDescription:
      "Tower scaffold with optional mobility and safe access platforms.",
    backDescription:
      "Includes ladders and landings for inspection, maintenance, and light construction."
  }
];

/* Map keys to canonical slugs used by App.jsx */
const SLUG_MAP = {
  "mechanical-engineering": "mechanical-engineering",
  "cantilever-scaffold": "cantilever-scaffolding",
  "external-perimeter": "external-perimeter-scaffolding",
  "independent-tower": "independent-tower-scaffolding",
  "mobile-scaffold": "mobile-scaffolding",
  "hanging-scaffold": "hanging-scaffolding",
  "access-tower": "access-tower-scaffolding"
};

/* ====== Individual Card ====== */
function ServiceCard({ item, index }) {
  const slug = SLUG_MAP[item.key] || item.key;
  const Icon = item.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        delay: index * 0.1
      }
    },
    hover: { 
      y: -8, 
      scale: 1.02, 
      transition: { type: "spring", stiffness: 320, damping: 18 } 
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      transition: { type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 } 
    },
    hover: { scale: 1.1, rotate: 5 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.5 } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 shrink-0 w-80" // Fixed width for horizontal scroll
    >
      {/* Icon Section with Gradient Background */}
      <motion.div 
        className={`relative h-32 bg-linear-to-r ${item.color} flex items-center justify-center`}
        variants={iconVariants}
      >
        <motion.div
          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon className="text-white text-2xl" />
        </motion.div>

        {/* Floating indicator */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="p-6 lg:p-8"
        variants={contentVariants}
      >
        <motion.h3
          className="text-xl lg:text-2xl font-bold text-[#024369] mb-3 lg:mb-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.25 }}
          viewport={{ once: true }}
        >
          {item.title}
        </motion.h3>

        <motion.p
          className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.45 }}
          viewport={{ once: true }}
        >
          {item.frontDescription}
        </motion.p>

        {/* Learn More Link */}
        <div className="mt-4 lg:mt-6 flex items-center gap-3">
          <Link
            to={`/services/${slug}`}
            className="inline-flex items-center text-sm font-semibold text-[#024369] hover:text-[#0b6aa6] transition-transform transform group-hover:translate-x-1"
            aria-label={`Learn more about ${item.title}`}
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

      {/* Subtle background glow on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl -z-10 bg-linear-to-r ${item.color}`}
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* ====== Main Component ====== */
export default function HomeServices() {
  const scrollContainerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
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
            Services
          </motion.span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Arrow Engineering provides complete scaffolding design, planning, and implementation services, ensuring quality and safety at every stage.
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

      {/* Horizontal Scroll Container */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Scrollable Cards Container - Hidden Scrollbar */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto py-8 no-scrollbar"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.key} 
              item={service} 
              index={index}
            />
          ))}
        </div>
      </motion.div>


      {/* Add no-scrollbar utility styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}