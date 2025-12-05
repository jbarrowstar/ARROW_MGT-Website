// src/components/home/StatsShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import image1 from "../../assets/home/Stat1.png";
import image2 from "../../assets/home/Stat2.png";
import image3 from "../../assets/home/Stat3.png";
import image4 from "../../assets/home/Stat4.png";

import small1 from "../../assets/home/Stat11.png";
import small2 from "../../assets/home/Stat21.png";
import small3 from "../../assets/home/Stat31.png";
import small4 from "../../assets/home/Stat41.png";

/* Enhanced Counter */
const AnimatedCounter = ({ value = "0", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const isPercent = typeof value === "string" && value.includes("%");

  useEffect(() => {
    if (isInView) {
      // try to extract a numeric target; for "99.9%" it will keep decimal, for "24 hrs" it becomes 24
      const numericString = String(value).replace(/[^\d.]/g, "");
      const target = isPercent ? parseFloat(numericString || "0") : parseInt(numericString || "0", 10);
      const start = Date.now();

      const animate = () => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        if (isPercent) {
          setCount(Number((eased * target).toFixed(1)));
        } else {
          setCount(Math.floor(eased * (isNaN(target) ? 0 : target)));
        }

        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  }, [isInView, duration, value, isPercent]);

  return (
    <motion.span
      ref={ref}
      className="font-black"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {isPercent ? `${count}%` : `${count}+`}
    </motion.span>
  );
};

export default function StatsShowcase() {
  const stats = [
    {
      big: image1,
      small: small1,
      num: "25",
      t1: "Years",
      t2: "Experience",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      big: image2,
      small: small2,
      num: "150",
      t1: "Projects",
      t2: "Completed",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      big: image3,
      small: small3,
      num: "99.9%",
      t1: "Safety",
      t2: "Record",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500 to-emerald-500"
    },
    {
      big: image4,
      small: small4,
      num: "24 hrs",
      t1: "Support",
      t2: "Available",
      gradient: "from-orange-600 to-amber-600",
      bgGradient: "from-orange-500 to-amber-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 px-4 lg:py-28 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group text-center relative"
            >
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">

                {/* Clean Image Container - No Stats Inside */}
                <motion.div
                  className="relative h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.08 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <img
                    src={stat.big}
                    alt={`${stat.t1} ${stat.t2} visual`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Small Image Overlay */}
                  <motion.div
                    className="absolute bottom-3 right-3 w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={stat.small}
                      alt={`${stat.t1} icon`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-linear-to-t ${stat.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  className={`w-16 h-1 mx-auto mt-8 bg-linear-to-r ${stat.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ delay: i * 0.1 + 0.7, duration: 0.8 }}
                />
              </div>

              {/* Floating Background Effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`text-2xl md:text-3xl font-black bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter value={stat.num} />
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  {stat.t1}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.t2}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
