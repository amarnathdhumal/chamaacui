"use client";

import React, { useState, useDeferredValue } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import WaterCausticDemo from "./water-caustic-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function WaterCausticPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [color, setColor] = useState("#00d1ff");
  const deferredColor = useDeferredValue(color);

  const controls: ControlItem[] = [
    {
      id: "color",
      label: "Caustic Color",
      type: "color",
      value: color,
      onChange: (v) => setColor(v as string),
    },
  ];

  const codeString = `import WaterCaustic from "@/registry/chamaac/water-caustic/water-caustic";

export function WaterCausticDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-neutral-900">
      <WaterCaustic color="${deferredColor}" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg">
          Water Caustics
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
            <WaterCausticDemo color={color} />
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
        componentName="water-caustic"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
