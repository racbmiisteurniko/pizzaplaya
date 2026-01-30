"use client";

import { useState } from "react";
import {
  pizzasTomate,
  pizzasCreme,
  desserts,
  boissons,
  supplements,
  type Pizza,
  type MenuItem,
} from "../data/menu";

type Tab = "tomate" | "creme" | "desserts" | "boissons";

function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <div className="pizza-card relative group p-5 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl hover:border-orange-800/40 glow-hover cursor-pointer overflow-hidden">
      <div className="flex justify-between items-start gap-4 relative z-10">
        <div className="flex-1">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white group-hover:text-orange-300 transition-all duration-300">
            {pizza.name}
          </h3>
          <p className="text-sm text-stone-400 mt-1 leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
            {pizza.ingredients}
          </p>
        </div>
        <div className="text-right shrink-0 group-hover:scale-110 transition-transform duration-300">
          <span className="text-xl font-bold text-orange-400 group-hover:text-orange-300">
            {pizza.price.toFixed(2).replace(".", ",")}€
          </span>
        </div>
      </div>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 right-2 w-8 h-0.5 bg-gradient-to-l from-orange-500 to-transparent" />
        <div className="absolute top-2 right-2 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </div>
  );
}

function SimpleCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-center p-4 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-xl hover:border-orange-800/40 transition-all duration-300">
      <span className="text-stone-200 font-medium">{item.name}</span>
      <span className="text-orange-400 font-bold">
        {typeof item.price === "number"
          ? `${item.price.toFixed(2).replace(".", ",")}€`
          : `${item.price}€`}
      </span>
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>("tomate");

  const tabs: { key: Tab; label: string; emoji: string }[] = [
    { key: "tomate", label: "Base Tomate", emoji: "🍅" },
    { key: "creme", label: "Base Crème", emoji: "🧀" },
    { key: "desserts", label: "Desserts", emoji: "🍨" },
    { key: "boissons", label: "Boissons", emoji: "🍺" },
  ];

  return (
    <section id="carte" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium tracking-widest uppercase">
            Notre carte
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4">
            La <span className="text-fire">Carte</span>
          </h2>
          <p className="text-stone-400 mt-4 text-lg max-w-xl mx-auto">
            Toutes nos pizzas sont préparées avec des ingrédients frais et
            cuites au feu de bois
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/30"
                  : "bg-stone-900/60 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700"
              }`}
            >
              <span className="mr-1.5">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pizza Cards */}
        {activeTab === "tomate" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pizzasTomate.map((pizza) => (
              <PizzaCard key={pizza.name} pizza={pizza} />
            ))}
          </div>
        )}

        {activeTab === "creme" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pizzasCreme.map((pizza) => (
              <PizzaCard key={pizza.name} pizza={pizza} />
            ))}
          </div>
        )}

        {activeTab === "desserts" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {desserts.map((item) => (
              <SimpleCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {activeTab === "boissons" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {boissons.map((item) => (
              <SimpleCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* Supplements */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {supplements.map((s) => (
            <div
              key={s.name}
              className="px-4 py-2 bg-stone-900/40 border border-stone-800/50 rounded-full text-sm text-stone-400"
            >
              {s.name} :{" "}
              <span className="text-orange-400 font-semibold">
                {typeof s.price === "number" ? `${s.price}€` : s.price}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-600 text-xs mt-8">
          Origine des viandes &quot;France et UE&quot; · Liste de substances allergènes
          disponible sur demande
        </p>
      </div>
    </section>
  );
}
