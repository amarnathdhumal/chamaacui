"use client";

import Waves from "@/registry/chamaac/waves/waves";
import { GeistPixelSquare } from "geist/font/pixel";

export default function WavesDemo({
  waveColor1,
  waveColor2,
  waveColor3,
  waveSpeedX,
  waveSpeedY,
  waveAmpX,
  backgroundColor,
}: {
  waveColor1?: string;
  waveColor2?: string;
  waveColor3?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  backgroundColor?: string;
}) {
  return (
    <div className="relative w-full h-[600px]  overflow-hidden  ">
      <Waves
        waveColor1={waveColor1}
        waveColor2={waveColor2}
        waveColor3={waveColor3}
        waveSpeedX={waveSpeedX}
        waveSpeedY={waveSpeedY}
        waveAmpX={waveAmpX}
        backgroundColor={backgroundColor}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Waves are cool
        </h1>
      </div>
    </div>
  );
}
