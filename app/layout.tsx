// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";



const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#152028" }
  ],
  colorScheme: "dark light"
};

export const metadata = {
  metadataBase: new URL('https://andrewaliaj.com'),
  title: {
    default: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    template: "%s | Andrew Aliaj"
  },
  description: "Dynamic Software Engineer and Full Stack Developer specializing in AI, LLMs, and scalable web applications. Expert in JavaScript, TypeScript, Golang, Python, React, Next.js, Node.js, and cloud architecture.",
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
    "NY Software Engineer",
    "AI Development",
    "LLM Integration"
  ],
  authors: [{ name: "Andrew Aliaj", url: "https://andrewaliaj.com" }],
  creator: "Andrew Aliaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewaliaj.com",
    siteName: "Andrew Aliaj - Software Engineer",
    title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    description: "Dynamic Software Engineer specializing in AI, LLMs, and full-stack development. Building innovative solutions with modern technologies.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Andrew Aliaj - Software Engineer Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    description: "Building innovative solutions with AI, LLMs, and modern web technologies.",
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
      <script
  defer
  data-website-id="6772bc0897077ee580064227"
  data-domain="andrewaliaj.dev"
  src="https://datafa.st/js/script.js">
</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        
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
