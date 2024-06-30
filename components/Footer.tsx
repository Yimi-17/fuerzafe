// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-center text-gray-800 p-4 bg-white">
      <p>© {new Date().getFullYear()} Fuerza Fe. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
