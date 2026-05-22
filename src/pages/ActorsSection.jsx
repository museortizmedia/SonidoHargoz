import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard";
import { actors } from "../data/actors";

export default function ActorsSection() {
    const [filter, setFilter] = useState("todos"); // "todos" | "masculino" | "femenino"

    // Determinamos los valores iniciales basándonos en el ancho actual
    const getInitialCount = () => {
        if (typeof window !== "undefined") {
            return window.innerWidth >= 1280 ? 8 : 2;
        }
        return 2;
    };

    const [visibleCount, setVisibleCount] = useState(getInitialCount);
    const [step, setStep] = useState(getInitialCount);

    // Filtrar actores según la categoría seleccionada
    const filteredActors = actors.filter((actor) => {
        if (filter === "todos") return true;
        return actor.gender === filter;
    });

    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === "#catalogo") {
                setVisibleCount(filteredActors.length);
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
    }, [filteredActors.length]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + step);
    };

    const visibleActors = filteredActors.slice(0, visibleCount);
    const remaining = filteredActors.length - visibleCount;

    return (
        <section className="section-container">
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
                {["todos", "masculino", "femenino"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setFilter(cat);
                            setVisibleCount(getInitialCount()); // Resetear contador al cambiar filtro
                        }}
                        className={`px-4 sm:px-6 py-2 rounded-full border transition-all duration-300 uppercase text-[10px] sm:text-xs tracking-widest font-semibold whitespace-nowrap
                        ${filter === cat
                                ? "bg-[#C6A75E] border-[#C6A75E] text-black shadow-[0_0_15px_rgba(198,167,94,0.3)]"
                                : "border-white/20 text-white/60 hover:border-[#C6A75E]/50 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10">
                {visibleActors.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        {...actor}
                    />
                ))}
            </div>

            {visibleCount < filteredActors.length && (
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