"use client";

import Nebula from "@/registry/chamaac/nebula/nebula";
import { GeistPixelSquare } from "geist/font/pixel";
import { cn } from "@/lib/utils";

interface NebulaDemoProps {
  className?: string;
  speed?: number;
  color1?: string; // Highlights/Fracture
  color2?: string; // Nebula main
  color3?: string; // Deep space
}

export default function NebulaDemo({
  className,
  speed = 2.0,
  color1 = "#5efff4",
  color2 = "#763b65",
  color3 = "#1a0b2e",
}: NebulaDemoProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[400px] ", className)}>
      <Nebula speed={speed} color1={color1} color2={color2} color3={color3} />
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg ">
          Deep Space Nebula
        </h1>
      </div>
    </div>
  );
}
