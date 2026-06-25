"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !program) return;

    setStatus("loading");
    setStatusMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8317e178-949d-4687-ae38-421668771f33", // Reference access key
          subject: "New enquiry from Aakshay Jindal website",
          from_name: "Aakshay Jindal Website",
          name,
          phone,
          program,
          message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Enquiry submission failed");
      }

      setStatus("success");
      setStatusMsg("Thank you. Your academic enquiry has been sent successfully.");
      setName("");
      setPhone("");
      setProgram("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMsg("The enquiry could not be sent. Please call +91 99115 24976 directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch border border-gray-200/80 rounded-[32px] overflow-hidden bg-white shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
          
          {/* Left Form Panel */}
          <div className="lg:col-span-6 p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-heading font-semibold text-xs tracking-wider uppercase">
                Contact Academy
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-900 tracking-tight leading-none">
                Start with a conversation.
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Tell us the student&apos;s current class, school, subjects, and academic goals. Aakshay Jindal and our team will guide you to the right batch structure.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Full name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Student or parent name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 outline-none text-sm bg-gray-50/50 focus:bg-white transition-all focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="form-phone" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Phone number
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 outline-none text-sm bg-gray-50/50 focus:bg-white transition-all focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-program" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Interested Program
                </label>
                <select
                  id="form-program"
                  required
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 outline-none text-sm bg-gray-50/50 focus:bg-white transition-all focus:ring-4 focus:ring-brand-500/10"
                >
                  <option value="">Select a program</option>
                  <option value="Classes I-VIII">Classes I-VIII (Foundation)</option>
                  <option value="Classes IX-X">Classes IX-X (Board Prep)</option>
                  <option value="Classes XI-XII">Classes XI-XII (Senior Secondary)</option>
                  <option value="CA Foundation">CA Foundation Entrance</option>
                  <option value="CUET">CUET Entrance</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="form-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Student's school, challenging subjects, or preferred batch timing..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 outline-none text-sm bg-gray-50/50 focus:bg-white transition-all focus:ring-4 focus:ring-brand-500/10 min-h-[100px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-900 hover:bg-brand-800 active:scale-98 disabled:opacity-50 text-white font-heading font-bold text-sm px-6 py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 flex gap-3 items-start text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{statusMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-4 flex gap-3 items-start text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Map Panel */}
          <div className="lg:col-span-6 relative bg-gray-100 min-h-[400px]">
            <iframe
              title="Aakshay Jindal Location Shahdara Delhi"
              src="https://www.google.com/maps?q=3%2F250%20Anaj%20Mandi%20Shahdara%20Delhi%20110032&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale-[10%]"
            />

            {/* Overlapping Glassmorphic Details Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-brand-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-xl flex flex-col gap-3">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-extrabold text-base">Aakshay Jindal Shahdara</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-normal">
                    3/250, Anaj Mandi, Shahdara, Delhi 110032
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=3%2F250+Anaj+Mandi+Shahdara+Delhi+110032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-brand-400 hover:text-white transition-colors self-start gap-1"
              >
                Open in Google Maps
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
