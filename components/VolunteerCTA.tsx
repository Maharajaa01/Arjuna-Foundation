'use client';

import { useState } from 'react';

export default function VolunteerCTA() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', interests: '', availability: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Volunteer Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our dedicated team of volunteers and make a meaningful impact in your community
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-sm opacity-80">Work on your own time, whether it's weekends or evenings</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Make a Difference</h3>
              <p className="text-sm opacity-80">Directly impact lives and create positive change in society</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Join Community</h3>
              <p className="text-sm opacity-80">Connect with like-minded people who care about helping others</p>
            </div>
          </div>

          <div className="space-x-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Join as Volunteer
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>

          {submitted && (
            <div className="mt-6 bg-green-500 text-white p-4 rounded-lg">
              Thank you for your interest! We'll contact you soon with volunteer opportunities.
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Volunteer Application</h3>
              <button
                onClick={() => setShowForm(false)}
                className="w-6 h-6 flex items-center justify-center cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Areas of Interest (education, healthcare, community service, etc.)"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 h-20 resize-none"
                maxLength={500}
              ></textarea>
              <textarea
                placeholder="Your Availability (weekdays, weekends, specific hours)"
                value={formData.availability}
                onChange={(e) => setFormData({...formData, availability: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 h-20 resize-none"
                maxLength={500}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}