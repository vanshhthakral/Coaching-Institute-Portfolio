"use client";

import { Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-150 pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#top"
              className="font-heading font-extrabold text-2xl tracking-tight text-brand-900 flex items-center gap-1"
            >
              Aakshay Jindal<span className="text-brand-500">.</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Focused, premium coaching for school classes, Commerce, CA Foundation,
              and CUET. Dedicated to conceptual learning and personalized student mentor support.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-gray-200 hover:border-brand-500 text-gray-500 hover:text-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-gray-200 hover:border-brand-500 text-gray-500 hover:text-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919911524976"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-gray-200 hover:border-brand-500 text-gray-500 hover:text-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                {/* Custom SVG for WhatsApp */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.728-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.779 1.453 5.486 0 9.948-4.46 9.95-9.95.002-2.66-1.033-5.159-2.908-7.038C16.593 1.74 14.1 1.7 12.012 1.7c-5.49 0-9.952 4.46-9.954 9.95-.001 1.848.51 3.568 1.479 5.097L2.532 21.43l4.115-1.076z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-900 border-b border-gray-100 pb-2">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-500 hover:text-brand-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-500 hover:text-brand-500 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-500 hover:text-brand-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-500 hover:text-brand-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-900 border-b border-gray-100 pb-2">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start text-gray-500">
                <Phone className="w-4.5 h-4.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-brand-900 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:+919911524976" className="hover:text-brand-500 transition-colors">
                    +91 99115 24976
                  </a>
                  <br />
                  <a href="tel:+919911525567" className="hover:text-brand-500 transition-colors">
                    +91 99115 25567
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start text-gray-500">
                <Mail className="w-4.5 h-4.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-brand-900 text-xs uppercase tracking-wider mb-0.5">Email</div>
                  <a href="mailto:jindalaakshay@gmail.com" className="hover:text-brand-500 transition-colors">
                    jindalaakshay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Visit & Hours */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-900 border-b border-gray-100 pb-2">
              Visit & Hours
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start text-gray-500">
                <MapPin className="w-4.5 h-4.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-brand-900 text-xs uppercase tracking-wider mb-0.5">Address</div>
                  <a
                    href="https://maps.google.com/?q=3%2F250+Anaj+Mandi+Shahdara+Delhi+110032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-500 transition-colors"
                  >
                    3/250, Anaj Mandi,
                    <br />
                    Shahdara, Delhi 110032
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start text-gray-500">
                <Clock className="w-4.5 h-4.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-brand-900 text-xs uppercase tracking-wider mb-0.5">Opening hours</div>
                  <span>Mon-Sat: 9:00 AM - 10:00 PM</span>
                  <br />
                  <span>Sunday: 1:00 PM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Large Wordmark Banner */}
        <div className="w-full text-center py-4 select-none pointer-events-none mb-10 overflow-hidden">
          <div className="font-heading font-extrabold text-[8vw] leading-none text-gray-100 tracking-tighter uppercase whitespace-nowrap">
            Aakshay Jindal
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <span>&copy; {currentYear} Aakshay Jindal. All rights reserved.</span>
          <span>Designed with clarity and Confident structures.</span>
        </div>

      </div>
    </footer >
  );
}
