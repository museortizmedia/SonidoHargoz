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
        const checkHash = () => {
            if (window.location.hash === "#catalogo") {
                setVisibleCount(actors.length);
            }
        };

        // Verificamos al montar
        checkHash();

        // Escuchamos cambios en el hash
        window.addEventListener("hashchange", checkHash);

        let lastIsDesktop = window.innerWidth >= 1280;

        const handleResize = () => {
            const currentIsDesktop = window.innerWidth >= 1280;

            if (currentIsDesktop !== lastIsDesktop) {
                lastIsDesktop = currentIsDesktop;
                const newDefault = currentIsDesktop ? 8 : 2;
                setStep(newDefault);

                // Si ya está expandido por el hash, no lo comprimimos
                if (window.location.hash !== "#catalogo") {
                    setVisibleCount((prev) => Math.max(prev, newDefault));
                }
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("hashchange", checkHash);
            window.removeEventListener("resize", handleResize);
        };
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