"use client";

import React from "react";
import VolumeIconDemo from "./volume-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface VolumeIconPreviewWrapperProps {
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

export default function VolumeIconPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: VolumeIconPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <VolumeIconDemo />
                    </div>
                }
                code={code}
            />
            <InstallationSection componentSource={installationSource} componentName="volume-icon" />
            <PropsTable props={props} />
        </>
    );
}
