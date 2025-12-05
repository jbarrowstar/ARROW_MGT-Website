// src/components/home/TestimonialSection.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Congratulations to Arrow for doing an amazing job. I am proud of our system and management.",
    author: "Client A"
  },
  {
    quote: "The team did an excellent job with scaffold installation at our site. Everything was set up safely, on time, and with proper alignment. Their attention to detail and safety standards truly stood out.",
    author: "Client B"
  },
  {
    quote: "The amount of effort that team put into the job to complete our project is very commendable. The energy and level of teamwork that was displayed were exemplary. This has set up higher standards in the organization, which our client loved.",
    author: "Client C"
  },
  {
    quote: "Highly satisfied with the mobile scaffolding. Easy to assemble and shift between areas. It made painting and electrical work so much easier.",
    author: "Client D"
  }
];

export default function TestimonialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const authorVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full bg-[#024369] text-white px-6 sm:px-10 lg:px-20 py-16 lg:py-20">
      {/* Header */}
      <motion.div 
        className="text-center mb-12 lg:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={headerVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our <motion.span 
            className="text-[#8cc7ff]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            Testimonial
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-lg lg:text-xl font-semibold text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Happy Clients Say!
        </motion.p>

        {/* Animated underline */}
        <motion.div 
          className="h-1 w-20 bg-[#8cc7ff] mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            {/* Main Card */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col justify-between h-full relative z-10 border border-gray-100 group-hover:border-[#8cc7ff]/20 transition-colors duration-300">
              
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-3 -left-3 w-8 h-8 bg-[#8cc7ff] rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                <span className="text-white text-lg font-bold">"</span>
              </motion.div>

              {/* Quote Text */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 mt-2 text-gray-700"
                variants={quoteVariants}
              >
                {t.quote}
              </motion.p>

              {/* Author */}
              <motion.div 
                className="text-right"
                variants={authorVariants}
              >
                <div className="text-xs sm:text-sm font-semibold text-[#024369]">
                  — {t.author}
                </div>
                <motion.div 
                  className="h-0.5 w-12 bg-[#8cc7ff] ml-auto mt-1 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: idx * 0.1 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        className="flex justify-center mt-12 lg:mt-16 space-x-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            className="w-2 h-2 bg-[#8cc7ff] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: dot * 0.3
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
