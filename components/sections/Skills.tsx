import { skills } from "@/lib/data";
import { FadeUp } from "@/components/ui/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10 mb-4">
              Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Technical Arsenal
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl text-pretty">
              Bridging the gap between specialized healthcare domains and cutting-edge 
              AI automation through a versatile technical stack.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="bento-grid">
          {skills.map((category, idx) => (
            <StaggerItem
              key={category.category}
              className={`${
                idx === 0 ? "bento-col-7" : 
                idx === 1 ? "bento-col-5" : 
                idx === 2 ? "bento-col-4" : 
                idx === 3 ? "bento-col-8" : "bento-col-6"
              } glass-card rounded-3xl p-8 flex flex-col gap-6`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs uppercase tracking-[0.15em] text-primary/70">
                  {category.category}
                </h3>
                <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>
              
              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-white/50 px-4 py-1.5 text-xs font-semibold text-text-secondary hover:border-primary/20 hover:bg-white hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

