import { Header } from "./components/header";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import HeroGrid from "@/components/ui/hero-grid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-full lg:h-screen w-full dark:bg-black bg-white overflow-hidden flex flex-col max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      <Header />

      <div className="flex flex-col lg:flex-row justify-between mt-[100px] lg:mt-0 mb-[30px] lg:mb-0 lg:items-center flex-1 z-10 relative w-full  mx-auto gap-8 md:gap-12  ">
        {/* Content Section */}
        <div className="flex flex-col max-w-[500px] xl:max-w-[500px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-medium text-left text-black dark:text-white leading-[0.95] tracking-tighter">
            Make your UI shine.
          </h1>
          <p className="text-base/5 md:text-lg/7 text-left text-neutral-500 dark:text-gray-400 my-5">
            A collection of beautiful, animated components to elevate your web
            projects instantly.
          </p>
          <div className="">
            <Link href="/components" className="w-fit">
              <SlideUpButton
                className="
                px-4 py-2 md:px-6 md:py-3
                bg-black dark:bg-white text-white dark:text-black text-sm md:text-base  "
              >
                Explore Components
              </SlideUpButton>
            </Link>
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
