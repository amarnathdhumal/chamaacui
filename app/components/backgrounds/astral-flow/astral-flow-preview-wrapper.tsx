"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import AstralFlowDemo from "./astral-flow-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function AstralFlowPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(1.5);
  const [color1, setColor1] = useState("#05070a");
  const [color2, setColor2] = useState("#2e1a38");
  const [color3, setColor3] = useState("#a0769a");
  const [flowMin, setFlowMin] = useState(3.0);
  const [flowMax, setFlowMax] = useState(7.0);

  const dSpeed = useDeferredValue(speed);
  const dColor1 = useDeferredValue(color1);
  const dColor2 = useDeferredValue(color2);
  const dColor3 = useDeferredValue(color3);
  const dFlowMin = useDeferredValue(flowMin);
  const dFlowMax = useDeferredValue(flowMax);

  const controls: ControlItem[] = [
    {
      id: "color1",
      label: "Color 1 (Deep)",
      type: "color",
      value: color1,
      onChange: (v) => setColor1(v as string),
    },
    {
      id: "color2",
      label: "Color 2 (Mid)",
      type: "color",
      value: color2,
      onChange: (v) => setColor2(v as string),
    },
    {
      id: "color3",
      label: "Color 3 (Highlights)",
      type: "color",
      value: color3,
      onChange: (v) => setColor3(v as string),
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
      id: "flowMin",
      label: "Flow Min",
      type: "number",
      min: 0.0,
      max: 10.0,
      step: 0.5,
      value: flowMin,
      onChange: (v) => setFlowMin(v as number),
    },
    {
      id: "flowMax",
      label: "Flow Max",
      type: "number",
      min: 1.0,
      max: 15.0,
      step: 0.5,
      value: flowMax,
      onChange: (v) => setFlowMax(v as number),
    },
  ];

  const codeString = `import AstralFlow from "@/components/astral-flow";
import { GeistPixelSquare } from "geist/font/pixel";

export function AstralFlowDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-transparent">
      <AstralFlow
        speed={${dSpeed}}
        color1="${dColor1}"
        color2="${dColor2}"
        color3="${dColor3}"
        flowMin={${dFlowMin}}
        flowMax={${dFlowMax}}
      />
      <div className={\`absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 \${GeistPixelSquare.className}\`}>
         <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg">
          Astral Flow
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
            <AstralFlowDemo
              speed={speed}
              color1={color1}
              color2={color2}
              color3={color3}
              flowMin={flowMin}
              flowMax={flowMax}
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
        componentName="astral-flow"
      />

      <PropsTable props={props} />
    </>
  );
}
