import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Animated Hero",
  description: "Build Strength. Unlock Your Potential.",
  openGraph: {
    title: "Animated Hero",
    description: "Build Strength. Unlock Your Potential.",
    url: "https://www.google.com",
    siteName: "Hero Animations",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hero Animations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Hero",
    description: "Build Strength. Unlock Your Potential.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Hero Animations",
  //   description: "Hero Animations",
  //   url: "www.goggle.com",
  //   logo: "/images/og-image.png",
  // };
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      </head> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-white dark:bg-black  max-w-[1440px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
