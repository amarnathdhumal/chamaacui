import { cn } from "@/lib/utils";

interface GifTextProps {
    /**
     * The text to display
     */
    text?: string;
    /**
     * The source URL for the background image/gif
     */
    gif?: string;
    /**
     * Class for the text element
     */
    className?: string;
    /**
     * Class for the container (e.g. height, background)
     */
    containerClassName?: string;
}

const GifText = ({
    text = "CHAMAAC",
    gif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JlbXczemI2YnByaXhrN3ZmbmppdGthMjczdHVlaDVucWxpMzcwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hTBdZxUHG2r0XwLFSL/giphy.gif",
    className,
    containerClassName,
}: GifTextProps) => {
    return (
        <div className={cn("flex flex-col items-center justify-center p-4", containerClassName)}>
            <h2
                className={cn(
                    "text-[clamp(80px,12vw,150px)] font-extrabold text-transparent bg-clip-text bg-cover bg-center bg-no-repeat select-none text-center leading-tight uppercase",
                    className
                )}
                style={{
                    backgroundImage: `url(${gif})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                }}
            >
                {text}
            </h2>
        </div>
    );
};

export default GifText;
