"use client";

import React from "react";
import ChevronsRightIconDemo from "./chevrons-right-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ChevronsRightIconPreviewWrapperProps {
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

export default function ChevronsRightIconPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: ChevronsRightIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ChevronsRightIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="chevrons-right-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
