"use client";

import { motion } from "framer-motion";

const notices = [
  {
    id: 1,
    leftContent: <div className="text-brand-400 font-bold tracking-widest uppercase text-sm">01 JUL</div>,
    title: "Admissions open for 2026-27",
    description: "Enquiries are open across all school and entrance programs.",
  },
  {
    id: 2,
    leftContent: <div className="text-brand-400 font-bold tracking-widest uppercase text-sm">12 JUL</div>,
    title: "New session orientation",
    description: "Students and parents can meet the faculty and review the study plan.",
  },
  {
    id: 3,
    leftContent: <div className="text-brand-400 font-bold tracking-widest uppercase text-sm">Every WEEKEND</div>,
    title: "Commerce subject clinic",
    description: "Additional doubt support for Accounts and Economics students.",
  },

  {
    id: 4,
    leftContent: <div className="text-brand-400 font-bold tracking-widest uppercase text-sm"> July</div>,
    title: "Cuet, CA and other career paths for their future",
    description: "Additional doubt support for all the subjects with test series and regular assessments and analysis of student progress throughout the week.",
  },


];

export default function Notices() {
  return (
    <section id="notices" className="py-20 bg-[#0a0a0b] text-white border-y border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-12">
          Latest notices
        </h2>

        <div className="flex flex-col">
          {notices.map((notice, i) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 ${i !== 0 ? "border-t border-white/10" : ""
                }`}
            >
              {/* Left Column (Date/Time) */}
              <div className="sm:w-28 flex-shrink-0 pt-1">
                {notice.leftContent}
              </div>

              {/* Right Column (Content) */}
              <div className="flex-grow">
                {notice.badge && (
                  <span className="inline-block bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                    {notice.badge}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-2">
                  {notice.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                  {notice.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
