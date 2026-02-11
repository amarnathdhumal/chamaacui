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
  uniform vec3 uColor;
  uniform vec3 uColor2;
  varying vec2 vUv;

  // Simplex 2D noise
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

  void main() {
    vec2 uv = vUv;
    
    // Domain Warping for "Silk/Liquid Metal" look
    // Layer 1: Base Flow
    vec2 q = vec2(0.0);
    q.x = snoise(uv * 1.5 + uTime * 0.2);
    q.y = snoise(uv * 1.5 + uTime * 0.12);
    
    // Layer 2: Distortion
    vec2 r = vec2(0.0);
    
    r.x = snoise(uv * 2.0 + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = snoise(uv * 2.0 + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);
    
    // Final Noise Value (The height/pattern)
    float f = snoise(uv * 3.0 + r);
    
    // Mix factor - swirl the two colors together
    float mixFactor = smoothstep(-1.0, 1.0, f + q.x); // Based on flow height
    
    vec3 col = mix(uColor, uColor2, mixFactor);
    
    // Bump Map / Normals for Lighting
    float eps = 0.001;
    float fx = snoise(uv * 3.0 + r + vec2(eps, 0.0)) - f;
    float fy = snoise(uv * 3.0 + r + vec2(0.0, eps)) - f;
    vec3 normal = normalize(vec3(fx * 20.0, fy * 20.0, 1.0));
    
    // Lighting
    vec3 lightPos = vec3(0.5, 0.5, 2.0);
    vec3 lightDir = normalize(lightPos);
    
    // Diffuse
    float diff = max(dot(normal, lightDir), 0.0);
    
    // Specular (High gloss)
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
    
    // Fresnel / Rim Light
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
    
    // Combine Lighting
    col = col * (0.6 + 0.4 * diff); // Base color
    col += vec3(1.0) * spec * 0.8; // White intense specular
    col += uColor2 * fresnel * 1.0; // Glowing rim using the secondary color
    
    // Tone mapping to prevent washout
    col = col / (1.0 + col * 0.2);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const LiquidEffect = ({
  speed = 0.2,
  color = "#C0C0C0",
  color2 = "#4A4A4A",
}: {
  speed?: number;
  color?: string;
  color2?: string;
}) => {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uColor2: { value: new THREE.Color(color2) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
      material.current.uniforms.uColor.value.set(color);
      material.current.uniforms.uColor2.value.set(color2);
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

interface LiquidChromeProps {
  className?: string;
  speed?: number;
  color?: string;
  color2?: string;
}

export default function LiquidChrome({
  className,
  speed = 0.2,
  color = "#C0C0C0",
  color2 = "#4A4A4A",
}: LiquidChromeProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[600px]", className)}>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <LiquidEffect speed={speed} color={color} color2={color2} />
      </Canvas>
    </div>
  );
}
