"use client";

import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";
import { cn } from "@/lib/utils";

interface GridBloomDemoProps {
  className?: string;
  color?: string;
  speed?: number;
  gridScale?: number;
  rotationSpeed?: number;
}

export default function GridBloomDemo({
  className,
  color = "#e040fb",
  speed = 1.0,
  gridScale = 12.0,
  rotationSpeed = 0.08,
}: GridBloomDemoProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[400px] overflow-hidden bg-purple-100 rounded-xl",
        className
      )}
    >
      <GridBloom
        color={color}
        speed={speed}
        gridScale={gridScale}
        rotationSpeed={rotationSpeed}
      />
    </div>
  );
}
