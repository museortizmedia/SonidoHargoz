import Button from "../components/Button";

export default function Navbar() {
    return (
        <nav className="w-full h-[7vh] border-b border-[#C6A75E]-500/20">
            <div className="w-[78vw] h-full mx-auto flex justify-between items-center">

                {/* Logo ajustado proporcionalmente */}
                <img
                    src="/sonidohargozLogo.png"
                    alt="Logo"
                    className="h-[70%] w-auto object-contain"
                />

                {/* Links */}
                <div className="space-x-20 hidden md:flex font-black text-sm lg:text-base uppercase items-center">
                    <a href="#" className="hover:text-blue-400 transition hover:scale-105">
                        Inicio
                    </a>
                    <a href="#" className="hover:text-blue-400 transition hover:scale-105">
                        Catálogo
                    </a>
                    <a href="#" className="hover:text-blue-400 transition hover:scale-105">
                        Contacto
                    </a>
                </div>

                {/* Botón ajustado */}
                <Button
                    variant="blue"
                    className="h-[70%] px-4 text-sm hover:scale-105 transition cursor-pointer"
                >
                    Contratar
                </Button>

            </div>
        </nav>
    );
}