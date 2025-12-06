import { cn } from "@/lib/utils";

const PremiumButton = () => {
    return (
        <section className="flex justify-center items-center h-[600px] ">
            <button className="relative rounded-[8px] border border-white/20 flex items-center gap-2 pl-[50px]  pr-3 tracking-tight  cursor-pointer h-[46px]">
                <Box />
                <span className=" font-medium ">Chat with Manu</span>
            </button>
        </section>
    )
}

const Box = () => {
    return (
        <div className="absolute inset-y-0 left-1 my-auto size-9 rounded-sm bg-yellow-300 flex flex-col justify-center items-center gap-px transition-all duration-400 ease-out">

            {/* 1st Box - First row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble highlight />
                <Bubble />
                <Bubble />

            </div>
            {/* 2nd Box - Second row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble />
                <Bubble />

                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble highlight />
                <Bubble />
            </div>
            {/* 3rd Box - Third row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble highlight />
                <Bubble highlight />

                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
            </div>
            {/* 4th Box - Fourth row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble highlight />
                <Bubble highlight />

                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
                <Bubble highlight />
            </div>

            {/* 5th Box - Fifth row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble />
                <Bubble />
                <Bubble />

                <Bubble />
                <Bubble />
                <Bubble highlight />
                <Bubble />
            </div>
            {/* 6th Box - Sixth row of bubbles */}
            <div className="flex gap-[2px]">
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble highlight />

                <Bubble />
                <Bubble />
            </div>





        </div>
    )
}

const Bubble = ({ highlight }: { highlight?: boolean }) => {
    return (
        <span className={cn("inline-block size-[3px] rounded-full bg-white/25", highlight && "bg-white animate-nudge")} />
    )
}

export default PremiumButton;