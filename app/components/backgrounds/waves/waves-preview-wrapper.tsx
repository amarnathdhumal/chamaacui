"use client";

import React from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import WavesDemo from "./waves-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";
import { useState } from "react";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function WavesPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [waveColor1, setWaveColor1] = useState("#071697");
  const [waveColor2, setWaveColor2] = useState("#00d4ff");
  const [waveColor3, setWaveColor3] = useState("#000000");
  const [waveSpeedX, setWaveSpeedX] = useState(0.0125);
  const [waveSpeedY, setWaveSpeedY] = useState(0.005);
  const [waveAmpX, setWaveAmpX] = useState(32);
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  const controls: ControlItem[] = [
    {
      id: "waveColor1",
      label: "Wave Color 1",
      type: "color",
      value: waveColor1,
      onChange: (v) => setWaveColor1(v as string),
    },
    {
      id: "waveColor2",
      label: "Wave Color 2",
      type: "color",
      value: waveColor2,
      onChange: (v) => setWaveColor2(v as string),
    },
    {
      id: "waveColor3",
      label: "Wave Color 3",
      type: "color",
      value: waveColor3,
      onChange: (v) => setWaveColor3(v as string),
    },
    {
      id: "backgroundColor",
      label: "Background Color",
      type: "color",
      value: backgroundColor,
      onChange: (v) => setBackgroundColor(v as string),
    },
    {
      id: "waveSpeedX",
      label: "Speed X",
      type: "number",
      min: 0,
      max: 0.1,
      step: 0.001,
      value: waveSpeedX,
      onChange: (v) => setWaveSpeedX(v as number),
    },
    {
      id: "waveSpeedY",
      label: "Speed Y",
      type: "number",
      min: 0,
      max: 0.1,
      step: 0.001,
      value: waveSpeedY,
      onChange: (v) => setWaveSpeedY(v as number),
    },
    {
      id: "waveAmpX",
      label: "Amplitude",
      type: "number",
      min: 0,
      max: 100,
      step: 1,
      value: waveAmpX,
      onChange: (v) => setWaveAmpX(v as number),
    },
  ];

  const codeString = `import { Waves } from "@/components/ui/waves";
import { GeistPixelSquare } from "geist/font/pixel";

export function WavesDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Waves
        waveColor1="${waveColor1}"
        waveColor2="${waveColor2}"
        waveColor3="${waveColor3}"
        waveSpeedX={${waveSpeedX}}
        waveSpeedY={${waveSpeedY}}
        waveAmpX={${waveAmpX}}
        backgroundColor="${backgroundColor}"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 \${GeistPixelSquare.className}">
        <h1 className="text-7xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Chamaac UI Waves
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
          <div className="w-full h-[600px] flex justify-center items-center bg-transparent relative">
            <WavesDemo
              waveColor1={waveColor1}
              waveColor2={waveColor2}
              waveColor3={waveColor3}
              waveSpeedX={waveSpeedX}
              waveSpeedY={waveSpeedY}
              waveAmpX={waveAmpX}
              backgroundColor={backgroundColor}
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
        dependencies={[
          "three",
          "@react-three/fiber",
          "@react-three/drei",
          "clsx",
          "tailwind-merge",
        ]}
        componentName="waves"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
