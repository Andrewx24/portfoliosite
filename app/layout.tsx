import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MobileNavbar from "@/components/MobileNavbar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Aliaj",
  description: "software engineer, full stack developer, new york city area, programming, tech, impactful, people, coding",
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
