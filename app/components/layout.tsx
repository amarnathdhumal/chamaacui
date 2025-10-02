import Sidebar from "@/components/ui/sidebar";
import React from "react";

const ComponentLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex h-full px-12 ">
            <div className="mt-28 flex w-full min-w-0 gap-6">
            <div className="sticky top-28 self-start">

             <Sidebar />
             </div>
            <div className="flex-1 min-w-0 ">
               {children}
            </div>
            </div>
        </div>
    )
}

export default ComponentLayout;