import { constructMetadata } from "@/lib/utils";
import AnimatedIconsGrid from "./animated-icons-grid";

export const metadata = constructMetadata({
    title: "Animated Icons",
    description: "A collection of smooth, micro-interaction animations for your icons.",
    image: "/components/animated-icons.png",
});

export default function AnimatedIconsPage() {
    return <AnimatedIconsGrid />;
}
