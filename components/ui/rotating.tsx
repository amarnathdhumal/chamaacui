"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import dynamic from "next/dynamic";

// Vertex Shader - removed duplicate attribute declarations
const vertexShader = `
  precision highp float;
  
  uniform float uPosition;
  uniform vec3 distortionAxis;
  uniform vec3 rotationAxis;
  uniform float uDistortion;
  
  varying vec2 vUv;
  
  float PI = 3.141592653589793238;
  
  mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
      oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0,
      oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  
  vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
  }
  
  float qinticInOut(float t) {
    return t < 0.5
      ? 16.0 * pow(t, 5.0)
      : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
  }
  
  void main() {
    vUv = uv;
    float norm = 0.5;
    vec3 newpos = position;
    float offset = (dot(distortionAxis, position) + norm/2.0) / norm;
    float localprogress = clamp(
      (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1.0 - 0.01 * uDistortion),
      0.0,
      2.0
    );
    localprogress = qinticInOut(localprogress) * PI;
    newpos = rotate(newpos, rotationAxis, localprogress);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  precision highp float;
  
  uniform vec2 uImageSize;
  uniform vec2 uPlaneSize;
  uniform sampler2D tMap;
  
  varying vec2 vUv;
  
  void main() {
    vec2 ratio = vec2(
      min((uPlaneSize.x / uPlaneSize.y) / (uImageSize.x / uImageSize.y), 1.0),
      min((uPlaneSize.y / uPlaneSize.x) / (uImageSize.y / uImageSize.x), 1.0)
    );
    
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    
    gl_FragColor.rgb = texture2D(tMap, uv).rgb;
    gl_FragColor.a = 1.0;
  }
`;

// Types
interface ScrollState {
  ease: number;
  current: number;
  target: number;
  last: number;
  direction: "up" | "down";
}

interface ImagePlaneProps {
  image: string;
  index: number;
  length: number;
  scroll: ScrollState;
  viewport: { width: number; height: number };
  screen: { width: number; height: number };
}

interface SceneProps {
  images: string[];
}

// Utility functions
const lerp = (start: number, end: number, factor: number): number =>
  start + (end - start) * factor;

const map = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Image Component
function ImagePlane({
  image,
  index,
  length,
  scroll,
  viewport,
  screen,
}: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [imageSize, setImageSize] = useState<[number, number]>([1, 1]);
  const extraRef = useRef<number>(0);

  // Load texture
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(image, (loadedTexture) => {
      setTexture(loadedTexture);
      setImageSize([loadedTexture.image.width, loadedTexture.image.height]);
    });
  }, [image]);

  // Shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: imageSize },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: 3 },
        uTime: { value: 0 },
      },
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    });
  }, [texture, imageSize]);

  // Calculate scales and positions
  const scaleX = (viewport.width * 320) / screen.width;
  const scaleY = (viewport.height * 300) / screen.height;
  const padding = 0.8;
  const height = scaleY + padding;
  const heightTotal = height * length;
  const initialY = height * index;

  useFrame(() => {
    if (!meshRef.current || !materialRef.current) return;

    const posY = initialY - scroll.current - extraRef.current;
    meshRef.current.position.y = posY;

    // Update uniforms
    const position = map(posY, -viewport.height, viewport.height, 5, 15);
    materialRef.current.uniforms.uPosition.value = position;
    materialRef.current.uniforms.uSpeed.value = scroll.current;
    materialRef.current.uniforms.uTime.value += 0.04;
    materialRef.current.uniforms.uPlaneSize.value = [scaleX, scaleY];

    // Infinite scroll logic
    const planeOffset = scaleY / 2;
    const viewportOffset = viewport.height;
    const isBefore = posY + planeOffset < -viewportOffset;
    const isAfter = posY - planeOffset > viewportOffset;

    if (scroll.direction === "up" && isBefore) {
      extraRef.current -= heightTotal;
    }
    if (scroll.direction === "down" && isAfter) {
      extraRef.current += heightTotal;
    }
  });

  return (
    <mesh ref={meshRef} scale={[scaleX, scaleY, 1]}>
      {}
      <planeGeometry args={[1, 1, 100, 1]} />
      {}
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
}

// Scene Component
function Scene({ images }: SceneProps) {
  const { viewport, size } = useThree();
  const scrollRef = useRef<ScrollState>({
    ease: 0.01,
    current: 0,
    target: 0,
    last: 0,
    direction: "down",
  });
  const [scroll, setScroll] = useState<ScrollState>(scrollRef.current);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const speed = e.deltaY;
      scrollRef.current.target += speed * 0.005;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Handle touch/mouse drag
  useEffect(() => {
    let isDown = false;
    let start = 0;
    let position = 0;

    const handleDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      position = scrollRef.current.current;
      start = "touches" in e ? e.touches[0].clientY : e.clientY;
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      const distance = (start - y) * 0.1;
      scrollRef.current.target = position + distance;
    };

    const handleUp = () => {
      isDown = false;
    };

    window.addEventListener("mousedown", handleDown as EventListener);
    window.addEventListener("mousemove", handleMove as EventListener);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchstart", handleDown as EventListener, {
      passive: true,
    });
    window.addEventListener("touchmove", handleMove as EventListener, {
      passive: true,
    });
    window.addEventListener("touchend", handleUp, { passive: true });

    return () => {
      window.removeEventListener("mousedown", handleDown as EventListener);
      window.removeEventListener("mousemove", handleMove as EventListener);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchstart", handleDown as EventListener);
      window.removeEventListener("touchmove", handleMove as EventListener);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  // Update scroll with lerp
  useFrame(() => {
    scrollRef.current.current = lerp(
      scrollRef.current.current,
      scrollRef.current.target,
      scrollRef.current.ease
    );

    if (scrollRef.current.current > scrollRef.current.last) {
      scrollRef.current.direction = "up";
    } else {
      scrollRef.current.direction = "down";
    }

    scrollRef.current.last = scrollRef.current.current;
    setScroll({ ...scrollRef.current });
  });

  return (
    <>
      {images.map((image, index) => (
        <ImagePlane
          key={image}
          image={image}
          index={index}
          length={images.length}
          scroll={scroll}
          viewport={viewport}
          screen={size}
        />
      ))}
    </>
  );
}

// Main Component
function RotatingImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
    "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=800&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
  ];

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={
          typeof window !== "undefined"
            ? Math.min(window.devicePixelRatio, 2)
            : 1
        }
      >
        <Scene images={images} />
      </Canvas>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center pointer-events-none">
        <p>Scroll or drag to navigate</p>
      </div>
    </div>
  );
}

// Export with dynamic import to prevent SSR
export default dynamic(() => Promise.resolve(RotatingImageGallery), {
  ssr: false,
});
