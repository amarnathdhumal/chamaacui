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
uniform sampler2D iChannel0;
uniform float uSpeed;
uniform vec2 uWobble;
uniform float uDepth;
uniform float uScale;
uniform float uDecay;
uniform float uExposure;
uniform vec2 uMouse;
uniform float uHover;
varying vec2 vUv;

vec3 deform( in vec2 p )
{
    float time = 0.5 * iTime * uSpeed;
    
    // Distance from mouse to pixel
    float dist = length(p - uMouse);
    
    // Localized ripple effect based on distance and hover state
    float ripple = exp(-dist * 0.5) * uHover;
    
    // Increased mouse shift to wobble for stronger localized displacement
    vec2 q = sin( uWobble * time + p + uMouse * 0.6 * ripple );

    float a = atan( q.y, q.x );
    float r = sqrt( dot(q,q) );

    // Increase depth push significantly around the mouse
    float localDepth = uDepth - ripple * 5.0;

    vec2 uv = p * sqrt(max(0.0, localDepth + r*r));
    uv += sin( vec2(0.0, 0.6) + vec2(1.0, 1.1) * time);
    
    // Stronger texture shift with mouse
    uv += uMouse * 1.0 * ripple;
         
    return texture2D( iChannel0, uv * uScale).yxx;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = -1.0 + 2.0*fragCoord/iResolution.xy;

    vec3  col = vec3(0.0);
    // Base tunnel center
    vec2 center = vec2(0.0);
    
    vec2  d = (center-p)/64.0;
    
    // Localized interaction for 3D perspective bending
    float dist = length(p - uMouse);
    float ripple = exp(-dist * 0.5) * uHover;
    
    // Stronger localized bend to ray direction for more perspective interaction
    d += (p - uMouse) * ripple * 0.035;

    float w = 1.0;
    vec2  s = p;
    for( int i=0; i<64; i++ )
    {
        vec3 res = deform( s );
        col += w*smoothstep( 0.0, 1.0, res );
        w *= uDecay;
        s += d;
    }
    col = col * uExposure / 64.0;

	fragColor = vec4( col, 1.0 );
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution);
}
`;

interface ShaderPlaneProps {
  imageSrc: string;
  speed: number;
  wobble: [number, number];
  depth: number;
  scale: number;
  decay: number;
  exposure: number;
}

const ShaderPlane = ({
  imageSrc,
  speed,
  wobble,
  depth,
  scale,
  decay,
  exposure,
}: ShaderPlaneProps) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const hoverStateRef = useRef(false);

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(imageSrc);
    tex.wrapS = THREE.MirroredRepeatWrapping;
    tex.wrapT = THREE.MirroredRepeatWrapping;
    return tex;
  }, [imageSrc]);

  const uniformsRef = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2() },
    iChannel0: { value: texture },
    uSpeed: { value: speed },
    uWobble: { value: new THREE.Vector2(wobble[0], wobble[1]) },
    uDepth: { value: depth },
    uScale: { value: scale },
    uDecay: { value: decay },
    uExposure: { value: exposure },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uHover: { value: 0 },
  });

  useEffect(() => {
    uniformsRef.current.uSpeed.value = speed;
    uniformsRef.current.uWobble.value.set(wobble[0], wobble[1]);
    uniformsRef.current.uDepth.value = depth;
    uniformsRef.current.uScale.value = scale;
    uniformsRef.current.uDecay.value = decay;
    uniformsRef.current.uExposure.value = exposure;
  }, [speed, wobble, depth, scale, decay, exposure]);

  useEffect(() => {
    uniformsRef.current.iChannel0.value = texture;
  }, [texture]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.iResolution.value.set(
        state.size.width * state.viewport.dpr,
        state.size.height * state.viewport.dpr
      );

      // Smoothly interpolate mouse position for fluid interaction
      const targetMouse = state.pointer;
      const currentMouse = materialRef.current.uniforms.uMouse.value;
      // Use a damping factor of 0.05 for smooth easing
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;
      // Smoothly interpolate hover state
      const targetHover = hoverStateRef.current ? 1.0 : 0.0;
      const currentHover = materialRef.current.uniforms.uHover.value;
      materialRef.current.uniforms.uHover.value +=
        (targetHover - currentHover) * 0.05;
    }
  });

  return (
    <mesh
      onPointerOver={() => (hoverStateRef.current = true)}
      onPointerOut={() => (hoverStateRef.current = false)}
    >
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

export interface DeformTunnelProps {
  className?: string;
  /** Image URL for the tunnel texture */
  imageSrc?: string;
  /** Animation speed multiplier */
  speed?: number;
  /** Wobble intensity [x, y] */
  wobble?: [number, number];
  /** Tunnel depth intensity */
  depth?: number;
  /** Tunnel texture scale */
  scale?: number;
  /** Glow decay (0.0 to 1.0) */
  decay?: number;
  /** Overall exposure/brightness */
  exposure?: number;
}

export default function DeformTunnel({
  className,

  //imageSrc = "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1",

  imageSrc = "https://assets.amarn.me/nature-img.png",

  speed = 1.0,
  wobble = [2.5, 1.2],
  depth = 5.0,
  scale = 0.3,
  decay = 0.8,
  exposure = 8.5,
}: DeformTunnelProps) {
  return (
    <div
      className={cn(
        "w-full h-full absolute inset-0 bg-black cursor-crosshair",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 2]}
      >
        <ShaderPlane
          imageSrc={imageSrc}
          speed={speed}
          wobble={wobble}
          depth={depth}
          scale={scale}
          decay={decay}
          exposure={exposure}
        />
      </Canvas>
    </div>
  );
}
