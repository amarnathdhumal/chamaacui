"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uPixelScale;
  uniform float uBands;

  varying vec2 vUv;

  float ditherSquare(vec2 p) {
      p = floor(p);
      float a = mod(p.x, 2.0) + mod(p.y, 2.0) * 2.0;
      float b = mod(floor(p.x/2.0), 2.0) + mod(floor(p.y/2.0), 2.0) * 2.0;
      float res = a * 4.0 + b;
      return (res + 0.5) / 16.0;
  }

  void main() {
      vec2 fragCoord = vUv * uResolution;
      
      vec2 uv = vUv;
      // Center coordinates
      vec2 p = uv * 2.0 - 1.0;
      // Aspect ratio correction
      p.x *= uResolution.x / uResolution.y;
      
      float t = uTime * 0.15; // Slow, cinematic movement
      
      // Sophisticated nested domain warping for creamy, organic flow
      vec2 q = vec2(0.0);
      q.x = sin(t + p.y * 1.5) * 0.5 + cos(t * 0.7 - p.x * 0.8) * 0.5;
      q.y = cos(t * 1.2 + p.x * 1.3) * 0.5 + sin(t * 0.9 - p.y * 1.1) * 0.5;
      
      vec2 r = vec2(0.0);
      r.x = sin(t * 0.5 + q.y * 2.0 + p.x) * 0.5 + cos(t * 0.8 + q.x * 2.5) * 0.5;
      r.y = cos(t * 0.6 + q.x * 2.2 + p.y) * 0.5 + sin(t * 0.7 + q.y * 1.8) * 0.5;

      // Density field mapping
      float d = sin(r.x * 2.0 + r.y * 2.0 + t);
      
      // Map domain warping to smooth color mix steps
      float mix1 = smoothstep(-1.0, 1.0, d + q.x - p.y * 0.5);
      float mix2 = smoothstep(-0.5, 1.0, r.y + q.y * 0.5 + p.x * 0.5);
      
      // Interpolate the modern cinematic colors
      vec3 color = mix(uColor1, uColor2, mix1);
      color = mix(color, uColor3, mix2);
      
      // Calculate retro dither threshold
      float threshold = ditherSquare(fragCoord / uPixelScale);
      
      // Apply ordered dithering
      // Reduced the harshness of the banding by scaling down the threshold spread
      vec3 c = color + (threshold - 0.5) * 0.15; 
      vec3 dithered = floor(c * uBands) / (uBands - 1.0);
      dithered = clamp(dithered, 0.0, 1.0);

      // Deep atmospheric vignette
      float dist = length(uv - 0.5);
      dithered = mix(dithered, dithered * 0.1, smoothstep(0.4, 1.5, dist));

      gl_FragColor = vec4(dithered, 1.0);
  }
`;

interface DitherFluidProps {
  className?: string;
  speed?: number;
  pixelScale?: number;
  bands?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}

const Effect = ({
  speed,
  pixelScale,
  bands,
  color1,
  color2,
  color3,
}: Required<Omit<DitherFluidProps, "className">>) => {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uPixelScale: { value: pixelScale },
      uBands: { value: bands },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
    }),
    [pixelScale, bands, color1, color2, color3]
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
      material.current.uniforms.uResolution.value.set(
        state.size.width * state.viewport.dpr,
        state.size.height * state.viewport.dpr
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function DitherFluid({
  className,
  speed = 1.0,
  pixelScale = 2.0, // Finer pixels
  bands = 8.0, // More color gradation steps for sophisticated look
  // Modern cinematic palette: Moody charcoal, rich deep crimson, soft salmon/blush
  color1 = "#1a0f14", // Deep warm charcoal
  color2 = "#6b213f", // Rich magenta/crimson
  color3 = "#e05e5e", // Soft terracotta blush
}: DitherFluidProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[600px] overflow-hidden bg-[#1a0f14]",
        className
      )}
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={1}>
        <Effect
          speed={speed}
          pixelScale={pixelScale}
          bands={bands}
          color1={color1}
          color2={color2}
          color3={color3}
        />
      </Canvas>
      {/* Elegantly scaled film grain to mix with the dither */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
