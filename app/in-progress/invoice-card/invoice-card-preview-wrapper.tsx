"use client";

import React, { useState } from "react";
import InvoiceCardDemo from "./invoice-card-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface InvoiceCardPreviewWrapperProps {
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

export default function InvoiceCardPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: InvoiceCardPreviewWrapperProps) {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[600px] flex justify-center items-center">
            <InvoiceCardDemo key={refreshKey} />
          </div>
        }
        onRefresh={handleRefresh}
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection componentSource={installationSource} />

      {/* Props Section */}
      <PropsTable props={props} />
    </>
  );
}
