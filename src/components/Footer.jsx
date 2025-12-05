import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import arrowLogo from "../assets/arrow.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook", href: "#" },
    { Icon: FaTwitter, label: "Twitter", href: "#" },
    { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { Icon: FaInstagram, label: "Instagram", href: "#" }
  ];

  return (
    <footer
      role="contentinfo"
      className="bg-[#024369] text-white text-sm sm:text-base pt-12 pb-6 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Main grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Company */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-bold mb-2">ARROW Engineering &amp; Management Pte Ltd.</h2>
          <p className="text-white/85 leading-relaxed">
            Trusted partner in scaffolding and engineering solutions. MOM-approved contractor delivering
            safety and precision across construction, marine, oil &amp; gas, chemical and pharmaceutical
            industries.
          </p>
        </motion.div>

        {/* Address */}
        <motion.address className="not-italic" variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-white/85 leading-relaxed">
            7 Gambas Crescent, ARK @ Gambas #05-45, Singapore 757087
          </p>
          <p className="mt-2 text-white/85">
            Phone:{" "}
            <a href="tel:+6569097402" className="underline hover:text-white transition">
              +65 6909 7402
            </a>
          </p>
          <p className="text-white/85">Fax: +65 6909 7403</p>
          <p className="text-white/85">
            Email:{" "}
            <a href="mailto:info@arrowemsg-engg.net" className="underline hover:text-white transition">
              info@arrowemsg-engg.net
            </a>
          </p>
        </motion.address>

        {/* Quick links */}
        <motion.nav aria-label="Footer quick links" variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact Us", href: "/contact" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" }
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/85 hover:text-white transition block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 rounded-sm px-1"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Social + Logo */}
        <motion.div variants={itemVariants} className="space-y-4">
          {/* Arrow Logo */}
          <div className="flex justify-start lg:justify-start">
            <img
              src={arrowLogo}
              alt="Arrow Logo"
              className="w-20 h-auto object-contain opacity-95 bg-white p-4 "
            />
          </div>

          <h3 className="text-lg font-semibold mb-1">Follow Us</h3>

          <div className="flex gap-3 mt-2">
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="mt-10 border-t border-white/20 pt-4 text-center text-white/70 text-xs sm:text-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <div className="inline-block">
          ©{year} ARROW Engineering &amp; Management Pte Ltd. All Rights Reserved.
          <span className="mx-2">|</span>
          <a href="/privacy" className="underline hover:text-white transition px-1">
            Privacy Policy
          </a>
          <span className="mx-1">|</span>
          <a href="/terms" className="underline hover:text-white transition px-1">
            Terms &amp; Conditions
          </a>
        </div>
      </motion.div>

      {/* Decorative Accents */}
      <motion.div
        className="absolute bottom-4 left-10 w-3 h-3 rounded-full bg-white/8"
        animate={{ y: [0, -8, 0], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-white/6"
        animate={{ y: [0, -12, 0], opacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />
    </footer>
  );
}
