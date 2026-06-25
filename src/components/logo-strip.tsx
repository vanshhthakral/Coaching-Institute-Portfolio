"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Pearson", logoText: "Pearson", color: "hover:text-[#005a70] dark:hover:text-[#0091b3]" },
  { name: "McGraw Hill", logoText: "McGraw Hill", color: "hover:text-[#db2777] dark:hover:text-[#ec4899]" },
  { name: "Coursera", logoText: "coursera", color: "hover:text-[#0056d2]" },
  { name: "Udemy", logoText: "Ûdemy", color: "hover:text-[#a435f0]" },
  { name: "edX", logoText: "edX", color: "hover:text-[#ee3124]" },
];

export default function LogoStrip() {
  return (
    <section className="bg-gray-50/50 dark:bg-brand-900/30 py-10 border-y border-gray-100 dark:border-brand-900/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <p className="text-center font-heading font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">
          Learning Content Aligned With Global Standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center"
            >
              <span
                className={`font-heading font-extrabold text-2xl tracking-tighter text-gray-300 dark:text-gray-700 transition-all duration-300 ${company.color} hover:scale-110 cursor-pointer select-none`}
              >
                {company.logoText}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
