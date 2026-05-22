import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard";
import { actors } from "../data/actors";

export default function ActorsSection() {
    // Determinamos los valores iniciales basándonos en el ancho actual
    const getInitialCount = () => {
        if (typeof window !== "undefined") {
            return window.innerWidth >= 1280 ? 8 : 2;
        }
        return 2;
    };

    const [visibleCount, setVisibleCount] = useState(getInitialCount);
    const [step, setStep] = useState(getInitialCount);

    useEffect(() => {
        let lastIsDesktop = window.innerWidth >= 1280;

        const handleResize = () => {
            const currentIsDesktop = window.innerWidth >= 1280;

            // Solo actualizamos el estado si cruzamos el breakpoint de escritorio (1280px)
            // Esto evita que el scroll en móviles (que oculta/muestra la barra de direcciones y dispara resize)
            // resetee el contador de actores visibles.
            if (currentIsDesktop !== lastIsDesktop) {
                lastIsDesktop = currentIsDesktop;
                const newDefault = currentIsDesktop ? 8 : 2;
                setStep(newDefault);

                // Si pasamos a escritorio, nos aseguramos de mostrar al menos 8.
                // Si pasamos a móvil, mantenemos los que ya estaban cargados para no "comprimir" el catálogo.
                setVisibleCount((prev) => Math.max(prev, newDefault));
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + step);
    };

    const visibleActors = actors.slice(0, visibleCount);
    const remaining = actors.length - visibleCount;

    return (
        <section className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10">
                {visibleActors.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        {...actor}
                    />
                ))}
            </div>

            {visibleCount < actors.length && (
                <div className="text-center mt-12">
                    <button
                        onClick={handleLoadMore}
                        className="text-[#C6A75E] hover:text-yellow-400 transition font-medium"
                    >
                        Ver más ({remaining} restantes)
                    </button>
                </div>
            )}
        </section>
    );
}