import { useEffect, useRef } from "react";

export default function PremiumCursor() {
    const cursorRef = useRef(null);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const cursor = document.createElement("div");
        cursorRef.current = cursor;

        cursor.style.position = "fixed";
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.borderRadius = "50%";
        cursor.style.pointerEvents = "none";
        cursor.style.zIndex = "9999";
        cursor.style.transform = "translate(-50%, -50%)";
        cursor.style.background = "#C6A75E"; // dorado base
        cursor.style.boxShadow = "0 0 12px rgba(198,167,94,0.6)";
        cursor.style.transition = "background 0.2s ease, box-shadow 0.2s ease";

        document.body.appendChild(cursor);

        // Ocultamos cursor nativo
        document.body.style.cursor = "none";

        const move = (e) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;
        };

        const animate = () => {
            const dx = target.current.x - current.current.x;
            const dy = target.current.y - current.current.y;

            current.current.x += dx * 0.15;
            current.current.y += dy * 0.15;

            cursor.style.left = current.current.x + "px";
            cursor.style.top = current.current.y + "px";

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleHover = (e) => {
            const interactive = e.target.closest(
                "a, button, [role='button'], input, textarea, select"
            );

            if (interactive) {
                cursor.style.background = "#3B82F6"; // azul
                cursor.style.boxShadow = "0 0 18px rgba(59,130,246,0.7)";
                cursor.style.width = "14px";
                cursor.style.height = "14px";
            } else {
                cursor.style.background = "#C6A75E";
                cursor.style.boxShadow = "0 0 12px rgba(198,167,94,0.6)";
                cursor.style.width = "10px";
                cursor.style.height = "10px";
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleHover);

        animate();

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleHover);
            cancelAnimationFrame(animationRef.current);
            document.body.removeChild(cursor);
            document.body.style.cursor = "auto";
        };
    }, []);

    return null;
}