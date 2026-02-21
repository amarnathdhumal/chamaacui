"use client";

import React from "react";
import { m } from "motion/react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import { InteractiveGridBackground } from "@/registry/chamaac/backgrounds/interactive-grid-background";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

interface InteractiveGridPreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
  codeFilename?: string;
}

export default function InteractiveGridPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: InteractiveGridPreviewWrapperProps) {
  const [gridGap, setGridGap] = React.useState(40);
  const [dotSize, setDotSize] = React.useState(1.5);
  const [radius, setRadius] = React.useState(300);
  const [color, setColor] = React.useState("#737373");
  const [highlightColor, setHighlightColor] = React.useState("#FFFF00");

  const controls: ControlItem[] = [
    {
      id: "gridGap",
      label: "Grid Gap",
      type: "number",
      min: 20,
      max: 100,
      step: 5,
      value: gridGap,
      onChange: (v) => setGridGap(v as number),
    },
    {
      id: "dotSize",
      label: "Dot Size",
      type: "number",
      min: 0.5,
      max: 5,
      step: 0.1,
      value: dotSize,
      onChange: (v) => setDotSize(v as number),
    },
    {
      id: "radius",
      label: "Interaction Radius",
      type: "number",
      min: 100,
      max: 600,
      step: 10,
      value: radius,
      onChange: (v) => setRadius(v as number),
    },
    {
      id: "color",
      label: "Base Color",
      type: "color",
      value: color,
      onChange: (v) => setColor(v as string),
    },
    {
      id: "highlightColor",
      label: "Highlight Color",
      type: "color",
      value: highlightColor,
      onChange: (v) => setHighlightColor(v as string),
    },
  ];

  const codeString = `import { InteractiveGridBackground } from "@/components/interactive-grid-background";

export default function InteractiveGridDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <InteractiveGridBackground
        gridGap={${gridGap}}
        dotSize={${dotSize}}
        radius={${radius}}
        color="${color}"
        highlightColor="${highlightColor}"
        className="h-full w-full"
      >
        <div className="flex flex-col items-center justify-center h-full pointer-events-none px-4">
           {/* Your content here */}
           <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight text-center">
            Interactive Grid.
          </h1>
        </div>
      </InteractiveGridBackground>
    </div>
  );
}`;

  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[600px] relative">
            <InteractiveGridBackground
              className="h-full w-full"
              gridGap={gridGap}
              dotSize={dotSize}
              radius={radius}
              color={color}
              highlightColor={highlightColor}
            >
              <div className="flex flex-col items-center justify-center h-full pointer-events-none px-4">
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-1.5 rounded-full text-sm text-white font-medium mb-4">
                    New Release
                  </div>
                  <h1 className="text-4xl md:text-6xl font-semibold  tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Interactive Grid.
                  </h1>
                  <p className="mt-6 text-sm md:text-lg text-white/70 max-w-xl text-center leading-relaxed">
                    A high-performance, reactive canvas grid system. Use your
                    mouse to interact with the data points.
                  </p>

                  <div className="mt-10 flex gap-4 pointer-events-auto">
                    <button className="bg-white text-black px-6 py-3 text-sm rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
                      Get Started
                    </button>
                  </div>
                </m.div>
              </div>
            </InteractiveGridBackground>
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
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="interactive-grid-background"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
