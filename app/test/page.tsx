"use client";

import Nebula from "@/registry/chamaac/nebula/nebula";

export default function TestPage() {
  return (
    <div className="w-full h-screen bg-black">
      <Nebula speed={0.8} />
    </div>
  );
}
