'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VolunteerCTA() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', interests: '', availability: '' });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowForm(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Become a Volunteer Today
          </motion.h2>

          <motion.p
            className="text-lg mb-10 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our dedicated team of volunteers and make a meaningful impact in your community.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: 'ri-calendar-line', title: 'Flexible Schedule', desc: 'Work on your own time, whether it’s weekends or evenings' },
              { icon: 'ri-heart-line', title: 'Make a Difference', desc: 'Directly impact lives and create positive change in society' },
              { icon: 'ri-team-line', title: 'Join Community', desc: 'Connect with like-minded people who care about helping others' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Join as Volunteer
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 bg-green-500 text-white px-6 py-4 rounded-lg"
            >
              Thank you for your interest! We'll contact you soon with volunteer opportunities.
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal Form */}
<AnimatePresence>
  {showForm && (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onClick={() => setShowForm(false)}
    >
      <motion.div
        className="bg-white text-gray-800 rounded-xl p-6 w-full max-w-md relative"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Volunteer Application</h3>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
          />
          <textarea
            placeholder="Areas of Interest (education, healthcare, community service, etc.)"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm resize-none"
            rows={3}
          />
          <textarea
            placeholder="Your Availability (weekdays, weekends, specific hours)"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
  );
}
