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

          {/* Right Column: Dashboard Mockup & Parallax Floating items */}
          <div className="lg:col-span-5 relative w-full h-[480px] md:h-[550px] flex items-center justify-center">
            
            {/* Dashboard Container */}
            <motion.div
              style={{ x: coords.x * 0.3, y: coords.y * 0.3 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-full max-w-[390px] h-[360px] bg-slate-50 border border-gray-200/80 rounded-[28px] shadow-[0_25px_60px_-15px_rgba(20,91,255,0.08)] p-6 overflow-hidden flex flex-col justify-between"
            >
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-semibold text-gray-400">Aakshay Jindal Learning Hub</div>
              </div>

              {/* Central Graph/Circle Mockup */}
              <div className="my-auto flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Circle SVG */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      className="stroke-gray-100 fill-none"
                      strokeWidth="10"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      className="stroke-brand-500 fill-none"
                      strokeWidth="10"
                      strokeDasharray="377"
                      strokeDashoffset="75" // 80% completed
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-brand-900">80%</span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Completion
                    </span>
                  </div>
                </div>
                <p className="mt-4 font-heading font-bold text-sm text-brand-900">
                  Concept Mastery Gained
                </p>
              </div>

              {/* Stats Footer inside mockup */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 text-center">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Study Hours</div>
                  <div className="text-base font-bold text-brand-900">124 hrs</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Rank Achieved</div>
                  <div className="text-base font-bold text-brand-500">Top 1%</div>
                </div>
              </div>
            </motion.div>

            {/* Parallax Card 1: Students Growth */}
            <motion.div
              style={{ x: coords.x * 0.7, y: coords.y * 0.7 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="absolute top-6 left-2 sm:-left-4 bg-white border border-gray-100 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-4 flex items-center gap-3 w-48"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ↗
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Success Rate
                </div>
                <div className="text-base font-extrabold text-brand-900">95% Positive</div>
              </div>
            </motion.div>

            {/* Parallax Card 2: Personal Mentor */}
            <motion.div
              style={{ x: coords.x * -0.6, y: coords.y * -0.6 }}
              transition={{ type: "spring", stiffness: 85, damping: 17 }}
              className="absolute bottom-6 right-2 sm:-right-4 bg-white border border-gray-100 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-4 flex items-center gap-3 w-52"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                🧑‍🏫
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Mentor Connected
                </div>
                <div className="text-base font-extrabold text-brand-900">Direct Support</div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge: Rating */}
            <motion.div
              style={{ x: coords.x * -0.9, y: coords.y * -0.9 }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="absolute top-12 right-6 bg-brand-500 text-white rounded-full px-4 py-1.5 shadow-[0_10px_20px_rgba(20,91,255,0.15)] flex items-center gap-1.5 text-xs font-bold font-heading"
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
              5.0 Avg Rating
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
