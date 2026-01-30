import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Pizza Playa — Pizzas au feu de bois | Pré-en-Pail",
  description:
    "Pizza Playa, spécialiste de la pizza cuite au feu de bois à Pré-en-Pail. Découvrez notre carte, nos distributeurs 24h/24 et commandez au 09 64 27 07 62.",
  keywords: "pizza, feu de bois, Pré-en-Pail, artisanal, distributeur pizza, livraison",
  openGraph: {
    title: "Pizza Playa — Pizzas au feu de bois",
    description: "Spécialiste de la pizza cuite au feu de bois à Pré-en-Pail. Distributeurs 24h/24.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
