import { useState } from "react";
import Button from "../components/Button";
import {
    Home,
    Grid3X3,
    Mail,
    GraduationCap,
    Menu,
    X
} from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full h-[7vh] border-b border-[#C6A75E]/20 bg-black/90 backdrop-blur-md sticky top-0 z-50">
            <div className="w-[90vw] md:w-[78vw] h-full mx-auto flex justify-between items-center">

                {/* Logo */}
                <a
                    href="/"
                    className="h-[70%] flex items-center hover:scale-105 transition"
                    onClick={closeMenu}
                >
                    <img
                        src="/sonidohargozLogo.png"
                        alt="Sonido Hargoz"
                        className="h-full w-auto object-contain"
                    />
                </a>

                {/* Desktop Links */}
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

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a href="/#academia">
                        <Button
                            variant="blue"
                            className="h-[70%] px-5 text-sm hover:scale-105 transition cursor-pointer shadow-md flex flex-row gap-2"
                        >
                            <GraduationCap size={18} />
                            Academia
                        </Button>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-[#C6A75E]/20 px-6 py-6 space-y-6 flex flex-col font-semibold uppercase tracking-wide text-sm">

                    <a
                        href="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3 text-white hover:text-blue-400 transition"
                    >
                        <Home size={18} />
                        Inicio
                    </a>

                    <a
                        href="#catalogo"
                        onClick={closeMenu}
                        className="flex items-center gap-3 text-white hover:text-blue-400 transition"
                    >
                        <Grid3X3 size={18} />
                        Catálogo
                    </a>

                    <a
                        href="#contacto"
                        onClick={closeMenu}
                        className="flex items-center gap-3 text-white hover:text-blue-400 transition"
                    >
                        <Mail size={18} />
                        Contacto
                    </a>

                    {/* Academia al final */}
                    <a href="/#academia" onClick={closeMenu}>
                        <Button
                            variant="blue"
                            className="w-full py-3 text-sm shadow-md flex flex-row justify-center items-center gap-2"
                        >
                            <GraduationCap size={18} />
                            Academia
                        </Button>
                    </a>

                </div>
            )}
        </nav>
    );
}