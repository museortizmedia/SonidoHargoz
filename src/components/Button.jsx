export default function Button({
    children,
    variant = "gold",
    className = "",
    ...props
}) {
    const base =
        "px-6 py-2 rounded-full font-semibold transition-all duration-300";

    const variants = {
        gold: "bg-gold text-black hover:opacity-90 hover:scale-105",

        blue: "bg-sky-400 text-white hover:bg-sky-500 hover:scale-105",

        outlineGold:
            "border border-gold text-gold hover:bg-gold hover:text-black",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}