"use client";

import React from "react";
import ThumbsUpIconDemo from "./thumbs-up-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ThumbsUpIconPreviewWrapperProps {
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

export default function ThumbsUpIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ThumbsUpIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ThumbsUpIconDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="thumbs-up-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
