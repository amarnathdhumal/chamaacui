"use client";

import React from "react";
import NeoBrutalistButtonDemo from "./neo-brutalist-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function NeoBrutalistButtonPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: BasePreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center bg-white">
            <NeoBrutalistButtonDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["clsx", "tailwind-merge"]}
        componentName="neo-brutalist-button"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
