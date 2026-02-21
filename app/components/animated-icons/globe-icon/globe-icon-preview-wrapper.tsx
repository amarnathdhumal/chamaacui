"use client";

import React from "react";
import GlobeIconDemo from "./globe-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function GlobeIconPreviewWrapper({
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
            <GlobeIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="globe-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
