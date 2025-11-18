import { SidebarDataTypes } from "./types";

export const sidebarData: SidebarDataTypes[] = [
  {
    componentName: "Introduction",
    link: "",
    category: "Overview",
  },
  {
    componentName: "Slide Up Button",
    link: "/slideup-button",
    category: "Buttons",
  },

  {
    componentName: "Tilt Card",
    link: "/tilt-card",
    category: "Cards",
  },
  {
    componentName: "Invoice Card",
    link: "/invoice-card",
    category: "Cards",
  },
  {
    componentName: "Dock",
    link: "/dock",
    category: "Navigation",
  },
  {
    componentName: "Random Image Reveal",
    link: "/random-image-reveal",
    category: "Cards",
  },
];

export interface ComponentCardType {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  category: string;
}

export const componentCards: ComponentCardType[] = [
  {
    title: "Tilt Card",
    description: "A card component with a smooth tilt animation on hover that creates an engaging interactive effect.",
    imagePath: "/components/tilt-card.svg",
    link: "/components/tilt-card",
    category: "Cards",
  },

  {
    title: "Invoice Card",
    description: "A beautifully designed invoice card component with modern styling and animations.",
    imagePath: "/components/invoice-card.svg",
    link: "/components/invoice-card",
    category: "Cards",
  },
  {
    title: "Dock",
    description: "A navigation dock component with smooth animations and hover effects, perfect for desktop interfaces.",
    imagePath: "/components/dock.svg",
    link: "/components/dock",
    category: "Navigation",
  },
  {
    title: "Random Image Reveal",
    description: "A card component that reveals images with smooth animations and transitions.",
    imagePath: "/components/reveal-random-image.svg",
    link: "/components/random-image-reveal",
    category: "Cards",
  },
  {
    title: "Slide Up Button",
    description: "An animated button with a slide-up text effect on hover, creating an engaging interactive experience.",
    imagePath: "/components/slide-up-button.png",
    link: "/components/slideup-button",
    category: "Buttons",
  },
];
