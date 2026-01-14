"use client";

import React from "react";
import TextLoopDemo from "./text-loop-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface TextLoopPreviewWrapperProps {
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

export default function TextLoopPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: TextLoopPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[350px] flex flex-col justify-center items-center">
            <TextLoopDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="text-loop"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
