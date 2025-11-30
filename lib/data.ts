import { SidebarDataTypes } from "./types";

export const sidebarData: SidebarDataTypes[] = [
  {
    componentName: "Introduction",
    link: "",
    category: "Overview",
  },
    {
    componentName: "Carousel",
    link: "/carousel",
    category: "Gallery",
    isNew: true,
  },
    {
    componentName: "Orbiting Icons",
    link: "/orbiting-icons",
    category: "Cards",
    isNew: true,
  },
  {
    componentName: "Animated Icons",
    link: "/animated-icons",
    category: "Animated Icons",
    isNew: true,
  },
  {
    componentName: "Copy",
    link: "/animated-icons/copy-icon",
    category: "Animated Icons",
    
  },
  {
    componentName: "Wavy",
    link: "/animated-icons/wavy-icon",
    category: "Animated Icons",
    
  },
  {
    componentName: "Adjustments",
    link: "/animated-icons/adjustments-icon",
    category: "Animated Icons",
    
  },
  
  {
    componentName: "Slide Up Button",
    link: "/slideup-button",
    category: "Buttons",
  },

  {
    componentName: "Dock",
    link: "/dock",
    category: "Navigation",
  },


];

export interface ComponentCardType {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  category: string;
  bgColor?: string;
}

export const componentCards: ComponentCardType[] = [
    {
    title: "Orbiting Icons",
    description: "A dynamic, rotating card component that displays a circular array of icons with smooth animations.",
    imagePath: "/components/orbiting-icons.svg",
    link: "/components/orbiting-icons",
    category: "Cards",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Carousel",
    description: "A smooth, auto-playing 3D carousel component with layout animations using Framer Motion.",
    imagePath: "/components/carousel.png",
    link: "/components/carousel",
    category: "Gallery",
    bgColor: "bg-black dark:bg-black"
  },
  {
    title: "Animated Icons",
    description: "A collection of smooth, micro-interaction animations for your icons.",
    imagePath: "/components/animated-icons.png",
    link: "/components/animated-icons",
    category: "Animated Icons",
    bgColor: "bg-black dark:bg-black"
  },

  {
    title: "Dock",
    description: "A navigation dock component with smooth animations and hover effects, perfect for desktop interfaces.",
    imagePath: "/components/dock.svg",
    link: "/components/dock",
    category: "Navigation",
     bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Slide Up Button",
    description: "An animated button with a slide-up text effect on hover, creating an engaging interactive experience.",
    imagePath: "/components/slide-up-button.png",
    link: "/components/slideup-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },

  
];
