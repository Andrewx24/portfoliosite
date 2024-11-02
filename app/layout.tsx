import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });
import { Metadata } from 'next';

// Updated viewport configuration with accessible values
export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5, // Changed from 1 to 5 to allow zooming
  themeColor: "#21568a",
  colorScheme: 'dark light'
};

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://andrewaliaj.com'),
  
  title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
  description: "Dynamic Software Engineer and Full Stack Developer specializing in AI, LLMs, and scalable web applications. Expert in JavaScript, TypeScript, Golang, Python, React, Next.js, Node.js, and cloud architecture. Based in the NY Tri-State area.",
  
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "JavaScript",
    "TypeScript",
    "Golang",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "AWS",
    "Cloud Architecture",
    "Database Design",
    "NY Software Engineer",
    "Tri-State Developer",
    "AI Development",
    "LLM Integration",
    "Web Development"
  ].join(", "),

  authors: [{ name: "Andrew Aliaj" }],
  
  creator: "Andrew Aliaj",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewaliaj.com",
    siteName: "Andrew Aliaj Portfolio",
    title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    description: "Dynamic Software Engineer specializing in AI, LLMs, and full-stack development. Building innovative solutions with modern technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andrew Aliaj - Software Engineer"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    description: "Building innovative solutions with AI, LLMs, and modern web technologies. Full-stack development expert based in NY Tri-State area.",
    images: ["/twitter-image.png"],
    creator: "@andrewaliaj"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },

  alternates: {
    canonical: "https://andrewaliaj.com",
    languages: {
      "en-US": "https://andrewaliaj.com",
    },
  },

  category: "technology",
  
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  }
};

// Define the props type for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}