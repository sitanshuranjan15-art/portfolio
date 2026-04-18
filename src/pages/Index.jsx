import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Journal } from "@/components/portfolio/Journal";
import { Contact } from "@/components/portfolio/Contact";
const Index = () => {
    return (<main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Journal />
      <Contact />
    </main>);
};
export default Index;
