import { motion, SVGMotionProps } from "motion/react";

const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1  gap-2 w-full max-w-[1100px] mx-auto border border border-gray-200 dark:border-neutral-800 rounded-[16px] p-2">
            <div className="border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-[#111111] p-4 rounded-[8px]">
                <CopyIcon className="text-black dark:text-white size-6 sm:size-8" />
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mt-3 md:mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Copy components
                </h3>
                <p className="text-sm md:text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Simply copy the source code and paste it into your project. Complete control, zero lock-in.
                </p>
            </div>

            <div className="border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-[#111111] p-4 rounded-[8px]">
                <WavyIcon className="text-black dark:text-white size-6 sm:size-8" />
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mt-3 md:mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Smooth animations
                </h3>
                <p className="text-sm md:text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Beautiful, smooth animations that enhance user experience and engagement.
                </p>
            </div>

            <div className="border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-[#111111] p-4 rounded-[8px]">
                <AdjustmentsHorizontalIcon className="text-black dark:text-white size-6 sm:size-8" />
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mt-3 md:mt-4 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Fully customizable
                </h3>
                <p className="text-sm md:text-base text-neutral-800 dark:text-gray-400  leading-tight">
                    Battle-tested components ready to use in your projects. No configuration needed.
                </p>
            </div>
        </div >
    );
};

// const MotionContainer = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <motion.div
//             className="p-2 rounded-[16px] backdrop-blur-sm border border-gray-200 dark:border-neutral-800 relative"

//         >

//             <div className="bg-gray-100 dark:bg-[#111111] p-4 rounded-[12px] relative h-full"
//             >

//                 {children}
//             </div>
//         </motion.div>
//     )
// }

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
    const { className, ...restProps } = props;
    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />

            <motion.rect
                width="12" height="12" rx="2"
                animate={{
                    x: [8, 4, 8],
                    y: [8, 4, 8],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                stroke="currentColor"
                fill="none"
            />

            <rect
                x="8" y="8" width="12" height="12" rx="2"
                className="fill-gray-100 dark:fill-[#111111]"
                stroke="currentColor"
            />
        </motion.svg>
    )
}

const WavyIcon = (
    props: React.SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>
) => {
    const { className, ...restProps } = props;
    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M3 7c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 9c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 7c3 3 6 3 9 0s6 -3 9 0",
                        "M3 5c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />

            <motion.path
                d="M3 12c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 14c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 12c3 3 6 3 9 0s6 -3 9 0",
                        "M3 10c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M3 17c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 19c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 17c3 3 6 3 9 0s6 -3 9 0",
                        "M3 15c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    )
}

const AdjustmentsHorizontalIcon = (
    props: React.SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>
) => {
    const { className, ...restProps } = props;
    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l15 0" />
            <motion.path
                animate={{ x: [0, -10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />

            <path d="M4 12l15 0" />

            <motion.path
                animate={{ x: [0, 10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />


            <path d="M4 18l15 0" />
            <motion.path
                animate={{ x: [0, -10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />


        </motion.svg>
    );
};

export default HeroGrid;