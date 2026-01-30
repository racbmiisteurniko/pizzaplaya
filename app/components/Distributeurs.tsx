"use client";

import { distributeurs } from "../data/menu";
import { useScrollReveal } from "../hooks/useScrollReveal";

function DistributeurCard({ lieu, index }: { lieu: string; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative p-6 sm:p-8 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl hover:border-orange-800/40 transition-all duration-500 hover:bg-stone-900/80 text-center glow-hover cursor-pointer ${
        isVisible ? "scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500 inline-block">
        📍
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
        {lieu}
      </h3>
    </div>
  );
}

export default function Distributeurs() {
  return (
    <section id="distributeurs" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium tracking-widest uppercase">
            24h/24 · 7j/7
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4">
            Nos <span className="text-fire">Distributeurs</span>
          </h2>
          <p className="text-stone-400 mt-4 text-lg max-w-xl mx-auto">
            Des pizzas fraîches disponibles 24h/24 dans 6 points de
            distribution
          </p>
        </div>

        {/* Distributor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {distributeurs.map((lieu, i) => (
            <DistributeurCard key={lieu} lieu={lieu} index={i} />
          ))}
        </div>

        {/* Smart Pizza Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900/60 border border-stone-800/50 rounded-full">
            <span className="text-2xl">🍕</span>
            <span className="text-stone-300 font-medium">
              Distributeurs Smart Pizza
            </span>
            <span className="text-stone-500">·</span>
            <span className="text-orange-400 font-semibold">
              Pizza fraîche 24h/24
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
