"use client"

import { ViewAreaTypes } from "@/lib/types"
import { useState } from "react"
import TabButton from "./tab-button"
import { IconEye, IconCode } from "@tabler/icons-react"

const ViewArea = ({ children, title, description }: ViewAreaTypes) => {
    const [preview, setPreview] = useState<boolean>(true);

    const toggleTab = () => {
        setPreview((prev) => !prev)
    }

    return (
        <div className="flex flex-col ml-6 w-full h-full mb-8" >
            <h1 className="text-4xl font-bold text-black dark:text-white">
                {title}
            </h1>
            <p className="text-base text-neutral-800  dark:text-gray-400 my-4">
                {description}
            </p>
            <div className="flex flex-row gap-4 mb-6">
                <TabButton
                    name="Preview"
                    onClick={toggleTab}
                    isActive={preview}
                    icon={<IconEye className="size-5" />}
                />
                <TabButton
                    name="Code"
                    onClick={toggleTab}
                    isActive={!preview}
                    icon={<IconCode className="size-5" />}
                />


            </div>
            <div className="min-h-[500px] flex justify-center items-center dark:bg-neutral-800 bg-gray-200 rounded-[16px]">
                {children}
            </div>
        </div>
    )
}

export default ViewArea