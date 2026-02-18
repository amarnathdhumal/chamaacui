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
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  // Noise function
  float hash(float n) { return fract(sin(n) * 43758.5453123); }
  float noise(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0;
    return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
               mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;
    
    // Coordinates
    vec2 p = uv * 2.0 - 1.0;
    
    // Diagonal movement
    float t = uTime * 0.15;
    
    // Create base ray patterns using noise and stretched coordinates
    // We stretch Y to make vertical/diagonal beams
    vec2 rayPos = vec2(p.x * 1.5 + p.y * 0.4, p.y * 0.2); // Diagonal stretch
    
    float rays1 = noise(rayPos * 4.0 + vec2(t, 0.0));
    float rays2 = noise(rayPos * 8.0 + vec2(t * 1.5, 0.0 + t * 0.2));
    
    // Interference pattern for "shimmer"
    float beams = smoothstep(0.3, 0.7, rays1) * smoothstep(0.4, 0.6, rays2);
    
    // Add a glowing center or gradient
    float vignette = 1.0 - length(p * 0.8);
    vignette = smoothstep(0.0, 1.0, vignette);
    
    // Color mixing
    // Mix between dark background and the ray colors
    vec3 baseColor = vec3(0.0); // Black background
    
    // Gradient across screen
    float gradient = p.y * 0.5 + 0.5;
    vec3 rayColor = mix(uColor1, uColor2, gradient);
    rayColor = mix(rayColor, uColor3, rays1);
    
    // Final composition
    // Beams add brightness
    vec3 finalColor = baseColor + rayColor * beams * 0.8;
    
    // Soften
    finalColor += mix(uColor1, uColor2, uv.x) * 0.1; // Subtle ambiance
    
    gl_FragColor = vec4(finalColor * vignette, 1.0);
  }
`;

const RaysEffect = ({
  color1 = "#ff4d4d",
  color2 = "#1c1c1c",
  color3 = "#4a90e2",
}: {
  color1?: string;
  color2?: string;
  color3?: string;
}) => {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
    }),
    [color1, color2, color3]
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.getElapsedTime();
      material.current.uniforms.uColor1.value.set(color1);
      material.current.uniforms.uColor2.value.set(color2);
      material.current.uniforms.uColor3.value.set(color3);
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
        transparent
      />
    </mesh>
  );
};

interface RaysBackgroundProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function RaysBackground({
  className,
  color1 = "#1a1a2e", // Deep Blue
  color2 = "#16213e", // Darker Blue
  color3 = "#e94560", // Accent Red/Pink
}: RaysBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[500px] bg-black overflow-hidden",
        className
      )}
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <RaysEffect color1={color1} color2={color2} color3={color3} />
      </Canvas>
    </div>
  );
}
