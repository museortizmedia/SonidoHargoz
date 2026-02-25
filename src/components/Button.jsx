export default function Button({
    children,
    variant = "gold",
    className = "",
    ...props
}) {
    const base =
        "px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer";

    const variants = {
        gold: "bg-[#C6A75E] text-black hover:opacity-90 hover:scale-105",

        blue: "bg-sky-400 text-white hover:bg-sky-500 hover:scale-105",

        outlineGold:
            "border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black",
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