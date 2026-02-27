import { useRef, useEffect, useState } from "react";

/* ============================= */
/* ===== UTILIDADES COLOR ====== */
/* ============================= */

function hexToRgb(hex) {
    const parsed = hex.replace("#", "");
    const bigint = parseInt(parsed, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function adjustColor(hex, amount) {
    const { r, g, b } = hexToRgb(hex);

    const clamp = (val) => Math.max(0, Math.min(255, val));

    return `rgb(${clamp(r + amount)}, ${clamp(g + amount)}, ${clamp(
        b + amount
    )})`;
}

/* ============================= */

export default function ShimmerName({
    children,
    className = "",
    mode = "classic", // minimal | gold | liquid | neon
    baseColor = null,
    radius = 700,
    autoScrollOnMobile = true,
    animated = true
}) {
    const textRef = useRef(null);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    /* ============================= */
    /* ===== PALETAS BASE ========= */
    /* ============================= */

    const presetBaseColors = {
        classic: "#FFFFFF",
        gold: "#D4AF37",
        liquid: "#F0C95A",
        neon: "#FF00FF",
        minimal: "#E5E5E5"
    };

    const finalBase = baseColor || presetBaseColors[mode];

    const highlight = adjustColor(finalBase, 60);
    const mid = finalBase;
    const dark = adjustColor(finalBase, -60);
    const shadow = adjustColor(finalBase, -120);
    const glow = `rgba(${hexToRgb(finalBase).r}, ${hexToRgb(finalBase).g
        }, ${hexToRgb(finalBase).b}, 0.6)`;

    /* ============================= */
    /* ===== ANIMACIÓN SUAVE ====== */
    /* ============================= */

    useEffect(() => {
        if (!animated) return;

        const animate = () => {
            const dx = target.current.x - current.current.x;
            const dy = target.current.y - current.current.y;

            current.current.x += dx * 0.08;
            current.current.y += dy * 0.08;

            if (textRef.current) {
                textRef.current.style.setProperty("--x", `${current.current.x}px`);
                textRef.current.style.setProperty("--y", `${current.current.y}px`);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationRef.current);
    }, [animated]);

    const handleMouseMove = (e) => {
        const rect = textRef.current.getBoundingClientRect();
        target.current.x = e.clientX - rect.left;
        target.current.y = e.clientY - rect.top;
    };

    useEffect(() => {
        if (!autoScrollOnMobile || !isMobile) return;

        const handleScroll = () => {
            if (!textRef.current) return;
            const rect = textRef.current.getBoundingClientRect();
            const vh = window.innerHeight;
            const progress = 1 - Math.min(Math.max(rect.top / vh, 0), 1);

            target.current.x = rect.width * progress;
            target.current.y = rect.height / 2;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, autoScrollOnMobile]);

    /* ============================= */
    /* ===== MODOS DIFERENCIADOS == */
    /* ============================= */

    let backgroundImage;
    let textShadow;
    let extraStyle = {};

    switch (mode) {
        case "gold":
            backgroundImage = `
        radial-gradient(
          circle ${radius}px at var(--x,50%) var(--y,50%),
          ${highlight} 0%,
          ${mid} 40%,
          ${dark} 70%,
          ${shadow} 100%
        )
      `;
            textShadow = `0 0 15px rgba(212,175,55,0.3)`;
            break;

        case "liquid":
            backgroundImage = `
        linear-gradient(
          120deg,
          ${dark},
          ${highlight},
          ${mid},
          ${highlight},
          ${dark}
        )
      `;
            extraStyle.backgroundSize = "300% 300%";
            extraStyle.animation = animated
                ? "liquidMove 6s ease-in-out infinite"
                : "none";
            textShadow = `0 0 12px rgba(240,201,90,0.35)`;
            break;

        case "neon":
            backgroundImage = `linear-gradient(90deg, ${highlight}, ${mid})`;
            textShadow = `
        0 0 10px ${glow},
        0 0 25px ${glow},
        0 0 45px ${glow}
      `;
            break;

        case "minimal":
            backgroundImage = `linear-gradient(120deg, ${highlight}, ${mid})`;
            textShadow = "none";
            break;

        default: // classic
            backgroundImage = `
        radial-gradient(
          circle ${radius}px at var(--x,50%) var(--y,50%),
          ${highlight},
          ${mid},
          ${dark}
        )
      `;
            textShadow = "0 2px 8px rgba(0,0,0,0.4)";
    }

    return (
        <>
            <style>
                {`
        @keyframes liquidMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
            </style>

            <h1
                ref={textRef}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
                className={`relative bg-clip-text text-transparent transition-all duration-500 ${className}`}
                style={{
                    backgroundImage,
                    textShadow,
                    ...extraStyle
                }}
            >
                {children}
            </h1>
        </>
    );
}