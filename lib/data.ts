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
  // text animations
  {
    componentName: "Dancing Letters",
    link: "/dancing-letters",
    category: "Text Animations",
    isNew: true,
  },
  {
    componentName: "Gif Text",
    link: "/gif-text",
    category: "Text Animations",
    isNew: true,
  },
  // sections
   {
    componentName: "Feature Steps",
    link: "/feature-steps",
    category: "Sections",
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
    componentName: "Neo Brutalist Button",
    link: "/neo-brutalist-button",
    category: "Buttons",
    isNew: true,
  },
    {
    componentName: "Carousel",
    link: "/carousel",
    category: "Sections",
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
  videoSrc?: string;
  link: string;
  category: string;
  bgColor?: string;
}

export const componentCards: ComponentCardType[] = [
    {
    title: "Gauge",
    description: "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
    imagePath: "/components/gauge.svg",
    videoSrc: "https://assets.amarn.me/gauge.mp4",
    link: "/components/gauge",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
    {
    title: "Gif Text",
    description: "A stunning text effect that uses a GIF as the fill color.",
    imagePath: "/components/gif-text.svg", 
    videoSrc: "https://assets.amarn.me/gif-text.mp4",
    link: "/components/gif-text",
    category: "Text Animations",
    bgColor: "bg-black dark:bg-black",
  },
 
  {
    title: "Premium Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/premium-button.svg",
    videoSrc: "https://assets.amarn.me/premium_button.mp4",
    link: "/components/premium-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
     {
    title: "Neo Brutalist Button",
    description: "A bold, retro-styled button with skewed design, offset shadow, and shimmer effect.",
    imagePath: "/components/neo-brutalist-button.svg",
    videoSrc: "https://assets.amarn.me/neo-brutalist-button.mp4",
    link: "/components/neo-brutalist-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Shimmer Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/shimmer-button.svg",
    videoSrc: "https://assets.amarn.me/shimmer-button.mp4",
    link: "/components/shimmer-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
    
    {
    title: "Dancing Letters",
    description: "A sleek, interactive text animation component with physics-based effects.",
    imagePath: "/components/dancing-letters.svg",
    videoSrc: "https://assets.amarn.me/dancing-lettersv3.mp4",
    link: "/components/dancing-letters",
    category: "Text Animations",
    bgColor: "bg-black dark:bg-black",
  },
    {
    title: "Slide Up Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/slideup-button.svg",
    videoSrc: "https://assets.amarn.me/slide-up-button.mp4",
    link: "/components/slideup-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
    {
    title: "Focus Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/focus-button.svg",
    videoSrc: "https://assets.amarn.me/focus-button.mp4",
    link: "/components/focus-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
 
    {
    title: "Carousel",
    description: "A smooth, auto-playing 3D carousel component with layout animations using Framer Motion.",
    imagePath: "/components/carousel.png",
    videoSrc: "https://assets.amarn.me/carousel.mp4",
    link: "/components/carousel",
    category: "Gallery",
    bgColor: "bg-black dark:bg-black"
  },
  {
    title: "Animated Icons",
    description: "A collection of smooth, micro-interaction animations for your icons.",
    imagePath: "/components/animated-icons.png",
    videoSrc: "https://assets.amarn.me/animated-icons.mp4",
    link: "/components/animated-icons",
    category: "Animated Icons",
    bgColor: "bg-black dark:bg-black"
  },

  {
    title: "Dock",
    description: "A navigation dock component with smooth animations and hover effects, perfect for desktop interfaces.",
    imagePath: "/components/dock.svg",
    videoSrc: "https://assets.amarn.me/dock.mp4",
    link: "/components/dock",
    category: "Navigation",
     bgColor: "bg-black dark:bg-black",
  },
{
    title: "Feature Steps",
    description: "A dynamic feature showcase with auto-playing steps and synchronized image transitions.",
    imagePath: "/components/features-step.png",
    videoSrc: "https://assets.amarn.me/features-section.mp4",
    link: "/components/feature-steps",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
];
