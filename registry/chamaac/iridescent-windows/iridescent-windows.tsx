"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
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
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uScale;
  varying vec2 vUv;

  #define PI 3.1415926535897932384626433832795

  float irid_cosh(float x) {
      return (exp(x) + exp(-x)) * 0.5;
  }
  float irid_sinh(float x) {
      return (exp(x) - exp(-x)) * 0.5;
  }

  #define cx_mul(a, b) vec2((a).y*(b).x - (a).x*(b).x, (a).x*(b).x + (a).x*(b).y)
  #define cx_div(a, b) vec2(((a).y*(b).y - (a).x*(b).x)/((b).x*(b).x + (b).y*(b).y), ((a).y*(b).x - (a).x*(b).y)/((b).x*(b).x + (b).y*(b).y))
  #define cx_sin(a) vec2(sin((a).y) * irid_cosh((a).x), cos((a).y) * irid_sinh((a).x))
  #define cx_cos(a) vec2(cos((a).y) * irid_cosh((a).x), -sin((a).y) * irid_sinh((a).x))

  vec2 cx_tan(vec2 a) { return cx_div(cx_sin(a), cx_cos(a)); }
  
  vec2 cx_log(vec2 a) {
      float rpart = sqrt((a.x*a.x)+(a.y*a.y));
      float ipart = atan(a.x,a.y);
      if (ipart > PI) ipart = ipart - (2.0 * PI);
      return vec2(log(rpart), ipart);
  }

  vec2 as_polar(vec2 z) {
    return vec2(
      length(z),
      atan(z.y, z.x)
    );
  }

  vec2 cx_pow(vec2 v, float p) {
    vec2 z = as_polar(v);
    return pow(z.y, p) * vec2(cos(z.y * p), sin(z.y * p));
  }

  // Define our points
  vec2 a0 = vec2(0.32, -0.45);
  vec2 a1 = vec2(-0.49, -0.32);
  vec2 a2 = vec2(-0.31, 0.38);
  vec2 a3 = vec2(-0.12, 0.04);

  vec2 b0 = vec2(-0.71, 0.53);
  vec2 b1 = vec2(0.01, 0.23);
  vec2 b2 = vec2(-0.24, 0.31);
  vec2 b3 = vec2(-0.01, -0.42);

    uniform vec3 uColors[3];

  void main() {
    vec2 uv = (gl_FragCoord.xy - 40.0  * uResolution.xy) / min(uResolution.y, uResolution.x);
    vec2 z = uv * uScale; 
    
    // Continuous linear flow strictly for the squares grid to keep it moving continuously
    vec2 gridFlow = vec2(uTime * 0.9, uTime * 0.28);
    vec2 zGrid = z + gridFlow;

    // Keep the inner fractal drifting horizontally only,
    // so we don't introduce any top-to-bottom motion.
    vec2 orbit = vec2(sin(uTime * 0.5), 0.0);

    // Keep z for the tan() grid, but scale down z for everything else
    // This physically enlarges/zooms-in the swirling patterns INSIDE the squares
    // without changing the number of squares on the screen.
    vec2 zInner = (z + orbit * 0.5) * 0.2; 

    vec2 polyA = a0
     + cx_mul(a1, vec2(cos(zInner + uTime * 0.3) * 50.))
     + cx_mul(a2, vec2(sin(zInner + uTime * 0.0) * 1.0))
     + cx_mul(a3, cx_pow(zInner, 2.0));

    vec2 polyB = b0
        + cx_mul(b1, vec2(cos(zInner + uTime * 1.0)))
        + cx_mul(b2, clamp(vec2(tan(zGrid)), -50.0, 50.0))
        + cx_mul(b3, cx_pow(zInner, 2.));

    vec2 result = cx_div(polyA, polyB);
    float imaginary = cx_log(result).x * 2.0;

    // Synchronized pulsing for banding and depth
    float band = 0.5 + 0.5 * sin(imaginary * 2.4 + uTime * 1.0);
    float depth = 0.5 + 0.5 * sin(imaginary * 0.85 + uTime * 0.5);
    float glow = 1.0 / (1.0 + dot(result, result) * 0.75);
    float intensity = 0.18 + band * 0.4 + depth * 0.18 + glow * 0.45;

    // Defined trail moving smoothly
    float trailPhase = fract(uv.x * 1.0 - uTime * 0.5);
    float trailDistance = abs(trailPhase - 0.5);
    float trailWindow = exp(-40.0 * trailDistance);
    
    // Organized, harmonic squiggles
    float squiggleCenter =
      0.15 * sin(uv.x * 6.0 - uTime * 1.0)
      + 0.05 * sin(uv.x * 12.0 + uTime * 2.0);
    float squiggleLine = abs(uv.y - squiggleCenter);
    float squiggle = exp(-38.0 * squiggleLine) * (0.55 + trailWindow * 0.45);

    vec3 baseColor = mix(uColors[0], uColors[1], smoothstep(0.15, 0.85, band));
    vec3 accentColor = mix(baseColor, uColors[2], smoothstep(0.35, 0.95, depth));

    vec3 color = accentColor * intensity;
    color += uColors[2] * pow(band, 8.0) * 0.05;
    color += uColors[1] * glow * 0.06;
    color += mix(uColors[1], uColors[2], 0.55) * squiggle * 0.16;

    gl_FragColor = vec4(color, 1.0);
  }
`;

interface IridescentWindowsProps {
  className?: string;
  speed?: number;
  scale?: number;
  color?: string;
  themeColors?: [string, string, string];
}

const DEFAULT_COLOR = "#8d9db3";
const DEFAULT_THEME_COLORS: [string, string, string] = [
  "#4c6663",
  "#6f8f8a",
  "#b8cbc8",
];

const toVector3 = (color: THREE.Color) =>
  new THREE.Vector3(color.r, color.g, color.b);

const buildThemeColors = (
  color: string,
  themeColors?: [string, string, string]
) => {
  if (themeColors) {
    return themeColors.map((value) => toVector3(new THREE.Color(value)));
  }

  const mid = new THREE.Color(color);
  const dark = mid.clone().offsetHSL(0, -0.04, -0.18);
  const light = mid.clone().offsetHSL(0, -0.02, 0.16);

  return [toVector3(dark), toVector3(mid), toVector3(light)];
};

const Effect = ({
  speed = 1.0,
  scale = 20.0,
  color = DEFAULT_COLOR,
  themeColors,
}: {
  speed?: number;
  scale?: number;
  color?: string;
  themeColors?: [string, string, string];
}) => {
  const material = useRef<THREE.ShaderMaterial>(null);
  const shaderColors = useMemo(
    () => buildThemeColors(color, themeColors),
    [color, themeColors]
  );

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uScale: { value: scale },
      uColors: { value: shaderColors },
    }),
    [scale, shaderColors]
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
      material.current.uniforms.uScale.value = scale;
      material.current.uniforms.uColors.value = shaderColors;
      material.current.uniforms.uResolution.value.set(
        state.size.width * state.viewport.dpr,
        state.size.height * state.viewport.dpr
      );
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

export default function IridescentWindows({
  className,
  speed = 1.5,
  scale = 15.0,
  color = DEFAULT_COLOR,
  themeColors = DEFAULT_THEME_COLORS,
}: IridescentWindowsProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[400px] bg-black overflow-hidden",
        className
      )}
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <Effect
          speed={speed}
          scale={scale}
          color={color}
          themeColors={themeColors}
        />
      </Canvas>
    </div>
  );
}
