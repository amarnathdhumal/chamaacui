import LightSpeedDemoWrapper from "./light-speed-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";
import fs from "fs";
import path from "path";

export const metadata = buildComponentMetadata({
  title: "Light Speed",
  description:
    "A Warp/Light-Speed hyperspace animation inspired by the Ducky3D Blender tutorial.",
  image: "/components/backgrounds/light-speed.png",
  pathname: "/components/backgrounds/light-speed",
  category: "Backgrounds",
  keywords: [
    "Warp speed",
    "Light Speed",
    "Hyperspace",
    "WebGL",
    "Three.js background",
    "Particle systems",
    "Shader",
  ],
});

export default function LightSpeedPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Light Speed background",
      description:
        "A Warp/Light-Speed hyperspace animation inspired by the Ducky3D Blender tutorial.",
      pathname: "/components/backgrounds/light-speed",
      image: "/components/backgrounds/light-speed.png",
      category: "Background shader",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      { name: "Light Speed", path: "/components/backgrounds/light-speed" },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/light-speed/light-speed.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LightSpeedDemoWrapper
        title="Light Speed"
        description={
          <>
            A Warp/Light-Speed hyperspace animation inspired by the{" "}
            <a
              href="https://www.youtube.com/watch?v=7SryYK0fYv8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Ducky3D Blender tutorial
            </a>
            .
          </>
        }
        installationSource={componentSource}
        codeFilename="light-speed-demo.tsx"
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "speed",
            type: "number",
            default: "2.4",
            description: "Warp speed multiplier",
            required: false,
          },
          {
            name: "particleCount",
            type: "number",
            default: "1000",
            description: "Number of stars/streaks in the scene",
            required: false,
          },
          {
            name: "lightColor",
            type: "string",
            default: '"#b026ff"',
            description: "Base color of the emitted light streaks",
            required: false,
          },
          {
            name: "intensity",
            type: "number",
            default: "3.0",
            description: "Glow multiplier to create HDR bloom",
            required: false,
          },
          {
            name: "radius",
            type: "number",
            default: "25",
            description: "Maximum radius of the particle spawns (tunnel width)",
            required: false,
          },
          {
            name: "cylinderLength",
            type: "number",
            default: "150",
            description: "Depth of the field before looping starts",
            required: false,
          },
        ]}
      />
    </div>
  );
}
