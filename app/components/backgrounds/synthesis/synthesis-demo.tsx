"use client";

import Synthesis from "@/registry/chamaac/synthesis/synthesis";
import { cn } from "@/lib/utils";
import { GeistPixelSquare } from "geist/font/pixel";

interface SynthesisDemoProps {
  className?: string;
  speed?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  scale?: number;
  complexity?: number;
  distortion?: number;
  glowIntensity?: number;
  flowFrequency?: number;
  contrast?: number;
}

export default function SynthesisDemo({
  className,
  speed = 0.4,
  color1 = "#0f172a",
  color2 = "#3b0764",
  color3 = "#0ea5e9",
  scale = 1.0,
  complexity = 6.0,
  distortion = 0.6,
  glowIntensity = 0.4,
  flowFrequency = 3.0,
  contrast = 1.2,
}: SynthesisDemoProps) {
  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <Synthesis
        speed={speed}
        color1={color1}
        color2={color2}
        color3={color3}
        scale={scale}
        complexity={complexity}
        distortion={distortion}
        glowIntensity={glowIntensity}
        flowFrequency={flowFrequency}
        contrast={contrast}
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4",
          GeistPixelSquare.className
        )}
      >
        <h1 className="text-7xl md:text-9xl font-bold text-white opacity-80 uppercase text-center drop-shadow-2xl leading-tight tracking-tighter">
          Synthesis
        </h1>
      </div>
    </div>
  );
}
