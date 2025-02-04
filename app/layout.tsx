import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import Script from 'next/script';

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
  colorScheme: "dark light",
  userScalable: true
};

export const metadata = {
  // Your existing metadata configuration
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <Script
        
  defer
  data-website-id="6772bc0897077ee580064227"
  data-domain="andrewaliaj.dev"
   src="/js/script.js"
  >

          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrew Aliaj",
              url: "https://andrewaliaj.dev",
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

<script
  defer
  data-website-id="6772bc0897077ee580064227"
  data-domain="andrewaliaj.dev"
   src="/js/script.js"
  >
</script>
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
