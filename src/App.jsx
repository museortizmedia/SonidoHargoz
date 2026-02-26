import Banner from "./pages/Banner";
import ActorsSection from "./pages/ActorsSection";
import ContactSection from "./pages/ContactSection";
import Academy from "./pages/Academy";

import Title from "./components/Title";

export default function App() {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-0 lg:px-20">
      <Banner />

      <Title label="Catálogo" id="catalogo" />
      <ActorsSection />

      <Title label="Academia Sonido Hargoz" id="academia" />
      <Academy />

      <Title label="Contacto" id="contacto" />
      <ContactSection />
    </div>
  );
}