
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import CounterSection from '../components/CounterSection';
import VolunteerCTA from '../components/VolunteerCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">Arjuna Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dedicated to creating positive change in our communities through compassionate service, 
              education, and sustainable development initiatives that empower lives and build hope.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Get Involved
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
          
          <ImageCarousel />
        </div>
      </section>

      <CounterSection />
      <VolunteerCTA />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Stories of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been touched by our foundation's work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Portrait%20of%20smiling%20middle-aged%20woman%20with%20kind%20eyes%2C%20professional%20headshot%2C%20simple%20clean%20background%2C%20warm%20expression%20showing%20gratitude%20and%20happiness%2C%20community%20member%20testimonial%20photo&width=80&height=80&seq=testimonial1&orientation=squarish"
                  alt="Maria Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-600">Community Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The education program helped my children get the support they needed. 
                Now they're both in college, something I never dreamed possible."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Portrait%20of%20elderly%20man%20with%20gentle%20smile%2C%20wise%20and%20grateful%20expression%2C%20professional%20headshot%2C%20simple%20clean%20background%2C%20showing%20appreciation%20and%20contentment%2C%20senior%20community%20member&width=80&height=80&seq=testimonial2&orientation=squarish"
                  alt="Robert Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-gray-600">Senior Citizen</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The volunteers visit me weekly and help with groceries and errands. 
                Their friendship means the world to me."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Portrait%20of%20young%20woman%20volunteer%20with%20bright%20smile%2C%20enthusiastic%20and%20caring%20expression%2C%20professional%20headshot%2C%20simple%20clean%20background%2C%20showing%20dedication%20and%20joy%20from%20helping%20others&width=80&height=80&seq=testimonial3&orientation=squarish"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Volunteer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Volunteering here has been the most rewarding experience. 
                Every day I see how small acts of kindness create big changes."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
