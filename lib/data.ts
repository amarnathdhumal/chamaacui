import { SidebarDataTypes } from "./types";

export const sidebarData: SidebarDataTypes[] = [
  {
    componentName: "Introduction",
    link: "",
    category: "Overview",
  },
  // buttons
  {
    componentName: "Buttons Overview",
    link: "/buttons",
    category: "Buttons",
  },

  // sections
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
    {
    componentName: "Premium Button",
    link: "/premium-button",
    category: "Buttons",
    isNew: true,
  },
  {
    componentName: "Shimmer Button",
    link: "/shimmer-button",
    category: "Buttons",
    isNew: true,
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
  },
    {
    componentName: "Carousel",
    link: "/carousel",
    category: "Gallery",
  },
   
  {
    componentName: "Icons Overview",
    link: "/animated-icons",
    category: "Animated Icons",
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
    title: "Gauge",
    description: "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
    imagePath: "/components/gauge.svg",
    link: "/components/gauge",
    category: "Sections",
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
    imagePath: "/components/buttons.svg",
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
