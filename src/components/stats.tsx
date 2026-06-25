"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function Counter({ target, duration = 1.5, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      // Easing out cubic: progress = 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const statsData = [
  {
    target: 1519,
    suffix: "+",
    label: "Students guided",
  },
  {
    target: 10,
    suffix: "+",
    label: "Years of teaching",
  },
  {
    target: 97,
    suffix: "%",
    label: "Academic success",
  },
  {
    target: 20,
    suffix: "+",
    label: "Courses and subjects",
  },
];

export default function Stats() {
  return (
    <section className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-center items-center text-center p-4 border-r last:border-r-0 border-gray-100 lg:last:border-r-0 max-lg:[nth-child(2)]:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 max-md:[nth-child(3)]:border-b-0"
            >
              <div className="font-heading font-extrabold text-4xl md:text-5xl text-brand-900 leading-none">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 font-heading font-bold text-xs uppercase tracking-wider mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
