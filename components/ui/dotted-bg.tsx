import React from "react";
import { cn } from "@/lib/utils";

/**
 * DottedBackground
 * A full-width React component that renders a subtle dotted background using CSS radial-gradient.
 * Props:
 *  - dotColor: color of the dots (default: #f5f5f5)
 *  - gap: distance between dots in px (default: 13)
 *  - dotRadius: radius of the dot in px (default: 1)
 *  - bg: background color (default: #ffffff)
 *
 * Usage:
 *  <DottedBackground>
 *    <YourContent />
 *  </DottedBackground>
 */

interface DottedBackgroundProps {
  children: React.ReactNode;
  dotColor?: string;
  gap?: number;
  dotRadius?: number;
  bg?: string;
  className?: string;
}

export default function DottedBackground({
  children,
  dotColor = "#f5f5f5",
  gap = 13,
  dotRadius = 1,
  bg = "#ffffff",
  className,
}: DottedBackgroundProps) {
  const size = `${gap}px ${gap}px`;
  // radial gradient where the dot occupies `dotRadius` pixels, rest is transparent
  const dot = `radial-gradient(circle, ${dotColor} ${dotRadius}px, transparent ${dotRadius}px)`;

  const style = {
    backgroundColor: bg,
    backgroundImage: dot,
    backgroundSize: size,
    backgroundPosition: `${gap / 2}px ${gap / 2}px`,
  };

  return (
    <div style={style} className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
