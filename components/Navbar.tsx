// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'Nosotros' },
    { href: '/contact', label: 'Contacto' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-3xl font-bold text-red-600 hover:text-red-700 transition duration-300">
            Fuerza Fe
          </span>
        </Link>

        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                className={`text-lg font-medium transition duration-300 ${
                  activeLink === link.href
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:pb-1'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-red-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Icono del menú */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                className={`block text-lg font-medium py-2 px-4 border-b border-gray-100 transition duration-300 ${
                  activeLink === link.href
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMobileMenuOpen(false); // Cerrar el menú móvil al hacer clic
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
