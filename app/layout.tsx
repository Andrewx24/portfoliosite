// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// Enhanced viewport settings for better mobile experience
export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#152028" }
  ],
  colorScheme: "dark light",
  userScalable: true // Better accessibility
};

// Enhanced metadata with more targeted keywords and rich snippets
export const metadata = {
  metadataBase: new URL('https://andrewaliaj.com'),
  title: {
    default: "Andrew Aliaj | Full Stack & AI Software Engineer | NY Tech Expert",
    template: "%s | Andrew Aliaj - Software Solutions"
  },
  description: "Expert Software Engineer in NY specializing in AI, LLMs, and enterprise web applications. Delivering scalable solutions with React, Node.js, Python & AWS. 10+ years of industry experience.",
  keywords: [
    "NY Software Engineer",
    "Full Stack Developer New York",
    "AI Engineer",
    "Enterprise Software Solutions",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Cloud Architecture Specialist",
    "AI Integration Services",
    "Custom Software Development",
    "Web Application Developer",
    "Technology Consultant NY",
    "Software Architecture Expert",
    "Digital Transformation Engineer",
    "Tech Solutions Provider"
  ],
  authors: [{ name: "Andrew Aliaj", url: "https://andrewaliaj.com" }],
  creator: "Andrew Aliaj",
  publisher: "Andrew Aliaj",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewaliaj.com",
    siteName: "Andrew Aliaj - Enterprise Software Solutions",
    title: "Andrew Aliaj | Full Stack & AI Software Engineer | NY Tech Expert",
    description: "Transform your business with custom software solutions. Specializing in AI integration, enterprise web applications, and cloud architecture. Schedule a consultation today.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Andrew Aliaj - Software Engineering Solutions",
      type: "image/png"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Aliaj | Enterprise Software Solutions & AI Integration",
    description: "Custom software solutions for modern businesses. AI, cloud, and enterprise applications expert.",
    images: ["/twitter-image.png"],
    creator: "@andrewaliaj",
    site: "@andrewaliaj"
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
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://andrewaliaj.com",
    languages: {
      "en-US": "https://andrewaliaj.com",
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#21568a" }
    ]
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data for better SEO */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrew Aliaj",
              url: "https://andrewaliaj.com",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Independent Consultant"
              },
              description: "Full Stack Software Engineer specializing in AI and enterprise solutions",
              sameAs: [
                "https://github.com/Andrewx24",
                "https://www.linkedin.com/in/andrewaliaj/",
                "https://medium.com/@andrewaliaj"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}