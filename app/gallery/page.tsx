'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: "gallery/sports1.jpg",
      category: "education",
      title: "Education Program",
      description: "Teaching children in our community learning center"
    },
    {
      id: 2,
      src: "https://readdy.ai/api/search-image?query=Medical%20volunteers%20providing%20healthcare%20checkup%20in%20community%20clinic%2C%20doctors%20examining%20elderly%20patients%2C%20mobile%20health%20service%2C%20caring%20medical%20professionals%20helping%20community%20members&width=400&height=300&seq=gallery2&orientation=landscape",
      category: "healthcare",
      title: "Health Checkup Drive",
      description: "Free medical examinations for senior citizens"
    },
    {
      id: 3,
      src: "gallery/food1d.jpg",
      category: "community",
      title: "Food Distribution",
      description: "Weekly food distribution program for families in need"
    },
    {
      id: 4,
      src: "https://readdy.ai/api/search-image?query=Children%20participating%20in%20sports%20activities%2C%20youth%20playing%20games%20in%20community%20center%2C%20volunteers%20coaching%20kids%20in%20recreational%20activities%2C%20happy%20children%20in%20sports%20programs&width=400&height=300&seq=gallery4&orientation=landscape",
      category: "community",
      title: "Youth Sports Program",
      description: "Keeping kids active and engaged through sports"
    },
    {
      id: 5,
      src: "gallery/pongal2.jpg",
      category: "environment",
      title: "Community Cleanup",
      description: "Monthly environmental cleanup initiatives"
    },
    {
      id: 6,
      src: "gallery/sports2.jpg",
      category: "education",
      title: "Adult Literacy Program",
      description: "Empowering adults through education and skill development"
    },
    {
      id: 7,
      src: "gallery/pongal3.jpg",
      category: "healthcare",
      title: "Vaccination Drive",
      description: "Community immunization and health awareness program"
    },
    {
      id: 8,
      src: "https://readdy.ai/api/search-image?query=Tree%20planting%20event%20with%20volunteers%20and%20community%20members%2C%20environmental%20conservation%20activity%2C%20people%20planting%20saplings%20together%2C%20green%20initiative%20and%20sustainability%20program&width=400&height=300&seq=gallery8&orientation=landscape",
      category: "environment",
      title: "Tree Plantation",
      description: "Green initiative to plant 1000 trees this year"
    },
    {
      id: 9,
      src: "gallery/blind0.jpg",
      category: "community",
      title: "Elder Care Visits",
      description: "Regular visits to support isolated elderly community members"
    },
    {
      id: 10,
      src: "gallery/blind2.jpg",
      category: "community",
      title: "Elder Care Visits",
      description: "Regular visits to support isolated elderly community members"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'community', name: 'Community Service' },
    { id: 'environment', name: 'Environment' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl opacity-90">
              Capturing moments of impact, hope, and community transformation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <i className="ri-eye-line text-white text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-auto"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl max-h-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedIndex].src}
              alt="Gallery Image"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />

            {/* Close Button */}
{/* Close Button */}
<button
  onClick={() => setSelectedIndex(null)}
  className="absolute top-4 right-4 w-10 h-10 bg-white text-black hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
>
  <i className="ri-close-line text-xl"></i>
</button>

{/* Prev Button */}
<button
  onClick={handlePrev}
  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-white text-black hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
>
  <i className="ri-arrow-left-s-line text-xl"></i>
</button>

{/* Next Button */}
<button
  onClick={handleNext}
  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-white text-black hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
>
  <i className="ri-arrow-right-s-line text-xl"></i>
</button>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
