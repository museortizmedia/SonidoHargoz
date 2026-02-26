export default function Title({ label, id }) {
    return (
        <h2
            id={id}
            className="font-baskerville text-3xl md:text-4xl text-[#C6A75E] pt-24 pb-12 w-full text-center scroll-mt-28"
        >
            {label}
        </h2>
    );
}