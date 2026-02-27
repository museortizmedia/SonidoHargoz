import { Play, Pause, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ track, onClose }) {
    const audioRef = useRef(null);
    const analyserRef = useRef(null);
    const audioContextRef = useRef(null);
    const animationRef = useRef(null);
    const progressRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [bars, setBars] = useState(new Array(20).fill(10));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    /* =========================
       CARGA TRACK
    ========================= */
    useEffect(() => {
        if (!track) return;

        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        audio.src = track.src;
        audio.load(); // 🔥 importante
        audio.currentTime = 0;

        // Crear AudioContext una sola vez
        if (!audioContextRef.current) {
            const ctx = new (window.AudioContext ||
                window.webkitAudioContext)();

            const source = ctx.createMediaElementSource(audio);
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 64;

            source.connect(analyser);
            analyser.connect(ctx.destination);

            analyserRef.current = analyser;
            audioContextRef.current = ctx;
        }

        audio.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false));

        return () => {
            audio.pause();
        };
    }, [track]);

    /* =========================
       ESPECTROGRAMA
    ========================= */
    useEffect(() => {
        if (!playing || !analyserRef.current) return;

        const analyser = analyserRef.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const update = () => {
            analyser.getByteFrequencyData(dataArray);

            const newBars = Array.from(dataArray.slice(0, 20)).map(
                (v) => (v / 255) * 100
            );

            setBars(newBars);
            animationRef.current = requestAnimationFrame(update);
        };

        update();

        return () => cancelAnimationFrame(animationRef.current);
    }, [playing]);

    /* =========================
       CONTROLES
    ========================= */
    const toggle = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
            cancelAnimationFrame(animationRef.current);
            setPlaying(false);
        } else {
            // 🔥 importante para Chrome
            if (audioContextRef.current?.state === "suspended") {
                await audioContextRef.current.resume();
            }

            audio.play();
            setPlaying(true);
        }
    };

    const closePlayer = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        cancelAnimationFrame(animationRef.current);
        setPlaying(false);

        if (onClose) onClose();
    };

    const formatTime = (time) => {
        if (!time) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const seek = (clientX) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;

        const bar = progressRef.current;
        const rect = bar.getBoundingClientRect();

        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));

        const newTime = percent * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        seek(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        seek(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    if (!track) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/85 backdrop-blur-lg border-t border-white/10 py-4 px-6 z-50">

            <div className="max-w-6xl mx-auto space-y-4">

                {/* FILA SUPERIOR */}
                <div className="flex items-center justify-between">

                    {/* IZQUIERDA */}
                    <div className="flex items-center gap-4 min-w-[250px]">
                        <button
                            onClick={toggle}
                            className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${playing
                                ? "bg-gradient-to-r from-[#C6A75E] to-yellow-500 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                : "bg-blue-600 hover:bg-blue-500"
                                }`}
                        >
                            {playing ? <Pause size={18} /> : <Play size={18} />}
                        </button>

                        <div>
                            <p className="text-white font-medium tracking-wide text-sm">
                                {track.title}
                            </p>
                            <p className="text-white/50 text-xs">
                                {track.actor}
                            </p>
                        </div>
                    </div>

                    {/* CENTRO */}
                    <div className="flex items-end gap-[3px] h-6">
                        {bars.map((height, i) => (
                            <div
                                key={i}
                                className="w-[3px] rounded-full bg-gradient-to-t from-[#C6A75E] via-yellow-400 to-blue-500 transition-all duration-75"
                                style={{
                                    height: `${Math.max(height, 10)}%`
                                }}
                            />
                        ))}
                    </div>

                    {/* DERECHA */}
                    <div className="flex items-center gap-6 min-w-[150px] justify-end">
                        <div className="text-xs text-white/70 tracking-wide">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>

                        <button
                            onClick={closePlayer}
                            className="p-2 text-white/60 hover:text-white transition cursor-pointer"
                        >
                            <X size={18} />
                        </button>
                    </div>

                </div>

                {/* BARRA PROGRESO */}
                <div
                    ref={progressRef}
                    onMouseDown={handleMouseDown}
                    className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden cursor-pointer relative group"
                >
                    <div
                        className="h-full bg-gradient-to-r from-[#C6A75E] via-yellow-400 to-blue-500 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />

                    {/* Thumb 
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition"
                        style={{ left: `calc(${progress}% - 6px)` }}
                    />*/}
                </div>

                <audio
                    ref={audioRef}
                    onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                    onLoadedMetadata={(e) => setDuration(e.target.duration)}
                    onEnded={() => setPlaying(false)}
                />

            </div>
        </div>
    );
}