"use client";

import GreenButton from "./green-button";
import { Header } from "@/app/components/header";
import Image from "next/image";
import IconBox from "./icon-box";
import { m } from "motion/react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <main className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 ">
        <Image
          src="/images/hero.svg"
          alt="Hero"
          width={1440}
          height={1024}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0" />

      {/* Header */}
      <m.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute inset-0 w-full"
      >
        <Header />
      </m.div>

      {/* Hero Content */}
      <div className="h-full flex justify-between items-end max-w-[1440px] mx-auto w-full px-[25px] overflow-hidden">
        {/* Top left icon */}

        <m.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={cn(
            "absolute ",
            "lg:left-[300px] sm:left-[100px] left-6",
            "md:top-[20%] top-[25%]"
          )}
        >
          <IconBox img="/images/icon1.svg" rotate="-42deg" />
        </m.div>

        {/* Top right icon */}
        <m.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={cn(
            "absolute ",
            "lg:right-[300px] sm:right-[100px] right-6",
            "md:top-[20%] top-[25%]"
          )}
        >
          <IconBox img="/images/icon2.svg" rotate="42deg" />
        </m.div>

        {/* Bottom left icon */}
        <m.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className={cn(
            "absolute ",
            "lg:left-[300px] sm:left-[100px] left-6",
            "md:top-[65%] top-[60%]"
          )}
        >
          <IconBox img="/images/icon3.svg" rotate="-60deg" />
        </m.div>

        {/* Bottom right icon */}
        <m.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.4, delay: 1.9 }}
          className={cn(
            "absolute ",
            "lg:right-[300px] sm:right-[100px] right-6",
            "md:top-[65%] top-[60%]"
          )}
        >
          <IconBox img="/images/icon4.svg" rotate="60deg" />
        </m.div>

        {/* Hero Content */}
        <m.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className={cn(
            "w-full h-full z-10",
            " flex flex-col  ",
            " items-center justify-center ",
            "gap-6 md:gap-8"
          )}
        >
          <div className=" text-white  text-center">
            <h1 className="md:text-[60px] text-[32px] font-medium md:font-semibold leading-[1] tracking-tighter ">
              Build Strength.
              <br />
              Unlock Your Potential.
            </h1>
          </div>

          <div>
            <GreenButton
              name="Get Started"
              onClick={() => console.log("Get Started")}
            />
          </div>
        </m.div>
      </div>
    </main>
  );
};

export default Hero;
