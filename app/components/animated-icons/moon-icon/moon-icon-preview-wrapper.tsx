"use client";

import React from "react";
import MoonIconDemo from "./moon-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface MoonIconPreviewWrapperProps {
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

export default function MoonIconPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: MoonIconPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <MoonIconDemo />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} componentName="moon-icon" />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
