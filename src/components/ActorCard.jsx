import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Button from "./Button";

export default function ActorCard({
    name,
    image,
    description,
    audio,
}) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        if (isPlaying) {
            audioEl.pause();
        } else {
            audioEl.play();
        }

        setIsPlaying(!isPlaying);
    };

    // Cuando termina el audio, actualizar estado
    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        const handleEnded = () => setIsPlaying(false);
        audioEl.addEventListener("ended", handleEnded);

        return () => {
            audioEl.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <div className="relative group w-64 h-96">

            {/* CONTENEDOR FLIP */}
            <div className="relative w-full h-full transform-3d transition-transform duration-500 group-hover:transform-[rotateY(180deg)]">

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
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-900 p-6 rounded-xl border border-gold/30 flex flex-col">

                    {/* Nombre + Play/Pause */}
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-gold text-xl">
                            {name}
                        </h3>

                        <button
                            onClick={toggleAudio}
                            className="p-2 bg-blue-600 rounded-full hover:scale-105 transition"
                        >
                            {isPlaying ? (
                                <Pause size={18} />
                            ) : (
                                <Play size={18} />
                            )}
                        </button>
                    </div>

                    {/* Scroll interno */}
                    <div className="flex-1 overflow-y-auto pr-2 text-sm text-gray-300">
                        {description}
                    </div>

                </div>
            </div>

            <audio ref={audioRef} src={audio} />

        </div>
    );
}