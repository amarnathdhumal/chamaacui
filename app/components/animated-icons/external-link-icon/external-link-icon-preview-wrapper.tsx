"use client";

import React from "react";
import ExternalLinkIconDemo from "./external-link-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function ExternalLinkIconPreviewWrapper({
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
            <ExternalLinkIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="external-link-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
