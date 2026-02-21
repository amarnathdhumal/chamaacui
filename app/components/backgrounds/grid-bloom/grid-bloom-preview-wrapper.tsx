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
  const [rotationSpeed, setRotationSpeed] = useState(0.08);

  const dColor = useDeferredValue(color);
  const dSpeed = useDeferredValue(speed);
  const dGridScale = useDeferredValue(gridScale);
  const dRotationSpeed = useDeferredValue(rotationSpeed);

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
  ];

  const codeString = `import GridBloom from "@/registry/chamaac/grid-bloom/grid-bloom";

export function GridBloomDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-purple-100">
      <GridBloom
        color="${dColor}"
        speed={${dSpeed}}
        gridScale={${dGridScale}}
        rotationSpeed={${dRotationSpeed}}
      />
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
