"use client";

import GreenButton from "./green-button";
import Header from "./header";
import Image from "next/image";
import IconBox from "./icon-box";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <main className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute inset-0 w-full"
      >
        <Header />
      </motion.div>

      {/* Hero Content */}
      <div className="h-full flex justify-between items-end max-w-[1440px] mx-auto pb-[40px] relative z-10 px-[25px]">
        {/* Top left icon */}

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={cn(
            "absolute ",
            "lg:left-[300px] sm:left-[100px] left-6",
            "md:top-1/4 top-[25%]"
          )}
        >
          <IconBox img="/images/icon1.svg" rotate="-42deg" />
        </motion.div>

        {/* Top right icon */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={cn(
            "absolute ",
            "lg:right-[300px] sm:right-[100px] right-6",
            "md:top-1/4 top-[25%]"
          )}
        >
          <IconBox img="/images/icon2.svg" rotate="42deg" />
        </motion.div>

        {/* Bottom left icon */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className={cn(
            "absolute ",
            "lg:left-[300px] sm:left-[100px] left-6",
            "md:top-[60%] top-[60%]"
          )}
        >
          <IconBox img="/images/icon3.svg" rotate="-60deg" />
        </motion.div>

        {/* Bottom right icon */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.4, delay: 1.9 }}
          className={cn(
            "absolute ",
            "lg:right-[300px] sm:right-[100px] right-6",
            "md:top-[60%] top-[60%]"
          )}
        >
          <IconBox img="/images/icon4.svg" rotate="60deg" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className={cn(
            "w-full h-full",
            "md:flex-row flex flex-col  ",
            " md:items-end md:justify-between items-center justify-center ",
            "gap-6 md:gap-4"
          )}
        >
          <div className="md:text-[#ADD030] text-white md:text-left text-center">
            <h1 className="md:text-[48px] text-[32px] font-medium md:font-semibold leading-[1] tracking-tighter ">
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
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
