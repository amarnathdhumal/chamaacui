"use client";

import React from "react";
import ZapIconDemo from "./zap-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ZapIconPreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  code: React.ReactNode;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
}

export default function ZapIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ZapIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ZapIconDemo />
          </div>
        }
        code={code}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="zap-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
