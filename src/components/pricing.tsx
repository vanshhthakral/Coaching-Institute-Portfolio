"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Foundation Plan",
    stage: "Classes I - VIII",
    price: "2,500",
    period: "month",
    description: "Build robust study habits, basic math formulas, and fundamental science blocks.",
    features: [
      "2-3 classes per week",
      "Maths, Science & English support",
      "Monthly progress checklists",
      "Term syllabus planning",
      "Standard doubt resolutions",
    ],
    popular: false,
    cta: "Start Foundation",
  },
  {
    name: "Board Prep Plan",
    stage: "Classes IX - X",
    price: "3,500",
    period: "month",
    description: "Systematic, rigorous syllabus coverage paired with past year paper analysis.",
    features: [
      "4 classes per week",
      "Full Board Subjects coverage",
      "Chapter-wise exam simulation sheets",
      "Access to Saturday doubt clinics",
      "Direct Parent connect hours",
      "Board examination mock series",
    ],
    popular: true,
    cta: "Join Board Intensive",
  },
  {
    name: "Aakshay Jindal Excellence",
    stage: "XI-XII & Entrance",
    price: "4,500",
    period: "month",
    description: "High-focus stream batches for Boards, CA Foundation, or CUET entrance prep.",
    features: [
      "Subject-specific batches",
      "Direct guidance from Aakshay Jindal",
      "CUET/CA Foundation mock series",
      "Dedicated career stream mapping",
      "Comprehensive digital notes library",
      "Personalized feedback cycles",
    ],
    popular: false,
    cta: "Join Advanced Track",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-100/30 rounded-full glow-blob pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
            Tuition Plans
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none mb-6">
            Transparent Pricing Packages
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the academic stage that fits your goals. No hidden contracts. Cancel or upgrade your batches as school needs evolve.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-[28px] border bg-white flex flex-col justify-between p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-brand-500 shadow-[0_20px_50px_rgba(20,91,255,0.08)] scale-105 lg:-translate-y-2 z-10"
                  : "border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-brand-500 text-white font-heading font-bold text-xs uppercase shadow-md tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="space-y-4">
                <div className="text-gray-400 font-bold font-heading text-xs uppercase tracking-wider">
                  {plan.stage}
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-900">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="pt-4 flex items-baseline gap-1 text-brand-900">
                  <span className="text-sm font-bold">₹</span>
                  <span className="text-5xl font-extrabold font-heading tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-semibold text-sm">
                    / {plan.period}
                  </span>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="my-8 space-y-4 border-t border-gray-100 pt-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-2xl font-heading font-bold text-center block transition-all duration-300 active:scale-98 ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-500 via-indigo-600 to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/35 hover:-translate-y-0.5"
                      : "bg-gray-50 hover:bg-gray-100 text-brand-900 border border-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
