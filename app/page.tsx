import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CaseStudies from "@/components/sections/CaseStudies";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Experience />
      <Contact />
    </PageWrapper>
  );
}
