import { SidebarDataTypes } from "./types";

export const sidebarData: SidebarDataTypes[] = [
  {
    componentName: "Introduction",
    link: "",
    category: "Overview",
  },
  // animated icons
  {
    componentName: "Icons Overview",
    link: "/animated-icons",
    category: "Animated Icons",
  },
  // backgrounds
  {
    componentName: "Interactive Grid",
    link: "/backgrounds/interactive-grid",
    category: "Backgrounds",
    isNew: true,
  },
  // buttons
  {
    componentName: "Buttons Overview",
    link: "/buttons",
    category: "Buttons",
  },
  {
    componentName: "Premium Button",
    link: "/buttons/premium-button",
    category: "Buttons",
  },
  {
    componentName: "Glowing Border",
    link: "/buttons/glowing-border-button",
    category: "Buttons",
    isNew: true,
  },
  {
    componentName: "Shimmer Button",
    link: "/buttons/shimmer-button",
    category: "Buttons",
  },
  {
    componentName: "Slide Up Button",
    link: "/buttons/slideup-button",
    category: "Buttons",
  },
  {
    componentName: "Focus Button",
    link: "/buttons/focus-button",
    category: "Buttons",
  },
  {
    componentName: "Neo Brutalist",
    link: "/buttons/neo-brutalist-button",
    category: "Buttons",
  },

  // text animations
  {
    componentName: "Text Loop",
    link: "/text-animations/text-loop",
    category: "Text Animations",
    isNew: true,
  },
  {
    componentName: "Dancing Letters",
    link: "/text-animations/dancing-letters",
    category: "Text Animations",
  },
  {
    componentName: "Gif Text",
    link: "/text-animations/gif-text",
    category: "Text Animations",
  },

  // inputs
  {
    componentName: "AI Input",
    link: "/inputs/ai-input",
    category: "Inputs",
    isNew: true,
  },

  // navigation
  {
    componentName: "Dock",
    link: "/navigation/dock",
    category: "Navigation",
  },

  // sections
  {
    componentName: "Feature Steps",
    link: "/sections/feature-steps",
    category: "Sections",
  },
  {
    componentName: "Gauge",
    link: "/sections/gauge",
    category: "Sections",
  },
  {
    componentName: "Stats Cards",
    link: "/sections/stats-cards",
    category: "Sections",
    isNew: true,
  },

  // carousels
  {
    componentName: "Carousel",
    link: "/carousels/carousel",
    category: "Carousels",
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
    title: "Animated Icons",
    description: "A collection of smooth, micro-interaction animations for your icons.",
    imagePath: "/components/animated-icons.png",
    videoSrc: "https://assets.amarn.me/animated-iconsv2.mp4",
    link: "/components/animated-icons",
    category: "Animated Icons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Text Loop",
    description: "An animated text loop with typewriter and gradient effect.",
    imagePath: "/components/text-animations/text-loop.png",
    videoSrc: "https://assets.amarn.me/text-loop.mp4",
    link: "/components/text-animations/text-loop",
    category: "Text Animations",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Interactive Grid",
    description: "A highly interactive, mouse-sensitive grid background rendered.",
    imagePath: "/components/backgrounds/interactive-grid.png",
    videoSrc: "https://assets.amarn.me/interactive-grid.mp4",
    link: "/components/backgrounds/interactive-grid",
    category: "Backgrounds",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Stats Cards",
    description: "A set of animated statistic cards with hover effects.",
    imagePath: "/components/stats-cards.png",
    videoSrc: " https://assets.amarn.me/stats-card.mp4",
    link: "/components/sections/stats-cards",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Gauge",
    description: "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
    imagePath: "/components/sections/gauge.png",
    videoSrc: "https://assets.amarn.me/gauge.mp4",
    link: "/components/sections/gauge",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Gif Text",
    description: "A stunning text effect that uses a GIF as the fill color.",
    imagePath: "/components/text-animations/gif-text.png",
    videoSrc: "https://assets.amarn.me/gif-text.mp4",
    link: "/components/text-animations/gif-text",
    category: "Text Animations",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Premium Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/buttons/premium-button.png",
    videoSrc: "https://assets.amarn.me/premium_button.mp4",
    link: "/components/buttons/premium-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Neo Brutalist Button",
    description: "A bold, retro-styled button with skewed design, offset shadow, and shimmer effect.",
    imagePath: "/components/buttons/ne0-brutalist.png",
    videoSrc: "https://assets.amarn.me/neo-brutalist-buttonv2.mp4",
    link: "/components/buttons/neo-brutalist-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Glowing Border Button",
    description: "A button with a glowing border effect.",
    imagePath: "/components/buttons/glowing-border.png",
    videoSrc: "https://assets.amarn.me/glowing-border-button.mp4",
    link: "/components/buttons/glowing-border-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Shimmer Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/buttons/shimmer.png",
    videoSrc: "https://assets.amarn.me/shimmer-button.mp4",
    link: "/components/buttons/shimmer-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "AI Input",
    description: "A polished AI input component with model selection, tools, file uploads, and smooth animations.",
    imagePath: "/components/inputs/ai-input.png",
    videoSrc: "https://assets.amarn.me/ai-input.mp4",
    link: "/components/inputs/ai-input",
    category: "Inputs",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Dancing Letters",
    description: "A sleek, interactive text animation component with physics-based effects.",
    imagePath: "/components/text-animations/dancing-letters.png",
    videoSrc: "https://assets.amarn.me/dancing-lettersv3.mp4",
    link: "/components/text-animations/dancing-letters",
    category: "Text Animations",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Slide Up Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/slide-up-button.png",
    videoSrc: "https://assets.amarn.me/slide-up-button.mp4",
    link: "/components/buttons/slideup-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Focus Button",
    description: "A collection of interactive and animated buttons for your applications.",
    imagePath: "/components/buttons/focus-button.png",
    videoSrc: "https://assets.amarn.me/focus-button.mp4",
    link: "/components/buttons/focus-button",
    category: "Buttons",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Carousel",
    description: "A smooth, auto-playing 3D carousel component with layout animations using Framer Motion.",
    imagePath: "/components/carousel.png",
    videoSrc: "https://assets.amarn.me/carousel.mp4",
    link: "/components/carousels/carousel",
    category: "Carousels",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Dock",
    description: "A navigation dock component with smooth animations and hover effects, perfect for desktop interfaces.",
    imagePath: "/components/navigation/dock.png",
    videoSrc: "https://assets.amarn.me/dock.mp4",
    link: "/components/navigation/dock",
    category: "Navigation",
    bgColor: "bg-black dark:bg-black",
  },
  {
    title: "Feature Steps",
    description: "A dynamic feature showcase with auto-playing steps and synchronized image transitions.",
    imagePath: "/components/features-step.png",
    videoSrc: "https://assets.amarn.me/features-section.mp4",
    link: "/components/sections/feature-steps",
    category: "Sections",
    bgColor: "bg-black dark:bg-black",
  },
];
