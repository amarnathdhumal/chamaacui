"use client";

import AstralFlow from "@/registry/chamaac/astral-flow/astral-flow";
import { cn } from "@/lib/utils";
import { GeistPixelSquare } from "geist/font/pixel";

interface AstralFlowDemoProps {
  className?: string;
  speed?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  flowMin?: number;
  flowMax?: number;
}

export default function AstralFlowDemo({
  className,
  speed = 1.5,
  color1 = "#05070a", // Deep void blue-black
  color2 = "#2e1a38", // Moody dark plum/purple
  color3 = "#a0769a", // Glowing ethereal mauve/silver
  flowMin = 3.0,
  flowMax = 7.0,
}: AstralFlowDemoProps) {
  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <AstralFlow
        speed={speed}
        color1={color1}
        color2={color2}
        color3={color3}
        flowMin={flowMin}
        flowMax={flowMax}
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4",
          GeistPixelSquare.className
        )}
      >
        <h1 className="text-7xl md:text-8xl font-bold dark:text-white opacity-80 text-purple-200 uppercase text-center drop-shadow-lg">
          Astral Flow
        </h1>
      </div>
    </div>
  );
}
