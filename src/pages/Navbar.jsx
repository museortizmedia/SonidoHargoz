import Button from "../components/Button";
import { Home, Grid3X3, Mail, GraduationCap } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full h-[7vh] border-b border-[#C6A75E]/20 bg-black/90 backdrop-blur-md sticky top-0 z-50">
            <div className="w-[78vw] h-full mx-auto flex justify-between items-center">

                {/* Logo → Home */}
                <a href="/" className="h-[70%] flex items-center hover:scale-105 transition">
                    <img
                        src="/sonidohargozLogo.png"
                        alt="Sonido Hargoz"
                        className="h-full w-auto object-contain"
                    />
                </a>

                {/* Links */}
                <div className="space-x-16 hidden md:flex font-semibold text-sm lg:text-base uppercase items-center tracking-wide">

                    <a
                        href="/"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition hover:scale-105"
                    >
                        <Home size={16} />
                        Inicio
                    </a>

                    <a
                        href="#catalogo"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition hover:scale-105"
                    >
                        <Grid3X3 size={16} />
                        Catálogo
                    </a>

                    <a
                        href="#contacto"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition hover:scale-105"
                    >
                        <Mail size={16} />
                        Contacto
                    </a>

                </div>

                {/* Botón */}
                <a href="/#academia">
                    <Button
                        variant="blue"
                        className="h-[70%] px-5 text-sm hover:scale-105 transition cursor-pointer shadow-md flex flex-row gap-2"
                    >
                        <GraduationCap />
                        Academia
                    </Button>
                </a>

            </div>
        </nav>
    );
}