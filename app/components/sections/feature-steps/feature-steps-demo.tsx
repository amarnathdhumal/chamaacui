"use client";

import FeatureSteps from "./feature-steps";

const features = [
    {
        step: "Step 1",
        title: "Mountain Adventure",
        content: "A stunning mountain landscape captured at sunrise. The peaks are illuminated by the golden light of the morning sun.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
    },
    {
        step: "Step 2",
        title: "City Lights",
        content: "Night view of a vibrant city glowing with lights. The urban skyline reflects the energy and bustle of city life.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
    },
    {
        step: "Step 3",
        title: "Forest Path",
        content: "A peaceful walking trail surrounded by lush greenery. The path winds through the dense forest, offering a serene escape.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
    }
];

export default function FeatureStepsDemo() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <FeatureSteps
                features={features}
                autoPlayInterval={6000}
                imageClassName="h-[300px] md:h-auto"
            />
        </div>
    );
}
