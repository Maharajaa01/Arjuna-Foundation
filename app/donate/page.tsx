'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Donate() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const predefinedAmounts = ['250', '500', '1000', '2500', '5000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setDonorInfo({ name: '', email: '', phone: '', address: '', message: '' });
    setAmount('50');
    setCustomAmount('');
  };

  const impactStories = [
    {
      amount: '₹250',
      impact: 'Provides school supplies for 2 children for a month',
      icon: 'ri-book-line'
    },
    {
      amount: '₹500',
      impact: 'Feeds a family of 4 for a week',
      icon: 'ri-restaurant-line'
    },
    {
      amount: '₹1000',
      impact: 'Covers medical checkup for 5 elderly people',
      icon: 'ri-heart-pulse-line'
    },
    {
      amount: '₹2500',
      impact: 'Sponsors a child\'s education for 3 months',
      icon: 'ri-graduation-cap-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl opacity-90">
              Your donation helps us continue our mission of transforming lives and building stronger communities
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Secure Donation Form</h2>
            
            <form id="donation-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                      donationType === 'one-time'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-blue-600'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                      donationType === 'monthly'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-blue-600'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {setAmount(amt); setCustomAmount('');}}
                      className={`p-3 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                        amount === amt && !customAmount
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 text-gray-700 hover:border-blue-600'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  name="customAmount"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {setCustomAmount(e.target.value); setAmount('');}}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  min="1"
                />
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Donor Information</h3>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  required
                />
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 h-24 resize-none"
                  maxLength={500}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Donate ₹{customAmount || amount} {donationType === 'monthly' ? '/month' : ''}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Secure payment processing. Your information is protected and encrypted.
              </p>
            </form>

            {submitted && (
              <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you for your generous donation! You will receive a confirmation email shortly.
              </div>
            )}
          </div>

          {/* Impact Stories */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Impact</h2>
            
            <div className="space-y-4 mb-8">
              {impactStories.map((story, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className={`${story.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 mb-1">{story.amount}</div>
                    <p className="text-gray-700 text-sm">{story.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Donor Testimonial</h3>
              <div className="flex items-start">
                <img
                  src="https://readdy.ai/api/search-image?query=Portrait%20of%20smiling%20businessman%20in%20professional%20attire%2C%20confident%20and%20generous%20expression%2C%20professional%20headshot%2C%20simple%20clean%20background%2C%20showing%20satisfaction%20from%20charitable%20giving&width=80&height=80&seq=donor&orientation=squarish"
                  alt="John Anderson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "Supporting Arjuna Foundation has been incredibly rewarding. 
                    Seeing the direct impact of my donations on real families gives me immense joy."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-800">John Anderson</div>
                    <div className="text-sm text-gray-600">Monthly Donor since 2020</div>
                  </div>
                </div>
              </div>
            </div> */}
                          <div>
                <img
                  src="/asset/qr1.jpg"
                  alt="Our Vision"
                  className="w-full h-82 object-cover object-top rounded-lg"
                />
              </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Secure Payment Methods</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-14 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Phonepay</span>
                </div>
                <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Gpay</span>
                </div>
                <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Paytm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}