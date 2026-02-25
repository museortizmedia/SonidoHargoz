import { useRef } from "react";
import Button from "./Button";

export default function ActorCard({
    name,
    image,
    description,
    audio,
}) {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current?.play();
    };

    return (
        <div className="relative group w-64 h-96">

            {/* CONTENEDOR FLIP */}
            <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-gold/30">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                    />

                    <div className="absolute bottom-0 bg-black/70 w-full p-3">
                        <h3 className="text-gold text-lg font-semibold">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-900 p-6 rounded-xl border border-gold/30 flex flex-col justify-between">

                    <div>
                        <h3 className="text-gold text-xl mb-3">
                            {name}
                        </h3>

                        <p className="text-sm text-gray-300">
                            {description}
                        </p>
                    </div>

                </div>
            </div>

            {/* BOTÓN LATERAL */}
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <Button variant="blue" onClick={playAudio}>
                    ▶
                </Button>
            </div>

            <audio ref={audioRef} src={audio} />
        </div>
    );
}