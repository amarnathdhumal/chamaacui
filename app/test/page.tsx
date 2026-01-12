"use client";

import React, { useEffect, useRef } from "react";

/**
 * "Neural Hex-Web" - Refined
 * 
 * Changes for "Premium/Human" Feel:
 * 1. Palette: Curated "Deep Ocean" colors (Slate/Cyan/Indigo) instead of HSV rainbows.
 * 2. Reduced Glow: Cleaner lines, subtle bloom only on active heads.
 * 3. Sophisticated Motion: Slower, more deliberate movements.
 */

export default function NeuralHexBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Optional: Switch to transparent background if we want the parent div to handle the color
        // But for trails, we need to control the clear rect alpha.
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // --- Configuration ---
        const CONFIG = {
            hexRadius: 35, // Slightly larger cells for cleaner look
            maxParticles: 180, // Fewer particles = cleaner, less chaotic
            trailFade: 0.15, // Sharper tails
            glowStrength: 0, // Removed general glow
        };

        // --- Palette ---
        // A sophisticated, non-default palette.
        const PALETTE = [
            "#38bdf8", // Sky 400 (Cyan-ish)
            "#818cf8", // Indigo 400
            "#c084fc", // Purple 400 (Accent)
            "#2dd4bf", // Teal 400 (Accent)
        ];

        const BG_COLOR = "#0b1121"; // A very deep, rich slate/navy (Slate 950+)

        // --- State ---
        let width = 0;
        let height = 0;
        let particles: Particle[] = [];
        let hexNodes: HexNode[] = [];
        let animationId: number;

        // --- Types ---
        interface HexNode {
            x: number;
            y: number;
            active: number;
            neighbors: HexNode[];
        }

        interface Particle {
            x: number;
            y: number;
            target: HexNode | null;
            lastNode: HexNode | null;
            progress: number;
            speed: number;
            color: string;
            dead: boolean;
            history: { x: number; y: number }[];
        }

        // --- Hex Grid Logic ---
        const createGrid = () => {
            hexNodes = [];
            const visited = new Map<string, HexNode>();
            const size = CONFIG.hexRadius;
            const wStep = size * Math.sqrt(3);
            const hStep = size * 1.5;
            const cols = Math.ceil(width / wStep) + 2;
            const rows = Math.ceil(height / hStep) + 2;

            const startCol = -1;
            const startRow = -1;

            for (let r = startRow; r < rows; r++) {
                for (let q = startCol - Math.floor(r / 2); q < cols - Math.floor(r / 2); q++) {
                    const x = size * Math.sqrt(3) * (q + r / 2);
                    const y = size * (3 / 2) * r;

                    const node: HexNode = {
                        x: x + width / 2 - (cols * wStep) / 2,
                        y: y + height / 2 - (rows * hStep) / 2,
                        active: 0,
                        neighbors: []
                    };
                    hexNodes.push(node);
                    visited.set(`${q},${r}`, node);
                }
            }

            // Spatial neighbor linking (more robust)
            // Simple grid-based neighbor check is O(N) if we use the map, let's fix the map usage
            // Re-running the loop logic properly:
            const directions = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]];
            for (const [key, node] of visited.entries()) {
                const [q, r] = key.split(',').map(Number);
                directions.forEach(dir => {
                    const nKey = `${q + dir[0]},${r + dir[1]}`;
                    const neighbor = visited.get(nKey);
                    if (neighbor) node.neighbors.push(neighbor);
                });
            }
        };

        // --- Particle Logic ---
        const spawnParticle = () => {
            if (hexNodes.length === 0) return;

            const startNode = hexNodes[Math.floor(Math.random() * hexNodes.length)];

            particles.push({
                x: startNode.x,
                y: startNode.y,
                target: null,
                lastNode: startNode,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02, // Slower, more deliberate
                color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
                dead: false,
                history: []
            });
        };

        const updateParticles = () => {
            // Fade active nodes
            for (const node of hexNodes) {
                if (node.active > 0) node.active *= 0.92;
            }

            for (const p of particles) {
                p.history.push({ x: p.x, y: p.y });
                // Shorter history for "cleaner" look
                if (p.history.length > 6) p.history.shift();

                if (!p.target) {
                    if (p.lastNode && p.lastNode.neighbors.length > 0) {
                        // Bias: don't go back immediately if possible
                        const candidates = p.lastNode.neighbors;
                        // Simple random choice
                        p.target = candidates[Math.floor(Math.random() * candidates.length)];
                        p.progress = 0;
                    } else {
                        p.dead = true;
                    }
                }

                if (p.target && p.lastNode) {
                    p.progress += p.speed;

                    // Standard Ease-in-out
                    // t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
                    const t = p.progress;
                    const ease = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                    p.x = p.lastNode.x + (p.target.x - p.lastNode.x) * ease;
                    p.y = p.lastNode.y + (p.target.y - p.lastNode.y) * ease;

                    if (p.progress >= 1) {
                        p.target.active = 1;
                        p.lastNode = p.target;
                        p.target = null;
                        p.progress = 0;
                        if (Math.random() < 0.05) p.dead = true; // Live longer
                    }
                }
            }

            particles = particles.filter(p => !p.dead &&
                p.x > -50 && p.x < width + 50 &&
                p.y > -50 && p.y < height + 50
            );
        };

        const draw = () => {
            // 1. Clean Fade Effect
            // Using hex code with alpha for precise color control
            // #0b1121 is r=11, g=17, b=33
            ctx.fillStyle = `rgba(11, 17, 33, ${CONFIG.trailFade})`;
            ctx.fillRect(0, 0, width, height);

            // 2. Draw Subtle Grid (Optional structure)
            // Makes it feel technological, not just random dots
            ctx.beginPath();
            ctx.strokeStyle = "rgba(56, 189, 248, 0.03)"; // Very faint sky-500
            ctx.lineWidth = 1;
            // Draw a few edges
            for (let i = 0; i < hexNodes.length; i += 2) {
                // Optimization: don't draw every single edge every frame if static? 
                // But we clear the screen. Let's just draw active neighbors.
                const node = hexNodes[i];
                if (node.active > 0.05) { // Only light up grid near activity
                    for (const n of node.neighbors) {
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(n.x, n.y);
                    }
                }
            }
            ctx.stroke();


            // 3. Draw Nodes (Flashes)
            // Normal blending for a crisp look
            ctx.globalCompositeOperation = "source-over"; // Default

            for (const node of hexNodes) {
                if (node.active > 0.1) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${node.active * 0.3})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // 4. Draw Particles
            for (const p of particles) {
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 1.5; // Thinner, crisper
                ctx.lineCap = "round";

                ctx.beginPath();
                if (p.history.length > 0) {
                    ctx.moveTo(p.history[0].x, p.history[0].y);
                    for (let i = 1; i < p.history.length; i++) {
                        ctx.lineTo(p.history[i].x, p.history[i].y);
                    }
                }
                ctx.stroke();

                // Sparkle head
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                // Slight glow only on the head
                // ctx.shadowColor = p.color;
                // ctx.shadowBlur = 4;
                // ctx.fill();
                // ctx.shadowBlur = 0;
            }
        };

        const loop = () => {
            if (particles.length < CONFIG.maxParticles) {
                if (Math.random() < 0.8) spawnParticle(); // consistent spawn
            }

            updateParticles();
            draw();
            animationId = requestAnimationFrame(loop);
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            createGrid();

            ctx.fillStyle = BG_COLOR;
            ctx.fillRect(0, 0, width, height);
        };

        resize();
        window.addEventListener("resize", resize);
        loop();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#0b1121] -z-10">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
