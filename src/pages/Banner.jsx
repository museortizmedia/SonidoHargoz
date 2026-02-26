import Button from "../components/Button";
import bannerImg from "../assets/banner_o.png";

export default function Banner({ className = "" }) {
    return (
        <section
            className={`relative h-[47vh] min-h-[1vh] overflow-hidden ${className}`}
        >
            {/* Imagen fondo */}
            <img
                src={bannerImg}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex items-end justify-end px-8 lg:px-20 pb-16">
                <div className="max-w-xl text-right">

                    <h1 className="font-baskerville text-3xl md:text-5xl mb-4 text-[#C6A75E]">
                        La voz en la oscuridad
                    </h1>

                    <p className="text-lg mb-6 text-[rgba(198,167,94,0.8)]">
                        Donde el talento se convierte en presencia sonora.
                    </p>

                    <a href="#academia">
                        <Button variant="blue" className="uppercase">
                            Inscribirse
                        </Button>
                    </a>

                </div>

                {/* COLUMNA DERECHA VACÍA */}
                <div className="w-1/2"></div>

            </div>
        </section>
    );
}