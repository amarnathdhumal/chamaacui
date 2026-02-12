"use client";

import React, { useState } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import LiquidChromeDemo from "./liquid-chrome-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

interface LiquidChromePreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  code: React.ReactNode;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
}

export default function LiquidChromePreviewWrapper({
  title,
  description,
  installationSource,
  props,
}: LiquidChromePreviewWrapperProps) {
  const [speed, setSpeed] = useState(0.5);
  const [timeScale, setTimeScale] = useState(0.1);
  const [color, setColor] = useState("#C0C0C0");
  const [color2, setColor2] = useState("#4A4A4A");

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Color 1",
      type: "color",
      value: color,
      onChange: (v) => setColor(v as string),
    },
    {
      id: "color2",
      label: "Color 2",
      type: "color",
      value: color2,
      onChange: (v) => setColor2(v as string),
    },
    {
      id: "speed",
      label: "Flow Speed",
      type: "number",
      min: 0,
      max: 2.0,
      step: 0.01,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
    {
      id: "timeScale",
      label: "Time Scale",
      type: "number",
      min: 0,
      max: 1,
      step: 0.001,
      value: timeScale,
      onChange: (v) => setTimeScale(v as number),
    },
  ];

  const codeString = `import LiquidChrome from "@/components/backgrounds/liquid-chrome";

export function LiquidChromeDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <LiquidChrome
        color="${color}"
        color2="${color2}"
        speed={${speed}}
        timeScale={${timeScale}}
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
            <LiquidChromeDemo
              speed={speed}
              timeScale={timeScale}
              color={color}
              color2={color2}
            />
          </div>
        }
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={codeString} />
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "14px",
                lineHeight: "1.5",
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box",
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        }
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
