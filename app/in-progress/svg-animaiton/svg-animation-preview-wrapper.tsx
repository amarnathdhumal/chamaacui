"use client";

import React from "react";
import SvgAnimationDemo from "./svg-animation-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface SvgAnimationPreviewWrapperProps {
  title: string;
  description: string;
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

export default function SvgAnimationPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: SvgAnimationPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={<SvgAnimationDemo />}
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection componentSource={installationSource} />

      {/* Props Section */}
      <PropsTable props={props} />
    </>
  );
}
