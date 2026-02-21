import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CSPostHogProvider } from "./providers/posthog-provider";
import PostHogPageView from "./providers/posthog-pageview";
import { MotionProvider } from "./providers/motion-provider";
// import { Header } from "./components/header";

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
  title: "Chamaac UI | Premium UI Components",
  description:
    "Explore a collection of stunning and interactive UI components crafted with React and Motion.",
  openGraph: {
    title: "Chamaac UI | Premium UI Components",
    description:
      "Explore a collection of stunning and interactive UI components crafted with React and Motion.",
    url: "https://www.chamaac.com",
    siteName: "Chamaac UI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chamaac UI Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamaac UI | Premium UI Components",
    description:
      "Explore a collection of stunning and interactive UI components crafted with React and Motion.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://www.chamaac.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-white dark:bg-black  `}
      >
        <CSPostHogProvider>
          <PostHogPageView />
          <MotionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </MotionProvider>
        </CSPostHogProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Chamaac UI",
              url: "https://www.chamaac.com",
              description:
                "Explore a collection of stunning and interactive UI components crafted with React and Motion.",
              publisher: {
                "@type": "Organization",
                name: "Chamaac UI",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.chamaac.com/favicon.png",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
