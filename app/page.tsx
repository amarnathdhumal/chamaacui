import { Header } from "./components/header";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import Link from "next/link";
import TextLoop from "./components/text-animations/text-loop/text-loop";
import VideoBentoGrid from "./components/video-bento-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full dark:bg-black bg-white overflow-x-hidden flex flex-col max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      <Header />

      <div className="flex flex-col lg:flex-row justify-center mt-[100px] md:mt-[150px] mb-[30px] lg:mb-0 flex-1 z-10 relative w-full mx-auto gap-8 md:gap-12">
        {/* Content Section */}
        <div className="flex flex-col items-center">
          <TextLoop
            staticTextClassName="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter"
            rotatingTextClassName="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-medium text-left leading-[0.95] tracking-tighter bg-gradient-to-r from-neutral-600 to-black dark:from-neutral-400 dark:to-white"
            cursorClassName="h-[2.5rem] sm:h-[3rem] lg:h-[3.75rem] xl:h-[5.7rem] bg-black dark:bg-white"
            backgroundClassName="bg-gradient-to-r from-transparent via-neutral-300/50 to-neutral-400/80 dark:from-transparent dark:via-neutral-700/50 dark:to-neutral-600/80"
            staticText="Make your UI"
            rotatingTexts={["Shine.", "Flow.", "Convert."]}
          />

          <p className="text-base/5 md:text-lg/7 text-center text-neutral-500 dark:text-gray-400 my-5">
            A collection of beautiful, animated components to elevate your web
            projects instantly.
          </p>
          <div className="flex justify-center">
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
      </div>

      {/* Video Bento Grid */}
      <VideoBentoGrid />
    </div>
  );
}
