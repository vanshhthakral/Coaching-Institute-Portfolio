"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#145bff", "#6366f1", "#4f46e5", "#3b82f6"],
      });
    }, 800);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-r from-brand-900 via-indigo-950 to-brand-900 rounded-[28px] p-8 md:p-14 text-white overflow-hidden shadow-xl"
        >
          {/* Background Blobs inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full glow-blob opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full glow-blob opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-100 font-heading font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-300" />
              Syllabus Alerts & News
            </div>

            <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Stay Updated on Exam Dates & Batch Openings
            </h2>
            <p className="text-brand-200/80 text-sm md:text-base max-w-lg mx-auto">
              Subscribe to our monthly academic newsletter. We share CBSE updates, stream guide documents, CA Exam timetables, and early batch seat notifications.
            </p>

            {/* Subscribe Form */}
            <div className="pt-4 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter parent or student email"
                      className="flex-grow px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-brand-400 outline-none text-white placeholder-brand-200/50 text-sm transition-all focus:ring-4 focus:ring-brand-500/20"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-brand-500 hover:bg-brand-600 active:scale-97 disabled:opacity-50 text-white font-heading font-bold text-sm px-6 py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      {loading ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Subscribe
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3"
                  >
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                    <div>
                      <h4 className="font-heading font-bold text-base">You are on the list!</h4>
                      <p className="text-xs text-brand-200/80 mt-1">
                        We will send syllabus sheets and announcements to {email}.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
