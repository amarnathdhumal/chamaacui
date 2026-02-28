"use client";

import React from "react";

import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import HowItWorksDemo from "./how-it-works-demo";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function HowItWorksPreviewWrapper({
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
          <div className="w-full relative py-12">
            <HowItWorksDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={[]}
        componentName="how-it-works"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
