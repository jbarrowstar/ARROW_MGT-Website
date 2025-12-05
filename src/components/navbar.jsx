// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/Arrow.png";

/**
 * NavBar
 * - Desktop dropdowns open on hover and on keyboard (Enter/Space).
 * - Mobile menu is a full overlay that traps scroll and returns focus when closed.
 * - Uses your project's Tailwind usage and CSS variable (--primary) provided in global CSS.
 */

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // "services" | "projects" | null
  const location = useLocation();

  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  /* -------------------- MENU DATA (canonical slugs) -------------------- */
  const servicesItems = [
    { name: "Hanging Scaffold", slug: "hanging-scaffolding" },
    { name: "Access Tower Scaffold", slug: "access-tower-scaffolding" },
    { name: "Mobile Scaffold", slug: "mobile-scaffolding" },
    { name: "Cantilever Scaffold", slug: "cantilever-scaffolding" },
    { name: "Independent Tower Scaffold", slug: "independent-tower-scaffolding" },
    { name: "External Perimeter Scaffold", slug: "external-perimeter-scaffolding" },
    { name: "Mechanical Engineering", slug: "mechanical-engineering" }
  ];

  const projectsItems = [
    { name: "Semiconductor", slug: "semiconductor" },
    { name: "Data Center", slug: "data-center" },
    { name: "Pharmaceutical", slug: "pharmaceutical" },
    { name: "Construction", slug: "construction" }
  ];

  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // global keyboard + click outside handlers
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
        // return focus to menu button if closing mobile menu
        if (menuButtonRef.current) menuButtonRef.current.focus();
      }
    }

    function onClick(e) {
      // click outside mobile menu closes it
      if (mobileOpen && mobileMenuRef.current) {
        const path = e.composedPath ? e.composedPath() : (e.path || []);
        if (!path.includes(mobileMenuRef.current) && !path.includes(menuButtonRef.current)) {
          setMobileOpen(false);
        }
      }
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 }
  };

  /* Focus the first link inside mobile menu when opened */
  useEffect(() => {
    if (mobileOpen) {
      // small delay to allow animation and DOM attach
      setTimeout(() => {
        const first = mobileMenuRef.current?.querySelector('a, button');
        first?.focus();
      }, 80);
    } else {
      // restore focus to menu button
      menuButtonRef.current?.focus?.();
    }
  }, [mobileOpen]);

  /* -------------------- RENDER -------------------- */
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-lg border-b border-gray-200" : "shadow-sm"}`}
      aria-label="Main navigation"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Primary">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <img src={logo} alt="Arrow logo" className="h-12 w-auto" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-semibold text-gray-800">ARROW Engineering</div>
              <div className="text-sm text-gray-600">& Management Pte Ltd</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `relative py-2 ${isActive ? "text-[#024369] font-semibold" : "text-gray-700 hover:text-[#024369]"}`}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `py-2 ${isActive ? "text-[#024369] font-semibold" : "text-gray-700 hover:text-[#024369]"}`}
              >
                About us
              </NavLink>
            </li>

            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown((s) => (s === "services" ? null : s))}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "services"}
                aria-controls="nav-services"
                onClick={() => setActiveDropdown((s) => (s === "services" ? null : "services"))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveDropdown((s) => (s === "services" ? null : "services"));
                  }
                }}
                className="flex items-center gap-1 text-gray-700 hover:text-[#024369] py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfeefc]"
              >
                Services <MdKeyboardArrowDown className="ml-1" />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    id="nav-services"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    role="menu"
                    aria-label="Services"
                  >
                    {servicesItems.map((item) => (
                      <NavLink
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? "text-[#024369] bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-[#024369]"}`}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Projects dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("projects")}
              onMouseLeave={() => setActiveDropdown((s) => (s === "projects" ? null : s))}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "projects"}
                aria-controls="nav-projects"
                onClick={() => setActiveDropdown((s) => (s === "projects" ? null : "projects"))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveDropdown((s) => (s === "projects" ? null : "projects"));
                  }
                }}
                className="flex items-center gap-1 text-gray-700 hover:text-[#024369] py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfeefc]"
              >
                Projects <MdKeyboardArrowDown className="ml-1" />
              </button>

              <AnimatePresence>
                {activeDropdown === "projects" && (
                  <motion.div
                    id="nav-projects"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    role="menu"
                    aria-label="Projects"
                  >
                    {projectsItems.map((item) => (
                      <NavLink
                        key={item.slug}
                        to={`/projects/${item.slug}`}
                        className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? "text-[#024369] bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-[#024369]"}`}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavLink
                to="/certificates"
                className={({ isActive }) => `py-2 ${isActive ? "text-[#024369] font-semibold" : "text-gray-700 hover:text-[#024369]"}`}
              >
                Certificates
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `py-2 ${isActive ? "text-[#024369] font-semibold" : "text-gray-700 hover:text-[#024369]"}`}
              >
                Contact us
              </NavLink>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={menuButtonRef}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfeefc]"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile overlay menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-200 shadow-xl h-[calc(100vh-5rem)] overflow-y-auto z-50"
            >
              <div className="p-6 space-y-4">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-[#024369]">Home</NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block text-lg text-gray-700">About us</NavLink>

                <MobileDropdown title="Services" items={servicesItems} base="/services" onItemClick={() => setMobileOpen(false)} />
                <MobileDropdown title="Projects" items={projectsItems} base="/projects" onItemClick={() => setMobileOpen(false)} />

                <NavLink to="/certificates" onClick={() => setMobileOpen(false)} className="block text-lg text-gray-700">Certificates</NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block text-lg text-gray-700">Contact us</NavLink>

                <div className="pt-6 border-t border-gray-100 text-sm text-gray-600 text-center">Arrow Engineering & Management Pte Ltd</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

/* -------------------- MOBILE DROPDOWN -------------------- */
function MobileDropdown({ title, items = [], base = "", onItemClick = () => {} }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex justify-between items-center w-full py-3 text-lg text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfeefc]"
        aria-expanded={open}
        aria-controls={`mobile-${title}`}
      >
        <span>{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="ml-2">
          <MdKeyboardArrowDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`mobile-${title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pl-4 mt-2 space-y-2 overflow-hidden"
          >
            {items.map((it) => (
              <Link
                key={it.slug}
                to={`${base}/${it.slug}`}
                onClick={() => {
                  onItemClick();
                  setOpen(false);
                }}
                className="block py-2 text-gray-600 hover:text-[#024369] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cfeefc]"
              >
                {it.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
