import Button from "../components/Button";
import bannerImg from "../assets/banner_o.png";

export default function Banner({ className = "" }) {
    return (
        <section
            className={`relative h-[45vh] md:h-[47vh] min-h-[280px] md:min-h-[1vh] overflow-hidden ${className}`}
        >
            {/* Imagen fondo */}
            <img
                src={bannerImg}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contenido */}
            <div className="relative z-10 h-full flex items-end md:items-end justify-center md:justify-end px-6 lg:px-20 pb-10 md:pb-16">

                <div className="max-w-xl text-center md:text-right md:mr-[50%]">

                    <h1 className="font-baskerville text-2xl sm:text-3xl md:text-5xl mb-4 text-[#C6A75E] leading-tight">
                        La voz en la oscuridad
                    </h1>

                    <p className="text-base sm:text-lg mb-6 text-[rgba(198,167,94,0.8)]">
                        Donde el talento se convierte en presencia sonora.
                    </p>

                    <a href="#academia">
                        <Button variant="blue" className="uppercase">
                            Inscribirse
                        </Button>
                    </a>

                </div>

            </div>
        </section>
    );
}