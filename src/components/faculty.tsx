"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Removed ArrowUpRight

const faculties = [
  {
    name: "Aakshay Jindal",
    role: "Lead Mentor & Founder",
    description: "Specializes in Commerce subjects and Competitive exams with transformative teaching methods",
    image: "/images/faculty1.jpeg",
    subject: "10+ years Experience",
  },
  {
    name: "Ms. Chahat Sharma",
    role: "Junior Expert",
    description: "Builds strong foundation of the younger generation with her experience and knowledge.",
    image: "/images/faculty2.jpeg",
    subject: "4+ years Experience",
  },
  {
    name: "Rahul Kapoor",
    role: "Maths Expert",
    description: "Mastered in Complex math equations and numbers, Rahul sir trains students to be an expert like him.",
    image: "/images/faculty3.jpeg",
    subject: "25+ years Experience",
  },
  {
    name: "Ashutosh Verma",
    role: "Humanities Mentor",
    description: "Masteres in the field of arts, Ashutosh shares his experience and knowledge with students",
    image: "/images/faculty4.jpeg",
    subject: "5+ years Experience",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
              Our Educators
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none">
              Meet Our Expert Faculty
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg max-w-sm">
            Learn directly from passionate, experienced mentors dedicated to your academic success.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {faculties.map((faculty, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[85vw] sm:min-w-0 snap-center group block bg-white border border-gray-100 rounded-[28px] overflow-hidden hover:shadow-[0_20px_45px_rgba(20,91,255,0.08)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 font-heading font-bold text-[10px] text-brand-900 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">
                  {faculty.subject}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-heading font-extrabold text-xl text-brand-900 group-hover:text-brand-500 transition-colors">
                  {faculty.name}
                </h3>
                <div className="text-sm font-semibold text-brand-600 mt-1 mb-4">
                  {faculty.role}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {faculty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
