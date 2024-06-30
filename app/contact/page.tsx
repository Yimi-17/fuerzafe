// Importación de módulos necesarios
import React from 'react';
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';
import Image from 'next/image';
import contactImage from '../../public/images/contact.png'; // Ruta a la imagen de contacto
import facebookLogo from '../../public/images/facebook.png'; // Ruta a la imagen de Facebook
import tiktokLogo from '../../public/images/tiktok.png'; // Ruta a la imagen de TikTok

// Carga dinámica del Navbar
const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });

// Componente de la página de contacto
const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar /> {/* Renderiza el componente Navbar */}
      <main className="flex-grow">
        <div className="bg-red-600 text-white py-10">
          <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <p className="text-lg">
              Estamos aquí para ayudarte. Contáctanos para más información sobre nuestras iniciativas.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              {/* Uso de la imagen de contacto */}
              <Image
                src={contactImage}
                alt="Contacto"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left space-y-4">
              <p className="text-lg text-gray-700">
                Si tienes alguna pregunta o necesitas más información sobre nuestras iniciativas, no dudes en contactarnos. Estamos aquí para ayudarte y proporcionarte toda la información que necesites.
              </p>
              <p className="text-lg text-gray-700">
                Puedes comunicarte con nosotros a través de nuestras redes sociales.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Enlaces a las redes sociales con imágenes */}
                <a href="https://www.facebook.com/profile.php?id=61561561356150&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo.src} alt="Facebook" className="h-12 w-12 hover:opacity-80" />
                </a>
                <a href="https://www.tiktok.com/@.anemia.upeu.2024?_t=8ndFdQLRyNC&_r=1" target="_blank" rel="noopener noreferrer">
                  <img src={tiktokLogo.src} alt="TikTok" className="h-12 w-12 hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Renderiza el componente Footer */}
    </div>
  );
};

export default Contact; // Exporta el componente Contact
