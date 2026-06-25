"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    const duration = 1500; // 1.5s loader
    const startTime = performance.now();

    const updateLoader = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing progress: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const percentage = Math.min(100, Math.round(easedProgress * 100));

      setPercent(percentage);

      if (progress < 1) {
        requestAnimationFrame(updateLoader);
      } else {
        setTimeout(() => {
          setComplete(true);
          // Re-enable scrolling
          document.body.style.overflow = "unset";
        }, 150);
      }
    };

    requestAnimationFrame(updateLoader);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-500 text-white"
        >
          <div className="w-[85%] max-w-[450px] space-y-6">
            {/* Wordmark */}
            <div className="font-heading font-extrabold text-4xl sm:text-5xl text-center tracking-tight">
              Aakshay Jindal<span className="text-brand-200">.</span>
            </div>

            {/* Status indicators */}
            <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-brand-100/80">
              <span>Loading Workspace</span>
              <span>{percent}%</span>
            </div>

            {/* Progress track */}
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: percent / 100, transformOrigin: "left" }}
                className="h-full bg-white w-full rounded-full"
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
