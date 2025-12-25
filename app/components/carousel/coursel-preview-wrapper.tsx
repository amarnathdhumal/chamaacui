"use client";

import React from "react";
import CourselDemo from "./coursel-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface CourselPreviewWrapperProps {
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

export default function CourselPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: CourselPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full  flex h-[450px] justify-center items-center">
                        <CourselDemo />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} dependencies={["motion", "clsx", "tailwind-merge"]} />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
