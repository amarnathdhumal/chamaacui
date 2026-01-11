import { constructMetadata } from "@/lib/utils";
import AnimatedIconsGrid from "../components/animated-icons/animated-icons-grid";

export const metadata = constructMetadata({
    title: "Animated Icons",
    description: "A collection of smooth, micro-interaction animations for your icons.",
    image: "/components/animated-icons.png",
});

export default function AnimatedIconsPage() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <AnimatedIconsGrid />
        </div>
    );
}
