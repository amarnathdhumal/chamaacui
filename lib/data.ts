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
    componentName: "Buttons",
    link: "/buttons",
    category: "Buttons",
  },
  {
    componentName: "Slide Up Button",
    link: "/slideup-button",
    category: "Buttons",
  },
  {
    componentName: "Focus Button",
    link: "/focus-button",
    category: "Buttons",
    isNew: true,
  },

  {
    componentName: "Dock",
    link: "/dock",
    category: "Navigation",
  },
  {
    componentName: "Feature Steps",
    link: "/feature-steps",
    category: "Sections",
    isNew: true,
  },
  {
    componentName: "Gauge",
    link: "/gauge",
    category: "Sections",
    isNew: true,
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
    title: "Gauge",
    description: "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
    imagePath: "/components/gauge.png",
    link: "/components/gauge",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
    {
    title: "Orbiting Icons",
    description: "A dynamic, rotating card component that displays a circular array of icons with smooth animations.",
    imagePath: "/components/orbiting-icons.png",
    link: "/components/orbiting-icons",
    category: "Cards",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Feature Steps",
    description: "A dynamic feature showcase with auto-playing steps and synchronized image transitions.",
    imagePath: "/components/features-step.png",
    link: "/components/feature-steps",
    category: "Sections",
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
    title: "Buttons",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/buttons.png",
    link: "/components/buttons",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
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
];
