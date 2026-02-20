"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform vec3 uColor;
varying vec2 vUv;

// Tileable 2D Hash function
vec2 hash2(vec2 p, float period) {
    p = mod(p, period);
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453123);
}

// Tileable Voronoi calculating F2 - F1 for sharp caustic ridges
float causticPattern(vec2 p, float period, float t) {
    vec2 n = floor(p);
    vec2 f = fract(p);
    
    float F1 = 8.0;
    float F2 = 8.0;
    
    for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash2(n + g, period);
            
            // Animate with constrained jitter to prevent cell-crossing artifacts
            o = 0.5 + 0.4 * sin(t + 6.2831853 * o);
            
            vec2 r = g + o - f;
            float d = dot(r, r);
            
            if (d < F1) {
                F2 = F1;
                F1 = d;
            } else if (d < F2) {
                F2 = d;
            }
        }
    }
    return F2 - F1;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Normalize coordinates
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    // Grid scale and matching period for perfect tiling
    float period = 4.0;
    vec2 p = uv * period;
    
    // Time scaling for fluid motion
    float t = iTime * 1.0;
    
    // Layer 1: Base large caustics
    float c1 = causticPattern(p, period, t);
    
    // Layer 2: Smaller, faster overlapping caustics
    float c2 = causticPattern(p * 5.0, period * 5.0, t * 1.4);
    
    // Layer 3: Micro details
    float c3 = causticPattern(p * 4.0, period * 4.0, t * 0.7);
    
    // Combine layers beautifully
    // We invert the result (1.0 - c) to make the ridges bright and centers dark
    float caustics = 0.0;
    caustics += (1.0 - c1) * 0.6;
    caustics += (1.0 - c2) * 0.3;
    caustics += (1.0 - c3) * 0.1;
    
    // Sharpen the highlights more gently for a softer, organic look
    caustics = pow(caustics, 3.0);
    
    // Enhance contrast without harsh clipping
    caustics = smoothstep(0.3, 1.0, caustics) * 1.2;
    
    // Use the dynamic unified color from React props
    // A pure, luminous color works perfectly to give a high-end, clean aesthetic over dark backgrounds
    vec3 baseColor = uColor;
    
    vec3 color = baseColor * caustics;
    
    // Softly glow the core of the caustics 
    // using a highly reduced power multiplier so it doesn't get overly intense
    color += baseColor * vec3(0.5) * pow(caustics, 2.0);
    
    // Gentle alpha mapping for subtle translucent blending
    float alpha = clamp(caustics * 0.9, 0.0, 1.0);
    
    fragColor = vec4(color, alpha);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution);
}
`;

const ShaderPlane = ({ color }: { color: string }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useEffect(() => {
    uniforms.uColor.value.set(color);
  }, [color, uniforms]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.iResolution.value.set(
        state.size.width * state.viewport.dpr,
        state.size.height * state.viewport.dpr
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        transparent={true}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export interface WaterCausticProps {
  className?: string;
  color?: string;
}

export default function WaterCaustic({
  className,
  color = "#ffffff",
}: WaterCausticProps) {
  return (
    <div
      className={cn(
        "w-full h-full absolute inset-0 pointer-events-none",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <ShaderPlane color={color} />
      </Canvas>
    </div>
  );
}
