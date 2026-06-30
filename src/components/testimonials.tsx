"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const initialTestimonials = [
  {
    avatar: "https://ui-avatars.com/api/?name=Charvi+Mahajan&background=4f46e5&color=fff&size=140",
    name: "Charvi Mahajan",
    role: "Student",
    program: "Google Review · 2 months ago",
    rating: 5,
    review: "One of the best coaching institutes for students. The teachers explain every topic very clearly and make even difficult concepts easy to understand. The environment is very supportive and motivating for studies. Doubts are solved properly.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Anna+Toppo&background=16a34a&color=fff&size=140",
    name: "Anna Toppo",
    role: "Student",
    program: "Google Review · 1 month ago",
    rating: 5,
    review: "I had a really good experience at Aakshay Academy. The teachers are very friendly, supportive, and always ready to help me. The environment of this institute is very positive and comfortable for learning.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Manas+Kumar&background=dc2626&color=fff&size=140",
    name: "Manas Kumar",
    role: "Student",
    program: "Google Review · 2 months ago",
    rating: 5,
    review: "I'd never have been studying at a coaching centre if it wasn't Aakshay Academy. The teachers are absolutely top-notch. The environment is so warm and study-coded, it makes it all worth the money and hard work.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Aarav&background=0891b2&color=fff&size=140",
    name: "Aarav",
    role: "Student",
    program: "Google Review · 8 months ago",
    rating: 5,
    review: "The teaching style here is very effective. Teachers focus on concept clarity and give personal attention to each student. I've really improved after joining.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Aman+Gupta&background=7c3aed&color=fff&size=140",
    name: "Aman Gupta",
    role: "Student · Local Guide",
    program: "Google Review · 8 months ago",
    rating: 5,
    review: "Excellent commerce academy with experienced faculty, clear concept teaching, and personalized attention. Regular tests, doubt sessions, and quality study material help students perform their best. Perfect place for strong conceptual understanding and exam success.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Shailly+Mahajan&background=db2777&color=fff&size=140",
    name: "Shailly Mahajan",
    role: "Student",
    program: "Google Review · 2 months ago",
    rating: 5,
    review: "I have had a wonderful experience at this academy. The faculty is highly knowledgeable, supportive, and truly dedicated to the students' success. The study material is comprehensive and updated regularly. The atmosphere is motivating.",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Deepika+Yadav&background=9333ea&color=fff&size=140",
    name: "Deepika Yadav",
    role: "Student",
    program: "Google Review · 8 months ago",
    rating: 5,
    review: "The best part about this coaching is the faculty's dedication. They make complex topics easy to understand and provide excellent guidance for exam preparation. The atmosphere is positive and encouraging.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % initialTestimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-50 glow-blob opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
              Community Voices
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none">
              Testimonals by Parents & Teachers
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand-500 bg-white text-gray-600 hover:text-brand-500 flex items-center justify-center transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand-500 bg-white text-gray-600 hover:text-brand-500 flex items-center justify-center transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Form Container */}
        <div className="relative min-h-[380px] lg:min-h-[320px] bg-slate-50 border border-gray-200/60 rounded-[32px] p-8 md:p-12 overflow-hidden">

          {/* Background Quote Mark */}
          <div className="absolute top-8 right-12 text-brand-100 pointer-events-none opacity-50">
            <Quote className="w-28 h-28 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
                {/* Review Text */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(initialTestimonials[index].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium font-heading leading-relaxed text-brand-900">
                    &ldquo;{initialTestimonials[index].review}&rdquo;
                  </blockquote>
                </div>

                {/* Bio & Avatar */}
                <div className="lg:col-span-4 flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:border-l lg:border-gray-200/85 lg:pl-8">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-brand-200 shadow-md bg-gray-200">
                    <Image
                      src={initialTestimonials[index].avatar}
                      alt={initialTestimonials[index].name}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-brand-900">
                      {initialTestimonials[index].name}
                    </h3>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                      {initialTestimonials[index].role}
                    </p>
                    <p className="text-xs text-brand-500 font-medium mt-0.5">
                      {initialTestimonials[index].program}
                    </p>
                  </div>
                </div>
              </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-12 flex gap-1.5">
            {initialTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === i ? "bg-brand-500 w-6" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
