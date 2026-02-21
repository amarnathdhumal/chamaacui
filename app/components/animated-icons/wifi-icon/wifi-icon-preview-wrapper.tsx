"use client";

import React from "react";
import WifiIconDemo from "./wifi-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function WifiIconPreviewWrapper({
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
            <WifiIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="wifi-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
