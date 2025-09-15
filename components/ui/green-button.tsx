import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
const GreenButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "inline-flex h-10 sm:h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] border-0 bg-[#ADD030] px-4 font-mono leading-none text-slate-800 no-underline ",
        "text-[14px] sm:text-[16px]",
       
         "shadow-[inset_0px_0px_8px_0px_rgba(173,208,48,0.5),0px_2px_3px_0px_rgba(173,208,48,0.2),0px_0px_8px_1px_rgba(173,208,48,0.5),inset_0px_0px_3px_0px_rgba(173,208,48,0.2)]",
       
      )}
      onClick={onClick}
    >
      {name}
      <ChevronRight className="w-4 h-4 ml-1" />
 
    </div>
  );
};

export default GreenButton;

