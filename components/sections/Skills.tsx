import { skills } from "@/lib/data";
import { FadeUp } from "@/components/ui/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeUp>
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What I work with
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              A snapshot of the tools, technologies, and domains I bring to the
              table — from AI pipelines to healthcare imaging.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <StaggerItem
              key={category.category}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground"
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
