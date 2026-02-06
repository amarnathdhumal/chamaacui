"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, extend, ThreeElement } from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 1. THE MATERIAL DEFINITION
// This is your shader playground.
// The first object defines "Uniforms" (data sent from React to GPU)
const PracticeMaterial = shaderMaterial(
  {
    u_time: 0,
    u_mouse: new THREE.Vector2(),
    u_resolution: new THREE.Vector2(),
  },
  // VERTEX SHADER
  // This handles the SHAPE/GEOMETRY
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Standard projection: makes the 3D points appear on your 2D screen
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // FRAGMENT SHADER
  // This handles the COLOR/PIXELS
  `
  varying vec2 vUv;
  uniform float u_time;

  void main() {
    // LEVEL 1: Static Color
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red

    // LEVEL 2: Use UV Gradient
    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
  }
  `
);

// 2. REGISTER THE MATERIAL
extend({ PracticeMaterial });

// 3. TYPESCRIPT SUPPORT
declare module "@react-three/fiber" {
  interface ThreeElements {
    practiceMaterial: ThreeElement<typeof PracticeMaterial>;
  }
}

// 4. THE COMPONENT
function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<
    THREE.ShaderMaterial & {
      u_time: number;
      u_mouse: THREE.Vector2;
      u_resolution: THREE.Vector2;
    }
  >(null);

  // This loop runs 60 times per second
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.u_time = state.clock.getElapsedTime();
      matRef.current.u_mouse.set(state.mouse.x, state.mouse.y);
      matRef.current.u_resolution.set(state.size.width, state.size.height);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Try changing this to <boxGeometry /> or <torusKnotGeometry /> */}
      <sphereGeometry args={[1, 64, 64]} />

      <practiceMaterial
        ref={matRef}
        key={PracticeMaterial.key} // Helps with hot-reloading shaders
      />
    </mesh>
  );
}

export default function ShaderPractice() {
  return (
    <div className="w-full h-screen bg-neutral-900">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Scene />
        <OrbitControls />
      </Canvas>

      {/* Instructions Overlay */}
      <div className="absolute bottom-10 left-10 text-white/50 font-mono text-sm pointer-events-none">
        <p>{"// LEVEL 1 PRACTICE:"}</p>
        <p>1. Open app/components/shader-practice.tsx</p>
        <p>
          2. In FRAGMENT shader, change gl_FragColor to vec4(1.0, 0.5, 0.0, 1.0)
        </p>
        <p>3. Try: gl_FragColor = vec4(vec3(sin(u_time)), 1.0);</p>
      </div>
    </div>
  );
}
