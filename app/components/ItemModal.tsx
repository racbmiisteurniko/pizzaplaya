"use client";

import { useEffect, useState } from "react";
import { type Pizza, type MenuItem } from "../data/menu";

interface ItemModalProps {
  item: Pizza | MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [cachedItem, setCachedItem] = useState<Pizza | MenuItem | null>(null);

  useEffect(() => {
    if (item) {
      setCachedItem(item);
      // Small delay to allow render before transition
      const timer = setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
      // Wait for animation to finish before clearing content
      const timer = setTimeout(() => setCachedItem(null), 300);
      return () => clearTimeout(timer);
    }
  }, [item]);

  // Handle internal close (e.g. button click)
  const handleClose = () => {
    setIsVisible(false);
    // Notify parent after animation
    setTimeout(onClose, 300);
  };

  if (!cachedItem) return null;

  const isPizza = (item: Pizza | MenuItem): item is Pizza => {
    return (item as Pizza).ingredients !== undefined;
  };

  const currentItem = cachedItem;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Placeholder */}
        <div className="relative h-64 w-full bg-stone-800 overflow-hidden group">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-700 via-stone-900 to-black" />
          
          {/* Animated shimmer/loading effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
             <div className="w-20 h-20 mb-4 rounded-full bg-stone-800/80 flex items-center justify-center border border-stone-700 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl filter drop-shadow-md">
                    {isPizza(currentItem) ? "🍕" : "🍨"}
                </span>
             </div>
             <p className="text-stone-500 font-medium text-xs tracking-[0.2em] uppercase border-b border-orange-500/30 pb-1">
                Image bientôt disponible
             </p>
          </div>
          
           {/* Decorative bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 -mt-10 relative z-20">
          <div className="flex flex-col gap-2 mb-6">
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white leading-tight">
              {currentItem.name}
            </h3>
            <div className="flex items-center gap-3">
                 <span className="text-2xl font-bold text-orange-400">
                  {typeof currentItem.price === "number"
                    ? currentItem.price.toFixed(2).replace(".", ",")
                    : currentItem.price}
                  €
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-stone-800 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            {isPizza(currentItem) && (
              <div className="bg-stone-800/30 p-4 rounded-xl border border-stone-800/50">
                <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Ingrédients
                </h4>
                <p className="text-stone-300 leading-relaxed font-light">
                    {currentItem.ingredients}
                </p>
              </div>
            )}

            {currentItem.description && (
              <div>
                <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  À propos
                </h4>
                <p className="text-stone-400 leading-relaxed text-sm font-light">
                  {currentItem.description}
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-8 pt-6 border-t border-stone-800/50 flex justify-center">
             <button 
                onClick={handleClose} 
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-stone-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
                Fermer
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
