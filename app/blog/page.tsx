// app/blog/page.tsx
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';
import Image from 'next/image';
import blogImage from '../../public/images/blog.png'; // Asegúrate de que esta imagen existe

const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-red-600 text-white py-10">
          <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg">
              Explora nuestras publicaciones y mantente informado sobre nuestras actividades y noticias.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={blogImage}
                alt="Blog"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-4">
                En nuestro blog, compartimos historias inspiradoras, consejos útiles y noticias importantes relacionadas con nuestra misión de luchar contra la anemia.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nos esforzamos por mantenerte actualizado con la información más reciente y relevante. Asegúrate de revisar nuestras publicaciones periódicamente.
              </p>
              <p className="text-lg text-gray-700">
                ¡Gracias por tu interés y apoyo!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
