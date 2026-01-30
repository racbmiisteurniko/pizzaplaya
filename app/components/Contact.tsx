export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium tracking-widest uppercase">
            Commandez
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4">
            Nous <span className="text-fire">Contacter</span>
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href="tel:0964270762"
            className="group p-8 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl hover:border-orange-800/40 transition-all duration-500 hover:bg-stone-900/80 text-center"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📞
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
              Téléphone
            </h3>
            <p className="text-orange-400 text-lg font-semibold">
              09 64 27 07 62
            </p>
            <p className="text-stone-500 text-sm mt-2">
              Pour commander ou réserver
            </p>
          </a>

          {/* Address */}
          <div className="group p-8 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl hover:border-orange-800/40 transition-all duration-500 hover:bg-stone-900/80 text-center">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📍
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
              Adresse
            </h3>
            <p className="text-stone-300">Pré-en-Pail</p>
            <p className="text-stone-500 text-sm mt-1">Mayenne (53)</p>
          </div>

          {/* Social */}
          <a
            href="https://www.facebook.com/share/17aBGjJkYr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl hover:border-orange-800/40 transition-all duration-500 hover:bg-stone-900/80 text-center"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📘
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
              Facebook
            </h3>
            <p className="text-stone-300">Pizza Playa</p>
            <p className="text-stone-500 text-sm mt-1">
              Suivez-nous pour les actus !
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:0964270762"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xl font-bold rounded-full transition-all duration-300 shadow-2xl shadow-orange-900/40 hover:shadow-orange-900/60 hover:scale-105"
          >
            🔥 Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
