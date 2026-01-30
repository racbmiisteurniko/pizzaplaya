"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "../data/locations";

// Fix Leaflet icon paths
const createCustomIcon = (type: "restaurant" | "distributeur") => {
  const iconHtml =
    type === "restaurant"
      ? '<div style="background: linear-gradient(135deg, #ea580c, #dc2626); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">🍕</div>'
      : '<div style="background: linear-gradient(135deg, #f97316, #ea580c); width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 3px 10px rgba(0,0,0,0.25);">📍</div>';

  return L.divIcon({
    html: iconHtml,
    className: "custom-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

export default function MapSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="carte-interactive" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white">
              Chargement de la carte...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  // Centre de la carte (moyenne des positions)
  const centerLat =
    locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const centerLng =
    locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;

  return (
    <section id="carte-interactive" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm font-medium tracking-widest uppercase">
            Où nous trouver
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4">
            <span className="text-fire">Carte</span> Interactive
          </h2>
          <p className="text-stone-400 mt-4 text-lg">
            Localisez le restaurant et nos distributeurs 24h/24
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border-2 border-stone-800/50 shadow-2xl shadow-orange-900/20">
          <MapContainer
            center={[centerLat, centerLng]}
            zoom={10}
            style={{ height: "600px", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location, i) => (
              <Marker
                key={i}
                position={[location.lat, location.lng]}
                icon={createCustomIcon(location.type)}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg mb-1">
                      {location.type === "restaurant" ? "🔥" : "📍"}{" "}
                      {location.name}
                    </h3>
                    <p className="text-sm text-stone-600">{location.address}</p>
                    {location.type === "restaurant" && (
                      <a
                        href="tel:0964270762"
                        className="inline-block mt-2 px-3 py-1 bg-orange-600 text-white text-sm rounded-full hover:bg-orange-500"
                      >
                        📞 09 64 27 07 62
                      </a>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-stone-900/60 border border-stone-800/50 rounded-full">
            <span className="text-2xl">🍕</span>
            <span className="text-stone-300 text-sm">Restaurant</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-stone-900/60 border border-stone-800/50 rounded-full">
            <span className="text-2xl">📍</span>
            <span className="text-stone-300 text-sm">Distributeur 24h/24</span>
          </div>
        </div>
      </div>
    </section>
  );
}
