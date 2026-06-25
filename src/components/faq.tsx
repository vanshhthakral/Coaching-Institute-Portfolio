"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the standard batch timings at Aakshay Jindal?",
    answer: "We offer weekday batches (Monday to Friday, typically 4:00 PM to 8:00 PM depending on the class) and specialized weekend clinics (Saturdays and Sundays) designed to fit school hours without exhausting the student.",
  },
  {
    question: "How do the Saturday Doubt Clinics work?",
    answer: "Every Saturday, instructors set aside classroom hours specifically for one-on-one sessions. Students can walk in with homework sheets, school test papers, or textbook problems they failed to solve, and work through them with a mentor.",
  },
  {
    question: "Do you support both CBSE and ICSE board students?",
    answer: "Yes. Our core curriculum is aligned with CBSE standards, but we host dedicated batches for ICSE boards that focus on their specific English literature, history, and science requirements.",
  },
  {
    question: "How are parents updated on student progress?",
    answer: "We believe in direct partnerships. Instead of cold, automated performance emails, our mentors call parents directly or schedule brief updates twice a month to discuss class behavior, homework submission, and test progress.",
  },
  {
    question: "What does the CA Foundation and CUET preparation involve?",
    answer: "We follow a dual track: first, we establish high scores in Class XII boards. Second, we integrate entrance-specific multiple-choice question (MCQ) sheets, timed mock test drills on computers, and negative marking strategy clinics.",
  },
  {
    question: "Is it possible to request a consultation or trial class?",
    answer: "Absolutely. We encourage families to schedule a consultation with Aakshay Jindal to review student textbooks and identify current learning gaps. We then host a trial class to ensure the student feels comfortable with our pace.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase mb-4">
            Common Questions
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 tracking-tight leading-none mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Have questions about admissions, syllabus formats, or academic policies? Find immediate answers here.
          </p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-gray-200/80 rounded-2xl bg-white px-6 py-1 hover:border-brand-300 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
              >
                <AccordionTrigger className="font-heading font-bold text-base md:text-lg text-brand-900 hover:text-brand-500 py-4 hover:no-underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm md:text-base leading-relaxed pb-5 pt-1 border-t border-gray-50 mt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
