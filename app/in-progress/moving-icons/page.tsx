"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface IconProps {
    img: string;
    index: number;
}

const icons: string[] = [
    "/icons/gmail.png",
    "/icons/linear.png",
    "/icons/slack.png",
    "/icons/whatsapp.png",
    "/icons/x.png"
]

const MovingCards = () => {
    const radius = 300; // Radius based on 600x600 circle
    const iconSize = 80; // Size of each icon box

    // Calculate how many icons fit around the circle with gap
    const circumference = 2 * Math.PI * radius;
    // Use larger spacing to create gaps (1.2 factor)
    const iconsNeeded = Math.floor(circumference / (iconSize * 1.1));

    // Repeat the icons array to fill the circle
    const repeatedIcons: string[] = [];
    for (let i = 0; i < iconsNeeded; i++) {
        repeatedIcons.push(icons[i % icons.length]);
    }

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[32px] w-[400px] h-[400px] overflow-hidden relative flex flex-col items-center shadow-2xl">

                {/* Rotating Icons Centered */}
                <motion.div
                    className="absolute"
                    style={{
                        width: radius * 2,
                        height: radius * 2,
                        top: '20%',

                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40
                    }}
                >
                    {repeatedIcons.map((item, index) => {
                        const angle = (index / repeatedIcons.length) * 2 * Math.PI;
                        const x = radius + Math.cos(angle) * radius - 40; // -40 to center the icon (80px/2)
                        const y = radius + Math.sin(angle) * radius - 40;

                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: `${x}px`,
                                    top: `${y}px`,
                                }}
                            >
                                <IconCard img={item} index={index} />
                            </div>
                        );
                    })}
                </motion.div>

                {/* Text Content Aligned to Bottom */}
                <div className="absolute bottom-12 z-20 flex flex-col items-center text-center gap-[5px] px-5">
                    <h2 className="text-neutral-900 dark:text-white text-[24px] font-medium leading-[1.1]">
                        Automate Your Workflow
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-[14px] leading-snug">
                        Connect your favorite tools and boost productivity effortlessly.
                    </p>

                </div>

                {/* Gradient Overlay for depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent pointer-events-none z-10" /> */}
            </div>
        </div>
    )
}



const IconCard = ({ img }: IconProps) => {
    // Add slight rotation alternating for visual interest
    // const rotation = (index % 2 === 0) ? -5 : -5;

    return (
        <motion.div


            className="size-[80px] flex items-center justify-center relative rounded-full bg-white dark:bg-neutral-700 ">
            <Image
                alt="image"
                src={img}
                width={50}
                height={50}
            />
        </motion.div>
    )
}

export default MovingCards