'use client';

import { useState, useEffect } from 'react';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselItem[] = [
    {
      image: "/asset/helpielder.jpg",
      title: "Helping Our Elders",
      description: "Supporting senior citizens with daily activities and companionship"
    },
    {
      // C:\Users\Maharaja\Desktop\web development\Arjuna-Foundation\public\asset\
      image: "/asset/school_donate.jpg",
      title: "Education for All",
      description: "Providing quality education to underprivileged children"
    },
    {
      image: "asset/foodforevryone.jpg",
      title: "Fighting Hunger",
      description: "Ensuring no one goes to bed hungry in our community"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg opacity-90">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}