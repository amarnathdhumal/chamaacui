"use client";

import React from "react";
import LockIconDemo from "./lock-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface LockIconPreviewWrapperProps {
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

export default function LockIconPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: LockIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <LockIconDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="lock-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
