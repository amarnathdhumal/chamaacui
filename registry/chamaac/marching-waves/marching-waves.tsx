// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useRef, useMemo, forwardRef } from "react";
// import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
// import { Effect } from 'postprocessing';
// import * as THREE from "three";
// import { cn } from "@/lib/utils";

// const vertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = vec4(position, 1.0);
//   }
// `;

// const fragmentShader = `
//   uniform float uTime;
//   uniform vec2 uResolution;
//   uniform vec3 uColor1;
//   uniform vec3 uColor2;
//   varying vec2 vUv;

//   vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {
//     vec2 xy = fragCoord - size / 2.0;
//     float z = size.y / tan(radians(fieldOfView) / 2.0);
//     return normalize(vec3(xy, -z));
//   }

//   mat4 customViewMatrix(vec3 eye, vec3 center, vec3 up) {
//     vec3 f = normalize(center - eye);
//     vec3 s = normalize(cross(f, up));
//     vec3 u = cross(s, f);
//     return mat4(
//         vec4(s, 0.0),
//         vec4(u, 0.0),
//         vec4(-f, 0.0),
//         vec4(0.0, 0.0, 0.0, 1.0)
//     );
//   }

//   #define MAX_STEPS 80
//   #define MAX_DIST 40.0
//   #define SURF_DIST 0.005

//   // Flat plane background
//   float terrain(vec2 p) {
//       return 0.0;
//   }

//   float getDistance(vec3 p) {
//       float h = terrain(p.xz);
//       return (p.y - h) * 0.4; // Very soft raymarching threshold
//   }

//   // Calculate normals for lighting
//   vec3 getNormal(vec3 p) {
//       float d = getDistance(p);
//       vec2 e = vec2(0.01, 0);
//       vec3 n = d - vec3(
//           getDistance(p - e.xyy),
//           getDistance(p - e.yxy),
//           getDistance(p - e.yyx)
//       );
//       return normalize(n);
//   }

//   vec3 makeClr(vec2 fragCoord) {
//       vec3 viewDir = rayDirection(70.0, uResolution.xy, fragCoord);

//       // Static camera position
//       vec3 ro = vec3(0.0, 3.5, -5.0);
//       // Look slightly down and ahead
//       vec3 target = vec3(0.0, 0.0, ro.z + 5.0);

//       mat4 camMat = customViewMatrix(ro, target, vec3(0.0, 1.0, 0.0));
//       vec3 rd = normalize((camMat * vec4(viewDir, 1.0)).xyz);

//       float d0 = 0.0;
//       vec3 p;
//       float iters = 0.0;

//       for(int i = 0; i < MAX_STEPS; i++) {
//           p = ro + rd * d0;
//           float dS = getDistance(p);
//           if(abs(dS) < SURF_DIST || d0 > MAX_DIST) break;
//           d0 += dS;
//           iters++;
//       }

//       // Base background color with a soft, dark pinkish hue
//       vec3 bgColor = mix(uColor1, uColor2, 0.2) * 0.1;
//       vec3 col = bgColor;

//       if(d0 < MAX_DIST) {
//           vec3 n = getNormal(p);

//           // Ultra-modern cinematic lighting setup
//           // Main Key light (soft and angled)
//           vec3 lightDir = normalize(vec3(0.5, 1.5, -0.8));
//           float dif = max(dot(n, lightDir), 0.0);

//           // Secondary rim light (backlight for depth)
//           vec3 rimDir = normalize(vec3(-0.8, 0.5, 1.0));
//           float rimDif = max(dot(n, rimDir), 0.0);

//           float fresnel = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);

//           // Smooth height and depth mapping for rich gradients
//           float depthVal = smoothstep(0.0, 30.0, d0);
//           float heightVal = smoothstep(-2.0, 3.0, p.y);

//           // Base color is a sleek gradient from shadow to midtone
//           vec3 baseCol = mix(uColor1 * 0.2, mix(uColor1, uColor2, 0.5), heightVal);

//           // Apply diffuse lighting gently to maintain smooth liquid look
//           col = baseCol + (uColor2 * dif * 0.6);
//           col += uColor1 * rimDif * 0.4; // subtle rim light in shadow

//           // Sleek modern specular highlight modified to be pinkish instead of white
//           vec3 halfVector = normalize(lightDir - rd);
//           float specLight = pow(max(dot(n, halfVector), 0.0), 32.0);
//           col += mix(uColor2, vec3(1.0), 0.2) * specLight * 0.6; // glossy pink highlight

//           // Soft ambient occlusion based on distance
//           col -= vec3(0.1) * (iters / float(MAX_STEPS));
//       }

//       // Premium depth fog fades directly into the dark pinkish background
//       float fog = 1.0 - exp(-d0 * d0 * 0.0015);
//       col = mix(col, bgColor, fog);

//       return col;
//   }

//   // Anti-Aliasing for smooth, premium look
//   #define AA 2
//   void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
//       vec3 col = vec3(0.0);
//       for(int y = 0; y < AA; ++y) {
//           for(int x = 0; x < AA; ++x) {
//               vec2 offset = vec2(float(x), float(y)) / float(AA) - 0.5;
//               col += makeClr(fragCoord + offset);
//           }
//       }
//       col /= float(AA * AA);

//       // ACES Tone mapping
//       col = col * (2.51 * col + 0.03) / (col * (2.43 * col + 0.59) + 0.14);

//       // Gamma correction
//       col = pow(col, vec3(1.0/2.2));

//       fragColor = vec4(col, 1.0);
//   }

//   void main() {
//     mainImage(gl_FragColor, vUv * uResolution.xy);
//   }
// `;

// const ditherFragmentShader = `
// precision highp float;
// uniform float colorNum;
// uniform float pixelSize;
// uniform float uTime;
// const float bayerMatrix8x8[64] = float[64](
//   0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
//   32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
//   8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
//   40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
//   2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
//   34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
//   10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
//   42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
// );

// vec3 dither(vec2 uv, vec3 color) {
//   vec2 scaledCoord = floor(uv * resolution / pixelSize);

//   // "Synthesis Data Sweep": Starts from Top-Left, ends at Bottom-Right
//   // A sweeping wave of pixel movement that traverses the screen periodically
//   float sweepPhase = fract(uTime * 0.25); // Loops every 4 seconds

//   // Diagonal axis mapping (0 = top-left, 1 = bottom-right)
//   // Scaling by 1.5 so the entire sweep clears the screen cleanly before repeating
//   float diagonal = (uv.x + (1.0 - uv.y)) * 0.5;

//   // Distance from current pixel to the sweeping wave front
//   float waveDist = diagonal - (sweepPhase * 1.5 - 0.2);

//   // Create an elastic burst region that pushes pixels
//   // Peaks when the wave passes over, and rests when the wave is gone
//   float burst = smoothstep(0.0, -0.15, waveDist) * smoothstep(-0.35, -0.15, waveDist);

//   // The pixels have a slow ambient resting drift, and an explosive fast burst drift
//   float moveX = uTime * 2.0 + (burst * 50.0);
//   float moveY = uTime * -1.5 + (burst * -40.0);

//   int x = int(mod(scaledCoord.x + moveX + 1000.0, 8.0));
//   int y = int(mod(scaledCoord.y + moveY + 1000.0, 8.0));
//   float threshold = bayerMatrix8x8[y * 8 + x] - 0.25;
//   float step = 1.0 / (colorNum - 1.0);
//   color += threshold * step;
//   float bias = 0.2;
//   color = clamp(color - bias, 0.0, 1.0);
//   return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
// }

// void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
//   vec2 normalizedPixelSize = pixelSize / resolution;

//   // Apply a matching scanline glitch to the screen itself exactly where the burst is
//   vec2 distortedUv = uv;

//   float sweepPhase = fract(uTime * 0.25);
//   float diagonal = (uv.x + (1.0 - uv.y)) * 0.5;
//   float waveDist = diagonal - (sweepPhase * 1.5 - 0.2);
//   float burst = smoothstep(0.0, -0.15, waveDist) * smoothstep(-0.35, -0.15, waveDist);

//   // Glitchy horizontal tear exactly where the dither data-burst passes
//   distortedUv.x += burst * 0.015 * sin(uv.y * 150.0 + uTime * 30.0);

//   vec2 uvPixel = normalizedPixelSize * floor(distortedUv / normalizedPixelSize);
//   vec4 color = texture2D(inputBuffer, uvPixel);

//   color.rgb = dither(distortedUv, color.rgb);
//   outputColor = color;
// }
// `;

// class RetroEffectImpl extends Effect {
//     public uniforms: Map<string, THREE.Uniform<any>>;
//     constructor() {
//         const uniforms = new Map<string, THREE.Uniform<any>>([
//             ['colorNum', new THREE.Uniform(4.0)],
//             ['pixelSize', new THREE.Uniform(3.0)],
//             ['uTime', new THREE.Uniform(0.0)]
//         ]);
//         super('RetroEffect', ditherFragmentShader, { uniforms });
//         this.uniforms = uniforms;
//     }

//     update(renderer: any, inputBuffer: any, deltaTime: number) {
//         if (this.uniforms.has('uTime')) {
//             this.uniforms.get('uTime')!.value += deltaTime;
//         }
//     }
//     set colorNum(value: number) {
//         this.uniforms.get('colorNum')!.value = value;
//     }
//     get colorNum(): number {
//         return this.uniforms.get('colorNum')!.value;
//     }
//     set pixelSize(value: number) {
//         this.uniforms.get('pixelSize')!.value = value;
//     }
//     get pixelSize(): number {
//         return this.uniforms.get('pixelSize')!.value;
//     }
// }

// const RetroEffect = forwardRef<RetroEffectImpl, { colorNum: number; pixelSize: number }>((props, ref) => {
//     const { colorNum, pixelSize } = props;
//     const WrappedRetroEffect = wrapEffect(RetroEffectImpl);
//     return <WrappedRetroEffect ref={ref} colorNum={colorNum} pixelSize={pixelSize} />;
// });
// RetroEffect.displayName = 'RetroEffect';

// const MarchingEffect = ({
//     speed = 1.0,
//     color1 = "#4338ca", // Indigo
//     color2 = "#ec4899", // Pink
//     colorNum = 8.0,
//     pixelSize = 3.0,
// }: {
//     speed?: number;
//     color1?: string;
//     color2?: string;
//     colorNum?: number;
//     pixelSize?: number;
// }) => {
//     const material = useRef<THREE.ShaderMaterial>(null);
//     const { size } = useThree();

//     const uniforms = useMemo(
//         () => ({
//             uTime: { value: 0 },
//             uResolution: { value: new THREE.Vector2(size.width, size.height) },
//             uColor1: { value: new THREE.Color(color1) },
//             uColor2: { value: new THREE.Color(color2) },
//         }),
//         [size, color1, color2]
//     );

//     useFrame((state) => {
//         if (material.current) {
//             material.current.uniforms.uTime.value = state.clock.getElapsedTime() * speed;
//             material.current.uniforms.uResolution.value.set(size.width, size.height);
//             material.current.uniforms.uColor1.value.set(color1);
//             material.current.uniforms.uColor2.value.set(color2);
//         }
//     });

//     return (
//         <>
//             <mesh>
//                 <planeGeometry args={[2, 2]} />
//                 <shaderMaterial
//                     ref={material}
//                     vertexShader={vertexShader}
//                     fragmentShader={fragmentShader}
//                     uniforms={uniforms}
//                 />
//             </mesh>
//             <EffectComposer>
//                 <RetroEffect colorNum={colorNum} pixelSize={pixelSize} />
//             </EffectComposer>
//         </>
//     );
// };

// interface MarchingWavesProps {
//     className?: string;
//     speed?: number;
//     color1?: string;
//     color2?: string;
//     colorNum?: number;
//     pixelSize?: number;
// }

// export default function MarchingWaves({
//     className,
//     speed = 1.0,
//     color1 = "#4338ca",
//     color2 = "#ec4899",
//     colorNum = 8.0,
//     pixelSize = 3.0,
// }: MarchingWavesProps) {
//     return (
//         <div className={cn("relative w-full h-full min-h-[600px] bg-[#05050f]", className)}>
//             <Canvas camera={{ position: [0, 0, 1] }} dpr={1}>
//                 <MarchingEffect
//                     speed={speed}
//                     color1={color1}
//                     color2={color2}
//                     colorNum={colorNum}
//                     pixelSize={pixelSize}
//                 />
//             </Canvas>
//         </div>
//     );
// }
