"use client";

import LightSpeed from "@/registry/chamaac/light-speed/light-speed";
import { cn } from "@/lib/utils";
import { GeistPixelSquare } from "geist/font/pixel";

interface LightSpeedDemoProps {
  className?: string;
  particleCount?: number;
  speed?: number;
  lightColor?: string;
  intensity?: number;
  radius?: number;
  cylinderLength?: number;
}

export default function LightSpeedDemo({
  className,
  particleCount = 1000,
  speed = 2.4,
  lightColor = "#b026ff",
  intensity = 3.0,
  radius = 25,
  cylinderLength = 150,
}: LightSpeedDemoProps) {
  return (
    <div
      className={cn(
        "relative w-full h-[600px] overflow-hidden rounded-xl border border-white/10",
        className
      )}
    >
      <LightSpeed
        particleCount={particleCount}
        speed={speed}
        lightColor={lightColor}
        intensity={intensity}
        radius={radius}
        cylinderLength={cylinderLength}
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4",
          GeistPixelSquare.className
        )}
      >
        <h1 className="text-7xl md:text-9xl font-bold text-white opacity-90 uppercase text-center drop-shadow-lg leading-tight">
          Light Speed
        </h1>
      </div>
    </div>
  );
}
