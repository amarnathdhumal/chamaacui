import Waves from "@/registry/chamaac/waves/waves";
import { GeistPixelSquare } from "geist/font/pixel";

export default function WavesDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Waves
        waveColor1="#071697"
        waveColor2="#00d4ff"
        waveColor3="#000000"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        backgroundColor="#000000"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Chamaac UI Waves
        </h1>
      </div>
    </div>
  );
}
