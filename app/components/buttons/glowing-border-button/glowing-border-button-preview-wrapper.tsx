"use client";

import React from "react";
import GlowingBorderButtonDemo from "./glowing-border-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function GlowingBorderButtonPreviewWrapper({
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
        preview={<GlowingBorderButtonDemo />}
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["clsx", "tailwind-merge"]}
        componentName="glowing-border-button"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
