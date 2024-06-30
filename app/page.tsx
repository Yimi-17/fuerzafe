// app/page.tsx
import Image from "next/image";
import logo from "./logo2.png";
import dynamic from 'next/dynamic';
import Footer from '../components/Footer'; // Importa el componente Footer

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Image
            src={logo}
            alt="Fuerza Fe Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold mt-6 text-red-600">Bienvenido a Fuerza Fe</h1>
          <p className="text-xl mt-3 text-gray-600 max-w-2xl mx-auto">
            Luchando contra la anemia para un futuro más saludable.
          </p>
        </div>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
