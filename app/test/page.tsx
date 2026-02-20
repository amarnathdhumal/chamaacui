"use client";

import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";

export default function GridBloomDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-purple-100">
      <GridBloom
        color="#e040fb"
        speed={1}
        gridScale={12}
        rotationSpeed={0.08}
      />
    </div>
  );
}
