"use client";

import { Header } from "./components/header";
import SlideUpButton from "./components/slideup-button/slide-up-button";
import { useRouter } from "next/navigation";
import HeroGrid from "@/components/ui/hero-grid";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full dark:bg-black bg-white overflow-hidden flex flex-col max-w-[1440px] mx-auto px-12">
      <Header />
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0"

      />
      <div className="flex flex-row justify-between items-center flex-1 z-10 relative w-full  mx-auto gap-12  ">
        {/* Content Section */}
        <div className="flex flex-col max-w-[600px]">
          <h1 className="text-[72px] font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter" >
            Animated Components for Modern Web.
          </h1>
          <p className="text-xl text-left text-black dark:text-white my-5">
            Transform your UI with production-ready animated components. Free and open source.
          </p>
          <div className="">
            <div onClick={() => router.push("/components")} className="w-fit">
              <SlideUpButton className="bg-black dark:bg-white text-white dark:text-black">
                Explore Components
              </SlideUpButton>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex-1 max-w-[500px]">
          <HeroGrid />
        </div>
      </div>
    </div>
  );
}
