"use client";

import React from "react";
import HoverArrowButtonDemo from "./hover-arrow-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function HoverArrowButtonPreviewWrapper({
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
          <div className="w-full h-[300px] flex justify-center items-center">
            <HoverArrowButtonDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={[
          "motion",
          "clsx",
          "tailwind-merge",
          "@tabler/icons-react",
        ]}
        componentName="hover-arrow-button"
      />

      {/* Props Section */}
      <PropsTable props={props} />
    </>
  );
}
