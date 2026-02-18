"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface AbstractLoopBackgroundProps {
  className?: string;
  speed?: number;
  color?: string;
  gridSize?: number;
}

function LoopEffect({
  speed = 1.6,
  color = "#ffffff", // White/Metallic default
  gridSize = 30, // Increase grid density for better effect
}: {
  speed?: number;
  color?: string;
  gridSize?: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const time = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate grid positions centered at (0,0)
  const particles = useMemo(() => {
    const temp = [];
    const step = 0.5; // Distance between objects
    const offset = (gridSize * step) / 2;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = i * step - offset;
        const z = j * step - offset;
        temp.push({ x, z });
      }
    }
    return temp;
  }, [gridSize]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    time.current += delta * speed;

    // Move the "proximity" target in a figure-8 or circle loop
    // Figure-8 (Lemniscate) for more interesting movement
    const t = time.current * 0.5;
    const targetX = Math.sin(t) * 4;
    const targetZ = Math.sin(t * 2) * 2;

    particles.forEach((particle, i) => {
      const { x, z } = particle;

      // Calculate distance to target
      const dx = x - targetX;
      const dz = z - targetZ;
      const distance = Math.sqrt(dx * dx + dz * dz);

      // Calculate influence based on proximity
      // The closer, the taller/larger/more rotated
      // Max influence radius ~3.0
      const influence = Math.max(0, 1 - distance / 4);

      // Easing for smoother falloff
      const power = Math.pow(influence, 2);

      // Transform
      dummy.position.set(x, 0, z);

      // Move up slightly when influenced
      dummy.position.y = power * 1.5;

      // Scale up when influenced
      // Base scale 0.8, max scale 2.0
      const s = 0.2 + power * 1.2;
      dummy.scale.set(s, s, s);

      // Rotation effect
      dummy.rotation.x = power * Math.PI;
      dummy.rotation.y = power * Math.PI;

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);

      // Color variation (optional - requires instanceColor support which is heavier)
      // keeping it simple with material color for now
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Lights for the material to shine */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <pointLight position={[-5, 5, -5]} intensity={1} color={color} />

      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, particles.length]}
      >
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </instancedMesh>
    </group>
  );
}

export default function AbstractLoopBackground({
  className,
  speed = 1.5,
  color = "#6366f1", // Indigo default
  gridSize = 30,
}: AbstractLoopBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[500px] bg-black overflow-hidden",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 8, 8], fov: 45 }}
        gl={{ antialias: true }}
      >
        <LoopEffect speed={speed} color={color} gridSize={gridSize} />
        {/* Fog to hide edges */}
        <fog attach="fog" args={["#000000", 5, 20]} />
      </Canvas>
    </div>
  );
}
