"use client";

import { Instagram, Youtube, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Batches", href: "#courses" },
    { label: "Faculty", href: "#faculty" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0a0f1e] overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Top divider gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 pt-16 pb-0">

        {/* Top CTA Banner */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-brand-500/20 via-brand-600/10 to-indigo-500/10 border border-white/5 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">Ready to excel?</p>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">
              Start your journey with<br className="hidden md:block" /> Aakshay Jindal today.
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/30 hover:-translate-y-0.5 whitespace-nowrap text-sm"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#top" className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
              Aakshay Jindal<span className="text-brand-400">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Focused, premium coaching for Commerce, CA Foundation, CUET & school classes.
              Dedicated to conceptual learning and personalized mentorship.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/50 text-gray-400 hover:text-brand-400 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/50 text-gray-400 hover:text-brand-400 flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://wa.me/919911524976"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/50 text-gray-400 hover:text-brand-400 flex items-center justify-center transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.728-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.779 1.453 5.486 0 9.948-4.46 9.95-9.95.002-2.66-1.033-5.159-2.908-7.038C16.593 1.74 14.1 1.7 12.012 1.7c-5.49 0-9.952 4.46-9.954 9.95-.001 1.848.51 3.568 1.479 5.097L2.532 21.43l4.115-1.076z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gray-500">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500/0 group-hover:bg-brand-400 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gray-500">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+919911524976" className="text-gray-300 hover:text-brand-400 transition-colors block">
                    +91 99115 24976
                  </a>
                  <a href="tel:+919911525567" className="text-gray-300 hover:text-brand-400 transition-colors block">
                    +91 99115 25567
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:jindalaakshay@gmail.com" className="text-gray-300 hover:text-brand-400 transition-colors">
                    jindalaakshay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visit & Hours */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gray-500">
              Visit & Hours
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</div>
                  <a
                    href="https://maps.google.com/?q=3%2F250+Anaj+Mandi+Shahdara+Delhi+110032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-400 transition-colors"
                  >
                    3/250, Anaj Mandi,<br />Shahdara, Delhi 110032
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hours</div>
                  <span className="text-gray-300 block">Mon–Sat: 9:00 AM – 10:00 PM</span>
                  <span className="text-gray-300 block">Sunday: 1:00 PM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wordmark strip */}
      <div className="w-full overflow-hidden select-none pointer-events-none py-6 border-t border-white/5">
        <div
          className="font-heading font-extrabold text-[10vw] leading-none tracking-tighter uppercase whitespace-nowrap text-center"
          style={{ color: "rgba(255,255,255,0.04)" }}
        >
          Aakshay Jindal
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>&copy; {currentYear} Aakshay Jindal. All rights reserved.</span>
          <span>Designed with clarity &amp; excellence.</span>
        </div>
      </div>
    </footer>
  );
}
