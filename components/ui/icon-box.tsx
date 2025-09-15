import { cn } from "@/lib/utils"
import Image from "next/image"

interface IconBoxProps {
    img: string
    rotate: string
}

const IconBox = ({ img, rotate }: IconBoxProps) => {
    return (
        <div
        style={{ transform: `rotate(${rotate})` }}
            className={cn(
                "border-4 border-[#ADD030] rounded-[15px] z-10 relative bg-black",
                "flex justify-center items-center ",
                "w-[50px] h-[50px] ",
                "md:w-[60px] md:h-[60px] ",
                  // ✅ Smaller shadow for small screens, stronger for larger
        "shadow-[inset_0px_0px_8px_0px_rgba(173,208,48,0.5),0px_2px_3px_0px_rgba(173,208,48,0.2),0px_0px_8px_1px_rgba(173,208,48,0.5),inset_0px_0px_3px_0px_rgba(173,208,48,0.2)]",
        "md:shadow-[inset_0px_0px_15px_0px_rgba(173,208,48,0.62),0px_4px_5px_0px_rgba(173,208,48,0.25),0px_0px_15px_1px_rgba(173,208,48,0.6),inset_0px_0px_6px_0px_rgba(173,208,48,0.25)]"
            )}
        >
            <Image src={img} alt="icon" width={30} height={30}
            className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] "
            />
        </div>
    )
}

export default IconBox