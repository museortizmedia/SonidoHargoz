import { useState } from "react";
import Button from "../components/Button";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, correo, mensaje } = formData;
        
        // Construcción del mensaje para WhatsApp
        const text = `Hola Sonido Hargoz! 👋\n\nMi nombre es: *${nombre}*\nMi correo es: *${correo}*\n\n*Mensaje:*\n${mensaje}`;
        
        // Codificar el texto para la URL
        const encodedText = encodeURIComponent(text);
        
        // Número de WhatsApp (+57 315 7730142)
        const phoneNumber = "573157730142";
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <section className="section-container">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">
                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Nombre"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        placeholder="Correo"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Mensaje"
                        rows="4"
                        className="w-full bg-transparent border border-[#C6A75E]/40 p-3 rounded-lg focus:outline-none focus:border-[#C6A75E]"
                    />

                    <Button type="submit" variant="gold">
                        Enviar Solicitud
                    </Button>
                </form>
            </div>
        </section>
    );
}