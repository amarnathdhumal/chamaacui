"use client";

import React, { useState } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import LiquidChromeDemo from "./liquid-chrome-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function LiquidChromePreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(0.35);
  const [timeScale, setTimeScale] = useState(0.225);
  const [color, setColor] = useState("#C0C0C0");
  const [color2, setColor2] = useState("#4A4A4A");

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Color 1",
      type: "color",
      value: color,
      onChange: (v: string | number | boolean) => setColor(v as string),
    },
    {
      id: "color2",
      label: "Color 2",
      type: "color",
      value: color2,
      onChange: (v: string | number | boolean) => setColor2(v as string),
    },
    {
      id: "speed",
      label: "Flow Speed",
      type: "number",
      min: 0,
      max: 2.0,
      step: 0.01,
      value: speed,
      onChange: (v: string | number | boolean) => setSpeed(v as number),
    },
    {
      id: "timeScale",
      label: "Time Scale",
      type: "number",
      min: 0,
      max: 1,
      step: 0.001,
      value: timeScale,
      onChange: (v: string | number | boolean) => setTimeScale(v as number),
    },
  ];

  const codeString = `import LiquidChrome from "@/registry/chamaac/liquid-chrome/liquid-chrome";
import { GeistPixelSquare } from "geist/font/pixel";

export function LiquidChromeDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <LiquidChrome
        color="${color}"
        color2="${color2}"
        speed={${speed}}
        timeScale={${timeScale}}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 \${GeistPixelSquare.className}">
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
          Liquid Chrome
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
            <LiquidChromeDemo
              speed={speed}
              timeScale={timeScale}
              color={color}
              color2={color2}
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
        componentName="liquid-chrome"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
