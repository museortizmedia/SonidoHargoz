import { Play, Pause, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ track }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    // Reproducir automáticamente cuando cambia el track
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !track) return;

        audio.pause();
        audio.currentTime = 0;
        audio.src = track.src;

        audio.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false));

    }, [track]);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    };

    const closePlayer = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            audio.removeAttribute("src");
            audio.load();
        }

        setPlaying(false);
    };

    if (!track) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 py-3 px-6 z-50">

            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Info */}
                <div>
                    <p className="text-white font-medium text-sm tracking-wide">
                        {track.title}
                    </p>
                    <p className="text-white/50 text-xs">
                        {track.actor}
                    </p>
                </div>

                {/* Controles */}
                <div className="flex items-center gap-6">

                    {/* Visualizador elegante */}
                    <div className="flex items-end gap-[3px] h-6">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-[3px] rounded-full transition-all duration-300 ${playing
                                    ? "animate-pulse bg-gradient-to-t from-[#C6A75E] via-yellow-400 to-blue-500"
                                    : "bg-white/20"
                                    }`}
                                style={{
                                    height: playing
                                        ? `${20 + Math.random() * 80}%`
                                        : "30%"
                                }}
                            />
                        ))}
                    </div>

                    {/* Botón Play */}
                    <button
                        onClick={toggle}
                        className={`p-3 rounded-full transition-all duration-300 ${playing
                            ? "bg-gradient-to-r from-[#C6A75E] to-yellow-500 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                            : "bg-blue-600 hover:bg-blue-500"
                            }`}
                    >
                        {playing ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Cerrar */}
                    <button
                        onClick={closePlayer}
                        className="p-2 text-white/60 hover:text-white transition"
                    >
                        <X size={18} />
                    </button>

                </div>

                <audio ref={audioRef} />

            </div>
        </div>
    );
}