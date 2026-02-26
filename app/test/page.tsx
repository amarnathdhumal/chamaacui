"use client";

import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";

export default function DockDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-end pb-8">
      <GridBloom />
      <div className="relative z-10 w-full flex justify-center"></div>
    </div>
  );
}
