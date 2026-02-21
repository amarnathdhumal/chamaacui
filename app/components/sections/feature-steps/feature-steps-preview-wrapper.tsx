"use client";

import React from "react";
import FeatureStepsDemo from "./feature-steps-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function FeatureStepsPreviewWrapper({
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
          <div className="w-full flex justify-center items-center  overflow-hidden h-full md:h-[550px] px-4 md:px-12 py-4">
            <FeatureStepsDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="feature-steps"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
