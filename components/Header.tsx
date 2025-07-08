'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-pacifico text-blue-600">Arjuna Foundation</div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About Us
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Blog
            </Link>
            <Link href="/donate" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Donate
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer">
                About Us
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer">
                Blog
              </Link>
              <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer">
                Gallery
              </Link>
              <Link href="/donate" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer">
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}