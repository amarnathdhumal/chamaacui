import { motion, SVGMotionProps } from "motion/react";

const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1100px] mx-auto">
            <MotionContainer>
                <CopyIcon className="size-10 text-black dark:text-white" />
                <h3 className="text-xl font-semibold text-black dark:text-white mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Copy components
                </h3>
                <p className="text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Copy components with a single click, no more manual copying and pasting.
                </p>
            </MotionContainer>
            <MotionContainer>
                <SparklesIcon className="size-10 text-black dark:text-white" />
                <h3 className="text-xl font-semibold text-black dark:text-white mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Smooth animations
                </h3>
                <p className="text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Beautiful, smooth animations that enhance user experience and engagement.
                </p>
            </MotionContainer>
            <MotionContainer>
                <RocketIcon className="size-10 text-black dark:text-white" />
                <h3 className="text-xl font-semibold text-black dark:text-white mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Fully customizable
                </h3>
                <p className="text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Battle-tested components ready to use in your projects. No configuration needed.
                </p>
            </MotionContainer>
        </div>
    );
};

const MotionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            className="p-2 rounded-[16px] backdrop-blur-sm border border-gray-200 dark:border-neutral-800 relative"

        >

            <div className="bg-gray-100 dark:bg-[#111111] p-4 rounded-[12px] relative h-full"
            >

                {children}
            </div>
        </motion.div>
    )
}

// const Dots = () => {
//     return (
//         <>
//             <div className="size-3 rounded-full bg-gray-200 dark:bg-[#222222] absolute -right-1 -top-1" />
//             <div className="size-3 rounded-full bg-gray-200 dark:bg-[#222222] absolute -right-1 -bottom-1" />
//             <div className="size-3 rounded-full bg-gray-200 dark:bg-[#222222] absolute -left-1 -top-1" />
//             <div className="size-3 rounded-full bg-gray-200 dark:bg-[#222222] absolute -left-1 -bottom-1" />
//         </>
//     )
// }
const CopyIcon = (
    props: React.SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>
) => {
    return (
        <motion.svg
            {...props}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={{
                    pathLength: [1, 0, 1],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </motion.svg>
    )
}

const SparklesIcon = (
    props: React.SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>
) => {
    return (
        <motion.svg
            {...props}
            animate={{
                rotate: [0, 360],
            }}
            transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            }}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-currency-ripple">
            <motion.path
                stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path

                d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><motion.path

                d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><motion.path

                d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <motion.path

                d="M10 12h3l2 -2.5" />
            <motion.path

                d="M15 14.5l-2 -2.5" />
        </motion.svg>
    )
}

const RocketIcon = (
    props: React.SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>
) => {
    return (
        <motion.svg
            {...props}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                animate={{
                    pathLength: [1, 0, 1],
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
            <motion.path
                animate={{
                    pathLength: [1, 0, 1],
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.2,
                }}
                d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
            <motion.path
                animate={{
                    pathLength: [1, 0, 1],
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.4,
                }}
                d="M14 21a6 6 0 0 0 6 -6a6 6 0 0 0 -6 6" />
        </motion.svg>
    )
}

export default HeroGrid;