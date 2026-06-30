"use client";

import { useState } from "react";
import { ArrowRight, Play, Award, Sparkles, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate movement offset based on center of screen
    const x = (clientX - width / 2) / 30;
    const y = (clientY - height / 2) / 30;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white grid-bg"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-200 glow-blob opacity-45 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-200 glow-blob opacity-40 animate-pulse-slow [animation-delay:3s] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Admissions Open 2026-27
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7.5xl leading-[1.05] tracking-tight text-brand-900">
              Learn with{" "}
              <span className="bg-gradient-to-r from-brand-500 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                clarity.
              </span>
              <br />
              Grow with{" "}
              <span className="bg-gradient-to-r from-brand-500 to-indigo-600 bg-clip-text text-transparent">
                confidence.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Focuses on the future of youth from classes 1 to 12th, cuet, ipmat and CA, ACCA, CFA, US CMA, CIMA, FMVA, PAP, CPA CFA, CFP
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#courses"
                className="inline-flex items-center justify-center font-heading font-bold text-base text-white bg-brand-500 hover:bg-brand-600 active:scale-98 transition-all px-8 py-4 rounded-2xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 gap-2.5 group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-heading font-bold text-base text-brand-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 active:scale-98 transition-all px-8 py-4 rounded-2xl gap-2"
              >
                <Play className="w-4 h-4 text-brand-500 fill-current" />
                Book Consultation
              </a>
            </div>

            {/* Micro-Features Row */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                <Star className="w-4 h-4 text-amber-500 fill-current" />
                <span>Top-Rated Curriculum</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                <BookOpen className="w-4 h-4 text-brand-500" />
                <span>Chapter-wise Prep</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                <Award className="w-4 h-4 text-indigo-500" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px] bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_-15px_rgba(20,91,255,0.08)] p-8">
              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                <div className="flex flex-col">
                  <div className="text-4xl font-extrabold text-brand-900 mb-1 font-heading tracking-tight">1,519+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Students Guided</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-extrabold text-brand-900 mb-1 font-heading tracking-tight">10+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Years of Teaching</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-extrabold text-brand-900 mb-1 font-heading tracking-tight">97%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Academic Success</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-extrabold text-brand-900 mb-1 font-heading tracking-tight">20+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Courses and Subjects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
