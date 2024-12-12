
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      
        <Main />
        <About />
        <Skills />
        <Contact />
      
    </div>
  );
}