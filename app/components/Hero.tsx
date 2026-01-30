export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />

      {/* Decorative fire circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-950/50 border border-orange-800/30 rounded-full mb-8 backdrop-blur-sm">
          <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
            🔥 Cuisson au feu de bois
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6">
          <span className="text-fire fire-glow">Pizza</span>
          <br />
          <span className="text-white">Playa</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-4 font-light">
          L&apos;art de la pizza au feu de bois
        </p>
        <p className="text-base sm:text-lg text-stone-500 mb-10">
          📍 Pré-en-Pail &bull; Mayenne
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#carte"
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-orange-900/40 hover:shadow-orange-900/60 hover:scale-105"
          >
            Découvrir la carte
          </a>
          <a
            href="tel:0964270762"
            className="px-8 py-4 border-2 border-stone-700 hover:border-orange-600 text-stone-300 hover:text-orange-400 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            📞 09 64 27 07 62
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float">
          <div className="w-6 h-10 border-2 border-stone-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
