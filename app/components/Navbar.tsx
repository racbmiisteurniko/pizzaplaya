"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#carte", label: "La Carte" },
  { href: "#distributeurs", label: "Distributeurs" },
  { href: "#carte-interactive", label: "Carte" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // On descend
      } else {
        setVisible(true); // On monte
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-[101%] shadow-none border-transparent"
      } ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-orange-900/20 border-b border-stone-800/30"
          : "bg-transparent border-b-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-500/30">
              <img 
                src="/hero-bg.jpg" 
                alt="Logo" 
                className="w-full h-full object-cover scale-150"
              />
            </div>
            <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-fire">
              Pizza Playa
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-orange-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0964270762"
              className="group px-5 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-sm font-semibold rounded-full transition-all duration-500 shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Commander</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-orange-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-stone-800">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-stone-300 hover:text-orange-400 py-2 text-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0964270762"
              className="block text-center py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full mt-4"
            >
              📞 Commander
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
