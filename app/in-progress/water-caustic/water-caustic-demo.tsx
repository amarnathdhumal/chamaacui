"use client";

import WaterCaustic from "@/registry/chamaac/water-caustic/water-caustic";
import { GeistPixelSquare } from "geist/font/pixel";
import { cn } from "@/lib/utils";

interface WaterCausticDemoProps {
  className?: string;
  color?: string;
}

export default function WaterCausticDemo({
  className,
  color = "#00d1ff",
}: WaterCausticDemoProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[400px] overflow-hidden rounded-[16px] ",
        className
      )}
    >
      <WaterCaustic color={color} />
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-4xl md:text-8xl font-bold  opacity-80 uppercase text-center drop-shadow-lg tracking-tighter text-white">
          Water Caustics
        </h1>
      </div>
    </div>
  );
}
