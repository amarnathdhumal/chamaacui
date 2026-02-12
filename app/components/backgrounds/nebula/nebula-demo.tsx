"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpeed;

varying vec2 vUv;

// 2D Random
float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f * f * (3.0 - 2.0 * f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}

#define OCTAVES 6
float fbm(in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

void main() {
    vec2 st = vUv * 3.0;
    float time = uTime * uSpeed;
    
    // Domain Warping
    vec2 q = vec2(0.);
    q.x = fbm(st + 0.00 * time); 
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * time); 
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * time);

    float f = fbm(st + r);

    // Color Mixing
    vec3 color = mix(uColor3, uColor2, clamp((f * f) * 4.0, 0.0, 1.0));
    color = mix(color, uColor1, clamp(length(q), 0.0, 1.0));
    color = mix(color, vec3(1.0), clamp(length(r.x), 0.0, 1.0));

    // Darken edges
    float vignette = 1.0 - smoothstep(0.5, 1.5, length(vUv - 0.5));
    color *= vignette;


    gl_FragColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 1.0);
}
`;

const NebulaMaterial = ({
  speed,
  color1,
  color2,
  color3,
}: {
  speed: number;
  color1: string;
  color2: string;
  color3: string;
}) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Initialize once
  );

  // Update uniforms when props change
  React.useEffect(() => {
    uniforms.uSpeed.value = speed;
    uniforms.uColor1.value.set(color1);
    uniforms.uColor2.value.set(color2);
    uniforms.uColor3.value.set(color3);
  }, [speed, color1, color2, color3, uniforms]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const { viewport } = useThree();

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

interface NebulaProps {
  className?: string;
  speed?: number;
  color1?: string; // Highlights/Fracture
  color2?: string; // Nebula main
  color3?: string; // Deep space
}

import { GeistPixelSquare } from "geist/font/pixel";

export default function Nebula({
  className,
  speed = 2.0,
  color1 = "#5efff4", // Cyan (Highlight)
  color2 = "#763b65", // Magenta-ish (Nebula)
  color3 = "#1a0b2e", // Deep purple (Deep Space)
}: NebulaProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[400px]", className)}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NebulaMaterial
          speed={speed}
          color3={color3}
          color2={color2}
          color1={color1}
        />
      </Canvas>
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Deep Space Nebula
        </h1>
      </div>
    </div>
  );
}
