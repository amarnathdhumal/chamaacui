"use client";

import Gauge from "./gauge";

export default function GaugeDemo() {
  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <Gauge value={75} size={400} gap={4} />
    </div>
  );
}
