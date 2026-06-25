"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "Courses", href: "#courses" },
  { name: "Features", href: "#features" },

  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-brand-900/80 backdrop-blur-md border-b border-brand-100 dark:border-brand-900/30 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="font-heading font-extrabold text-2xl tracking-tight text-brand-900 dark:text-white flex items-center gap-1"
          >
            Aakshay Jindal<span className="text-brand-500">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-outOrigin" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Actions */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="#contact"
              className="inline-flex items-center justify-center font-heading font-bold text-sm text-white bg-brand-500 hover:bg-brand-600 active:scale-95 transition-all duration-200 px-5 py-2.5 rounded-full shadow-md shadow-brand-500/10 hover:shadow-brand-500/20 gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Open Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-900 dark:text-white hover:bg-gray-100 dark:hover:bg-brand-900/50 rounded-full transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[76px] z-40 lg:hidden bg-white dark:bg-brand-900 shadow-xl border-b border-brand-100 dark:border-brand-900/30 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-heading font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-brand-500 py-2 border-b border-gray-50 dark:border-gray-800"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">

                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full py-3 text-center font-heading font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
