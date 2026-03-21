"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import SynthesisDemo from "./synthesis-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";
import { BasePreviewWrapperProps } from "@/lib/types";

export default function SynthesisDemoWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(0.4);
  const [color1, setColor1] = useState("#0f172a");
  const [color2, setColor2] = useState("#3b0764");
  const [color3, setColor3] = useState("#0ea5e9");
  const [scale, setScale] = useState(1.0);
  const [complexity, setComplexity] = useState(6.0);
  const [distortion, setDistortion] = useState(0.6);
  const [glowIntensity, setGlowIntensity] = useState(0.4);
  const [flowFrequency, setFlowFrequency] = useState(3.0);
  const [contrast, setContrast] = useState(1.2);

  const dSpeed = useDeferredValue(speed);
  const dColor1 = useDeferredValue(color1);
  const dColor2 = useDeferredValue(color2);
  const dColor3 = useDeferredValue(color3);
  const dScale = useDeferredValue(scale);
  const dComplexity = useDeferredValue(complexity);
  const dDistortion = useDeferredValue(distortion);
  const dGlowIntensity = useDeferredValue(glowIntensity);
  const dFlowFrequency = useDeferredValue(flowFrequency);
  const dContrast = useDeferredValue(contrast);

  const controls: ControlItem[] = [
    {
      id: "color1",
      label: "Color 1",
      type: "color",
      value: color1,
      onChange: (v) => setColor1(v as string),
    },
    {
      id: "color2",
      label: "Color 2",
      type: "color",
      value: color2,
      onChange: (v) => setColor2(v as string),
    },
    {
      id: "color3",
      label: "Color 3",
      type: "color",
      value: color3,
      onChange: (v) => setColor3(v as string),
    },
    {
      id: "speed",
      label: "Animation Speed",
      type: "number",
      min: 0.1,
      max: 2.0,
      step: 0.1,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
    {
      id: "complexity",
      label: "Complexity",
      type: "number",
      min: 1.0,
      max: 20.0,
      step: 1.0,
      value: complexity,
      onChange: (v) => setComplexity(v as number),
    },
    {
      id: "scale",
      label: "Zoom Scale",
      type: "number",
      min: 0.1,
      max: 5.0,
      step: 0.1,
      value: scale,
      onChange: (v) => setScale(v as number),
    },
    {
      id: "distortion",
      label: "Distortion",
      type: "number",
      min: 0.0,
      max: 2.0,
      step: 0.1,
      value: distortion,
      onChange: (v) => setDistortion(v as number),
    },
    {
      id: "glowIntensity",
      label: "Glow Intensity",
      type: "number",
      min: 0.0,
      max: 2.0,
      step: 0.1,
      value: glowIntensity,
      onChange: (v) => setGlowIntensity(v as number),
    },
    {
      id: "flowFrequency",
      label: "Flow Frequency",
      type: "number",
      min: 0.5,
      max: 10.0,
      step: 0.5,
      value: flowFrequency,
      onChange: (v) => setFlowFrequency(v as number),
    },
  ];

  const codeString = `import Synthesis from "@/registry/chamaac/backgrounds/synthesis";
import { GeistPixelSquare } from "geist/font/pixel";

export function SynthesisDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Synthesis
        speed={${dSpeed}}
        color1="${dColor1}"
        color2="${dColor2}"
        color3="${dColor3}"
        scale={${dScale}}
        complexity={${dComplexity}}
        distortion={${dDistortion}}
        glowIntensity={${dGlowIntensity}}
        flowFrequency={${dFlowFrequency}}
        contrast={${dContrast}}
      />
      <div className={\`absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 \${GeistPixelSquare.className}\`}>
          <h1 className="text-7xl md:text-9xl font-bold text-white opacity-80 uppercase text-center drop-shadow-2xl leading-tight tracking-tighter">
          Synthesis
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
            <SynthesisDemo
              speed={speed}
              color1={color1}
              color2={color2}
              color3={color3}
              scale={scale}
              complexity={complexity}
              distortion={distortion}
              glowIntensity={glowIntensity}
              flowFrequency={flowFrequency}
              contrast={contrast}
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
        componentName="synthesis"
      />

      <PropsTable props={props} />
    </>
  );
}
