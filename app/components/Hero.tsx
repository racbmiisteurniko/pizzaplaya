"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [embers, setEmbers] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Generate ember particles
    const emberArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
    }));
    setEmbers(emberArray);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black parallax-bg"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Decorative fire circles with parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
        style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
        style={{ transform: `translate(-${scrollY * 0.2}px, -${scrollY * 0.3}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      {/* Ember particles */}
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="ember"
          style={{
            left: `${ember.left}%`,
            bottom: 0,
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-950/50 border border-orange-800/30 rounded-full mb-8 backdrop-blur-sm scale-in">
          <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
            🔥 Cuisson au feu de bois
          </span>
        </div>

        {/* Main Title with stagger */}
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6">
          <span className="block text-fire fire-glow fade-up stagger-1">Pizza</span>
          <span className="block text-white fade-up stagger-2">Playa</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-4 font-light fade-up stagger-3">
          L&apos;art de la pizza au feu de bois
        </p>
        <p className="text-base sm:text-lg text-stone-500 mb-10 fade-up stagger-4">
          📍 Pré-en-Pail &bull; Mayenne
        </p>

        {/* CTA Buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up stagger-5">
          <a
            href="#carte"
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-orange-900/40 hover:shadow-orange-900/60 hover:scale-105 btn-ripple relative overflow-hidden"
          >
            <span className="relative z-10">Découvrir la carte</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="tel:0964270762"
            className="group px-8 py-4 border-2 border-stone-700 hover:border-orange-600 text-stone-300 hover:text-orange-400 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105 glow-hover relative overflow-hidden"
          >
            <span className="relative z-10">📞 09 64 27 07 62</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float fade-up stagger-6">
          <div className="w-6 h-10 border-2 border-stone-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
