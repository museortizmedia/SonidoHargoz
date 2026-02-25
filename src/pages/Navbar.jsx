import Button from "../components/Button";

export default function Navbar() {
    return (
        <nav className="w-full px-10 py-4 border-b border-gold-500/20">
            <div className="w-[90vw] mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold gold-text tracking-widest">
                    Voces Íntegras
                </h1>

                <div className="space-x-8 hidden md:flex">
                    <a href="#" className="hover:text-gold-400 transition">
                        Inicio
                    </a>
                    <a href="#" className="hover:text-gold-400 transition">
                        Catálogo
                    </a>
                    <a href="#" className="hover:text-gold-400 transition">
                        Contacto
                    </a>
                </div>

                <Button variant="blue">Contratar</Button>
            </div>
        </nav>
    );
}