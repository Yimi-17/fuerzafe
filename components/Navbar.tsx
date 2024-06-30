// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { href: '/about', label: 'Acerca de Nosotros' },
    { href: '/donate', label: 'Dona Ahora' },
    { href: '/contact', label: 'Contacto' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="font-bold text-2xl text-red-600 hover:text-red-700 transition duration-300 cursor-pointer">
            Fuerza Fe
          </span>
        </Link>
        <div className="flex space-x-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer ${
                  activeLink === link.href
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;