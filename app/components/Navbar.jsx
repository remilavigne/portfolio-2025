"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-lg font-bold">
          <Link href="/home">
            Rémi. 
          </Link>
        </div>

        {/* Links (hidden on small screens, shown on medium and larger) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/portfolio" className="text-black hover:text-orange-600">
            Portfolio
          </Link>
          <Link href="/about" className="text-black hover:text-orange-400">
            About Me
          </Link>
          <Link href="/contact" className="text-black hover:text-orange-400">
            Contact
          </Link>
        </div>

        {/* Hamburger menu (shown on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/portfolio" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            Portfolio
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            About Me
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}