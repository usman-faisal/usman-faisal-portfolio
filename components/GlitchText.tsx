export const GlitchText = ({ text }: { text: string }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-ping duration-75">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                {text}
            </span>
        </div>
    );
};
