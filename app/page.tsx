import { Header } from "./components/header";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import Link from "next/link";
import TextLoop from "./components/text-animations/text-loop/text-loop";
import VideoBentoGrid from "../components/ui/video-bento-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full dark:bg-black bg-white overflow-x-hidden flex flex-col max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      <Header />

      <div className="flex flex-col lg:flex-row justify-center mt-[100px] md:mt-[150px] mb-[30px] lg:mb-0 flex-1 z-10 relative w-full mx-auto gap-8 md:gap-12">
        {/* Content Section */}
        <div className="flex flex-col items-start sm:items-center">
          {/* Mobile Static Heading */}
          <h1 className="text-7xl font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter sm:hidden mb-2">
            Make your UI Shine.
          </h1>

          {/* Desktop/Tablet Animated Heading */}
          <TextLoop
            className="hidden sm:flex"
            staticTextClassName="text-6xl lg:text-7xl xl:text-8xl font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter"
            rotatingTextClassName="text-6xl lg:text-7xl xl:text-8xl font-semibold text-left leading-[0.95] tracking-tighter bg-gradient-to-r from-neutral-600 to-black dark:from-neutral-400 dark:to-white text-black dark:text-white"
            cursorClassName="sm:h-[3.8rem] md:h-[4.5rem]  xl:h-[5.7rem] bg-black dark:bg-white"
            backgroundClassName="bg-gradient-to-r from-transparent via-neutral-300/50 to-neutral-400/80 dark:from-transparent dark:via-neutral-700/50 dark:to-neutral-600/80"
            staticText="Make your UI"
            rotatingTexts={["Shine.", "Pop.", "Mesmerize."]}
          />

          <p className="text-base/5 md:text-lg/6 text-left sm:text-center text-neutral-600 dark:text-gray-300 my-5 max-w-[550px]">
            A premium collection of interactable, motion-rich components
            designed to make your web presence unforgettable.
          </p>
          <div className="flex justify-center">
            <Link href="/components" className="w-fit">
              <SlideUpButton
                className="
                px-4 py-2 md:px-6 md:py-3
                bg-black dark:bg-white text-white dark:text-black text-sm md:text-base font-medium tracking-tight"
              >
                Explore Components
              </SlideUpButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Bento Grid */}
      <VideoBentoGrid />

      <div className=" flex justify-center mb-10">
        <p className="text-sm/5 tracking-[-0.01em]">
          Build with ❤️ by{" "}
          <Link
            href={"https://x.com/amarnathdhumal"}
            target="_blank"
            className="underline"
          >
            Amarnath Dhumal
          </Link>
        </p>
      </div>
    </div>
  );
}
