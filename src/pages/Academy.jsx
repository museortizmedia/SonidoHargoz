import { Mic, GraduationCap, Star } from "lucide-react";

export default function Academy() {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background glow 
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-yellow-600/10 pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6A75E]/10 blur-3xl rounded-full" />*/}

            <div className="relative max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">

                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Fórmate con profesionales de la industria, perfecciona tu técnica
                        y conviértete en parte del catálogo oficial de voces de Sonido Hargoz.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Formación */}
                    <div className="bg-black/60 backdrop-blur-lg border border-[#C6A75E]/20 rounded-2xl p-8 hover:border-[#C6A75E]/50 transition">

                        <div className="mb-4 text-[#C6A75E]">
                            <GraduationCap size={36} />
                        </div>

                        <h3 className="text-xl text-white font-semibold mb-3">
                            Capacitación Profesional
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Entrenamiento técnico en locución comercial, narrativa,
                            doblaje y presencia vocal con acompañamiento personalizado.
                        </p>
                    </div>

                    {/* Producción */}
                    <div className="bg-black/60 backdrop-blur-lg border border-[#C6A75E]/20 rounded-2xl p-8 hover:border-blue-500/40 transition">

                        <div className="mb-4 text-blue-400">
                            <Mic size={36} />
                        </div>

                        <h3 className="text-xl text-white font-semibold mb-3">
                            Producción de Demo Profesional
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Grabación y dirección profesional para crear un demo competitivo
                            listo para la industria publicitaria y corporativa.
                        </p>
                    </div>

                    {/* Catálogo */}
                    <div className="bg-black/60 backdrop-blur-lg border border-[#C6A75E]/20 rounded-2xl p-8 hover:border-[#C6A75E]/50 transition">

                        <div className="mb-4 text-yellow-400">
                            <Star size={36} />
                        </div>

                        <h3 className="text-xl text-white font-semibold mb-3">
                            Acceso al Catálogo Oficial
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Si cumples los estándares de calidad, podrás formar parte del
                            catálogo Sonido Hargoz y ser presentado a clientes reales.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#contacto"
                        className="inline-block px-10 py-4 rounded-full text-black font-semibold tracking-wide bg-gradient-to-r from-[#C6A75E] to-yellow-400 hover:scale-105 transition shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                    >
                        Postularme a la Academia
                    </a>

                    <p className="text-gray-500 text-sm mt-4">
                        Cupos limitados · Proceso de selección
                    </p>
                </div>

            </div>
        </section>
    );
}