"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Hand } from "lucide-react";
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

const photos = [
  { src: "/images/why-choose-us/photo1.jpeg", alt: "Classroom environment" },
  { src: "/images/why-choose-us/photo2.jpeg", alt: "Interactive lecture" },
  { src: "/images/why-choose-us/photo3.jpeg", alt: "Student studying" }
];

export default function LearningExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    // Swipe left
    if (info.offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }
    // Swipe right
    else if (info.offset.x > 50) {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  const variants = {
    center: { opacity: 1, x: "0%", y: "0%", rotate: 0, scale: 1, zIndex: 30 },
    left: { opacity: 0.95, x: "-45%", y: "-5%", rotate: -8, scale: 0.85, zIndex: 10 },
    right: { opacity: 0.95, x: "45%", y: "5%", rotate: 8, scale: 0.85, zIndex: 10 },
  };

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + photos.length) % photos.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: 3D Swipeable Collage */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] md:min-h-[580px] w-full">
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              
              <AnimatePresence initial={false}>
                {photos.map((photo, index) => {
                  const position = getPosition(index);
                  return (
                    <motion.div
                      key={index}
                      variants={variants}
                      initial={false}
                      animate={position}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={handleDragEnd}
                      className="absolute w-[68%] h-[85%] rounded-[32px] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-gray-100 cursor-grab active:cursor-grabbing"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 85vw, 50vw"
                        className="object-cover"
                        unoptimized
                        draggable={false} // prevent default image drag
                      />
                      {/* Swipe Hint Overlay on active card */}
                      {position === "center" && (
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                           <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-brand-900 shadow-xl pointer-events-none">
                             <Hand className="w-4 h-4" /> Swipe
                           </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
            
            {/* Mobile Swipe Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-brand-500' : 'bg-gray-200'}`} 
                />
              ))}
            </div>
          </div>

          {/* Right Column: Content and Bullet Points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase">
                About academy
              </span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-tight">
                Why Choose Us?
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
