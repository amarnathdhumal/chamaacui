"use client";

import React from "react";
import GlowingBorderButtonDemo from "./glowing-border-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface GlowingBorderButtonPreviewWrapperProps {
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

export default function GlowingBorderButtonPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: GlowingBorderButtonPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={

                    <GlowingBorderButtonDemo />

                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} dependencies={[]} componentName="glowing-border-button" />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
