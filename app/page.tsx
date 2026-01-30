import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import Horaires from "./components/Horaires";
import Distributeurs from "./components/Distributeurs";
import MapSectionWrapper from "./components/MapSectionWrapper";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <Horaires />
      <Distributeurs />
      <MapSectionWrapper />
      <Contact />
      <Footer />
    </>
  );
}
