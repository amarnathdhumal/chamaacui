"use client";

import React from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import Waves from "@/registry/chamaac/waves/waves";
import { GeistPixelSquare } from "geist/font/pixel";

interface WavesPreviewWrapperProps {
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

export default function WavesPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: WavesPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[600px] flex justify-center items-center bg-transparent">
            <Waves />
            <div
              className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${GeistPixelSquare.className}`}
            >
              <h1 className="text-4xl md:text-8xl font-bold text-white opacity-80 mix-blend-overlay uppercase text-center drop-shadow-lg">
                Waves are cool
              </h1>
            </div>
          </div>
        }
        code={code}
      />

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
