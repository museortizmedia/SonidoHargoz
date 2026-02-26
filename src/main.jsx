import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { actors } from "./data/actors";
import "./index.css";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";

function Router() {
  const path = window.location.pathname;

  // Detectar /profile/:param
  const profileMatch = path.match(/^\/profile\/([^/]+)$/);

  if (profileMatch) {
    const param = profileMatch[1];

    let actor = null;

    // Si es número → buscar por id
    if (!isNaN(param)) {
      actor = actors.find((a) => String(a.id) === param);
    }

    // Si no encontró o no es número → buscar por slug
    if (!actor) {
      actor = actors.find(
        (a) => a.slug.toLowerCase() === param.toLowerCase()
      );
    }

    if (actor) {
      return <ProfilePage actor={actor} />;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="text-center max-w-lg space-y-6">

          <h1 className="text-4xl font-bold text-[#C6A75E]">
            404. Perfil no encontrado
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            El perfil que intentas acceder no existe o fue eliminado.
            Esta plataforma presenta actores, su trayectoria y muestras
            de voz dentro de un catálogo profesional.
          </p>

          <a
            href="/"
            className="inline-block px-6 py-3 border border-[#C6A75E] text-[#C6A75E] uppercase tracking-wide text-sm rounded-sm transition hover:bg-[#C6A75E] hover:text-black"
          >
            Volver al inicio
          </a>

        </div>
      </div>
    );
  }

  // Ruta por defecto
  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#2a2a2a_0%,#1a1a1a_40%,#0d0d0d_70%,#000000_100%)] text-gray-100">
      <Router />
      <Footer />
    </div>
  </StrictMode>
);