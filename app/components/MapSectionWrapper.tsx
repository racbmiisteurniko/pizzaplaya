"use client";

import dynamic from "next/dynamic";

// Load MapSection only on client side (Leaflet requires window)
const MapSection = dynamic(() => import("./MapSection"), {
  ssr: false,
  loading: () => (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-stone-800 rounded mx-auto mb-4" />
          <div className="h-[600px] bg-stone-900 rounded-2xl" />
        </div>
      </div>
    </section>
  ),
});

export default function MapSectionWrapper() {
  return <MapSection />;
}
