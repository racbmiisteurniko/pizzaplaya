import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
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
      <AboutSection />
      <MenuSection />
      <Distributeurs />
      <Horaires />
      <Contact />
      <Footer />
    </>
  );
}
