"use client";

import { motion } from "framer-motion";
import { Star, Clock, Users, ChevronRight } from "lucide-react";
import Image from "next/image";

import { courses } from "@/data/courses";
import Link from "next/link";

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
              Batches
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none">
              Personalised programs built for confident learners
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg max-w-sm">
            Choose a stage to see its subjects, learning focus and available format.
          </p>
        </div>

        {/* Course Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/courses/${course.id}`}
                className="group bg-white border border-gray-200/80 rounded-[24px] overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(20,91,255,0.05)] h-full block"
              >
              {/* Image & Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <span className="absolute top-4 left-4 font-heading font-bold text-[10px] text-brand-900 bg-white/95 px-3 py-1 rounded-full shadow-sm tracking-wider uppercase">
                  {course.badge}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  {/* Rating & Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span>{course.rating.toFixed(1)} Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-500" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-lg text-brand-900 leading-snug group-hover:text-brand-500 transition-colors">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="text-xs text-gray-400">
                    Lead Mentor: <span className="font-semibold text-gray-600">{course.instructor}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-4">
                  {/* Duration Info */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{course.duration}</span>
                  </div>

                  {/* Pricing and Button */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tuition Fees</span>
                      <span className="text-sm font-extrabold text-brand-900">{course.fee}</span>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full bg-brand-50 hover:bg-brand-500 group-hover:bg-brand-500 text-brand-500 hover:text-white group-hover:text-white flex items-center justify-center transition-all duration-300"
                      aria-label={`View details for ${course.title}`}
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
