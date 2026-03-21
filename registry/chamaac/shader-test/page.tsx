"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
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
  uniform vec2 uResolution;
  uniform vec3 uColor;
  uniform float uSpeed;
  uniform float uDetail;
  uniform float uDistortion;
  uniform float uBrightness;
  varying vec2 vUv;

  #define time uTime * 0.2

  mat2 makem2(in float theta){
      float c = cos(theta);
      float s = sin(theta);
      return mat2(c,-s,s,c);
  }

  float hash(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise( in vec2 x, float detail ){
      x *= detail; 
      vec2 p = floor(x);
      vec2 f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(p + vec2(0.0, 0.0));
      float b = hash(p + vec2(1.0, 0.0));
      float c = hash(p + vec2(0.0, 1.0));
      float d = hash(p + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  mat2 m2 = mat2( 0.80,  0.60, -0.60,  0.80 );

  float fbm( in vec2 p, float detail )
  { 
      float z=2.;
      float rz = 0.;
      for (float i= 1.;i < 7.;i++ )
      {
          rz+= abs((noise(p, detail)-0.5)*4.)/z;
          z = z*2.;
          p = p*2.;
          p*= m2;
      }
      return rz;
  }

  void main()
  {
      vec2 p = vUv * 2.0 - 1.0;
      p.x *= uResolution.x/uResolution.y;
      vec2 bp = p;
      
      // Center the vortex logic on the screen (bp) and add a slow base rotation
      // so it "lets go" and stays fluid right from the first frame.
      float rb = fbm(bp * 0.5 + time * 0.17, uDetail) * 0.1;
      rb = sqrt(rb);
      
      // Use bp for atan to center the effect, and add a base rotation (time * 0.5)
      float angle = rb * 0.2 + atan(bp.y, bp.x) * uDistortion + time * 0.5;
      vec2 distortedP = bp * makem2(angle);
      
      // coloring
      float rz = fbm(distortedP * 0.9 - time * 0.7, uDetail);
      
      // Smooth center transition to avoid pinch stickiness
      rz *= dot(bp * 2.0, bp) + 0.8;
      
      // The glow sweep fix: using bp.x ensures a smooth pass across the center
      rz *= sin(bp.x * 0.5 - time * 4.0) * 1.5;
      
      vec3 col = uColor / (uBrightness - rz); 
      
      gl_FragColor = vec4(sqrt(abs(col)), 1.0);
  }
`;

interface WateryNoiseProps {
  className?: string;
  speed?: number;
  color?: string;
  detail?: number;
  distortion?: number;
  brightness?: number;
}

const Effect = ({
  speed,
  color,
  detail,
  distortion,
  brightness,
}: Required<Omit<WateryNoiseProps, "className">>) => {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uColor: { value: new THREE.Color(color) },
      uSpeed: { value: speed },
      uDetail: { value: detail },
      uDistortion: { value: distortion },
      uBrightness: { value: brightness },
    }),
    []
  );

  useEffect(() => {
    if (material.current) {
      material.current.uniforms.uColor.value.set(color);
      material.current.uniforms.uSpeed.value = speed;
      material.current.uniforms.uDetail.value = detail;
      material.current.uniforms.uDistortion.value = distortion;
      material.current.uniforms.uBrightness.value = brightness;
    }
  }, [color, speed, detail, distortion, brightness]);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
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

export default function WateryNoise({
  className,
  speed = 1.0,
  color = "#191970",
  detail = 1.5,
  distortion = 3.0,
  brightness = 1.0,
}: WateryNoiseProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[400px] bg-[#05050f] overflow-hidden",
        className
      )}
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={1}>
        <Effect
          speed={speed}
          color={color}
          detail={detail}
          distortion={distortion}
          brightness={brightness}
        />
      </Canvas>
    </div>
  );
}
