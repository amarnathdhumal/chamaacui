"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import GridBloomDemo from "./grid-bloom-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function GridBloomPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [color, setColor] = useState("#e040fb");
  const [speed, setSpeed] = useState(1.0);
  const [gridScale, setGridScale] = useState(12.0);
  const [rotationSpeed, setRotationSpeed] = useState(0.0);
  const [fadeFalloff, setFadeFalloff] = useState(10.0);
  const [distortionAmount, setDistortionAmount] = useState(0.05);
  const [flowSpeedX, setFlowSpeedX] = useState(-0.2);
  const [flowSpeedY, setFlowSpeedY] = useState(-0.4);
  const [hoverLightRadius, setHoverLightRadius] = useState(0.5);
  const [hoverRepulsionRadius, setHoverRepulsionRadius] = useState(1.0);
  const [hoverRepulsionStrength, setHoverRepulsionStrength] = useState(0.6);

  const dColor = useDeferredValue(color);
  const dSpeed = useDeferredValue(speed);
  const dGridScale = useDeferredValue(gridScale);
  const dRotationSpeed = useDeferredValue(rotationSpeed);
  const dFadeFalloff = useDeferredValue(fadeFalloff);
  const dDistortionAmount = useDeferredValue(distortionAmount);
  const dFlowSpeedX = useDeferredValue(flowSpeedX);
  const dFlowSpeedY = useDeferredValue(flowSpeedY);
  const dHoverLightRadius = useDeferredValue(hoverLightRadius);
  const dHoverRepulsionRadius = useDeferredValue(hoverRepulsionRadius);
  const dHoverRepulsionStrength = useDeferredValue(hoverRepulsionStrength);

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Bloom Color",
      type: "color",
      value: color,
      onChange: (v) => setColor(v as string),
    },
    {
      id: "speed",
      label: "Animation Speed",
      type: "number",
      min: 0.1,
      max: 5.0,
      step: 0.1,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
    {
      id: "gridScale",
      label: "Grid Density",
      type: "number",
      min: 4.0,
      max: 30.0,
      step: 1.0,
      value: gridScale,
      onChange: (v) => setGridScale(v as number),
    },
    {
      id: "rotationSpeed",
      label: "Rotation Speed",
      type: "number",
      min: 0.0,
      max: 0.5,
      step: 0.01,
      value: rotationSpeed,
      onChange: (v) => setRotationSpeed(v as number),
    },
    {
      id: "fadeFalloff",
      label: "Fade Falloff",
      type: "number",
      min: 0.1,
      max: 20.0,
      step: 0.1,
      value: fadeFalloff,
      onChange: (v) => setFadeFalloff(v as number),
    },
    {
      id: "distortionAmount",
      label: "Distortion",
      type: "number",
      min: 0.0,
      max: 0.5,
      step: 0.01,
      value: distortionAmount,
      onChange: (v) => setDistortionAmount(v as number),
    },
    {
      id: "flowSpeedX",
      label: "Flow X",
      type: "number",
      min: -2.0,
      max: 2.0,
      step: 0.1,
      value: flowSpeedX,
      onChange: (v) => setFlowSpeedX(v as number),
    },
    {
      id: "flowSpeedY",
      label: "Flow Y",
      type: "number",
      min: -2.0,
      max: 2.0,
      step: 0.1,
      value: flowSpeedY,
      onChange: (v) => setFlowSpeedY(v as number),
    },
    {
      id: "hoverLightRadius",
      label: "Hover Light",
      type: "number",
      min: 0.1,
      max: 2.0,
      step: 0.05,
      value: hoverLightRadius,
      onChange: (v) => setHoverLightRadius(v as number),
    },
    {
      id: "hoverRepulsionRadius",
      label: "Hover Repulsion Radius",
      type: "number",
      min: 0.1,
      max: 2.0,
      step: 0.05,
      value: hoverRepulsionRadius,
      onChange: (v) => setHoverRepulsionRadius(v as number),
    },
    {
      id: "hoverRepulsionStrength",
      label: "Hover Strength",
      type: "number",
      min: 0.0,
      max: 2.0,
      step: 0.1,
      value: hoverRepulsionStrength,
      onChange: (v) => setHoverRepulsionStrength(v as number),
    },
  ];

  const codeString = `import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";
import { GeistPixelSquare } from "geist/font/pixel";

export function GridBloomDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-transparent">
      <GridBloom
        color="${dColor}"
        speed={${dSpeed}}
        gridScale={${dGridScale}}
        rotationSpeed={${dRotationSpeed}}
        fadeFalloff={${dFadeFalloff}}
        distortionAmount={${dDistortionAmount}}
        flowSpeedX={${dFlowSpeedX}}
        flowSpeedY={${dFlowSpeedY}}
        hoverLightRadius={${dHoverLightRadius}}
        hoverRepulsionRadius={${dHoverRepulsionRadius}}
        hoverRepulsionStrength={${dHoverRepulsionStrength}}
      />
      <div className={\`absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 \${GeistPixelSquare.className}\`}>
             <h1 className="text-4xl md:text-8xl font-bold dark:text-white opacity-80 text-purple-500  mix-blend-overlay uppercase text-center drop-shadow-lg">
          Grid Bloom
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
          <div className="w-full h-[600px] flex justify-center items-center bg-transparent">
            <GridBloomDemo
              color={color}
              speed={speed}
              gridScale={gridScale}
              rotationSpeed={rotationSpeed}
              fadeFalloff={fadeFalloff}
              distortionAmount={distortionAmount}
              flowSpeedX={flowSpeedX}
              flowSpeedY={flowSpeedY}
              hoverLightRadius={hoverLightRadius}
              hoverRepulsionRadius={hoverRepulsionRadius}
              hoverRepulsionStrength={hoverRepulsionStrength}
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
        dependencies={["three", "@react-three/fiber", "clsx", "tailwind-merge"]}
        componentName="grid-bloom"
      />

      <PropsTable props={props} />
    </>
  );
}
