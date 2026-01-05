"use client";

import React from "react";
import HeartIconDemo from "./heart-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface HeartIconPreviewWrapperProps {
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

export default function HeartIconPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: HeartIconPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <HeartIconDemo />
                    </div>
                }
                code={code}
            />
            <InstallationSection componentSource={installationSource} componentName="heart-icon" />
            <PropsTable props={props} />
        </>
    );
}
