export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-10 mt-20 border-t border-[#C6A75E]/20 bg-black">

            <div className="max-w-5xl mx-auto px-6 text-center space-y-3">

                {/* Derechos */}
                <p className="text-sm text-gray-400">
                    © {year} Todos los derechos reservados.
                </p>

                {/* Marca del desarrollador */}
                <p className="text-sm tracking-wide text-[#C6A75E] font-semibold">
                    Hecho con ♥ por{" "}
                    <a href="#">
                        <span className="font-bold">
                            YO
                        </span>
                    </a>
                </p>

            </div>

        </footer>
    );
}