"use client";

import React from "react";
import SunIconDemo from "./sun-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface SunIconPreviewWrapperProps {
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

export default function SunIconPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: SunIconPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <SunIconDemo />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} componentName="sun-icon" />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
