"use client"
import React, { useState } from 'react';
import Link from 'next/link';
// import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200 md:flex-row md:items-center min-h-[50px]">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Your Logo
        </Link>
      </div>

      <div className="flex md:hidden">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleToggle}
        >
        Menu
          {/* {isOpen ? <FaTimes /> : <FaBars />} */}
        </button>
      </div>

      <div
        className={`md:flex md:items-center md:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 mt-3 md:mt-0">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
             Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
             About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
             Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
