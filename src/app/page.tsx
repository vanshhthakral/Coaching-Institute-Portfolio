"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import all sections
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import Features from "@/components/features";
import Courses from "@/components/courses";
import Notices from "@/components/notices";
import LearningExperience from "@/components/learning-experience";
import Faculty from "@/components/faculty";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Page Preloader */}
      <Loader />

      {/* 2. Sticky Navbar */}
      <Navbar />

      {/* Main content flow */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Trusted Organizations Logo Strip */}
        <LogoStrip />

        {/* 5. Features Grid */}
        <Features />

        {/* 6. Courses Listings */}
        <Courses />

        {/* 6.5 Latest Notices */}
        <Notices />

        {/* 7. Learning Experience & Split Photo Spread */}
        <LearningExperience />

        {/* 7.5 Faculty Section */}
        <Faculty />

        {/* 8. Statistics Section */}
        <Stats />

        {/* 9. Testimonials Carousel */}
        <Testimonials />



        {/* 11. FAQ Accordions */}
        <FAQ />

        {/* 12. Newsletter Form Card */}
        <Newsletter />

        {/* 13. Contact Enquiry Form & Map */}
        <Contact />
      </main>

      {/* 14. Footer Section */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600 hover:shadow-brand-500/35 transition-all flex items-center justify-center cursor-pointer active:scale-90"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
