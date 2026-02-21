"use client";

import React from "react";
import AdjustmentsHorizontalIconDemo from "./adjustments-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface AdjustmentsHorizontalIconPreviewWrapperProps {
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

export default function AdjustmentsHorizontalIconPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: AdjustmentsHorizontalIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <AdjustmentsHorizontalIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="adjustments-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
