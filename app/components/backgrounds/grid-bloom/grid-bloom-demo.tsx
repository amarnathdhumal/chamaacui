"use client";

import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";
import { cn } from "@/lib/utils";
import { GeistPixelSquare } from "geist/font/pixel";

interface GridBloomDemoProps {
  className?: string;
  color?: string;
  speed?: number;
  gridScale?: number;
  rotationSpeed?: number;
  fadeFalloff?: number;
  distortionAmount?: number;
  flowSpeedX?: number;
  flowSpeedY?: number;
  hoverLightRadius?: number;
  hoverRepulsionRadius?: number;
  hoverRepulsionStrength?: number;
}

export default function GridBloomDemo({
  className,
  color = "#e040fb",
  speed = 1.0,
  gridScale = 12.0,
  rotationSpeed = 0.0,
  fadeFalloff = 10.0,
  distortionAmount = 0.05,
  flowSpeedX = -0.2,
  flowSpeedY = -0.4,
  hoverLightRadius = 0.5,
  hoverRepulsionRadius = 1.0,
  hoverRepulsionStrength = 0.6,
}: GridBloomDemoProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[600px] overflow-hidden",
        className
      )}
    >
      <GridBloom
        color={color}
        speed={speed}
        gridScale={gridScale}
        rotationSpeed={rotationSpeed}
        fadeFalloff={fadeFalloff}
        distortionAmount={distortionAmount}
        flowSpeedX={flowSpeedX}
        flowSpeedY={flowSpeedY}
        hoverLightRadius={hoverLightRadius}
        hoverRepulsionRadius={hoverRepulsionRadius}
        hoverRepulsionStrength={hoverRepulsionStrength}
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4",
          GeistPixelSquare.className
        )}
      >
        <h1 className="text-4xl md:text-8xl font-bold dark:text-white opacity-80 text-purple-500  mix-blend-overlay uppercase text-center drop-shadow-lg">
          Grid Bloom
        </h1>
      </div>
    </div>
  );
}
