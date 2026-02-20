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
uniform float uSpeed;
uniform float uGridScale;
uniform float uRotationSpeed;
varying vec2 vUv;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float aspect = iResolution.y / iResolution.x;
    float value;

    vec2 uv = fragCoord.xy / iResolution.x;
    uv -= vec2(0.5, 0.5 * aspect);

    // Animated rotation driven by uRotationSpeed
    float rot = iTime * uRotationSpeed;
    mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
    uv = m * uv;

    uv += vec2(0.5, 0.5 * aspect);
    uv.y += 0.5 * (1.0 - aspect);

    // Grid density controlled by uGridScale
    vec2 pos = uGridScale * uv;
    vec2 rep = fract(pos);
    float dist = 2.0 * min(min(rep.x, 1.0 - rep.x), min(rep.y, 1.0 - rep.y));

    // Two offset pulse centers creating an interference pattern
    vec2 cellCenter = floor(pos) + vec2(0.5);
    float halfGrid = uGridScale * 0.5;
    float dist1 = length(cellCenter - vec2(halfGrid * 0.7, halfGrid * 0.7));
    float dist2 = length(cellCenter - vec2(halfGrid * 1.3, halfGrid * 1.3));

    // Smoothly alternate between two pulse origins for interference
    float pulseDist = mix(dist1, dist2, 0.5 + 0.5 * sin(iTime * 0.3 * uSpeed));

    float edge = (iTime * uSpeed * 0.9 - pulseDist * 0.45) * 0.5;
    edge = 2.0 * fract(edge * 0.5);

    value = fract(dist * 2.0);
    value = mix(value, 1.0 - value, step(1.0, edge));
    edge = pow(abs(1.0 - edge), 2.0);
    value = smoothstep(edge - 0.05, edge, 0.95 * value);
    value += pulseDist * 0.08;

    // Breathing brightness modulation
    float breathe = 0.8 + 0.2 * sin(iTime * 0.5 * uSpeed);
    value *= breathe;

    fragColor = vec4(uColor, 1.0);
    fragColor.a = 0.35 * clamp(value, 0.0, 1.0);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution);
}
`;

interface ShaderPlaneProps {
  color: string;
  speed: number;
  gridScale: number;
  rotationSpeed: number;
}

const ShaderPlane = ({
  color,
  speed,
  gridScale,
  rotationSpeed,
}: ShaderPlaneProps) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      uColor: { value: new THREE.Color(color) },
      uSpeed: { value: speed },
      uGridScale: { value: gridScale },
      uRotationSpeed: { value: rotationSpeed },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uColor.value.set(color);
  }, [color, uniforms]);
  useEffect(() => {
    uniforms.uSpeed.value = speed;
  }, [speed, uniforms]);
  useEffect(() => {
    uniforms.uGridScale.value = gridScale;
  }, [gridScale, uniforms]);
  useEffect(() => {
    uniforms.uRotationSpeed.value = rotationSpeed;
  }, [rotationSpeed, uniforms]);

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

export interface GridBloomProps {
  className?: string;
  /** Bloom color */
  color?: string;
  /** Overall animation speed multiplier */
  speed?: number;
  /** Density of the grid (higher = more tiles) */
  gridScale?: number;
  /** Speed of the slow grid rotation */
  rotationSpeed?: number;
}

export default function GridBloom({
  className,
  color = "#e040fb",
  speed = 1.0,
  gridScale = 12.0,
  rotationSpeed = 0.08,
}: GridBloomProps) {
  return (
    <div
      className={cn(
        "w-full h-full absolute inset-0 pointer-events-none bg-purple-100",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <ShaderPlane
          color={color}
          speed={speed}
          gridScale={gridScale}
          rotationSpeed={rotationSpeed}
        />
      </Canvas>
    </div>
  );
}
