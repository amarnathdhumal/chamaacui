import Sidebar from "@/components/ui/sidebar";
import React from "react";

const ComponentLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex h-full px-12 ">
            <div className="mt-28 flex w-full">
             <Sidebar />
            <div className="flex-1">
               {children}
            </div>
            </div>
        </div>
    )
}

export default ComponentLayout;