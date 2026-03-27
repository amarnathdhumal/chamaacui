"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import ElectricMistDemo from "./electric-mist-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function ElectricMistDemoWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(1.0);
  const [color, setColor] = useState("#191970");
  const [detail, setDetail] = useState(1.5);
  const [distortion, setDistortion] = useState(3.0);
  const [brightness, setBrightness] = useState(1.0);

  const dSpeed = useDeferredValue(speed);
  const dColor = useDeferredValue(color);
  const dDetail = useDeferredValue(detail);
  const dDistortion = useDeferredValue(distortion);
  const dBrightness = useDeferredValue(brightness);

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Base Color",
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
      id: "detail",
      label: "Smoke Detail",
      type: "number",
      min: 0.5,
      max: 5.0,
      step: 0.1,
      value: detail,
      onChange: (v) => setDetail(v as number),
    },
    {
      id: "distortion",
      label: "Energy Distortion",
      type: "number",
      min: 0.0,
      max: 10.0,
      step: 0.5,
      value: distortion,
      onChange: (v) => setDistortion(v as number),
    },
    {
      id: "brightness",
      label: "Glow Brightness",
      type: "number",
      min: 0.1,
      max: 2.0,
      step: 0.1,
      value: brightness,
      onChange: (v) => setBrightness(v as number),
    },
  ];

  const codeString = `import ElectricMist from "@/components/electric-mist";
import { GeistPixelSquare } from "geist/font/pixel";

export function ElectricMistDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <ElectricMist
        speed={${dSpeed}}
        color="${dColor}"
        detail={${dDetail}}
        distortion={${dDistortion}}
        brightness={${dBrightness}}
      />
      <div className={\`absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 \${GeistPixelSquare.className}\`}>
         <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg leading-tight">
          Electric Mist
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
            <ElectricMistDemo
              speed={speed}
              color={color}
              detail={detail}
              distortion={distortion}
              brightness={brightness}
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
        componentName="electric-mist"
      />

      <PropsTable props={props} />
    </>
  );
}
