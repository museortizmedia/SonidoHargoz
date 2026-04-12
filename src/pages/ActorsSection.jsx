import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard";
import { actors } from "../data/actors";

export default function ActorsSection() {
    const [visibleCount, setVisibleCount] = useState(2);
    const [step, setStep] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) { // xl
                setVisibleCount(8);
                setStep(8);
            } else {
                setVisibleCount(2);
                setStep(2);
            }
        };

        handleResize();
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