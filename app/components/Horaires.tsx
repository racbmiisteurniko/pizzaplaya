export default function Horaires() {
  const horaires = [
    { jour: "Lundi", heures: "8h00 — 14h30", ouvert: true },
    { jour: "Mardi", heures: "8h00 — 14h30", ouvert: true },
    { jour: "Mercredi", heures: "8h00 — 14h30", ouvert: true },
    { jour: "Jeudi", heures: "8h00 — 14h30", ouvert: true },
    { jour: "Vendredi", heures: "8h00 — 21h00", ouvert: true, special: "Midi & Soir · Sur place ou à emporter" },
    { jour: "Samedi", heures: "Fermé", ouvert: false },
    { jour: "Dimanche", heures: "Fermé", ouvert: false },
  ];

  return (
    <section id="horaires" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium tracking-widest uppercase">
            Quand venir
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4">
            Nos <span className="text-fire">Horaires</span>
          </h2>
        </div>

        {/* Hours Grid */}
        <div className="max-w-lg mx-auto space-y-3">
          {horaires.map((h) => (
            <div
              key={h.jour}
              className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                h.special
                  ? "bg-orange-950/30 border-orange-800/40"
                  : h.ouvert
                    ? "bg-stone-900/60 border-stone-800/50 hover:border-stone-700"
                    : "bg-stone-900/30 border-stone-800/30 opacity-50"
              }`}
            >
              <div>
                <span className={`font-semibold text-lg ${h.special ? "text-orange-300" : "text-white"}`}>
                  {h.jour}
                </span>
                {h.special && (
                  <p className="text-orange-400/80 text-xs mt-0.5">{h.special}</p>
                )}
              </div>
              <span
                className={`font-medium ${
                  h.ouvert ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {h.heures}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-stone-500 text-sm">
            💡 Pensez à commander à l&apos;avance pour le vendredi soir !
          </p>
        </div>
      </div>
    </section>
  );
}
