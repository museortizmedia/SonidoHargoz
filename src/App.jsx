import Navbar from "./pages/Navbar";
import Banner from "./pages/Banner";
import ActorsSection from "./pages/ActorsSection";
import ContactSection from "./pages/ContactSection";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#2a2a2a_0%,#1a1a1a_40%,#0d0d0d_70%,#000000_100%)] text-gray-100">
      <Navbar />
      <div className="w-full max-w-[90vw] mx-auto px-0 lg:px-20">
        <Banner />
        <Title label="Catálogo" />
        <ActorsSection />
        <Title label="Contacto" />
        <ContactSection />
      </div>
    </div>
  );
}