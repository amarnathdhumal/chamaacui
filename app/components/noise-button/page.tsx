const NoiseButton = () => {
    return (
        <div className="flex h-[500px] items-center justify-center ">
            <button className="relative px-5 py-2.5 bg-purple-500 rounded-full">
                <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-40 rounded-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                <span className="relative z-20 text-white">Noise Button</span>
            </button>
        </div>
    );
};

export default NoiseButton;