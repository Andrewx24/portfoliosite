import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Aliaj",
  description: "software engineer, full stack developer, new york city area, programming, tech, impactful, people, coding",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
     <body className={inter.className}>
      
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Contact/>
        <Analytics/>
        {children}
        
        </body>
        
    </html>
    


  );
}
