import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
  description: "Full Stack Developer and Software Engineer based in the NY Tri-State area. Specializing in JavaScript, React, Next.js, Node.js, TypeScript, Python, SQL, and AWS. Building innovative and scalable web applications.",
  keywords: "Software Engineer, Full Stack Developer, JavaScript, React, Next.js, Node.js, TypeScript, Python, SQL, AWS, NY Tri-State Area, Web Development, Frontend Development, Backend Development",
  openGraph: {
    title: "Andrew Aliaj | Software Engineer & Full Stack Developer",
    description: "Full Stack Developer and Software Engineer building innovative solutions in the NY Tri-State area.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#21568a"
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
