import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Distributeurs from "./components/Distributeurs";
import Horaires from "./components/Horaires";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* About Section */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-800/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔥
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                Feu de bois
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Toutes nos pizzas sont cuites au feu de bois pour un goût
                authentique et une pâte croustillante incomparable.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🧑‍🍳
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                Fait maison
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Des ingrédients frais et de qualité, une pâte pétrie chaque jour
                et des recettes généreuses.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🍕
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                24h/24
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                6 distributeurs de pizzas fraîches disponibles 24h/24 et 7j/7
                dans toute la région.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />
      <Distributeurs />
      <Horaires />
      <Contact />
      <Footer />
    </>
  );
}
