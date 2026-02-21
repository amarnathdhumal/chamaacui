"use client";

import React from "react";
import PremiumButtonDemo from "./premium-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface PremiumButtonPreviewWrapperProps {
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

export default function PremiumButtonPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: PremiumButtonPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center bg-white dark:bg-black">
            <PremiumButtonDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["clsx", "tailwind-merge"]}
        componentName="premium-button"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
