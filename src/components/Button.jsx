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

        blue: "bg-blue-600 hover:bg-blue-500 text-white hover:scale-105",

        outline: "border border-white/20 hover:border-blue-500 transition rounded-full hover:scale-105",

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