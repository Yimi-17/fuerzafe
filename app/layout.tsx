import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somos Fuerza Fe",
  description: "La lucha contra la anemia comienza contigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <meta charSet="utf-8" />
          <link rel="icon" href="/logo2.png" /> {/* Ruta al favicon */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Otros metadatos y enlaces a hojas de estilo */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
