"use client";

import React from "react";
import HoverArrowButtonDemo from "./hover-arrow-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface HoverArrowButtonPreviewWrapperProps {
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

export default function HoverArrowButtonPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: HoverArrowButtonPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <HoverArrowButtonDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={[
          "motion",
          "clsx",
          "tailwind-merge",
          "@tabler/icons-react",
        ]}
        componentName="hover-arrow-button"
      />

      {/* Props Section */}
      <PropsTable props={props} />
    </>
  );
}
