import {
    Play,
    Pause,
    Share2,
    Mail,
    Download,
    Mic,
    Award,
    Globe,
    Sparkles,
    Film,
    BookOpen,
    ArrowLeft,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    Facebook
} from "lucide-react";

import AudioPlayer from "../components/AudioPlayer";
import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import ShimmerName from "../components/ShimmerName";
import defaultImg from "../assets/default.png";

// SUB-COMPONENTE PARA PERSONAJES
function CharacterCard({ character, actorName, currentTrack, isPlayingGlobal, currentTimeGlobal, onPlayPause, positionMap }) {
    const videoRef = useRef(null);
    const isVideo = character.demo?.toLowerCase().endsWith(".mp4") || character.demo?.toLowerCase().endsWith(".webm");
    const isCurrentPlaying = currentTrack?.src === character.demo && isPlayingGlobal;
    
    // Determinar si debemos mostrar el video como miniatura estática
    const showVideoThumbnail = isVideo && (!character.image || character.image === "/");

    // Sincronizar reproducción del video con el estado global
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl || !isVideo) return;

        if (isCurrentPlaying) {
            videoEl.play().catch(() => {});
        } else {
            // Solo pausamos, NO reseteamos el tiempo para que esté sincronizado con el reproductor global
            videoEl.pause();
        }
    }, [isCurrentPlaying, isVideo]);

    // Sincronizar el tiempo del video con el tiempo del audio global
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl || !isVideo || !isCurrentPlaying) return;

        // Solo sincronizamos si la diferencia es significativa (> 0.3s) para evitar saltos visuales constantes
        if (Math.abs(videoEl.currentTime - currentTimeGlobal) > 0.3) {
            videoEl.currentTime = currentTimeGlobal;
        }
    }, [currentTimeGlobal, isCurrentPlaying, isVideo]);

    return (
        <div
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f14] hover:border-blue-500/50 transition duration-500"
        >
            {(isCurrentPlaying && isVideo) || showVideoThumbnail ? (
                <video
                    ref={videoRef}
                    src={character.demo}
                    muted
                    loop={isCurrentPlaying}
                    playsInline
                    className={`w-full h-72 object-cover transition duration-500 ${!isCurrentPlaying ? "grayscale group-hover:grayscale-0" : ""}`}
                    onMouseOver={(e) => {
                        if (!isCurrentPlaying && isVideo) {
                            e.target.play().catch(() => {});
                        }
                    }}
                    onMouseOut={(e) => {
                        if (!isCurrentPlaying && isVideo) {
                            e.target.pause();
                            e.target.currentTime = 0; // Solo reseteamos en hover, no en play global
                        }
                    }}
                />
            ) : (
                <img
                    src={character.image || defaultImg}
                    alt={character.name}
                    onError={(e) => {
                        e.target.src = defaultImg;
                        e.target.onerror = null;
                    }}
                    className={`w-full h-72 object-cover grayscale group-hover:grayscale-0 transition duration-500 ${positionMap[character.image_position] || "object-center"}`}
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />

            <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-lg font-semibold">
                    {character.name}
                </h3>
                <p className="text-blue-400 text-sm">
                    {character.project}
                </p>
            </div>

            {character.demo && (
                <button
                    onClick={() =>
                        onPlayPause({
                            title: character.name,
                            actor: actorName,
                            src: character.demo
                        })
                    }
                    className="absolute top-4 right-4 p-2 bg-blue-600 rounded-full hover:scale-110 transition z-10"
                >
                    {isCurrentPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
            )}
        </div>
    );
}

export default function ProfilePage({ actor }) {

    const [copied, setCopied] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlayingGlobal, setIsPlayingGlobal] = useState(false);
    const [currentTimeGlobal, setCurrentTimeGlobal] = useState(0);
    const audioPlayerRef = useRef(null);

    const iconMap = {
        mic: Mic,
        film: Film,
        book: BookOpen
    };

    // Mapeo de Redes Sociales
    const socialIconMap = {
        instagram: Instagram,
        twitter: Twitter,
        x: Twitter, // Alias para X
        youtube: Youtube,
        linkedin: Linkedin,
        facebook: Facebook,
        web: Globe,
        website: Globe
    };

    // Mapeo de posiciones para object-position
    const positionMap = {
        top: "object-top",
        middle: "object-center",
        bottom: "object-bottom"
    };

    const heroPosition = positionMap[actor.media.image_position] || "object-center";

    const shareProfile = async () => {
        const url = window.location.href;

        if (navigator.share) {
            await navigator.share({
                title: actor.name,
                text: `Conoce el perfil profesional de ${actor.name}`,
                url
            });
        } else {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handlePlayPause = (track) => {
        if (currentTrack?.src === track.src) {
            // Si es el mismo track, alternamos play/pause usando la ref del reproductor
            audioPlayerRef.current?.toggle();
        } else {
            // Si es un track nuevo, lo cargamos
            setCurrentTrack(track);
        }
    };

    if (!actor) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Actor no encontrado
            </div>
        );
    }

    return (

        <>

            {/* HERO */}
            <div className="relative h-[95vh] flex items-center justify-center overflow-hidden">

                <div className="absolute top-6 left-6 z-20">
                    <a
                        href="/#catalogo"
                        className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-[#C6A75E] transition rounded-full text-sm"
                    >
                        <ArrowLeft size={14} title="Regresar al catálogo" />
                    </a>
                </div>

                <img
                    src={actor.media.image}
                    alt={actor.name}
                    onError={(e) => {
                        e.target.src = defaultImg;
                        e.target.onerror = null;
                    }}
                    className={`absolute w-full h-full object-cover grayscale contrast-110 brightness-75 ${heroPosition}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/40" />

                <div className="relative text-center px-6 max-w-4xl">

                    {/* BADGES DINÁMICOS */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs uppercase tracking-wider">

                        {actor.profile.badges?.map((badge) => {
                            const Icon = iconMap[badge.icon] || Mic;

                            return (
                                <div
                                    key={badge.label}
                                    className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-white/80"
                                >
                                    <Icon size={14} className="text-blue-400" />
                                    {badge.label}
                                </div>
                            );
                        })}

                        {actor.profile.languages?.length > 0 && (
                            <div className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 rounded-full text-white/80">
                                <Globe size={14} className="text-blue-400" />
                                {actor.profile.languages.join(" / ")}
                            </div>
                        )}

                        {actor.profile.featured && (
                            <div className="flex items-center gap-2 px-4 py-2 border border-yellow-500/40 bg-yellow-500/10 rounded-full text-yellow-400">
                                <Award size={14} />
                                Destacado
                            </div>
                        )}
                    </div>

                    {/* NOMBRE */}
                    <ShimmerName
                        mode="classic"
                        baseColor="#C6A75E"
                        animated={true}
                        radius={800}
                        className="text-6xl font-bold tracking-wide py-6"
                    >
                        {actor.name}
                    </ShimmerName>

                    {/* SHORT BIO */}
                    <p className="text-white text-xl mb-10">
                        {actor.profile.shortBio}
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-wrap justify-center gap-4">

                        <Button variant="blue" className="flex items-center gap-2"
                            onClick={() =>
                                handlePlayPause({
                                    title: "Demo Profesional",
                                    actor: actor.name,
                                    src: actor.media.demo
                                })
                            }
                        >
                            {currentTrack?.src === actor.media.demo && isPlayingGlobal ? <Pause size={18} /> : <Play size={18} />}
                            Escuchar demo
                        </Button>

                        <Button variant="outline" className="flex items-center gap-2 px-6 py-3" onClick={shareProfile}>
                            <Share2 size={18} />
                            {copied ? "Enlace copiado" : "Compartir"}
                        </Button>

                        {actor.profile.contactEmail && (
                            <a
                                href={`mailto:${actor.profile.contactEmail}`}
                                className="flex items-center gap-2 px-6 py-3 bg-[#C6A75E] text-black hover:bg-yellow-400 transition rounded-full font-semibold"
                            >
                                <Mail size={18} />
                                Contactar
                            </a>
                        )}

                    </div>

                    {/* REDES SOCIALES DINÁMICAS */}
                    {actor.social && Object.keys(actor.social).length > 0 && (
                        <div className="mt-12 flex justify-center gap-6">
                            {Object.entries(actor.social).map(([platform, url]) => {
                                const Icon = socialIconMap[platform.toLowerCase()] || Globe;
                                if (!url) return null;
                                
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-[#C6A75E] transition-all hover:scale-110 p-2"
                                        title={platform}
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* SCROLL INDICATOR */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-[pulse_2.5s_ease-in-out_infinite]">
                    <span className="text-xs tracking-widest uppercase">
                        Desliza para descubrir
                    </span>
                    <div className="mt-2 w-[2px] h-10 bg-gradient-to-b from-[#C6A75E] via-blue-500 to-transparent" />
                </div>

            </div>

            {/* CONTENIDO */}
            <div className="max-w-6xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* BIOGRAFÍA */}
                    <div className="md:col-span-2">

                        <h2 className="text-2xl font-semibold text-[#C6A75E] mb-6">
                            Biografía
                        </h2>

                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                            {actor.profile.fullBio}
                        </p>

                    </div>

                    {/* SIDEBAR */}
                    <div className="bg-[#111116] border border-white/10 rounded-2xl p-8 shadow-xl">

                        <h3 className="text-[#C6A75E] font-semibold mb-6 flex items-center gap-2">
                            <Sparkles size={18} />
                            Perfil Profesional
                        </h3>

                        {actor.profile.skills?.length > 0 && (
                            <div className="mb-8">
                                <h4 className="text-blue-400 mb-3 flex items-center gap-2">
                                    <Mic size={16} />
                                    Especialidades
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {actor.profile.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm border border-blue-500/40 bg-blue-900/30 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {actor.profile.awards?.length > 0 && (
                            <div>
                                <h4 className="text-blue-400 mb-3 flex items-center gap-2">
                                    <Award size={16} />
                                    Reconocimientos
                                </h4>

                                <ul className="space-y-2 text-gray-300 text-sm">
                                    {actor.profile.awards.map((award) => (
                                        <li key={award}>• {award}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {actor.profile.pressKit && (
                            <a
                                href={actor.profile.pressKit}
                                className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg"
                            >
                                <Download size={16} />
                                Descargar Press Kit
                            </a>
                        )}

                    </div>
                </div>

                {/* GALERÍA DE PERSONAJES */}
                {actor.profile.characters?.length > 0 && (
                    <div className="mt-32">

                        <h2 className="text-3xl font-semibold text-[#C6A75E] mb-12 text-center">
                            Personajes Interpretados
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                            {actor.profile.characters.map((character) => (
                                <CharacterCard
                                    key={character.name}
                                    character={character}
                                    actorName={actor.name}
                                    currentTrack={currentTrack}
                                    isPlayingGlobal={isPlayingGlobal}
                                    currentTimeGlobal={currentTimeGlobal}
                                    onPlayPause={handlePlayPause}
                                    positionMap={positionMap}
                                />
                            ))}

                        </div>
                    </div>
                )}

                <div className="mt-24 text-center">
                    <a
                        href="/#catalogo"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#C6A75E]/40 text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition rounded-full uppercase tracking-wide text-sm"
                    >
                        <ArrowLeft size={16} />
                        Ver todos los actores
                    </a>
                </div>

            </div>

            {/* REPRODUCTOR GLOBAL */}
            <AudioPlayer
                ref={audioPlayerRef}
                track={currentTrack}
                onClose={() => setCurrentTrack(null)}
                onPlayPause={(playing) => setIsPlayingGlobal(playing)}
                onTimeUpdate={(time) => setCurrentTimeGlobal(time)}
            />

        </>
    );
}