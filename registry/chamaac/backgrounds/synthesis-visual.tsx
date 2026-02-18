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

  // ---------------------------------------------------------------------------------
  // Simplex Noise 2D
  // ---------------------------------------------------------------------------------
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // ---------------------------------------------------------------------------------
  // Synthesis / Domain Warping Logic
  // ---------------------------------------------------------------------------------
  void main() {
    vec2 uv = vUv;
    
    // Time scaling
    float t = uTime * 0.2;
    
    // Domain Warping 1
    vec2 q = vec2(0.);
    q.x = snoise(uv + vec2(t * 0.1, t * 0.2));
    q.y = snoise(uv + vec2(t * 0.4, t * 0.6));

    // Domain Warping 2
    vec2 r = vec2(0.);
    r.x = snoise(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = snoise(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    // Final Noise Term
    float f = snoise(uv + r);

    // Color Mixing based on the warped noise
    // Mix 3 colors for a premium "Synthesis" look
    vec3 color = mix(uColor1, uColor2, clamp(f * f * 4.0, 0.0, 1.0));
    color = mix(color, uColor3, clamp(length(q), 0.0, 1.0));
    
    // Add "electric" highlights
    color += vec3(pow(f, 3.0)) * 0.5;

    // Contrast fix
    color = pow(color, vec3(1.2));

    gl_FragColor = vec4(color, 1.0);
  }
`;

const SynthesisEffect = ({
  color1,
  color2,
  color3,
  speed,
}: {
  color1: string;
  color2: string;
  color3: string;
  speed: number;
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
      material.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
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
      />
    </mesh>
  );
};

interface SynthesisVisualProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
}

export default function SynthesisVisual({
  className,
  color1 = "#0f172a", // Dark Slate (Background base)
  color2 = "#3b82f6", // Blue (Mid tone)
  color3 = "#6366f1", // Indigo (Highlight)
  speed = 1.0,
}: SynthesisVisualProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[500px] bg-black overflow-hidden",
        className
      )}
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <SynthesisEffect
          color1={color1}
          color2={color2}
          color3={color3}
          speed={speed}
        />
      </Canvas>
    </div>
  );
}
