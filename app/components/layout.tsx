import Sidebar from "@/components/ui/sidebar";
import React from "react";
import { Header } from "./header";

const ComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full ">
      <Header />
      <div className="mt-28 flex w-full min-w-0 gap-6  lg:pl-12 max-w-[1440px] mx-auto">
        <div className="hidden lg:block sticky top-28 self-start">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0 ">{children}</div>
      </div>
    </div>
  );
};

export default ComponentLayout;
