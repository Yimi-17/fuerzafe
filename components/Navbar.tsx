// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 text-red-600 flex justify-center">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="font-bold text-xl hover:text-red-700">Fuerza Fe</a>
        </Link>
        <div className="space-x-6">
          <Link href="/about" legacyBehavior>
            <a className="hover:text-red-700 transition duration-300">Acerca de Nosotros</a>
          </Link>
          <Link href="/donate" legacyBehavior>
            <a className="hover:text-red-700 transition duration-300">Dona Ahora</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-red-700 transition duration-300">Contacto</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="hover:text-red-700 transition duration-300">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}