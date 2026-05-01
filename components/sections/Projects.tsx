import { projects } from "@/lib/data";
import { ExternalLink, GitFork } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeUp>
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Things I&apos;ve built
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              Real work, real outcomes. Each project is a lesson in turning a
              problem into a working solution.
            </p>
          </div>
        </FadeUp>

        {/* Featured projects */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <StaggerItem
              key={project.slug}
              className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-primary/10 via-secondary to-primary/5 flex items-center justify-center text-4xl select-none">
                {project.slug === "healthtech-ai-workflow" && "🤖"}
                {project.slug === "blog-migration-automation" && "📋"}
                {project.slug === "python-web-scraper" && "🐍"}
                {project.slug === "ai-rectal-cancer-review" && "🔬"}
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 4 && (
                    <li className="text-xs text-muted-foreground px-1 py-0.5">
                      +{project.tags.length - 4} more
                    </li>
                  )}
                </ul>

                {/* Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex items-center gap-3 pt-1 border-t border-border mt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GitFork className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other projects */}
        {rest.length > 0 && (
          <FadeUp delay={0.2} className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Other work
            </h3>
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {rest.map((project) => (
                <StaggerItem
                  key={project.slug}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
