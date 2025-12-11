export default function NoiseDemoPage() {
    return (
        <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-8">
            <div className="max-w-6xl w-full space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold text-white">
                        Figma Noise Effect in Code
                    </h1>
                    <p className="text-xl text-gray-400">
                        Using SVG filters to create that signature grainy texture
                    </p>
                </div>

                {/* Demo Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: Purple Gradient */}
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex flex-col justify-center items-center overflow-hidden shadow-2xl">
                        {/* Noise Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none z-10 opacity-40"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="relative z-20 text-center">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Noise Effect
                            </h2>
                            <p className="text-lg text-white/90">Just like in Figma</p>
                        </div>
                    </div>

                    {/* Card 2: Blue Gradient */}
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex flex-col justify-center items-center overflow-hidden shadow-2xl">
                        {/* Noise Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none z-10 opacity-30"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="relative z-20 text-center">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Finer Grain
                            </h2>
                            <p className="text-lg text-white/90">baseFrequency: 0.8</p>
                        </div>
                    </div>

                    {/* Card 3: Orange Gradient */}
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl flex flex-col justify-center items-center overflow-hidden shadow-2xl">
                        {/* Noise Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none z-10 opacity-50"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="relative z-20 text-center">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Coarser Grain
                            </h2>
                            <p className="text-lg text-white/90">baseFrequency: 0.5</p>
                        </div>
                    </div>

                    {/* Card 4: Dark with subtle noise */}
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex flex-col justify-center items-center overflow-hidden shadow-2xl border border-gray-700">
                        {/* Noise Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none z-10 opacity-20"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="relative z-20 text-center">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Subtle Texture
                            </h2>
                            <p className="text-lg text-gray-400">opacity: 0.2</p>
                        </div>
                    </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">How to Use</h3>
                    <div className="space-y-4 text-gray-300">
                        <p>
                            Add a noise overlay by creating an absolutely positioned div with
                            an SVG filter as background:
                        </p>
                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<div className="relative">
  {/* Your content */}
  
  {/* Noise overlay */}
  <div
    className="absolute inset-0 pointer-events-none opacity-40"
    style={{
      backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\`
    }}
  />
</div>`}</code>
                        </pre>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-black/30 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">
                                    baseFrequency
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Controls grain size. Higher values (0.8-1.0) = finer grain.
                                    Lower values (0.3-0.5) = coarser grain.
                                </p>
                            </div>
                            <div className="bg-black/30 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">numOctaves</h4>
                                <p className="text-sm text-gray-400">
                                    Controls complexity. More octaves (4-5) = more detail. Fewer
                                    octaves (2-3) = simpler texture.
                                </p>
                            </div>
                            <div className="bg-black/30 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">opacity</h4>
                                <p className="text-sm text-gray-400">
                                    Controls intensity. 0.2-0.3 for subtle, 0.4-0.5 for
                                    noticeable effect.
                                </p>
                            </div>
                            <div className="bg-black/30 p-4 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">
                                    stitchTiles
                                </h4>.
                                <p className="text-sm text-gray-400">
                                    Set to stitch to ensure seamless tiling across the entire
                                    element.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
