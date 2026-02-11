"use client";

import LiquidChrome from "@/registry/chamaac/liquid-chrome/liquid-chrome";
import { GeistPixelSquare } from "geist/font/pixel";

export default function LiquidChromeDemo({
  speed,
  color,
  color2,
}: {
  speed?: number;
  color?: string;
  color2?: string;
}) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <LiquidChrome speed={speed} color={color} color2={color2} />

      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase drop-shadow-lg">
            Liquid Chrome
          </h1>
        </div>
      </div>
    </div>
  );
}
