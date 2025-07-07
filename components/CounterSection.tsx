'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  icon: string;
}

function Counter({ end, duration, label, icon }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="w-20 h-20 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
        <i className={`${icon} text-3xl text-blue-600`}></i>
      </div>
      <div className="text-4xl font-extrabold text-gray-800 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-md text-gray-500 font-medium">{label}</div>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Together, we've made a significant difference in countless lives across our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <Counter end={5420} duration={2000} label="People Helped" icon="ri-heart-line" />
          <Counter end={234} duration={2500} label="Active Members" icon="ri-team-line" />
          <Counter end={1847} duration={2200} label="Active Donors" icon="ri-hand-heart-line" />
        </div>
      </div>
    </section>
  );
}
