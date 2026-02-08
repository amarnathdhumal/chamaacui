"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame, extend, ThreeElement } from "@react-three/fiber";
import { OrbitControls, Stats, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- Default Shader (Iridescent/Wavy) ---
const CustomShaderMaterial = shaderMaterial(
  {
    u_time: 0,
    u_frame: 0,
    u_resolution: new THREE.Vector2(),
    u_mouse: new THREE.Vector2(),
  },
  // Vertex Shader
  `
    #define GLSLIFY 1
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_frame;

    varying vec3 v_position;
    varying vec3 v_normal;

    void main() {
      float effect_intensity = 2.0 * u_mouse.x / u_resolution.x;
      vec3 new_position = position + effect_intensity * (0.5 + 0.5 * cos(position.x  + 4.0 * u_time)) * normal;

      vec4 mv_position = modelViewMatrix * vec4(new_position, 1.0);

      v_position = mv_position.xyz;
      v_normal = normalize(normalMatrix * normal);

      gl_Position = projectionMatrix * mv_position;
    }
  `,
  // Fragment Shader
  `
    #define GLSLIFY 1
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_frame;

    varying vec3 v_position;
    varying vec3 v_normal;

    vec3 calculateNormal(vec3 position) {
        vec3 fdx = vec3(dFdx(position.x), dFdx(position.y), dFdx(position.z));
        vec3 fdy = vec3(dFdy(position.x), dFdy(position.y), dFdy(position.z));
        vec3 normal = normalize(cross(fdx, fdy));

        if (!gl_FrontFacing) {
            normal = -normal;
        }

        return normal;
    }

    float diffuseFactor(vec3 normal, vec3 light_direction) {
        float df = dot(normalize(normal), normalize(light_direction));

        if (gl_FrontFacing) {
            df = -df;
        }

        return max(0.0, df);
    }

    void main() {
      vec3 new_normal = calculateNormal(v_position);

      float min_resolution = min(u_resolution.x, u_resolution.y);
      vec3 light_direction = -vec3((u_mouse - 0.5 * u_resolution) / min_resolution, 0.25);

      vec3 surface_color = vec3(1.0);
      surface_color *= diffuseFactor(new_normal, light_direction);

      gl_FragColor = vec4(surface_color, 1.0);
    }
  `
);

extend({ CustomShaderMaterial });

// --- TypeScript Support ---
declare module "@react-three/fiber" {
  interface ThreeElements {
    customShaderMaterial: ThreeElement<typeof CustomShaderMaterial>;
  }
}

interface SceneProps {
  geometryType: "Torus knot" | "Sphere" | "Icosahedron";
}

function ShaderMesh({ geometryType }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<
    THREE.ShaderMaterial & {
      u_time: number;
      u_frame: number;
      u_resolution: THREE.Vector2;
      u_mouse: THREE.Vector2;
    }
  >(null);
  // const { size } = useThree()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.u_time = state.clock.getElapsedTime();
      materialRef.current.u_frame += 1.0;
      materialRef.current.u_resolution.set(state.size.width, state.size.height);
      // Map [-1, 1] to [0, width/height]
      materialRef.current.u_mouse.set(
        (state.mouse.x * 0.5 + 0.5) * state.size.width,
        (state.mouse.y * 0.5 + 0.5) * state.size.height
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      {geometryType === "Torus knot" && (
        <torusKnotGeometry args={[6.5, 2.3, 256, 32]} />
      )}
      {geometryType === "Sphere" && <sphereGeometry args={[10, 64, 64]} />}
      {geometryType === "Icosahedron" && <icosahedronGeometry args={[10, 0]} />}

      <customShaderMaterial
        ref={materialRef}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function ShaderGeometry() {
  const [geometry, setGeometry] = useState<
    "Torus knot" | "Sphere" | "Icosahedron"
  >("Torus knot");

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Control Panel Replacement */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-white/10 p-4 rounded-lg backdrop-blur-md text-white border border-white/20">
        <label className="text-xs uppercase tracking-widest opacity-50">
          Geometry
        </label>
        <select
          value={geometry}
          onChange={(e) =>
            setGeometry(
              e.target.value as "Torus knot" | "Sphere" | "Icosahedron"
            )
          }
          className="bg-black/50 border border-white/20 rounded px-2 py-1 outline-none focus:border-white/50"
        >
          <option value="Torus knot">Torus knot</option>
          <option value="Sphere">Sphere</option>
          <option value="Icosahedron">Icosahedron</option>
        </select>
      </div>

      <Canvas camera={{ position: [0, 0, 30], fov: 75 }} dpr={[1, 2]}>
        <color attach="background" args={["#000"]} />
        <ShaderMesh geometryType={geometry} />
        <OrbitControls enablePan={false} />
        <Stats className="!absolute !bottom-4 !left-4 !top-auto !right-auto" />
      </Canvas>
    </div>
  );
}
