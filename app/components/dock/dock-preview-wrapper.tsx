"use client";

import React from "react";
import DockDemo from "./dock-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface DockPreviewWrapperProps {
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

export default function DockPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: DockPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={<DockDemo />}
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} />

            {/* Props Section */}
            <PropsTable props={props} />
        </>
    );
}

