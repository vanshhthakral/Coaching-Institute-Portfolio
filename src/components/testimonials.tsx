"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Plus, X } from "lucide-react";
import Image from "next/image";

const initialTestimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80",
    name: "Rajesh Verma",
    role: "Parent of Class XII Student",
    program: "Board Intensive Program",
    rating: 5,
    review: "The weekly parent feedback sessions are honest and actionable. Instead of automated grade charts, I got specific advice on how to support my child's practice schedule at home. The results speak for themselves.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&q=80",
    name: "Anita Khanna",
    role: "High School Educator",
    program: "Academic Observer",
    rating: 5,
    review: "As a school teacher, I often see students struggle to connect theory to exams. Aakshay Jindal's curriculum perfectly bridges the gap between our school syllabus and competitive board requirements.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=140&q=80",
    name: "Meera Sen",
    role: "Parent of Foundation Student",
    program: "Classes VIII-X",
    rating: 5,
    review: "We enrolled our daughter two years ago. The personalized attention she receives here has completely transformed her confidence. She no longer fears math and actually looks forward to her weekend clinics.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=140&q=80",
    name: "Vikram Singh",
    role: "Senior Examiner",
    program: "Curriculum Advisor",
    rating: 5,
    review: "The mock test series and evaluation methods used by Aakshay Jindal's faculty are exceptional. They train students to write answers exactly how board examiners expect to see them.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % initialTestimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + initialTestimonials.length) % initialTestimonials.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 3000);
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
              Trusted by Parents & Teachers
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors"
            >
              {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showForm ? "Cancel" : "Write a Review"}
            </button>
            
            {!showForm && (
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
            )}
          </div>
        </div>

        {/* Carousel / Form Container */}
        <div className="relative min-h-[380px] lg:min-h-[320px] bg-slate-50 border border-gray-200/60 rounded-[32px] p-8 md:p-12 overflow-hidden">
          
          {/* Background Quote Mark */}
          {!showForm && (
            <div className="absolute top-8 right-12 text-brand-100 pointer-events-none opacity-50">
              <Quote className="w-28 h-28 stroke-[1.5]" />
            </div>
          )}

          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-brand-900 mb-2">Review Submitted!</h3>
                    <p className="text-gray-500">Thank you for sharing your experience. We will review and publish it soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-brand-900 mb-6">Share Your Experience</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Your Name</label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Role</label>
                        <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white">
                          <option value="parent">Parent</option>
                          <option value="teacher">Teacher / Educator</option>
                          <option value="student">Student</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" className="text-gray-300 hover:text-amber-400 transition-colors">
                            <Star className="w-8 h-8 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Your Review</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white resize-none" placeholder="Tell us how we did..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-colors shadow-md">
                      Submit Review
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
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
            )}
          </AnimatePresence>

          {/* Dots Indicator */}
          {!showForm && (
            <div className="absolute bottom-6 left-12 flex gap-1.5">
              {initialTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === i ? "bg-brand-500 w-6" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
