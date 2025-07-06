'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and stories</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 mt-2 text-sm">Successfully subscribed!</p>
            )}
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/arjunafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com/arjunafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://twitter.com/arjunafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                info@arjunafoundation.org
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                123 Hope Street, Community City
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919347!2d-74.00425738459418!3d40.74844077932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635784296403!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Arjuna Foundation. All rights reserved. Making a difference, one life at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}