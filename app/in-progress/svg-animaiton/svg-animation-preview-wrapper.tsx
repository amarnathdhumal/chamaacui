"use client";

import React from "react";
import SvgAnimationDemo from "./svg-animation-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function SvgAnimationPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: BasePreviewWrapperProps) {
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
