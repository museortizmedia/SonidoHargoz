import { useRef, useState, useEffect } from "react";
import { Play, Pause, User } from "lucide-react";

export default function ActorCard({
    slug,
    name,
    profile,
    media
}) {
    const audioRef = useRef(null);
    const canvasRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const animationRef = useRef(null);

    /* ==============================
       AUDIO VISUALIZER
    ============================== */

    const setupAudioVisualizer = () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        if (!audioContextRef.current) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;

            const source = audioContext.createMediaElementSource(audioEl);
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
        }

        startAnimation();
    };

    const startAnimation = () => {
        const canvas = canvasRef.current;
        const analyser = analyserRef.current;
        if (!canvas || !analyser) return;

        const ctx = canvas.getContext("2d");
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const render = () => {
            analyser.getByteFrequencyData(dataArray);

            const average =
                dataArray.reduce((a, b) => a + b, 0) / bufferLength;

            const intensity = average / 255;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                50,
                canvas.width / 2,
                canvas.height / 1.2,
                canvas.width / 1.2
            );

            gradient.addColorStop(0, `rgba(59,130,246,${0.6 * intensity})`);
            gradient.addColorStop(1, `rgba(198,167,94,${0.5 * intensity})`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationRef.current = requestAnimationFrame(render);
        };

        render();
    };

    const stopAnimation = () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);

        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    /* ==============================
       TOGGLE AUDIO
    ============================== */

    const toggleAudio = async () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        if (isPlaying) {
            audioEl.pause();
            stopAnimation();
        } else {
            await audioEl.play();
            setupAudioVisualizer();
        }

        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        const handleEnded = () => {
            setIsPlaying(false);
            stopAnimation();
        };

        audioEl.addEventListener("ended", handleEnded);

        return () => {
            audioEl.removeEventListener("ended", handleEnded);
        };
    }, []);

    /* ==============================
       COMPONENT
    ============================== */

    return (
        <div className="relative group w-64 h-96">

            {/* Glow Canvas */}
            <canvas
                ref={canvasRef}
                width={300}
                height={400}
                className="absolute inset-0 rounded-xl blur-2xl opacity-70 pointer-events-none"
            />

            <div className="relative w-full h-full transform-3d transition-transform duration-500 group-hover:rotate-y-180">

                {/* FRONT */}
                <div
                    className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-[#C6A75E]/30 ${isPlaying ? "grayscale-0" : "grayscale"
                        }`}
                >
                    <img
                        src={media.image}
                        alt={name}
                        className="w-full h-full object-cover transition duration-500"
                    />

                    <div className="absolute bottom-0 bg-black/70 w-full p-3 backdrop-blur-md text-center">
                        <h3 className="text-[#C6A75E] text-lg font-semibold">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-900 p-6 rounded-xl border border-[#C6A75E]/30 flex flex-col">

                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#C6A75E] text-xl font-semibold">
                            {name}
                        </h3>

                        <button
                            onClick={toggleAudio}
                            className={`p-3 rounded-full transition-all duration-300 ${isPlaying
                                ? "bg-gradient-to-r from-[#C6A75E] to-yellow-500 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                : "bg-blue-600 hover:bg-blue-500"
                                }`}
                        >
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 text-sm text-gray-300 whitespace-pre-line">
                        {profile.fullBio}
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-4 flex gap-3">

                        <a
                            href={`/profile/${slug.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex items-center gap-2 text-xs uppercase tracking-wide px-4 py-2 border border-[#C6A75E]/40 text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition rounded"
                        >
                            <User size={14} />
                            Ver perfil
                        </a>

                    </div>

                </div>
            </div>

            <audio ref={audioRef} src={media.demo} />
        </div>
    );
}