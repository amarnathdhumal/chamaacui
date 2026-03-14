"use client";

import ElectricMist from "@/registry/chamaac/electric-mist/electric-mist";
import { cn } from "@/lib/utils";
import { GeistPixelSquare } from "geist/font/pixel";

interface ElectricMistDemoProps {
  className?: string;
  speed?: number;
  color?: string;
  detail?: number;
  distortion?: number;
  brightness?: number;
}

export default function ElectricMistDemo({
  className,
  speed = 1.0,
  color = "#191970",
  detail = 1.5,
  distortion = 3.0,
  brightness = 1.0,
}: ElectricMistDemoProps) {
  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <ElectricMist
        speed={speed}
        color={color}
        detail={detail}
        distortion={distortion}
        brightness={brightness}
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4",
          GeistPixelSquare.className
        )}
      >
        <h1 className="text-7xl md:text-8xl font-bold dark:text-white opacity-80 text-blue-200 uppercase text-center drop-shadow-lg leading-tight">
          Electric Mist
        </h1>
      </div>
    </div>
  );
}
