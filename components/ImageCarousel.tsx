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
      image: "https://readdy.ai/api/search-image?query=Group%20of%20diverse%20volunteers%20helping%20elderly%20people%20in%20a%20community%20center%2C%20warm%20lighting%2C%20people%20smiling%20and%20working%20together%2C%20clean%20simple%20background%20with%20soft%20colors%2C%20photography%20style%2C%20heartwarming%20scene%20showing%20community%20service%20and%20care&width=1200&height=600&seq=carousel1&orientation=landscape",
      title: "Helping Our Elders",
      description: "Supporting senior citizens with daily activities and companionship"
    },
    {
      image: "https://readdy.ai/api/search-image?query=Children%20in%20a%20classroom%20being%20taught%20by%20volunteers%2C%20bright%20educational%20environment%2C%20books%20and%20learning%20materials%2C%20simple%20clean%20background%2C%20happy%20children%20learning%20together%2C%20community%20education%20program&width=1200&height=600&seq=carousel2&orientation=landscape",
      title: "Education for All",
      description: "Providing quality education to underprivileged children"
    },
    {
      image: "https://readdy.ai/api/search-image?query=Volunteers%20distributing%20food%20packages%20to%20families%20in%20need%2C%20community%20kitchen%20setting%2C%20people%20serving%20meals%20with%20care%2C%20simple%20background%2C%20showing%20compassion%20and%20help%2C%20food%20distribution%20program&width=1200&height=600&seq=carousel3&orientation=landscape",
      title: "Fighting Hunger",
      description: "Ensuring no one goes to bed hungry in our community"
    },
    {
      image: "https://readdy.ai/api/search-image?query=Medical%20volunteers%20providing%20healthcare%20services%20in%20rural%20area%2C%20doctors%20and%20nurses%20helping%20patients%2C%20mobile%20clinic%20setup%2C%20clean%20simple%20background%2C%20healthcare%20outreach%20program%20showing%20care%20and%20medical%20assistance&width=1200&height=600&seq=carousel4&orientation=landscape",
      title: "Healthcare Outreach",
      description: "Bringing medical care to remote and underserved areas"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);

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