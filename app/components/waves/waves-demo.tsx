"use client";

import Waves from "@/registry/chamaac/waves/waves";
import { GeistPixelSquare } from "geist/font/pixel";

export default function WavesDemo() {
  return (
    <div className="relative w-full h-screen  overflow-hidden  ">
      <Waves />

      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Waves are cool
        </h1>
      </div>
    </div>
  );
}
