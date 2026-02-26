import ActorCard from "../components/ActorCard";
import { actors } from "../data/actors";

export default function ActorsSection() {
    return (
        <section className="section-container">
            <div className="flex flex-wrap justify-center gap-10">
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