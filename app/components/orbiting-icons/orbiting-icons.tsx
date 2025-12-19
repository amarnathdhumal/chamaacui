"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface IconProps {
    img: string;
    index: number;
}

interface OrbitingIconsProps {
    /**
     * Array of icon URLs to display
     */
    icons: string[];
    /**
     * Radius of the circular path
     */
    radius?: number;
    /**
     * Duration of the full rotation in seconds
     */
    duration?: number;
    /**
     * Title text to display
     */
    title?: string;
    /**
     * Description text to display
     */
    description?: string;
}

const OrbitingIcons = ({
    icons,
    radius = 300,
    duration = 40,
    title = "Automate Your Workflow",
    description = "Connect your favorite tools and boost productivity effortlessly."
}: OrbitingIconsProps) => {
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

    // Trim to exact needed count
    repeatedIcons.length = iconsNeeded;

    return (

        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[32px] w-[300px] h-[300px] md:w-[400px] md:h-[350px] overflow-hidden relative flex flex-col items-center shadow-2xl">

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
                    duration: duration
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
            <div className="absolute bottom-6 md:bottom-12 z-20 flex flex-col items-center text-center gap-[5px] px-5">
                <h2 className="text-neutral-900 dark:text-white text-[20px] md:text-[24px] font-medium leading-[1.1]">
                    {title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-[14px] leading-snug">
                    {description}
                </p>

            </div>
        </div>

    )
}

const IconCard = ({ img }: IconProps) => {
    return (
        <motion.div
            className="size-[50px] md:size-[65px] flex items-center justify-center relative rounded-full bg-white dark:bg-neutral-700 ">
            <Image
                alt="image"
                src={img}
                fill
                className="object-contain p-3 md:p-5"
            />
        </motion.div>
    )
}

export default OrbitingIcons;
