'use client';

import { useState, useEffect } from 'react';

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
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`${icon} text-2xl text-blue-600`}></i>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Together, we've made a significant difference in countless lives across our community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Counter
            end={5420}
            duration={2000}
            label="People Helped"
            icon="ri-heart-line"
          />
          <Counter
            end={234}
            duration={2500}
            label="Active Members"
            icon="ri-team-line"
          />
          <Counter
            end={1847}
            duration={2200}
            label="Active Donors"
            icon="ri-hand-heart-line"
          />
        </div>
      </div>
    </section>
  );
}