"use client";

import React, { useState } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import NebulaDemo from "./nebula-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function NebulaPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(2.0);
  const [color1, setColor1] = useState("#5efff4"); // Highlight
  const [color2, setColor2] = useState("#763b65"); // Nebula
  const [color3, setColor3] = useState("#1a0b2e"); // Deep Space

  const controls: ControlItem[] = [
    {
      id: "color1",
      label: "Highlight Color",
      type: "color",
      value: color1,
      onChange: (v) => setColor1(v as string),
    },
    {
      id: "color2",
      label: "Nebula Color",
      type: "color",
      value: color2,
      onChange: (v) => setColor2(v as string),
    },
    {
      id: "color3",
      label: "Deep Space Color",
      type: "color",
      value: color3,
      onChange: (v) => setColor3(v as string),
    },
    {
      id: "speed",
      label: "Animation Speed",
      type: "number",
      min: 0,
      max: 5.0,
      step: 0.1,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
  ];

  const codeString = `import Nebula from "@/registry/chamaac/nebula/nebula";
import { GeistPixelSquare } from "geist/font/pixel";

export function NebulaDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Nebula
        color1="${color1}"
        color2="${color2}"
        color3="${color3}"
        speed={${speed}}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 \${GeistPixelSquare.className}">
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg">
          Deep Space Nebula
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
            <NebulaDemo
              speed={speed}
              color1={color1}
              color2={color2}
              color3={color3}
            />
          </div>
        }
        code={codeString}
        codeFilename={codeFilename || "demo.tsx"}
      />

      <div className=" ">
        <ShaderControls controls={controls} />
      </div>

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["three", "@react-three/fiber", "clsx", "tailwind-merge"]}
        componentName="nebula"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
