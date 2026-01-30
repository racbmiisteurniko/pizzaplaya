export default function Footer() {
  return (
    <footer className="relative border-t border-stone-800/50">
      <div className="bg-black/80 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-fire">
                Pizza Playa
              </span>
              <span className="text-stone-600 text-sm ml-2">
                Pré-en-Pail
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="#carte" className="hover:text-orange-400 transition-colors">
                La Carte
              </a>
              <a href="#distributeurs" className="hover:text-orange-400 transition-colors">
                Distributeurs
              </a>
              <a href="#horaires" className="hover:text-orange-400 transition-colors">
                Horaires
              </a>
              <a href="tel:0964270762" className="hover:text-orange-400 transition-colors">
                09 64 27 07 62
              </a>
            </div>

            {/* Social */}
            <a
              href="https://www.facebook.com/share/17aBGjJkYr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-orange-400 transition-colors"
            >
              Facebook →
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800/30 text-center text-stone-700 text-xs">
            © {new Date().getFullYear()} Pizza Playa · Pizzas cuites au feu de bois · Pré-en-Pail, Mayenne
          </div>
        </div>
      </div>
    </footer>
  );
}
