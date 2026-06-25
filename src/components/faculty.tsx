"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const faculties = [
  {
    name: "Aakshay Jindal",
    role: "Lead Mentor & Founder",
    description: "Specializes in Mathematics, Accounts, and competitive exams with transformative teaching methods.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
    subject: "Math & Commerce",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Science Expert",
    description: "PhD in Physics. Brings complex scientific concepts to life with deep conceptual clarity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    subject: "Physics & Science",
  },
  {
    name: "Rahul Verma",
    role: "Economics Faculty",
    description: "Chartered Accountant making Economics and Business Studies intuitive and scoring.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    subject: "Economics & CA",
  },
  {
    name: "Anjali Desai",
    role: "Humanities Mentor",
    description: "Expert in literature and communication, helping students articulate ideas flawlessly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    subject: "English",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((faculty, i) => (
            <motion.a
              href="#contact"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block bg-white border border-gray-100 rounded-[28px] overflow-hidden hover:shadow-[0_20px_45px_rgba(20,91,255,0.08)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
                <div className="absolute top-4 left-4 font-heading font-bold text-[10px] text-brand-900 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm tracking-wider uppercase">
                  {faculty.subject}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Floating arrow icon */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
