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
  title: "Chamaac | Premium UI Components",
  description:
    "Explore a collection of stunning, animated hero sections and interactive UI components crafted with Next.js and Motion.",
  openGraph: {
    title: "Chamaac | Premium UI Components",
    description:
      "Explore a collection of stunning, animated hero sections and interactive UI components crafted with Next.js and Motion.",
    url: "https://www.chamaac.com",
    siteName: "Chamaac",
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
    title: "Chamaac | Premium UI Components",
    description:
      "Explore a collection of stunning, animated hero sections and interactive UI components crafted with Next.js and Motion.",
    images: ["/images/og-image.png"],
  },
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
