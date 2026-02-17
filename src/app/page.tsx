import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Publication } from "@/components/Publication";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { SectionIndicator } from "@/components/SectionIndicator";

export default function Home() {
  return (
    <main className="h-screen w-full text-foreground font-sans relative overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <SectionIndicator />

      <section id="hero" className="snap-start w-full min-h-screen border-b border-white/5">
        <Hero />
      </section>

      <section id="about" className="snap-start w-full min-h-screen border-b border-white/5">
        <About />
      </section>

      <section id="projects" className="snap-start w-full min-h-screen border-b border-white/5">
        <Projects />
      </section>

      <section id="experience" className="snap-start w-full min-h-screen border-b border-white/5">
        <Experience />
      </section>

      <section id="education" className="snap-start w-full min-h-screen border-b border-white/5">
        <Education />
      </section>

      <section id="publication" className="snap-start w-full min-h-screen border-b border-white/5">
        <Publication />
      </section>

      <section id="skills" className="snap-start w-full min-h-screen border-b border-white/5">
        <Skills />
      </section>

      <section id="contact" className="snap-start w-full min-h-screen">
        <Contact />
      </section>

      <BackToTop />
    </main>
  );
}
