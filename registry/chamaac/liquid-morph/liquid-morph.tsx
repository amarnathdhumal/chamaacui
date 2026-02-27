"use client";

import { useRef, useEffect } from "react";
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
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpeed;
uniform vec2 uMouse;
varying vec2 vUv;

// Classic Perlin 3D Noise 
// by Stefan Gustavson
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord.xy/iResolution.xy;
    p.x *= iResolution.x/iResolution.y;

    float time = iTime * uSpeed;
    
    // Add mouse interaction
    vec2 mouse = uMouse.xy / iResolution.xy;
    if (length(uMouse.xy) > 0.0) {
        p += (mouse - 0.5) * 0.5;
    }

    vec2 pos = p * 2.0;
    
    // Generate layered noise
    float n1 = cnoise(vec3(pos * 1.5, time * 0.4));
    float n2 = cnoise(vec3(pos * 3.0 + vec2(n1), time * 0.8));
    float n3 = cnoise(vec3(pos * 5.0 + vec2(n2), time * 1.2));
    
    // Create color bands based on noise
    float f = smoothstep(-1.0, 1.0, n1 + n2 * 0.5 + n3 * 0.25);
    
    vec3 col = mix(uColor1, uColor2, smoothstep(0.0, 0.5, f));
    col = mix(col, uColor3, smoothstep(0.5, 1.0, f));
    
    // Add a bit of glow
    col += uColor3 * pow(max(0.0, 1.0 - length(p - vec2(1.0))), 3.0) * 0.5;

    fragColor = vec4(col, 1.0);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution);
}
`;

interface ShaderPlaneProps {
  speed: number;
  color1: string;
  color2: string;
  color3: string;
}

const ShaderPlane = ({ speed, color1, color2, color3 }: ShaderPlaneProps) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? new THREE.Vector3(
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255
        )
      : new THREE.Vector3();
  };

  const uniformsRef = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2() },
    uSpeed: { value: speed },
    uColor1: { value: hexToRgb(color1) },
    uColor2: { value: hexToRgb(color2) },
    uColor3: { value: hexToRgb(color3) },
    uMouse: { value: new THREE.Vector2(0, 0) },
  });

  useEffect(() => {
    uniformsRef.current.uSpeed.value = speed;
    uniformsRef.current.uColor1.value = hexToRgb(color1);
    uniformsRef.current.uColor2.value = hexToRgb(color2);
    uniformsRef.current.uColor3.value = hexToRgb(color3);
  }, [speed, color1, color2, color3]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.iResolution.value.set(
        state.size.width * state.viewport.dpr,
        state.size.height * state.viewport.dpr
      );

      // Mouse interaction
      const targetMouse = state.pointer;
      const currentMouse = materialRef.current.uniforms.uMouse.value;
      // map normalize crosshair space -1 to 1 to resolution space mostly
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.1;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.1;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* eslint-disable react/no-unknown-property */}
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
        depthWrite={false}
        depthTest={false}
      />
      {/* eslint-enable react/no-unknown-property */}
    </mesh>
  );
};

export interface LiquidMorphProps {
  className?: string;
  speed?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function LiquidMorph({
  className,
  speed = 0.5,
  color1 = "#4338ca", // Indigo 700
  color2 = "#db2777", // Pink 600
  color3 = "#f59e0b", // Amber 500
}: LiquidMorphProps) {
  return (
    <div
      className={cn(
        "w-full h-full absolute inset-0 bg-black cursor-crosshair overflow-hidden",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 2]}
      >
        <ShaderPlane
          speed={speed}
          color1={color1}
          color2={color2}
          color3={color3}
        />
      </Canvas>
    </div>
  );
}
