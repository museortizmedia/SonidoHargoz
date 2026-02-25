import ActorCard from "../components/ActorCard";
import { actors } from "../data/actors";

export default function ActorsSection() {
    return (
        <section className="section-container py-16">
            <h2 className="text-3xl text-gold mb-10">
                Catálogo
            </h2>

            <div className="flex flex-wrap gap-10">
                {actors.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        {...actor}
                    />
                ))}
            </div>
        </section>
    );
}