"use client";

import React from "react";
import WavesDemo from "./waves-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

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
            <WavesDemo />
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
