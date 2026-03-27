"use client";

import DeformTunnel, {
  DeformTunnelProps,
} from "@/registry/chamaac/deform-tunnel/deform-tunnel";
import { GeistPixelSquare } from "geist/font/pixel";

export default function DeformTunnelDemo(props: DeformTunnelProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg border border-white/10">
      <DeformTunnel {...props} />
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg">
          Warp Drive
        </h1>
      </div>
    </div>
  );
}
