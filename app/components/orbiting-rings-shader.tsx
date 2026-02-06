// 'use client'

// import { shaderMaterial } from '@react-three/drei'
// import { Canvas, extend, useFrame, useThree, ReactThreeFiber } from '@react-three/fiber'
// import { Color, ShaderMaterial } from 'three'
// import React, { useRef } from 'react'

// // --- GLSL Shader Material ---
// const OrbitingRingsMaterial = shaderMaterial(
//     {
//         uTime: 0,
//         uRingCount: 80.0,
//         uRingSpacing: 0.008,
//         uRingThickness: 0.003,
//         uPillarWidth: 0.15,
//         uPillarSpeed: 0.3,
//         uWobbleSpeed: 0.5,
//         uWobbleAmount: 0.3,
//         uNoiseScale: 2.0,
//         uBloomIntensity: 1.5,
//         uBrightnessVariation: 0.7,
//     },
//     // Vertex Shader
//     `
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//     // Fragment Shader
//     `
//     varying vec2 vUv;

//     uniform float uTime;
//     uniform float uRingCount;
//     uniform float uRingSpacing;
//     uniform float uRingThickness;
//     uniform float uPillarWidth;
//     uniform float uPillarSpeed;
//     uniform float uWobbleSpeed;
//     uniform float uWobbleAmount;
//     uniform float uNoiseScale;
//     uniform float uBloomIntensity;
//     uniform float uBrightnessVariation;

//     #define PI 3.14159265359
//     #define TAU 6.28318530718

//     // Hash function for randomness
//     float hash(float n) {
//       return fract(sin(n) * 43758.5453123);
//     }

//     // 2D hash
//     float hash2(vec2 p) {
//       return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
//     }

//     // Simplex-like noise for color
//     float noise(vec2 p) {
//       vec2 i = floor(p);
//       vec2 f = fract(p);
//       f = f * f * (3.0 - 2.0 * f); // smoothstep

//       float a = hash2(i);
//       float b = hash2(i + vec2(1.0, 0.0));
//       float c = hash2(i + vec2(0.0, 1.0));
//       float d = hash2(i + vec2(1.0, 1.0));

//       return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
//     }

//     // Fractional Brownian Motion for richer noise
//     float fbm(vec2 p) {
//       float value = 0.0;
//       float amplitude = 0.5;
//       for (int i = 0; i < 4; i++) {
//         value += amplitude * noise(p);
//         p *= 2.0;
//         amplitude *= 0.5;
//       }
//       return value;
//     }

//     // Smooth ring function
//     float ring(float dist, float radius, float thickness) {
//       return smoothstep(thickness, 0.0, abs(dist - radius));
//     }

//     void main() {
//       // Center UV and aspect correct
//       vec2 uv = vUv - 0.5;
//       uv.x *= 1.7778; // 16:9 aspect ratio

//       // Polar coordinates
//       float dist = length(uv);
//       float angle = atan(uv.y, uv.x); // -PI to PI
//       float normalizedAngle = (angle + PI) / TAU; // 0 to 1

//       vec3 color = vec3(0.0);
//       float totalGlow = 0.0;

//       // Create multiple concentric rings
//       for (float i = 0.0; i < 120.0; i++) {
//         if (i >= uRingCount) break;

//         // Ring radius (from center outward)
//         float ringRadius = 0.1 + i * uRingSpacing;

//         // Per-ring random values
//         float randPhase = hash(i * 1.234);
//         float randBrightness = hash(i * 5.678);
//         float randWobble = hash(i * 9.012);

//         // === WAVE-BASED PILLAR ===
//         // Main pillar position (orbiting around the ring)
//         float pillarPhase = uTime * uPillarSpeed + randPhase * TAU;

//         // Add wobble (second wave for organic motion)
//         float wobble = sin(uTime * uWobbleSpeed + randWobble * TAU) * uWobbleAmount;

//         // Calculate pillar position along the ring
//         float pillarCenter = mod(pillarPhase + wobble, TAU) / TAU;

//         // Distance from current angle to pillar center (wrapping)
//         float angleDist = abs(normalizedAngle - pillarCenter);
//         angleDist = min(angleDist, 1.0 - angleDist); // Wrap around

//         // Smooth pillar falloff (like the ColorRamp B-Spline in Blender)
//         float pillarMask = smoothstep(uPillarWidth, 0.0, angleDist);
//         pillarMask = pow(pillarMask, 2.0); // Sharper falloff

//         // === RING GEOMETRY ===
//         float ringMask = ring(dist, ringRadius, uRingThickness);

//         // === BRIGHTNESS VARIATION ===
//         // Some rings are bright, others are dim (like Emission Strength variation)
//         float brightness = mix(1.0 - uBrightnessVariation, 1.0, randBrightness);

//         // === COMBINE ===
//         float intensity = ringMask * pillarMask * brightness;

//         // === RGB NOISE COLORING ===
//         // Sample noise at ring position for color
//         vec2 noiseCoord = vec2(ringRadius * uNoiseScale, angle * 0.5 + uTime * 0.1);
//         float n = fbm(noiseCoord * 3.0);

//         // Map noise to RGB (like the 3-stop ColorRamp)
//         vec3 ringColor;
//         if (n < 0.33) {
//           ringColor = mix(vec3(1.0, 0.0, 0.3), vec3(0.0, 1.0, 0.3), n * 3.0);
//         } else if (n < 0.66) {
//           ringColor = mix(vec3(0.0, 1.0, 0.3), vec3(0.2, 0.3, 1.0), (n - 0.33) * 3.0);
//         } else {
//           ringColor = mix(vec3(0.2, 0.3, 1.0), vec3(1.0, 0.0, 0.3), (n - 0.66) * 3.0);
//         }

//         // Add to final color with bloom
//         color += ringColor * intensity * uBloomIntensity;
//         totalGlow += intensity;
//       }

//       // Fake bloom/glow by adding soft halo
//       color += color * totalGlow * 0.1;

//       // Tone mapping to prevent overexposure
//       color = color / (1.0 + color);

//       // Slight vignette
//       float vignette = 1.0 - smoothstep(0.5, 1.2, dist);
//       color *= vignette;

//       // Film grain
//       float grain = (hash2(vUv * 1000.0 + uTime) - 0.5) * 0.03;
//       color += grain;

//       gl_FragColor = vec4(color, 1.0);
//     }
//   `
// )

// // Register with R3F
// extend({ OrbitingRingsMaterial })

// // TypeScript declaration
// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             orbitingRingsMaterial: ReactThreeFiber.Object3DNode<ShaderMaterial, typeof OrbitingRingsMaterial> & {
//                 uTime?: number
//                 uRingCount?: number
//                 uRingSpacing?: number
//                 uRingThickness?: number
//                 uPillarWidth?: number
//                 uPillarSpeed?: number
//                 uWobbleSpeed?: number
//                 uWobbleAmount?: number
//                 uNoiseScale?: number
//                 uBloomIntensity?: number
//                 uBrightnessVariation?: number
//             }
//         }
//     }
// }

// interface OrbitingRingsProps {
//     ringCount?: number
//     pillarSpeed?: number
//     bloomIntensity?: number
// }

// // The plane that fills the viewport
// const ShaderPlane = ({ ringCount = 80, pillarSpeed = 0.3, bloomIntensity = 1.5 }: OrbitingRingsProps) => {
//     const materialRef = useRef<ShaderMaterial & { uTime: number }>(null)
//     const { viewport } = useThree()

//     useFrame((state, delta) => {
//         if (materialRef.current) {
//             materialRef.current.uTime += delta
//         }
//     })

//     return (
//         <mesh scale={[viewport.width, viewport.height, 1]}>
//             <planeGeometry args={[1, 1]} />
//             <orbitingRingsMaterial
//                 ref={materialRef}
//                 uRingCount={ringCount}
//                 uPillarSpeed={pillarSpeed}
//                 uBloomIntensity={bloomIntensity}
//             />
//         </mesh>
//     )
// }

// // Main export
// export default function OrbitingRings({
//     ringCount = 80,
//     pillarSpeed = 0.3,
//     bloomIntensity = 1.5
// }: OrbitingRingsProps) {
//     return (
//         <div style={{ width: '100%', height: '100%', background: '#000' }}>
//             <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
//                 <ShaderPlane
//                     ringCount={ringCount}
//                     pillarSpeed={pillarSpeed}
//                     bloomIntensity={bloomIntensity}
//                 />
//             </Canvas>
//         </div>
//     )
// }
