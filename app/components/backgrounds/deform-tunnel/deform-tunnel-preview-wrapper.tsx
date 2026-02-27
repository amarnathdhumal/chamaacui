"use client";

import React, { useState } from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import DeformTunnelDemo from "./deform-tunnel-demo";
import { ShaderControls, ControlItem } from "@/components/ui/shader-controls";
import { BasePreviewWrapperProps } from "@/lib/types";

export default function DeformTunnelPreviewWrapper({
  title,
  description,
  installationSource,
  props,
  codeFilename,
}: BasePreviewWrapperProps) {
  const [speed, setSpeed] = useState(1.0);
  const [wobbleX, setWobbleX] = useState(3.0);
  const [wobbleY, setWobbleY] = useState(1.5);
  const [depth, setDepth] = useState(5.0);
  const [scale, setScale] = useState(0.3);
  const [decay, setDecay] = useState(0.8);
  const [exposure, setExposure] = useState(8.5);
  //const [imageSrc, setImageSrc] = useState("https://assets.amarn.me/nature.png");
  //const [imageSrc, setImageSrc] = useState("https://images.unsplash.com/photo-1550100136-e092101726f4");
  const [imageSrc] = useState(
    "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1"
  );

  const controls: ControlItem[] = [
    {
      id: "speed",
      label: "Speed",
      type: "number",
      min: 0,
      max: 5.0,
      step: 0.1,
      value: speed,
      onChange: (v) => setSpeed(v as number),
    },
    {
      id: "wobbleX",
      label: "Wobble X",
      type: "number",
      min: 0,
      max: 10.0,
      step: 0.1,
      value: wobbleX,
      onChange: (v) => setWobbleX(v as number),
    },
    {
      id: "wobbleY",
      label: "Wobble Y",
      type: "number",
      min: 0,
      max: 10.0,
      step: 0.1,
      value: wobbleY,
      onChange: (v) => setWobbleY(v as number),
    },
    {
      id: "depth",
      label: "Tunnel Depth",
      type: "number",
      min: 1.0,
      max: 20.0,
      step: 0.5,
      value: depth,
      onChange: (v) => setDepth(v as number),
    },
    {
      id: "scale",
      label: "Texture Scale",
      type: "number",
      min: 0.05,
      max: 1.0,
      step: 0.05,
      value: scale,
      onChange: (v) => setScale(v as number),
    },
    {
      id: "decay",
      label: "Glow Decay",
      type: "number",
      min: 0.5,
      max: 1.0,
      step: 0.01,
      value: decay,
      onChange: (v) => setDecay(v as number),
    },
    {
      id: "exposure",
      label: "Exposure",
      type: "number",
      min: 1.0,
      max: 20.0,
      step: 0.5,
      value: exposure,
      onChange: (v) => setExposure(v as number),
    },
  ];

  const codeString = `import DeformTunnel from "@/registry/chamaac/deform-tunnel/deform-tunnel";
import { GeistPixelSquare } from "geist/font/pixel";

export function DeformTunnelDemo() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <DeformTunnel
        speed={${speed}}
        wobble={[${wobbleX}, ${wobbleY}]}
        depth={${depth}}
        scale={${scale}}
        decay={${decay}}
        exposure={${exposure}}
        imageSrc="${imageSrc}"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 \${GeistPixelSquare.className}">
        <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 uppercase text-center drop-shadow-lg">
          Warp Drive
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
            <DeformTunnelDemo
              speed={speed}
              wobble={[wobbleX, wobbleY]}
              depth={depth}
              scale={scale}
              decay={decay}
              exposure={exposure}
              imageSrc={imageSrc}
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
        componentName="deform-tunnel"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
