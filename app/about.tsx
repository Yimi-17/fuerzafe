// pages/about.tsx

import Image from "next/image";
import logo from "../app/logo.png"; // Ajusta la ruta según la ubicación exacta de tu logo

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-red-600 to-red-900 text-white">
      <div className="text-center mb-12">
        <Image
          src={logo} // Referencia directa a tu logo
          alt="Fuerza Fe Logo"
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-bold mt-4">Acerca de Nosotros</h1>
        <p className="text-lg mt-2">
          Aquí puedes colocar información detallada sobre tu proyecto y la misión de "Fuerza Fe".
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Otros elementos de la página Acerca de Nosotros */}
      </div>

      <footer className="mt-12 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Fuerza Fe. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
