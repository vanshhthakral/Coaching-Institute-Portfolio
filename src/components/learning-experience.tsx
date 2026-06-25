"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const bullets = [
  {
    title: "1-on-1 Concept Checkpoints",
    desc: "Teachers sit down to review specific worksheets, catching conceptual misunderstandings before they become structural learning gaps.",
  },
  {
    title: "Step-by-Step Lessons",
    desc: "Our material is sequenced: we move from core formulas to intermediate examples, then board questions, and finally high-difficulty challenges.",
  },
  {
    title: "Consistent Test Routines",
    desc: "Every chapter concludes with a dedicated assessment. Performance logs are maintained to guide our focus for subsequent review sessions.",
  },
  {
    title: "Real Parent Partnerships",
    desc: "We don't send automated email charts. We hold regular conversations with parents to share realistic study advice and coordinate homework tracking.",
  },
];

export default function LearningExperience() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Photo Spread */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[580px] w-full">
            <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
              
              {/* Left Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: 0 }}
                whileInView={{ opacity: 0.95, x: -140, y: -20, rotate: -6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
                className="absolute z-10 w-[55%] h-[72%] rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-gray-150"
              >
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=84"
                  alt="Student organizing study files"
                  fill
                  sizes="30vw"
                  className="object-cover"
                  unoptimized
                />
              </motion.div>

              {/* Center Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute z-20 w-[68%] h-[85%] rounded-[32px] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(6,20,42,0.16)] bg-gray-100"
              >
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1500&q=85"
                  alt="Interactive lecture classroom"
                  fill
                  sizes="40vw"
                  className="object-cover"
                  unoptimized
                />
              </motion.div>

              {/* Right Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                whileInView={{ opacity: 0.95, x: 140, y: 20, rotate: 6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
                className="absolute z-10 w-[55%] h-[72%] rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-gray-150"
              >
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=84"
                  alt="Student reviewing equations"
                  fill
                  sizes="30vw"
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
              
            </div>
          </div>

          {/* Right Column: Content and Bullet Points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase">
                About the Academy
              </span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-tight">
                The expert in anything was once a beginner.
              </h2>
              <div className="space-y-4">
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  Aakshay Academy is a strong believer that every student learns differently. Our goal is to help students truly understand concepts, practise with purpose, and approach examinations with confidence and a clear strategy.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  Founded by Aakshay Jindal in Shahdara, the academy has become a trusted learning destination for students across CBSE, icse CA ACCA, CFA, US CMA, CIMA, FMVA,PAP,CPA CFA, CFP, CUET. Every programme is designed around personal mentorship, direct faculty access, and consistent academic guidance, ensuring that no student is left behind.
                </p>
              </div>
            </div>

            {/* Bullets List */}
            <div className="space-y-6">
              {bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 mt-1 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-900">
                      {bullet.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {bullet.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-heading font-bold text-base text-white bg-brand-900 hover:bg-brand-800 px-8 py-4 rounded-2xl transition-all shadow-md gap-2.5 group"
              >
                Discuss Student Enrollment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
