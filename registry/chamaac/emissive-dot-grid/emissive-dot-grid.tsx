// "use client"

// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame, extend, ThreeElement } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

// const DuckyGlowMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uGridSize: new THREE.Vector2(30, 80),
//   },
//   // Vertex Shader: Unchanged core logic, but slightly adjusted spacing
//   `
//   varying vec2 vUv;
//   varying float vNoise;
//   uniform float uTime;
//   uniform vec2 uGridSize;

//   vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//   vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//   vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
//   vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

//   #ifndef GL_ES
//   #define gl_InstanceID instanceID
//   #endif

//   float snoise(vec3 v) {
//     const vec2 C = vec2(1.0/6.0, 1.0/3.0);
//     const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
//     vec3 i  = floor(v + dot(v, C.yyy));
//     vec3 x0 = v - i + dot(i, C.xxx);
//     vec3 g = step(x0.yzx, x0.xyz);
//     vec3 l = 1.0 - g;
//     vec3 i1 = min(g.xyz, l.zxy);
//     vec3 i2 = max(g.xyz, l.zxy);
//     vec3 x1 = x0 - i1 + C.xxx;
//     vec3 x2 = x0 - i2 + C.yyy;
//     vec3 x3 = x0 - D.yyy;
//     i = mod289(i);
//     vec4 p = permute(permute(permute(i.z+vec4(0.0, i1.z, i2.z, 1.0))+i.y+vec4(0.0, i1.y, i2.y, 1.0))+i.x+vec4(0.0, i1.x, i2.x, 1.0));
//     float n_ = 1.0/7.0;
//     vec3 ns = n_ * D.wyz - D.xzx;
//     vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
//     vec4 x_ = floor(j * ns.z);
//     vec4 y_ = floor(j - 7.0 * x_);
//     vec4 x = x_ * ns.x + ns.yyyy;
//     vec4 y = y_ * ns.x + ns.yyyy;
//     vec4 h = 1.0 - abs(x) - abs(y);
//     vec4 b0 = vec4(x.xy, y.xy);
//     vec4 b1 = vec4(x.zw, y.zw);
//     vec4 s0 = floor(b0)*2.0 + 1.0;
//     vec4 s1 = floor(b1)*2.0 + 1.0;
//     vec4 sh = -step(h, vec4(0.0));
//     vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
//     vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
//     vec3 p0 = vec3(a0.xy, h.x);
//     vec3 p1 = vec3(a0.zw, h.y);
//     vec3 p2 = vec3(a1.xy, h.z);
//     vec3 p3 = vec3(a1.zw, h.w);
//     vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
//     p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
//     vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//     m = m * m;
//     return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
//   }

//   void main() {
//     vUv = uv;
//     float xPos = mod(float(gl_InstanceID), uGridSize.x);
//     float yPos = floor(float(gl_InstanceID) / uGridSize.x);

//     vec3 pos = vec3(
//       (xPos - uGridSize.x * 0.5) * 1.65,
//       (yPos - uGridSize.y * 0.5) * 0.98,
//       0.0
//     );

//     float noise = snoise(vec3(xPos * 0.12, yPos * 0.02, uTime * 0.25));
//     vNoise = noise;

//     float scale = smoothstep(-0.95, 0.15, noise) * 1.0;

//     vec3 finalPos = position * scale + pos;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
//   }
//   `,
//   // Fragment Shader: Forced Orange Palette
//   `
//   varying vec2 vUv;
//   varying float vNoise;

//   void main() {
//     float dist = distance(vUv, vec2(0.5));
//     float circle = smoothstep(0.5, 0.1, dist);

//     // COLORS (Calculated for #df5000)
//     // R: 0.87, G: 0.31, B: 0.0
//     vec3 colorOrange = vec3(0.87, 0.31, 0.0);
//     // Darker variant
//     vec3 colorDarkRed = vec3(0.5, 0.1, 0.0);

//     float colorMix = smoothstep(-0.4, 0.6, vNoise);
//     vec3 baseColor = mix(colorDarkRed, colorOrange, colorMix);

//     // To prevent it going yellow when bright,
//     // we multiply the base color but limit the impact on the green channel
//     float intensity = circle * (1.8 + colorMix * 4.5);

//     // Boost Red specifically for the "Neon" glow feel
//     vec3 finalColor = baseColor * intensity;
//     finalColor.r += circle * colorMix * 0.5; // Add extra "heat" to red

//     gl_FragColor = vec4(finalColor, circle);
//   }
//   `
// );

// extend({ DuckyGlowMaterial });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       duckyGlowMaterial: ThreeElement<typeof DuckyGlowMaterial>;
//     }
//   }
// }

// function BokehGrid() {
//   const meshRef = useRef<THREE.InstancedMesh>(null!);
//   const materialRef = useRef<THREE.ShaderMaterial & { uTime: number, uGridSize: THREE.Vector2 }>(null!);

//   const gridSize = useMemo(() => new THREE.Vector2(140, 160), []);
//   const count = gridSize.x * gridSize.y;

//   useFrame((state) => {
//     if (materialRef.current) {
//       materialRef.current.uTime = state.clock.getElapsedTime();
//       materialRef.current.uGridSize = gridSize;
//     }
//   });

//   return (
//     <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
//       <planeGeometry args={[1, 1]} />
//       <duckyGlowMaterial
//         ref={materialRef}
//         transparent
//         depthWrite={false}
//         blending={THREE.AdditiveBlending}
//         uGridSize={gridSize}
//       />
//     </instancedMesh>
//   );
// }

// export default function BurntOrangeDotGrid() {
//   return (
//     <div className="fixed inset-0 w-screen h-screen bg-[#010101] z-0">
//       <Canvas
//         orthographic
//         camera={{ zoom: 12, position: [0, 0, 100] }}
//         gl={{ antialias: false, stencil: false, depth: false }}
//       >
//         <BokehGrid />

//         <EffectComposer disableNormalPass>
//           <Bloom
//             luminanceThreshold={0.0}
//             mipmapBlur
//             intensity={1.8} // Higher intensity to pop the deep red/orange
//             radius={0.4}
//           />
//         </EffectComposer>
//       </Canvas>
//     </div>
//   );
// }
