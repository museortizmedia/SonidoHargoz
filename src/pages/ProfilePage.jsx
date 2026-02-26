import {
    Play,
    Share2,
    Mail,
    Download,
    Mic,
    Award,
    Globe,
    Sparkles,
    Film,
    BookOpen
} from "lucide-react";

import AudioPlayer from "../components/AudioPlayer";
import { useState } from "react";
import Button from "../components/Button";

export default function ProfilePage({ actor }) {

    const [copied, setCopied] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const iconMap = {
        mic: Mic,
        film: Film,
        book: BookOpen
    };

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

                <img
                    src={actor.media.image}
                    alt={actor.name}
                    className="absolute w-full h-full object-cover grayscale contrast-110 brightness-75"
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
                    <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-4 tracking-wider 
            bg-gradient-to-r 
            from-[#D4AF37] 
            via-[#C6A75E] 
            to-[#D4AF37] 
            bg-clip-text text-transparent 
            drop-shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                        {actor.name}
                    </h1>

                    {/* SHORT BIO */}
                    <p className="text-white text-xl mb-10">
                        {actor.profile.shortBio}
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-wrap justify-center gap-4">

                        <Button variant="blue" className="flex items-center gap-2"
                            onClick={() =>
                                setCurrentTrack({
                                    title: "Demo Profesional",
                                    actor: actor.name,
                                    src: actor.media.demo
                                })
                            }
                        >
                            <Play size={18} />
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
                                <div
                                    key={character.name}
                                    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f14] hover:border-blue-500/50 transition duration-500"
                                >
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition duration-500"
                                    />

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
                                                setCurrentTrack({
                                                    title: character.name,
                                                    actor: actor.name,
                                                    src: character.demo
                                                })
                                            }
                                            className="absolute top-4 right-4 p-2 bg-blue-600 rounded-full hover:scale-110 transition"
                                        >
                                            <Play size={16} />
                                        </button>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                )}

            </div>

            {/* REPRODUCTOR GLOBAL */}
            <AudioPlayer track={currentTrack} />

        </>
    );
}