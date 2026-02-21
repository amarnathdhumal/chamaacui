"use client";

import React from "react";
import WavyIconDemo from "./wavy-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface WavyIconPreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  code: React.ReactNode | string;
  codeFilename?: string;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
}

export default function WavyIconPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: WavyIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <WavyIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="wavy-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
