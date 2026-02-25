export function GoldCard({ children }) {
    return (
        <div className="rounded-2xl p-6 border border-gold/30 bg-white/5 backdrop-blur-md transition duration-300 hover:border-gold/60">
            {children}
        </div>
    );
}