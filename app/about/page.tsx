// app/about/page.tsx
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';
import Image from 'next/image';
import aboutImage from '../../public/images/image.png';

const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-red-600 text-white py-10">
          <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Nosotros</h1>
            <p className="text-lg">
              Conoce más sobre nuestra misión, visión y el compromiso que tenemos en la lucha contra la anemia.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={aboutImage}
                alt="Nosotros"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-4">
                En Fuerza Fe, estamos comprometidos en la lucha contra la anemia a través de diversas
                iniciativas y programas. Nuestra misión es erradicar esta condición y mejorar la calidad
                de vida de las personas afectadas.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Creemos en la educación, la prevención y el acceso a tratamientos adecuados como las claves
                para vencer esta batalla. Juntos podemos hacer la diferencia y construir un futuro más saludable
                para todos.
              </p>
              <p className="text-lg text-gray-700">
                Únete a nosotros y sé parte de este cambio positivo.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
