import Button from "../components/Button";

export default function ContactSection() {
    return (
        <section className="section-container">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">

                <h2 className="text-3xl text-[#C6A75E] font-semibold mb-6">
                    Únete a Nosotros
                </h2>

                {/* LISTA */}
                <ul className="space-y-2 mb-6 list-disc list-inside marker:text-blue-400">
                    <li>Acceso a proyectos exclusivos</li>
                    <li>Promoción profesional</li>
                    <li>Networking creativo</li>
                </ul>

                {/* TAGS */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    <span className="px-3 py-1 text-sm border border-[#C6A75E]/50 text-[#C6A75E] rounded-full">
                        Voz Comercial
                    </span>

                    <span className="px-3 py-1 text-sm border border-[#C6A75E]/50 text-[#C6A75E] rounded-full">
                        Narración
                    </span>
                </div>

                {/* FORM */}
                <form className="space-y-6 max-w-xl">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <input
                        type="email"
                        placeholder="Correo"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <textarea
                        placeholder="Mensaje"
                        rows="4"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <Button variant="gold">
                        Enviar Solicitud
                    </Button>
                </form>
            </div>
        </section>
    );
}