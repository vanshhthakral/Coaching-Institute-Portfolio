"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  LineChart, 
  MessagesSquare, 
  Clock, 
  Compass 
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Concept-First Teaching",
    description: "We break down complex rules and theories into simple, logical pieces. We teach students to understand, not just memorize.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Small Class Attention",
    description: "With limited seats per batch, teachers notice doubts immediately and customize their pace to fit the students in the room.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: LineChart,
    title: "Chapter-Wise Tests",
    description: "Assessments are structured to mimic board sheets and entrance mock exams, making progress transparent and predictable.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessagesSquare,
    title: "Direct Parent Connect",
    description: "Instead of generic automated report cards, families receive direct, honest feedback on progress and study behaviors.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    title: "Saturday Doubt Clinics",
    description: "Additional dedicated hours every week to sit down and solve challenging homework questions or clear chapter backlogs.",
    color: "from-rose-500 to-amber-500",
  },
  {
    icon: Compass,
    title: "Career & Stream Mapping",
    description: "Personal guidance sessions to help Class X and XII students choose subjects, streams, and prep for CA or CUET.",
    color: "from-amber-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
} as const;

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
            Why Choose Aakshay Jindal
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none mb-6">
            Good teaching stays personal.
          </h2>
          <p className="text-gray-500 text-lg">
            Aakshay Jindal combines clear explanation, dedicated practice sessions, and continuous academic feedback. Here is how we build student success.
          </p>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-[1.5px] rounded-[24px] bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-brand-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(20,91,255,0.08)] cursor-default transform hover:-translate-y-2"
              >
                <div className="bg-white dark:bg-brand-950 p-8 rounded-[23px] h-full flex flex-col justify-between">
                  <div>
                    {/* Icon wrapper */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand-500" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-brand-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Gradient Indicator in card */}
                  <div className="mt-8 pt-4 border-t border-gray-50 dark:border-gray-900 flex items-center justify-between text-xs font-bold font-heading text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Active Program Standard</span>
                    <span>✨</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
