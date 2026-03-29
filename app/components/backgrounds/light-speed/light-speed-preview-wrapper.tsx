"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import LightSpeedDemo from "./light-speed-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";
import { BasePreviewWrapperProps } from "@/lib/types";

export default function LightSpeedDemoWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(2.4);
  const [particleCount, setParticleCount] = useState(1000);
  const [color, setColor] = useState("#b026ff"); // Neon Violet
  const [intensity, setIntensity] = useState(3.0);
  const [radius, setRadius] = useState(25);
  const [cylinderLength, setCylinderLength] = useState(150);

  const dSpeed = useDeferredValue(speed);
  const dParticleCount = useDeferredValue(particleCount);
  const dColorHex = useDeferredValue(color);
  const dIntensity = useDeferredValue(intensity);
  const dRadius = useDeferredValue(radius);
  const dCylinderLength = useDeferredValue(cylinderLength);

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Light Color",
      type: "color",
      value: color,
      onChange: (v) => setColor(v as string),
    },
    {
      id: "intensity",
      label: "Glow Intensity",
      type: "number",
      min: 0.1,
      max: 10.0,
      step: 0.1,
      value: intensity,
      onChange: (v) => setIntensity(v as number),
    },
    {
      id: "speed",
      label: "Warp Speed",
      type: "number",
      min: 0.1,
      max: 10.0,
      step: 0.1,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
    {
      id: "particleCount",
      label: "Star Count",
      type: "number",
      min: 100,
      max: 5000,
      step: 100,
      value: particleCount,
      onChange: (v) => setParticleCount(v as number),
    },
    {
      id: "radius",
      label: "Tunnel Radius",
      type: "number",
      min: 5,
      max: 100,
      step: 5,
      value: radius,
      onChange: (v) => setRadius(v as number),
    },
    {
      id: "cylinderLength",
      label: "Depth Length",
      type: "number",
      min: 50,
      max: 500,
      step: 10,
      value: cylinderLength,
      onChange: (v) => setCylinderLength(v as number),
    },
  ];

  const codeString = `import LightSpeed from "@/components/light-speed";
import { GeistPixelSquare } from "geist/font/pixel";

export function LightSpeedDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <LightSpeed
        speed={${dSpeed}}
        particleCount={${dParticleCount}}
        lightColor="${dColorHex}"
        intensity={${dIntensity}}
        radius={${dRadius}}
        cylinderLength={${dCylinderLength}}
      />
      <div className={\`absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 \${GeistPixelSquare.className}\`}>
         <h1 className="text-7xl md:text-9xl font-bold text-white opacity-90 uppercase text-center drop-shadow-lg leading-tight">
          Light Speed
        </h1>
      </div>
    </div>
  );
}`;

  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full flex justify-center items-center bg-transparent">
            <LightSpeedDemo
              speed={speed}
              particleCount={particleCount}
              lightColor={color}
              intensity={intensity}
              radius={radius}
              cylinderLength={cylinderLength}
            />
          </div>
        }
        code={codeString}
        codeFilename={codeFilename || "demo.tsx"}
      />

      <div className=" ">
        <ShaderControls controls={controls} />
      </div>

      <InstallationSection
        componentSource={installationSource}
        dependencies={[
          "three",
          "@react-three/fiber",
          "@react-three/postprocessing",
          "clsx",
          "tailwind-merge",
        ]}
        componentName="light-speed"
      />

      <PropsTable props={props} />
    </>
  );
}
