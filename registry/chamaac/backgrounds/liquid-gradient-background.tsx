"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LiquidGradientBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    colors?: string[];
    speed?: number;
    blur?: number;
    noiseOpacity?: number;
}

interface Orb {
    x: number;
    y: number;
    size: number;
    color: { r: number; g: number; b: number };
    vx: number;
    vy: number;
    phase: number;
}


export function LiquidGradientBackground({
    className,
    children,
    colors = ["#000000", "#00BFFF", "#00BFFF", "#00BFFF"],
    speed = 2,
    blur = 100,
    noiseOpacity = 0.2,
    ...props
}: LiquidGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef(0);
    const rafRef = useRef<number | undefined>(undefined);

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : { r: 0, g: 0, b: 0 };
    };

    const orbs = useRef<Orb[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initOrbs();
        };

        const initOrbs = () => {
            orbs.current = [];
            colors.forEach((color) => {
                orbs.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.min(canvas.width, canvas.height) * 0.6, // Large orbs
                    color: hexToRgb(color),
                    vx: (Math.random() - 0.5) * 2 * speed,
                    vy: (Math.random() - 0.5) * 2 * speed,
                    phase: Math.random() * Math.PI * 2,
                });
            });
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            const width = canvas.width;
            const height = canvas.height;
            if (width === 0 || height === 0) return;

            ctx.clearRect(0, 0, width, height);

            // Fill background with first color (base)
            const base = orbs.current[0];
            if (base) {
                ctx.fillStyle = `rgb(${base.color.r}, ${base.color.g}, ${base.color.b})`;
                ctx.fillRect(0, 0, width, height);
            }

            timeRef.current += 0.01 * speed;

            orbs.current.forEach((orb, i) => {
                if (i === 0) return; // Skip base layer (it's the background fill)

                // Move orbs in Lissajous-like paths for organic feel
                orb.x += Math.sin(timeRef.current + orb.phase) * width * 0.002;
                orb.y += Math.cos(timeRef.current + orb.phase * 0.5) * height * 0.002;

                // Bounce off screen boundaries gently (wrap or bounce?)
                // Let's bounce
                if (orb.x < -orb.size / 2 || orb.x > width + orb.size / 2) orb.vx *= -1;
                if (orb.y < -orb.size / 2 || orb.y > height + orb.size / 2) orb.vy *= -1;

                // Draw radial gradient for each orb
                const g = ctx.createRadialGradient(
                    orb.x, orb.y, 0,
                    orb.x, orb.y, orb.size
                );

                // Premium coloring: Fade out to transparent
                g.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.8)`);
                g.addColorStop(1, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0)`);

                ctx.globalCompositeOperation = "screen"; // Blend mode for glowing effect
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalCompositeOperation = "source-over"; // Reset

            rafRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [colors, speed]);

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-full bg-black overflow-hidden", className)}
            {...props}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 scale-125" // Scale up to hide edges
                style={{ filter: `blur(${blur}px)` }} // The magic ingredient
            />
            {/* Noise overlay for texture/premium feel */}
            <div
                className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
                style={{
                    opacity: noiseOpacity,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
}
