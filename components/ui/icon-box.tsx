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
                "w-[60px] h-[60px] ",
                "shadow-[inset_0px_0px_15px_0px_rgba(173,208,48,0.62),0px_4px_5px_0px_rgba(173,208,48,0.25),0px_0px_15px_1px_rgba(173,208,48,0.6),inset_0px_0px_6px_0px_rgba(173,208,48,0.25)]"
            )}
        >
            <Image src={img} alt="icon" width={30} height={30}
          
            />
        </div>
    )
}

export default IconBox